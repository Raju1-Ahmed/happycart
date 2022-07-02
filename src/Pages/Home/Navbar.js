import React from 'react';
import NavBottom from './NavBottom';

const Navbar = () => {
  return (
    <div>
      <div class="grid   xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-8  grid-cols-3 gap-1 mt-3">
        {/* 
                    *****This Div only show when use Mobile Device*****
      */}
        <div class="bg-base-300 rounded sm:hidden md:hidden lg:hidden xl:hidden">
          <div className='flex w-full justify-center'>
            <div class="dropdown dropdown-hover">
              <label tabindex="0" class="btn m-1">
                <img src="https://img.icons8.com/material-outlined/32/000000/menu--v1.png" />
              </label>
              <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>
            <h2 className='text-xl hidden '>All</h2>
          </div>
        </div>
        {/* 
                              *****The End Mobile Device Div****
       */}

        <div class="bg-base-300  col-span-2 hover:border-2 active:border-sky-500 hover:border-sky-500">
          <div className='flex justify-center'>
            <div>
              <img src="https://img.icons8.com/color/48/000000/grocery-store.png" />
            </div>
            <div>
              <span className='text-black mt-2 text-xl px-2'>Happy</span> <span className='text-yellow-600	 mt-2 text-xl px-1'>Cart</span>
            </div>
          </div>
        </div>

        {/* 
                    *****This Div only show when use Mobile Device*****
      */}
        <div class="bg-base-300  sm:hidden md:hidden lg:hidden xl:hidden">
          <div className='flex  justify-center'>
            <div className='w-32'>
              <span className=' text-yellow-600'>Hello, Sign in</span> <span className='text-black'>Account & Lists</span>
            </div>
            <div className='mt-8'>
              <button><img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/16/000000/external-arrow-arrows-those-icons-lineal-color-those-icons-8.png" /></button>
            </div>
          </div>
        </div>
        {/* 
                              *****The End Mobile Device Div****
       */}

        <div class="bg-base-300 lg:block hidden">
          <div className='flex py-2 justify-center'>
            <img src="https://img.icons8.com/office/35/000000/marker.png" />
            <div>
              <span className=' text-yellow-600 '>Deliver To</span> <span className='text-black'>Dhaka</span>
            </div>
          </div>
        </div>

        <div class="col-span-4 sm:block	 bg-base-300">
          <div class="form-control ml-1 mt-2">
            <div class="input-group">
              <input type="text" placeholder="Search on HappyCart" class="input  w-full input-bordered" />
              <button class="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>
          </div>
        </div>
        <div class="hidden lg:block  bg-base-300  ">
          <div className='flex justify-center'>
            <div className='p-2 mr-1'>
              <img src="https://img.icons8.com/color/48/000000/bangladesh.png" />
            </div>
            <div className='mt-8'>
              <button><img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/16/000000/external-arrow-arrows-those-icons-lineal-color-those-icons-8.png" /></button>
            </div>
          </div>
        </div>
        <div class="bg-base-300 hidden lg:block col-span-2 sm:col-span-2 ">
          <div className='flex  justify-center'>
            <div className='w-32'>
              <span className=' text-yellow-600'>Hello, Sign in</span> <span className='text-black'>Account & Lists</span>
            </div>
            <div className='mt-8'>
              <button><img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/16/000000/external-arrow-arrows-those-icons-lineal-color-those-icons-8.png" /></button>
            </div>
          </div>
        </div>
        <div class="bg-base-300 hidden lg:block">
          <div className='w-23'>
            <button>
              <span className=' text-yellow-600 text-xl '>Returns</span> <span className='text-black text-xl'>& Orders</span> </button>
          </div>
        </div>
        <div class=" bg-base-300 hidden lg:block">
          <div className='flex justify-center'>
            <div className='p-2 '>
              <img src="https://img.icons8.com/material-outlined/48/000000/favorite-cart.png" />
            </div>
            <div className='mt-3 '>
              <h2 className='text-xl text-black'>Cart</h2>
            </div>
          </div>
        </div>
      </div>
      <NavBottom></NavBottom>
    </div>
  );
};

export default Navbar;