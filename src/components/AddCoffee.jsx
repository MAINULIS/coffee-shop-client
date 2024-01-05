import React from 'react';

const AddCoffee = () => {

    const handleAddCoffee = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const Supplier = form.Supplier.value;
        const quantity = form.quantity.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, Supplier, quantity, taste, category, details, photo};
        console.log(newCoffee)


    }
    return (
        <div className='lg:m-24 md:m-24 p-4 bg-[#F4F3F0] '>

            <div className='text-center mb-8'>
                <h2 className='text-3xl font-serif pb-3'>Add New Coffee</h2>
                <p className='text-center px-16'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>

            <form onSubmit={handleAddCoffee} className='p-4 '>
                <div className='md:flex justify-center gap-5 pb-4'>
                    <div >
                        <label htmlFor="name"> <span className='text-xl font-semibold'>Name</span> <br />
                            <input className='px-4 rounded-sm bg-white w-96' type="text" name="name" id="name " placeholder='Coffee Name' />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="name"> <span className='text-xl font-semibold'>Supplier</span> <br />
                            <input className='px-4 rounded-sm w-96 bg-white' type="text" name="Supplier" id="Supplier" placeholder='Enter coffee Chef' />
                        </label>
                    </div>
                </div>
                <div className='md:flex justify-center gap-4 pb-4'>
                    <div>
                        <label htmlFor="name"> <span className='text-xl font-semibold'>Quantity</span> <br /></label>
                        <input className='px-4 rounded-sm w-96 bg-white' type="text" name="quantity" id="quantity" placeholder='Enter coffee quantity ' />
                    </div>
                    <div>
                        <label htmlFor="name"> <span className='text-xl font-semibold'>Taste</span> <br /></label>
                        <input className='px-4 rounded-sm w-96 bg-white' type="text" name="taste" id="taste" placeholder='Enter coffee taste' />
                    </div>
                </div>
                <div className='md:flex justify-center gap-4 pb-4'>
                    <div>
                        <label htmlFor="name"> <span className='text-xl font-semibold'>Category</span> <br /></label>
                        <input className='px-4 rounded-sm w-96 bg-white' type="text" name="category" id="category" placeholder='Enter coffee category ' />
                    </div>
                    <div>
                        <label htmlFor="name"> <span className='text-xl font-semibold'>Details</span> <br /></label>
                        <input className='px-4 rounded-sm w-96 bg-white' type="text" name="details" id="details" placeholder='Enter coffee details' />
                    </div>

                </div>
                <div className=' pb-4 grid'>
                    <div className='pb-4'>
                        <label htmlFor="name"> <span className='text-xl font-semibold'>Photo</span> <br /></label>
                        <input className='px-4 w-full rounded-sm bg-white' type="text" name="photo" id="photo" placeholder='Enter photo url' />
                    </div>
                    <input type="submit" value="Add Coffee" className='btn btn-block bg-[#D2B48C] border-[#331A15] border-2 hover:bg-neutral-400 text-white' />
                
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;