import React from "react";
import { Link } from "react-router-dom";
import RecipeSearch from "../Recipesearch/RecipeSearch";

const Navbar = () => {
	return (
		<>
			<header className=' z-10 bg-slate-300 w-full top-0 p-5  fixed border-b border-gray-200'>
				<ul className='flex items-center justify-center text-lg font-semibold'>
					<div className='flex items-center justify-center w-full'>
						<Link to='/'>
							<li className='mr-5 hover:text-gray-900 cursor-pointer'>
								WOBOT.AI
							</li>
						</Link>
					</div>

					<div className='flex items-center justify-center w-full'>
						<Link to='/favourite'>
							<li className='mr-5 hover:text-gray-900 cursor-pointer'>
								Favourite
							</li>
						</Link>
					</div>

					<div className='flex items-center justify-center w-full'>
						<RecipeSearch />
					</div>
				</ul>
			</header>
		</>
	);
};

export default Navbar;
