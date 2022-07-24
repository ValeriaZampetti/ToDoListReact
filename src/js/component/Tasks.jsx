import React, { useState } from "react";
import { Input } from "./Input.js";
import { List } from "./List.js";
import { Counter } from "./Counter.js";
// import Proptypes from "prop-types";

const Tasks = (props) => {
	const [newTask, setNewTask] = useState("");
	const [listOfTasks, setListOfTasks] = useState([
		"Make the Bed",
		"Wash my Hands",
		"Eat",
		"Walk the dog",
	]);
	return (
		<div className="text w-100 d-flex flex-column">
			<div style={{ marginLeft: "40%" }}>
			<p style={{ color: "pink", fontSize: "80px" }}>{"ToDos"}</p>
			</div>
			<Input
				text="What needs to be done"
				value={newTask}
				setter={setNewTask}
				setterList={setListOfTasks}
			/>
			{listOfTasks.length === 0 ? (
				<p>{"No tasks, add a task"}</p>
			) : (
				<List list={listOfTasks} setterList={setListOfTasks} />
			)}
			<Counter list={listOfTasks} />
		</div>
	);
};

export default Tasks;