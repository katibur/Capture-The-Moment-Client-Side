import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Reviews from "../Reviews/Reviews";
import { AuthContext } from "../../Contexts/AuthProvider";
import UserReview from "../Reviews/UserReview";
import useTtile from "../../Components/Hooks/Title";
import toast from "react-hot-toast";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const { _id, title, description, price, img, rating, facility } =
    useLoaderData();

  useTtile(title);

  const [reviews, setReviews] = useState([]);
  const [userRev, setUserRev] = useState([]);

  useEffect(() => {
    fetch(`https://capture-the-moment-server.vercel.app/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setUserRev(data);
      });
  }, [_id, userRev]);

  useEffect(() => {
    fetch("https://capture-the-moment-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const useremail = form.useremail.value;
    const userimg = form.userimg.value;
    const review = form.review.value;

    const comment = {
      service: _id,
      name: title,
      useremail,
      userimg,
      review,
      time: new Date().toLocaleString(),
    };

    fetch("https://capture-the-moment-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully Reviewed.");
          form.reset();
          setUserRev((prevRev) => [userRev, ...prevRev]);
        }
      });
  };

  return (
    <div>
      <div className="card card-compact w-3/4 bg-base-100 shadow-xl my-6 mx-auto">
        <PhotoProvider>
          <PhotoView
            src={
              img
                ? img
                : "https://i.ibb.co/XbSzsDS/16451874451570033394image1-min.png"
            }
          >
            <img
              src={
                img
                  ? img
                  : "https://i.ibb.co/XbSzsDS/16451874451570033394image1-min.png"
              }
              alt=""
            />
          </PhotoView>
        </PhotoProvider>

        <div className="card-body">
          <h2 className="card-title mx-auto">
            <span className="text-2xl">Service Name: </span>
            {title}
          </h2>

          <div className="card-actions justify-between text-center">
            <p className="font-semibold text-xl text-orange-600">
              Videographers:{" "}
              {facility?.videographerq ? facility.videographerq : "1"}
            </p>
            <p className="font-semibold text-xl text-purple-600">
              Photographers:{" "}
              {facility?.PhotographerQ ? facility.PhotographerQ : "1"}
            </p>
          </div>

          <div>
            <p>{description}</p>
          </div>

          <div className="card-actions justify-between text-center">
            <p className="font-semibold text-2xl text-orange-600">
              Price: {price ? price : "TBA"}/BDT
            </p>
            <p className="font-semibold text-xl text-sky-600">
              Rating: {rating ? rating : 5}/5
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-6 text-center">Cutomer Reviews</h1>
      <div className="w-full grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
        {reviews.map((feedback) => (
          <Reviews key={feedback._id} feedback={feedback}></Reviews>
        ))}
        {userRev.map((rev) => (
          <UserReview key={rev._id} rev={rev}></UserReview>
        ))}
      </div>

      <div className="border-2 my-6 py-3 px-3 rounded-xl mx-auto w-4/12">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Your Review Matters.
        </h1>
        {user ? (
          <form className="my-6" onSubmit={handleReview}>
            <input
              type="text"
              placeholder="Your Email"
              name="useremail"
              defaultValue={user?.email ? user.email : "Unknown"}
              className="input input-bordered input-primary w-full max-w-xl input-lg text-center my-2"
            />

            <input
              type="text"
              placeholder="Your Photo URL"
              name="userimg"
              className="input input-bordered input-primary w-full max-w-xl input-lg text-center my-2"
              defaultValue={
                user?.photoURL
                  ? user.photoURL
                  : "https://i.ibb.co/XbSzsDS/16451874451570033394image1-min.png"
              }
            />

            <input
              type="text"
              placeholder="Give Review Here"
              name="review"
              className="input input-bordered input-lg w-full max-w-xl text-center my-2"
            />
            <div className="mx-auto text-center text-white">
              <input
                type="submit"
                className="btn btn-outline btn-secondary mt-3"
                value="Post Review"
              ></input>
            </div>
          </form>
        ) : (
          <h1>
            <Link to="/login">
              <button className="btn btn-outline btn-ghost">Login</button>
            </Link>{" "}
            To Add Review.
          </h1>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
