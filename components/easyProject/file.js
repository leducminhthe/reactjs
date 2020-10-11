import React from 'react';

const File = (props) => {
	console.log(props)
	return (
		<div style={{ marginLeft : '5px' }}>
			{props.name}
		</div>
	)
}

export default File;