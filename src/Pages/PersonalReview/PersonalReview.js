import React, { useEffect, useState } from 'react';
import useTtile from '../../Components/Hooks/Title';
import PersonalReviewDetails from './PersonalReviewDetails';
import toast from 'react-hot-toast';

const PersonalReview = () => {
    useTtile('My Reviews');

    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setFeedbacks(data);
            })
    }, []);


    const handleDelete = (id) => {
        const agree = window.confirm('Are You Sure To Delete This Review?');
        if (agree) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Successfully Deleted.');
                        const remaining = feedbacks.filter((rev) => rev._id !== id)
                        setFeedbacks(remaining);
                    }
                })
        }
    };


    return (
        <div>
            {
                feedbacks.map(singleFeedback => <PersonalReviewDetails
                    key={singleFeedback._id}
                    singleFeedback={singleFeedback}
                    handleDelete={handleDelete}
                ></PersonalReviewDetails>)
            };
        </div>
    );
};

export default PersonalReview;