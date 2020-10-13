import React from 'react';
import Person from './Person';

function NameList() {
	const persons = [
		{
			id:1,
			name:'Bruce',
			age:30
		},
		{
			id:2,
			name:'Diana',
			age:31
		},
		{
			id:3,
			name:'Clark',
			age:32
		}
	]
	const personList = persons.map((person,index) => (
		<Person key={index} person={person}></Person>
	))

  	return (
    	<div>
      		{personList}
    	</div>
  	);
}

export default NameList;