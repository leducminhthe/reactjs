import React from 'react';

const Folder = (props) => {
	console.log(props)
	const { name, isOpen, children } = props;
	return (
		<div style={{ marginLeft : '5px' }}>
			{name}
			<div>
				{isOpen ? children : null}
			</div>
		</div>
	)
}

export default Folder;