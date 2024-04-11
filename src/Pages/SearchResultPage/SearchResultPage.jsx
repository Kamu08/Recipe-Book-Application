import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoResultsPage from "../../Components/Notfound/Notfound";
const SearchResultPage = () => {
	const [searchedRecipes, setSearchedRecipes] = useState([]);
	let params = useParams();
	const fetchSearchResults = async (query) => {
		try {
			const response = await axios.get(
				`https://api.spoonacular.com/recipes/complexSearch?query=${query}&includeIngredients=${query}&apiKey=276808002f794a31939ced041632904f`
			);
			setSearchedRecipes(response.data.results);
		} catch (error) {
			setSearchedRecipes("Error fetching search results:", error);
		}
	};
	useEffect(() => {
		fetchSearchResults(params.search);
	}, [params.search]);

	return (
		<div>
			{searchedRecipes.length > 0 ? (
				<div className='bg-slate-100 grid grid-cols-2 sm:grid-cols-2 pt-28 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:px-16'>
					{searchedRecipes.map((recipe) => (
						<div key={recipe.id} className='bg-white rounded-lg shadow-md '>
							<img
								src={recipe.image}
								alt={recipe.title}
								className='w-full shadow-lg rounded-lg  h-48 p-2 object-fill sm:object-cover'
							/>
							<ToastContainer />
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
			) : (
				<NoResultsPage />
			)}
		</div>
	);
};
export default SearchResultPage;
