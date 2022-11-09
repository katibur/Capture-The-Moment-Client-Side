import React from 'react';
import useTtile from '../../Components/Hooks/Title';
import toast from 'react-hot-toast';

const AddServices = () => {
    useTtile('Add Service');
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const imageURL = form.imageURL.value;
        const description = form.description.value;

        const service = {
            title: name,
            price: price,
            img: imageURL,
            description: description,
            time: new Date().toLocaleString()
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Successfully Added Service.')
                    form.reset();
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleAddService} className="card-body w-5/6 mx-auto">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Service Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Price</span>
                    </label>
                    <input type="number" name='price' placeholder="Service Price" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Image</span>
                    </label>
                    <input type="text" name='imageURL' placeholder="Service Image" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Description</span>
                    </label>
                    <input type="text" name='description' placeholder="Service Description" className="input input-bordered" required />
                </div>

                <div className="form-control mt-6">
                    <input className="btn btn-primary" type='submit' value='Add Service' ></input>
                </div>
            </form>
        </div>
    );
};

export default AddServices;