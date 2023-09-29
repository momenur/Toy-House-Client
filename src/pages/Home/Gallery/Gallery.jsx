import React, { useEffect, useState } from 'react';
import Title from '../../../components/Title/Title';
import Photos from '../../../components/Title/Photos';

const Gallery = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch('gallery.json')
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])
    
    return (
        <div>
            <Title title='TOY GALLERY' />
            <div className='py-12'>

                <div className='grid-cols-3 gap-6 md:grid ms-4'>
                    {
                        photos.map(item => <Photos key={item.id} item={item}></Photos>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gallery;