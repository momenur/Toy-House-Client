import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const MyToy = () => {

    const { user } = useContext(AuthContext)

    const [allToy, setAllToy] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allToy')
            .then(res => res.json())
            .then(data => setAllToy(data))
    }, [])

    const myToy = allToy.filter(toy => toy.sellerEmail === user.email)
    console.log(myToy);
    return (
        <div>
            <div className="overflow-x-auto">
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
                                    <button className="btn btn-circle btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                                <td>{toy.sellerName}</td>
                                <td>{toy.toyName}</td>
                                <td>{toy.category}</td>
                                <td>{5 + toy.quantity}</td>
                                <td>{toy.quantity}</td>
                                <td>
                                    <Link to={`/allToy/${toy._id}`}>
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