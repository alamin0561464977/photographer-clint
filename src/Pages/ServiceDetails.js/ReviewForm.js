import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../ContextAPI/UserContext';

const ReviewForm = ({ serviceDetail }) => {
    const { user } = useContext(AuthContext);
    const handelReviewForm = event => {
        event.preventDefault();
        const form = event.target;
        const reding = form.reding.value;
        const messes = form.messes.value;
        const { displayName, email, photoURL } = user;
        const details_id = serviceDetail._id;
        const review = {
            displayName,
            reding,
            messes,
            email,
            photoURL,
            details_id,
        };
        fetch('https://photographer-server-xi.vercel.app/service-review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Success Add Review');
                    window.location.reload();
                }
            })
        form.reset();
    };
    return (
        <div>
            <h2 className="font-bold text-xl text-rose-700">Add Review</h2>
            <form onSubmit={handelReviewForm}>
                <input name='name' readOnly type="text" required value={user?.displayName} className="input my-2 input-bordered input-accent w-full max-w-xs" />
                <input name='reding' type="number" required placeholder="Reding" className="input my-2 input-bordered input-accent w-full max-w-xs" />
                <textarea name='messes' required className="textarea textarea-accent w-full lg:w-80" placeholder="You Messes"></textarea>
                <input type="submit" className="input my-2 input-bordered input-accent text-white font-bold bg-rose-700 w-full max-w-xs" />
            </form>
        </div>
    );
};

export default ReviewForm;