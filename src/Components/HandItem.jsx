import '../css/style.css'

const HandItem = ({ title, description }) => {
    return (
        <div className='hand-item my-4 py-10'>
            <div className='text-center bg-white text-black w-[70%] mx-auto py-10'>
                <h2 className='text-3xl uppercase logo'>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default HandItem;