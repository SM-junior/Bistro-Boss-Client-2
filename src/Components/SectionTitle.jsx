
const SectionTitle = ({title, subTitle}) => {
    return (
        <div className="w-[20%] mx-auto text-center my-12">
            <p className='text-orange-500 mb-2'>---{subTitle}---</p>
            <h3 className='uppercase text-2xl border-x-0 border-y-4 py-2'>{title}</h3>
        </div>
    );
};

export default SectionTitle;