import React from "react";
import PropTypes from "prop-types";

export const Task = (props) => {
	const deleteTask = (e) => {
		props.setterlist((prevList) =>
			prevList.filter((task, index) => {
				if (index !== props.id) return true;
			})
		);
	};

	return (
		<li
			className="d-flex justify-content-between doIt box"
			style={{ border: "1px solid grey", padding: "7px" }}>
			{props.task}
			<span className="delete" onClick={deleteTask}>
				x
			</span>
		</li>
	);
};

Task.propTypes = {
	task: PropTypes.string,
	setterlist: PropTypes.func,
	// list: PropTypes.string,
	id: PropTypes.number,
};