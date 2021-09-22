import React from "react";
import PropTypes from "prop-types";

function Button(props) {
	return (
		<div>
			<button
				onClick={props.onClick}
				style={{ backgroundColor: props.color }}
				className="btn"
			>
				{props.text}
			</button>
		</div>
	);
}

Button.defaultProps = {
	color: "steelblue",
};

Button.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
