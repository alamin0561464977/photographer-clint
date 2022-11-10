import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../ContextAPI/UserContext';
import useSetTitle from '../../hooks/useSetTitle';

const ReviewUpdate = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const review = useLoaderData();
    useSetTitle('Review Update')
    const { messes, reding, _id } = review;
    const handelReviewForm = event => {
        event.preventDefault();
        const form = event.target;
        const reding = form.reding.value;
        const messes = form.messes.value;
        const { displayName, email, photoURL } = user;

        const review = {
            displayName,
            reding,
            messes,
            email,
            photoURL,
        };
        fetch(`https://photographer-server-xi.vercel.app/update-review/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Update Success');
                    navigate('/my-reviews');
                }
            });
        form.reset();
    };
    return (
        <div>
            <div className=' w-96 border-emerald-400 bg-slate-400 text-center p-4 my-8 rounded mx-auto'>
                <h2 className="font-bold text-xl text-rose-700">Add Review</h2>
                <form onSubmit={handelReviewForm}>
                    <input name='name' readOnly type="text" required value={user?.displayName} className="input my-2 input-bordered input-accent w-full max-w-xs" /><br />
                    <input name='reding' type="number" required defaultValue={reding} placeholder="Reding" className="input my-2 input-bordered input-accent w-full max-w-xs" /><br />
                    <textarea name='messes' required defaultValue={messes} className="textarea textarea-accent w-full lg:w-80" placeholder="You Messes"></textarea><br />
                    <input type="submit" className="input my-2 input-bordered input-accent text-white font-bold bg-rose-700 w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default ReviewUpdate;