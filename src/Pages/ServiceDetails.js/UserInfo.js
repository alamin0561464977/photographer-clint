import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/UserContext';
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';

const UserInfo = ({ serviceDetail }) => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/review/${serviceDetail._id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [serviceDetail]);
    return (
        <div>
            {
                user?.email ?
                    <div className="items-center p-5 rounded-lg border-4 border-sky-500">
                        <div className='flex mb-5'>
                            <div className="avatar mr-5">
                                <div className="w-16 ml-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                            <div>
                                <p
                                    className="text-2xl font-bold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                    {user?.displayName}
                                </p>
                                <p className="text-sm font-medium leading-4 text-gray-600">
                                    {user?.email}
                                </p>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <ReviewForm serviceDetail={serviceDetail}></ReviewForm>
                    </div>
                    : <h1 className=' font-bold'>Places <Link className=' text-green-600' to='/login'>Login</Link> then Add Review</h1>
            }
            <div>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default UserInfo;