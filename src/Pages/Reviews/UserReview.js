import React from 'react';

const UserReview = ({ rev }) => {
    const { useremail, userimg, review, service } = rev;
    return (

        <div>
            {
                service ? <div className="overflow-x-auto w-full text-center">
                    <table className="table w-full my-2">
                        <tbody>
                            <tr className='border-2'>
                                <td className='text-center w-1/3'>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={userimg} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{useremail}</div>

                                        </div>
                                    </div>
                                </td>
                                <td className='text-center'><span className="font-bold">Review: </span>{review}</td>
                            </tr>
                        </tbody>
                    </table>
                </div> : ''
            }
        </div>
    );
};

export default UserReview;