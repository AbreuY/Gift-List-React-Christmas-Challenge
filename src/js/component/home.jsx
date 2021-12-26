import React, { useEffect } from "react";
import { useState } from "react";
import AddTaskForm from "./AddTaskForm.jsx";
const Home = () => {
	const [tasks, setTasks] = useState([]);

	const addTask = (text) => {
		setTasks([...tasks, { text }]);
		localStorage.setItem("tasks", JSON.stringify([...tasks, { text }]));
	};

	const toggleTask = (index) => {
		const newTasks = [...tasks];
		newTasks[index].isCompleted = !newTasks[index].isCompleted;
		setTasks(newTasks);
		localStorage.setItem("tasks", JSON.stringify(newTasks));
	};

	const removeTask = (index) => {
		const newTasks = [...tasks];
		newTasks.splice(index, 1);
		setTasks(newTasks);
		localStorage.setItem("tasks", JSON.stringify(newTasks));
	};
	useEffect(() => {
		if (localStorage.getItem("tasks") != undefined || null) {
			let localTasks = JSON.parse(localStorage.getItem("tasks"));
			setTasks(localTasks);
		}
	}, []);
	return (
		<>
			<div className="wrapper">
				<div className="card">
					<h2>Christmas Gift List</h2>
					<img
						src="https://i.imgur.com/EnTpgrE.jpg"
						style={{ width: "400px" }}
						className="card-img-top"
					/>
					<div className="todo-list">
						{tasks.map((task, index) => (
							<div key={index} className="todo">
								<span
									onClick={() => toggleTask(index)}
									className={
										task.isCompleted
											? "todo-text todo-completed"
											: "todo-text"
									}>
									{task.text}
								</span>
								<div>
									<i
										className={
											task.isCompleted
												? "todo-check-button-completed fas fa-check-circle"
												: "check-button far fa-check-circle"
										}
										onClick={() =>
											toggleTask(index)
										}></i>{" "}
									<i
										className="mybutton fas fa-trash-alt"
										onClick={() => removeTask(index)}></i>
								</div>
							</div>
						))}
						<AddTaskForm addTask={addTask} />
					</div>
				</div>
			</div>
		</>
	);
};
export default Home;
