import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../ContextAPI/UserContext';

const AddService = () => {
    const { user } = useContext(AuthContext);
    const handelAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const img = form.img.value;
        const reding = form.reding.value;
        const description = form.description.value;
        const { displayName, email, photoURL } = user;

        const service = {
            displayName,
            title,
            img,
            email,
            photoURL,
            price,
            reding,
            description
        };
        fetch('http://localhost:5000/add-service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        form.reset();
    };
    return (
        <div>
            <div className=' w-96 border-emerald-400 bg-slate-400 text-center p-4 my-8 rounded mx-auto'>
                <h2 className="font-bold text-xl text-rose-700">Add Service</h2>
                <form onSubmit={handelAddService}>
                    <input name='email' readOnly type="text" required value={user?.email} className="input my-2 input-bordered input-accent w-full max-w-xs" /><br />
                    <input name='title' type="text" required placeholder="Service Name" className="input my-2 input-bordered input-accent w-full max-w-xs" /><br />
                    <input name='img' type="text" required placeholder="Photo (url)" className="input my-2 input-bordered input-accent w-full max-w-xs" /><br />
                    <div className=' flex w-80 mx-auto gap-1'>
                        <input name='price' type="number" required placeholder="Price" className="input my-2 input-bordered input-accent w-full max-w-xs" /><br />
                        <input name='reding' type="number" required placeholder="Reding" className="input my-2 input-bordered input-accent w-full max-w-xs" /><br />
                    </div>
                    <textarea name='description' required className="textarea textarea-accent w-full lg:w-80" placeholder="Description"></textarea><br />
                    <input type="submit" className="input my-2 input-bordered input-accent text-white font-bold bg-rose-700 w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default AddService;