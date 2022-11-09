import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/UserContext';

const ReviewUpdate = () => {
    const { user } = useContext(AuthContext);
    const review = useLoaderData();
    console.log(review)
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
        fetch(`http://localhost:5000/update-review/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => console.log(data));
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