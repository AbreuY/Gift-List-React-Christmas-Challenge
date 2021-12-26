import React from "react";
import { useState } from "react";

const AddTaskForm = ({ addTask }) => {
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		value && addTask(value);
		setValue("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={value}
				placeholder="Enter a gift name. e.g. George - Xbox 360"
				onChange={(e) => setValue(e.target.value)}
			/>
			<button className="mybutton" type="submit">
				<i className="fas fa-plus"></i>
			</button>
		</form>
	);
};

export default AddTaskForm;
