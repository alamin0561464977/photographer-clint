import React from 'react';

const ReviewCard = ({ review }) => {
    const { displayName, email, photoURL, messes, reding } = review;
    return (
        <div className="items-center m-5 p-5 rounded-lg border-4 border-gray-400">
            <div className='flex mb-5'>
                <div className="avatar mr-5">
                    <div className="w-16 ml-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={photoURL} />
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
            <div className="divider"></div>
            <div>
                <h3 className=' text-green-500 font-bold text-lg'>Reding: {reding}</h3>
                <p className='font-bold'>{messes}</p>
            </div>
        </div>
    );
};

export default ReviewCard;