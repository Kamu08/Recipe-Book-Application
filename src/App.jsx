import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/HomePage";
import RecipeDescription from "./Pages/RecipePage/RecipePage";
import Navbar from "./Components/Navbar/Navbar";
import SearchResultsPage from "./Pages/SearchResultPage/SearchResultPage";
import Cuisine from "./Components/Cuisine/Cuisine";
import Favourite from "./Components/Favourite/Favourite";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
	const [favourite, setFavourite] = useState([]);

	const AddToFavourite = (item) => {
		const isRecipeExist = favourite.find((findItem) => findItem.id === item.id);
		if (isRecipeExist) {
			toast.success("Recipe already exist to favorites!");
		} else {
			setFavourite([...favourite, item]);
			toast.success("Recipe added to favorites!");
		}
	};

	const removeFromFavorites = (recipeId) => {
		setFavourite(favourite.filter((recipe) => recipe.id !== recipeId));
	};
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route
					path='/recipes/:id'
					element={<RecipeDescription AddToFavourite={AddToFavourite} />}
				/>
				<Route
					path='/favourite'
					element={
						<Favourite
							favourite={favourite}
							removeFromFavorites={removeFromFavorites}
						/>
					}
				/>
				<Route path='/searchresult/:search' element={<SearchResultsPage />} />
				<Route path='/cuisine/:type' element={<Cuisine />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
