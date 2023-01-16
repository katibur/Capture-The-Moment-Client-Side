import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

const PersonalReviewDetails = ({
  singleFeedback,
  handleDelete,
  handleEdit,
}) => {
  const { _id, useremail, review, name, status } = singleFeedback;
  const { user } = useContext(AuthContext);

  return (
    <div className="my-5">
      {user?.email === useremail ? (
        <>
          <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title">{useremail}</h2>
              <p>Service: {name}</p>
              <p>Review: {review}</p>
              <div className="card-actions justify-center">
                <button
                  onClick={() => handleEdit(_id)}
                  className="btn btn-primary"
                  disabled={!user?.email}
                >
                  {status ? status : "Edit"}
                </button>
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn btn-primary"
                  disabled={!user?.email}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title">{useremail}</h2>
              <p>Service: {name}</p>
              <p>Review: {review}</p>
              <div className="card-actions justify-center">
                <button
                  onClick={() => handleEdit(_id)}
                  className="btn btn-primary"
                  disabled={!user?.email}
                >
                  {status ? status : "Edit"}
                </button>
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn btn-primary"
                  disabled={!user?.email}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PersonalReviewDetails;
