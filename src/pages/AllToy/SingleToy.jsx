import React from 'react';

const SingleToy = ({ toy }) => {
   const {sellerName, price, toyName, category, quantity} = toy
    console.log(toy);
    return (
        <div>
            {/* row 1 */}
            <tr>
                <td>{sellerName}</td>
                <td>{toyName}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </div>
    );
};

export default SingleToy;