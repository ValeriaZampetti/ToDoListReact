import PropTypes from "prop-types";
import React from "react";

export const Counter = (props) => {
	return <div>{props.list.length}</div>;
};

Counter.PropTypes = {
	list: PropTypes.string,
};