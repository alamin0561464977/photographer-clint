import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewRow = ({ review, handelDeleteReview }) => {
    const { img, price, title, messes, displayName, email, _id } = review;
    console.log(review)
    return (
        <tr>
            <td>
                <div className="flex w-52 items-center space-x-3">
                    <div className="avatar">
                        <div className="avatar">
                            <div className="w-32 rounded">
                                <img src={img} />
                            </div>
                        </div>

                    </div>
                    <div className=' w-44 h-32'>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50">Price: ${price}</div>
                        <p className="text-sm opacity-50">{messes.length >= 30 ? `${messes.slice(0, 30)}...` : messes}</p>
                    </div>
                </div>
            </td>
            <td>
                {displayName}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>
                <Link
                    to={`/review-update/:${_id}`}
                    className=' btn btn-info text-white font-bold'
                >Update</Link>
            </td>
            <th>
                <button
                    onClick={() => handelDeleteReview(title, _id)}
                    className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        </tr>
    );
};

export default MyReviewRow;