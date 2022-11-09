import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';


const PersonalReviewDetails = ({ singleFeedback, handleDelete }) => {

    const { _id, useremail, review, name } = singleFeedback;
    const { user } = useContext(AuthContext);


    return (
        <div>
            {
                user.email === useremail ?
                    <>
                        <div className='w-1/2 mx-auto'>
                            <div className="card w-full bg-base-100 shadow-xl border-2">
                                <div className="card-body">
                                    <h2 className="card-title">User: {useremail}</h2>
                                    <div className="card-actions justify-start">
                                        <p>Service Name: {name}</p>
                                    </div>
                                    <p>Review Text: {review}</p>
                                    <div className="card-actions justify-between">
                                        <button className="btn btn-primary">Edit</button>
                                        <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : ''
            }

        </div>
    );
};

export default PersonalReviewDetails;