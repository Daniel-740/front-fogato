import Image from 'next/image';
import React from 'react';

export const Dish = ({ dish }) => {

    const { name, image } = dish;

    return (
        <div className='w-full px-3 mb-4'>
            <div className='p-5 shadow-md bg-white'>
                <div className='lg:flex'>
                    <div className='lg:w-5/12 xl:w-3/12'>
                        <Image src={image} alt="dish-image" width={100} height={100}/>
                    </div>
                    <div className='lg:w-7/12 xl:w-9/12'>
                        2
                    </div>
                </div>
            </div>
        </div>
    )
}