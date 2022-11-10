import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';


const PersonalReviewDetails = ({ singleFeedback, handleDelete, handleEdit }) => {

    const { _id, useremail, review, name, status } = singleFeedback;
    const { user } = useContext(AuthContext);


    return (
        <div>
            {
                user.email === useremail ?
                    <>
                        <div className='w-full mx-auto'>
                            <div className="card w-full bg-base-100 shadow-xl border-2 grid md:grid-cols-2 my-6">
                                <div className="card-body">
                                    <h2 className="card-title">User: {useremail}</h2>
                                    <div className="card-actions justify-start">
                                        <p>Service Name: {name}</p>
                                    </div>
                                    <p>Review Text: {review}</p>
                                    <div className="card-actions justify-center">
                                        <button onClick={() => handleEdit(_id)} className="btn btn-primary" >{status ? status : 'Edit'}</button>
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