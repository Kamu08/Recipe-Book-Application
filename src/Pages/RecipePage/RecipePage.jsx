import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHeart } from "react-icons/fa";


const RecipeDetail = ({ AddToFavourite }) => {
	const { id } = useParams();
	const [recipe, setRecipe] = useState({});
	const [instruction, setInstruction] = useState([]);
	const navigateHome = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://api.spoonacular.com/recipes/${id}/information?apiKey=276808002f794a31939ced041632904f`
				);
				setInstruction(response?.data?.analyzedInstructions[0]?.steps);
				setRecipe(response.data);
			} catch (error) {
				console.log("Error fetching recipe data:", error);
			}
		};

		fetchData();
	}, [id]);

	
	
	

	return (
		<section className='container mx-auto py-8 px-4'>
			<ToastContainer/>
			<div className='flex items-center '>
				<p
					className='flex font-semibold text-blue-600 mt-16 text-sm cursor-pointer'
					onClick={() => navigateHome("/")}
				>
					<svg className='fill-current mr-2 w-4 h-5' viewBox='0 0 448 512'>
						<path d='M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z' />
					</svg>
					Home
				</p>
			</div>
			<div className='mt-10 mb-10 relative'>
				<img
					src={recipe.image}
					alt={recipe.title}
					className='rounded-lg shadow-lg w-full h-96 object-cover'
				/>
				<div className='absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg'></div>

				<h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold mb-4 text-white z-2 text-center'>
					{recipe.title}
				</h1>
			</div>

			<div>
				<div className='mb-6 flex flex-wrap justify-center'>
					<div className='flex items-center mb-2 sm:mb-0'>
						<p className='text-gray-900 flex-grow-0 flex-shrink-0 bg-gray-200 rounded-full px-4 py-4 mr-2 sm:mr-4'>
							⏱️ Preparation Time: {recipe.readyInMinutes} minutes
						</p>
					</div>
					<div className='flex items-center mb-2 sm:mb-0'>
						<p className='text-gray-900 flex-grow-0 flex-shrink-0 bg-gray-200 rounded-full px-4 py-4 mr-2 sm:mr-4'>
							💲 Price per serving: ${recipe.pricePerServing}
						</p>
					</div>
					<div className='flex items-center '>
						<p className='text-gray-900 flex-grow-0 flex-shrink-0 bg-gray-200 rounded-full px-4 py-4'>
							🍽️ Servings: {recipe.servings} people
						</p>
					</div>
				</div>
			</div>

			<button
	className="flex items-center text-black bg-amber-100 py-2 px-3 rounded-xl text-lg hover:bg-amber-200"
	onClick={() => AddToFavourite(recipe)}
>
	<FaHeart className="mr-2" /> Add To Favorites
</button>


			<div className='container mx-auto py-8'>
				<h1 className='text-3xl font-bold mb-4'>Instructions</h1>

				<div className='grid grid-cols-1 gap-4 '>
					{instruction?.map((steps, index) => (
						<div key={index} className='bg-[#f0f5f9] rounded-lg shadow-lg p-4'>
							<h2 className='text-xl font-semibold mb-2 text-slate-950'>
								Step {steps.number} - {steps.step}
							</h2>

							<div className='mb-4 bg-white rounded-lg shadow-lg p-4'>
								<h3 className='text-lg font-bold mb-2'>Equipment:</h3>
								<div className='grid grid-cols-2 gap-2'>
									{steps.equipment?.map((item, index) => (
										<div key={index} className='flex items-center'>
											<img
												src={item.image}
												alt={item.name}
												className='w-8 h-8 mr-2'
											/>
											<span>{item.name}</span>
										</div>
									))}
								</div>
							</div>
							<div className='bg-white rounded-lg shadow-lg p-4'>
								<h3 className='text-lg font-bold mb-2 '>Ingredients:</h3>
								<div className='grid grid-cols-2 gap-2'>
									{steps.ingredients?.map((item, index) => (
										<div key={index} className='flex items-center'>
											<img
												src={item.image}
												alt={item.name}
												className='w-8 h-8 mr-2'
											/>
											<span>{item.name}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
				
			</div>
			<div>
				<p className='font-bold text-gray-800'>Summary:</p>
				<p className='text-gray-600 mb-6'>{recipe.summary}</p>
			</div>
			
		</section>
	);
};

export default RecipeDetail;
