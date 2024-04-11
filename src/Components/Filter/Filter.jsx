import React from "react";
import { NavLink } from "react-router-dom";
import { FaBowlFood } from "react-icons/fa6";
import {
	GiSushis,
	GiFishBucket,
	GiHamburger,
	GiNoodles,
	GiFoodChain,
} from "react-icons/gi";

const Filter = () => {
	return (
		<>
			<h1 className='text-3xl font-bold flex items-center justify-center '>
				Categories
			</h1>

			<div className='grid items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-16'>
				<NavLink to='/cuisine/North%20Indian' className='category-link'>
					<FaBowlFood className='w-6 h-6' />
					<span className='font-semibold'>Indian Food</span>
				</NavLink>

				<NavLink to='/cuisine/Chinese' className='category-link'>
					<GiFoodChain className='w-6 h-6' />
					<span className='font-semibold'>Chinese Food</span>
				</NavLink>

				<NavLink to='/cuisine/Italian' className='category-link'>
					<GiNoodles className='w-6 h-6' />
					<span className='font-semibold'>Italian Food</span>
				</NavLink>

				<NavLink to='/cuisine/American' className='category-link'>
					<GiHamburger className='w-6 h-6' />
					<span className='font-semibold'>American Food</span>
				</NavLink>

				<NavLink to='/cuisine/Japanese' className='category-link'>
					<GiSushis className='w-6 h-6' />
					<span className='font-semibold'>Japanese Food</span>
				</NavLink>

				<NavLink to='/cuisine/Thai' className='category-link'>
					<GiFishBucket className='w-6 h-6' />
					<span className='font-semibold'>Thai Food</span>
				</NavLink>

				{/* Add more options for categories */}
			</div>
		</>
	);
};

export default Filter;
