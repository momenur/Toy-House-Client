import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const MyToy = () => {

    const { user } = useContext(AuthContext)

    const [allToy, setAllToy] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allToy')
            .then(res => res.json())
            .then(data => setAllToy(data))
    }, [])

    const myToy = allToy.filter(toy => toy.sellerEmail === user.email)

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/allToy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <h1 className='pt-20 text-5xl font-semibold text-center text-neutral-content'><span className='border-b'>MY TOY's</span></h1>
            <div className="py-12 overflow-x-auto">
                <table className="table w-full table-zebra">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToy.map(toy => <tr key={toy._id}>
                                <th>
                                    <button onClick={() => handleDelete(toy._id)} className="btn btn-circle btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                                <td>{toy.sellerName}</td>
                                <td>{toy.toyName}</td>
                                <td>{toy.category}</td>
                                <td>{5 + toy.quantity}</td>
                                <td>{toy.quantity}</td>
                                <td>
                                    <Link to={`/update/${toy._id}`}>
                                        <button className='btn btn-primary'>Update</button>
                                    </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default MyToy;