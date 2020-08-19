import React, { useState, Fragment } from 'react';
import ShowData from './ShowData';
import InsertData from './InsertData';

const Data = (props) => {
	const [students, setStudents] = useState([{id:1, name:'Ankit', age:21, branch:'Computer Science'},
											  {id:2, name:'Rahul', age:35, branch:'Mechanical'},
											  {id:3, name:'Amit', age:20, branch:'Civil'}]);
	
	const addStudent = (singleStudent) => {
		setStudents([...students, singleStudent]);
	}

	const deleteStudent = (studentId) => {
		let newStudents = students.filter(stu => (stu.id !== studentId));
		setStudents(newStudents);
	}

	return (
		<Fragment>
			<h1 style={{textAlign:'center'}}>Simple Student list</h1>
			<div className="grid">
				<InsertData addStudent={addStudent}/>
				<ShowData students={students} deleteStudent={deleteStudent}/>
			</div>
		</Fragment>
		)
}

export default Data;