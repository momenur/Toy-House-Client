import React from 'react';

const SingleToy = ({ toy }) => {
    const { sellerName, price, toyName, category, quantity } = toy
    console.log(toy);
    return (
        <div>
            

            {/* <tr>
                <th>{sellerName}</th>
                <td>{toyName}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{quantity}</td>
            </tr> */}
        </div>
    );
};

export default SingleToy;