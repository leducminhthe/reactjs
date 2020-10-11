import React from 'react';

function Pages (props) {
	return (
		<div className="pages" >
			<h1>Hello { props.name } a.k.a {props.heroname}</h1>
			{props.children}
		</div>
	)
}

export default Pages;