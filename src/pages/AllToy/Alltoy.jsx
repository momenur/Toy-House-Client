import React, { useEffect, useState } from 'react';
import SingleToy from './SingleToy';
import { Link } from 'react-router-dom';
import Title from '../../components/Title/Title';
const Alltoy = () => {
    const [allToy, setAllToy] = useState([]);
    useEffect(() => {
        fetch('https://toy-world-server-virid.vercel.app/allToy')
            .then(res => res.json())
            .then(data => setAllToy(data))
    }, [])


    return (
        <div>

            <Title title="all toy's"/>
            <div className="overflow-x-auto">
                <table className="table w-full table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* {
                            allToy.map(toy => <SingleToy key={toy._id} toy={toy}></SingleToy>)
                            const { sellerName, price, toyName, category, quantity } = toy
                        } */}
                        {
                            allToy.map(toy => <tr key={toy._id}>
                                <th></th>
                                <td>{toy.sellerName}</td>
                                <td>{toy.toyName}</td>
                                <td>{toy.category}</td>
                                <td>{toy.price}</td>
                                <td>{toy.quantity}</td>
                                <td>
                                    <Link to={`/allToy/${toy._id}`}>
                                        <button className='btn btn-primary'>Details</button>
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

export default Alltoy;

