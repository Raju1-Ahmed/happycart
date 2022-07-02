import React from 'react';

const NavBottom = () => {
    return (
        <div>
            <div class="grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-3 mt-1 gap-1">
                <div class="bg-base-300 rounded hidden lg:block">
                    <div className='flex justify-center'>
                        <div class="dropdown dropdown-hover">
                            <label tabindex="0" class="btn m-1">
                                <img src="https://img.icons8.com/material-outlined/32/000000/menu--v1.png" />
                            </label>
                            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        <h2 className='text-xl mt-3 ml-2'>All</h2>
                    </div>
                </div>
                <div>
                    <button class="btn btn-sm sm:btn-sm md:btn-md lg:btn-lg">Today’s Deals</button>
                </div>
                <div class=""><button class="btn btn-sm sm:btn-sm md:btn-md lg:btn-lg">Customer Service</button></div>
                <div class=""><button class="btn btn-sm  sm:btn-sm md:btn-md lg:btn-lg">Gifts to Give</button></div>
                <div class="hidden lg:block"><button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Gift Cards</button></div>
                <div class="hidden lg:block"><button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Sell on Happycart</button></div>
                <div class="hidden lg:block"><button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">10:00:00AM</button></div>
                <div class="hidden lg:block"><button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Shop Father’s Day Gifts</button></div>
            </div>
            {/* 
                    *****This Div only show when use Mobile Device*****
      */}
            <div className='grid grid-cols-2 mt-1 justify-end bg-base-300 lg:hidden md:hidden sm:hidden'>
                <div className='flex w-38 py-2 justify-start'>
                    <img src="https://img.icons8.com/office/20/000000/marker.png" />
                    <div className='mt-3'>
                        <span className=' text-yellow-600 '>Deliver To</span> <span className='text-black'>Dhaka</span>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <div className='p-2 mr-1'>
                        <img src="https://img.icons8.com/color/38/000000/bangladesh.png" />
                    </div>
                    <div className='mt-8'>
                        <button><img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/16/000000/external-arrow-arrows-those-icons-lineal-color-those-icons-8.png" /></button>
                    </div>
                </div>
            </div>
            {/* 
                              *****The End Mobile Device Div****
       */}
        </div>
    );
};

export default NavBottom;