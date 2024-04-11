import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoResultsPage from "../Notfound/Notfound";
import { FaTrash } from "react-icons/fa";

const Favourite = ({ favourite, removeFromFavorites }) => {
	const handleremoveFromFavorites = (recipeId) => {
		removeFromFavorites(recipeId);
		toast.success("Recipe removed from favorites!");
	};

	return (
		<div className="container mx-auto px-4 sm:px-0 mt-28">
			{favourite.length > 0 ? (
				<div>
					<ToastContainer />
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{favourite.map((recipe) => (
							<div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
								<img
									src={recipe.image}
									alt={recipe.title}
									className="w-full h-64 object-cover"
								/>
								<div className="p-4">
									<h2 className="text-xl font-semibold mb-2 text-gray-800">
										{recipe.title}
									</h2>
									<div className="flex justify-between">
										<Link to={`/recipes/${recipe.id}`} className="mr-4">
											<button className="bg-slate-200 hover:bg-slate-300 text-slate-600 rounded-lg py-2 px-4">
												Read More
											</button>
										</Link>
										<button
											onClick={() => handleremoveFromFavorites(recipe.id)}
											className="bg-red-200 hover:bg-red-300 text-red-600 rounded-lg py-2 px-4 "
										>
											<FaTrash className="m-1 " />
											
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			) : (
				<NoResultsPage />
			)}
		</div>
	);
};

export default Favourite;
