import React from 'react';
import useTtile from '../../Components/Hooks/Title';

const AddServices = () => {
    useTtile('Add Service');
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const imageURL = form.imageURL.value;
        const description = form.description.value;

        console.log(name, imageURL, description)
    }

    return (
        <div>
            <h1>service add</h1>
            <form onSubmit={handleAddService} className="card-body w-5/6 mx-auto">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Service Name" className="input input-bordered" required />
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
                    <input className="btn btn-primary" type='submit' value='Add Service'></input>
                </div>
            </form>
        </div>
    );
};

export default AddServices;