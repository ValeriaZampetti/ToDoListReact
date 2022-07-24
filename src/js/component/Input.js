import React from "react";
import PropTypes from "prop-types";
export const Input = (props) => {
	function addNewTask(e) {
		props.setter(e.target.value);
	}
	function pressEnter(e) {
		if (e.key === "Enter") {
			props.setterList((prevList) => [props.value, ...prevList]);
			props.setter("");
			e.stopPropagation();
		}
		console.log(e);
	}

	return (
		<div className="w-100">
			<input
				placeholder={props.text}
				style={{ witdht: "100%" }}
				value={props.value}
				onChange={addNewTask}
				onKeyUp={pressEnter}></input>
		</div>
	);
};
Input.propTypes = {
	setterList: PropTypes.func,
	setter: PropTypes.func,
	value: PropTypes.string,
	text: PropTypes.string,
};