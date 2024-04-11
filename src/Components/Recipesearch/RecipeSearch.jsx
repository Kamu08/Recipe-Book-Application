import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import React from "react";

const RecipeSearch = () => {
	const [input, setInput] = useState("");
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		navigate("/searchresult/" + input);
        setInput(" ")
	};

	return (
		<form onSubmit={submitHandler} className='flex items-center'>
			<div className='relative'>
				<FaSearch
					size={25}
					className='absolute inset-y-0 left-0 mt-3 flex items-center pl-2 text-gray-400'
				/>
				<input
					onChange={(e) => setInput(e.target.value)}
					value={input}
					type='text'
					className='w-full pl-8 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-amber-900 bg-white'
					placeholder='Search for recipes...'
				/>
			</div>
		</form>
	);
};

export default RecipeSearch;
