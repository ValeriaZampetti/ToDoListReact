import React from "react";
import { Task } from "./Task";
import PropTypes from "prop-types";

export const List = (props) => {
	return (
		<div className="container w-100 d-flex flex-column">
			{props.list.map((task, index) => {
				return (
					<Task
						task={task}
						key={index}
						id={index}
						setterlist={props.setterList}
						list={props.list}
					/>
				);
			})}
		</div>
	);
};

List.propTypes = {
	setterList: PropTypes.func,
	list: PropTypes.array,
};