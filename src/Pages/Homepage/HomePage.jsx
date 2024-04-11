import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import banner from "../../assets/banner.png";
import Filter from "../../Components/Filter/Filter";
const HomePage = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		const fetchRecipes = async () => {
			try {
				const response = await axios.get(
					"https://api.spoonacular.com/recipes/complexSearch?apiKey=24bcb86a84f34d04948d1185ae4dda7f&cuisine=North%20Indian&number=20"
				);
				setRecipes(response.data.results);
			} catch (error) {
				console.error("Error fetching recipes:", error);
			}
		};
		fetchRecipes();
	}, []);

	return (
		<div className='bg-slate-100  shadow-md p-6'>
			<img
				src={banner}
				alt=''
				className='rounded-lg my-20 shadow-lg w-full h-[35vh] sm:h-[45vh] md:h-[45vh] lg:h-[70vh] object-cover'
			/>
			<Filter />
			<h1 className='text-2xl flex items-center justify-center my-16 font-bold '>
				What We’re Cooking Right Now
			</h1>
			
				<div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:mx-16 gap-6'>
					{recipes.map((recipe) => (
						<div key={recipe.id} className='bg-white rounded-lg shadow-md '>
							<img
								src={recipe.image}
								alt={recipe.title}
								className='w-full shadow-lg rounded-lg  h-48 p-2 object-fill sm:object-cover'
							/>
							<h2 className='text-xl flex items-center justify-center font-semibold p-3 text-gray-800 mb-2'>
								{recipe.title}
							</h2>
							<Link
								to={`/recipes/${recipe.id}`}
								className='flex items-center justify-center'
							>
								<button className='bg-slate-200 hover:bg-slate-300 text-slate-600 rounded-lg py-2 px-4 mb-6'>
									Read More..
								</button>
							</Link>
						</div>
					))}
				</div>
			
		</div>
	);
};

export default HomePage;
