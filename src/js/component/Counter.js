import PropTypes from "prop-types";
import React from "react";

export const Counter = (props) => {
	return <div>
		<span
	style={{
		fontSize: "15px",
		marginLeft: "2%",
		paddingTop: "3px",
		paddingLeft: "24px",
		paddingRight: "20px",
		paddingBottom: "3px",
		border: "1px solid black",
	}}>
	{props.list.length} item left...
</span></div>;
};

Counter.PropTypes = {
	list: PropTypes.string,
};