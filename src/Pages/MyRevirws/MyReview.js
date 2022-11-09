import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/UserContext';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    const [myReviews, setMyReviews] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/my-review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user])
    const handelDeleteReview = (title, id) => {
        const agree = window.confirm(`you Delete ${title} This Review`);
        if (agree) {
            fetch('http://localhost:5000/delete-review', {
                method: 'DELETE',
                headers: {
                    id: id
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        const remaining = myReviews.filter(r => r._id !== id);
                        setMyReviews(remaining);
                    }
                })
        }
    }
    return (
        <div className="overflow-x-auto w-full">
            {
                myReviews.length === 0 ? <h3 className=' font-bold'>No Service Review <Link className=' font-bold text-green-600' to='/services'>Services</Link></h3>
                    :
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>User</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        {
                            myReviews.map(review => <MyReviewRow
                                key={review._id}
                                review={review}
                                handelDeleteReview={handelDeleteReview}
                            ></MyReviewRow>)
                        }

                    </table>
            }
        </div>
    );
};

export default MyReview;