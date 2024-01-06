import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
    const {_id, name, Supplier, quantity, taste, category, details, photo } = coffee;

    const handleDelete = _id =>{
        // console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
            
            fetch(`http://localhost:5000/coffee/${_id}`, {
                method: 'DELETE'

            })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if(data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Coffee has been deleted.",
                        icon: "success"
                      });
                }
            })

            }
          });
    }
    return (
        <div className="card card-side bg-[#F5F4F1] rounded-md shadow-xl">
            <figure><img src={photo} alt="Coffee" /></figure>
            <div className="flex  justify-between w-full p-4">
                <div className="mt-6">
                    <h2 className="card-title"><span className="text-black">Name:</span> {name}!</h2>
                    <p><span className="text-black">Details:</span> {details}</p>
                    <p><span className="text-black">Quantity:</span> {quantity}</p>
                    <p><span className="text-black">taste:</span> {taste}</p>
                    <p><span className="text-black">Price: </span> $21</p>
                </div>
                <div className="card-actions justify-end ">
                    <div className="join join-vertical gap-3 ">
                        <button className="btn join-item bg-green-700">View</button>
                        <Link to={`updateCoffee/${_id}`}>
                        <button className="btn join-item bg-stone-500">Edit</button>
                        </Link>
                        <button
                        onClick={()=> handleDelete(_id)}
                         className="btn join-item bg-orange-700">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;