import React from 'react';

const Category = () => {
    return (
        <div>
            <div className='grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 mx-3 gap-6'>

                <div className='bg-white rounded-badge p-5'>
                <button className='flex justify-start text-xl text-black p-2'>Gaming accessories</button>
                    <img  src="https://5.imimg.com/data5/NF/BH/MY-71492623/electrical-goods-500x500.jpg" alt="" />
                <button className='flex justify-start text-xl text-green-400 p-2'>See More</button>
                </div>

                <div className='bg-white rounded-badge p-5'>
                <button className='flex justify-start text-xl text-black p-2'>Gaming accessories</button>
                    <img  src="https://5.imimg.com/data5/NF/BH/MY-71492623/electrical-goods-500x500.jpg" alt="" />
                <button className='flex justify-start text-xl text-green-400 p-2'>See More</button>
                </div>

                <div className='bg-white rounded-badge p-5'>
                <button className='flex justify-start text-xl text-black p-2'>Gaming accessories</button>
                    <img  src="https://5.imimg.com/data5/NF/BH/MY-71492623/electrical-goods-500x500.jpg" alt="" />
                <button className='flex justify-start text-xl text-green-400 p-2'>See More</button>
                </div>

            </div>
        </div>
    );
};

export default Category;