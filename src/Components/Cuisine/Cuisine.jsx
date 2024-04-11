import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {
	const [cuisine, setCuisine] = useState([]);
	const params = useParams();

	const getCuisine = async (name) => {
		try {
			const data = await fetch(
				`https://api.spoonacular.com/recipes/complexSearch?apiKey=24bcb86a84f34d04948d1185ae4dda7f&cuisine=${name}&number=20`
			);
			const recipes = await data.json();
			setCuisine(recipes.results);
		} catch (error) {
			console.log("Error fetching search results:", error);
		}
	};
	useEffect(() => {
		getCuisine(params.type);
	}, [params.type]);
	return (
		<div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-28 gap-6 sm:mx-16'>
			{cuisine.map((recipe) => (
				<div key={recipe.id} className='bg-white rounded-lg shadow-md '>
					<img
						src={recipe.image}
						alt={recipe.title}
						className='w-full shadow-lg rounded-lg  h-48 p-2 object-fill sm:object-cover'
					/>
					<h2 className='text-xl font-semibold p-3 text-gray-800 mb-2 flex items-center justify-center'>
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
	);
};

export default Cuisine;
