import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewRow = ({ review, handelDeleteReview }) => {
    const { title, messes, displayName, photoURL, email, _id, reding } = review;
    console.log(review)
    return (
        <div className="items-center h-full shadow-xl p-5 rounded-lg border-4 border-gray-400">
            <div className='flex content-between w-full mb-5'>
                <div className='flex mb-5 w-full'>
                    <div className="avatar mr-5">
                        <div className="w-16 ml-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img alt='' src={photoURL} />
                        </div>
                    </div>
                    <div>
                        <p
                            className="text-2xl font-bold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            {displayName}
                        </p>
                        <p className="text-sm font-medium leading-4 text-gray-600">
                            {email}
                        </p>
                    </div>
                </div>
                <div className=' text-right'>
                    <button
                        onClick={() => handelDeleteReview(title, _id)}
                        className="btn btn-circle btn-outline hover:bg-rose-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>
            <div className="divider"></div>
            <div>
                <h3 className=' text-green-500 font-bold text-lg'>Reding: {reding}</h3>
                <p className='font-bold'>{messes}</p>
                <Link
                    to={`/review-update/${_id}`}
                    className=' mt-12 btn btn-info text-white font-bold'
                >Update</Link>
            </div>
        </div>
    );
};

export default MyReviewRow;