import React from 'react';

const Hello = () => {
	return React.createElement(
	'div', 
	{id: 'hello', className: 'helloclass'}, 
	React.createElement('h1', null, 'Hello world') )
}

export default Hello;