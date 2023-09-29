import { FaCarSide } from 'react-icons/fa';

const Photos = ({ item }) => {
    return (
        <div className="shadow-xl shadow-rose-400 w-[380px]  rounded-sm bg-rose-500 text-neutral-content mb-8 border-rose-500 border-2 hover:bg-rose-900 duration-1000 hover:text-blue-500" data-aos="fade-up">
            <figure><img className='w-[380px] h-[220px] rounded-sm' src={item.photo} alt="Shoes" /></figure>
            <div className='flex items-center justify-center gap-8'>
                <h2 className="py-2 text-2xl text-center">{item.name}</h2>
                <span className='text-3xl'><FaCarSide /></span>
            </div>
        </div>
    );
};

export default Photos;