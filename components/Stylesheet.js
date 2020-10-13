import React from 'react';
import './Style.css';

function MyStyle(props) {
	let primary = props.primary ? 'primary' : ''
  	return (
    	<div>
      		<h1 className={`${primary} font`}>Stylesheet</h1>
    	</div>
  	);
}

export default MyStyle;