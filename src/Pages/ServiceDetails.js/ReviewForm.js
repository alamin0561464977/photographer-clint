import React from 'react';
import { Link } from 'react-router-dom';

const ReviewForm = () => {
    const handelReviewForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const reding = form.reding.value;
        const messes = form.messes.value;
        const review = { name, reding, messes };
        console.log(review);
        form.reset();
    };
    return (
        <div>
            <h2 className="font-bold text-xl text-rose-700">Add Review</h2>
            <form onSubmit={handelReviewForm}>
                <input name='name' type="text" required placeholder="Name" className="input my-2 input-bordered input-accent w-full max-w-xs" />
                <input name='reding' type="number" required placeholder="Reding" className="input my-2 input-bordered input-accent w-full max-w-xs" />
                <textarea name='messes' required className="textarea textarea-accent w-full lg:w-80" placeholder="You Messes"></textarea>
                <input type="submit" className="input my-2 input-bordered input-accent text-white font-bold bg-rose-700 w-full max-w-xs" />
            </form>
        </div>
    );
};

export default ReviewForm;