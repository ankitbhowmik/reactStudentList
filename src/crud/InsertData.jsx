import React, { useState, Fragment } from 'react';
import {v4 as uuidv4} from 'uuid';

const InsertData = (props) => {
	const { addStudent } = props; 	//this is function to add student in students in data.jsx file

	const initialValue = {name:'',age:'',branch:''}
	const [student, setStudent] = useState(initialValue)
	
	const handleChange = (e) => {
		setStudent({...student, [e.target.name]:e.target.value});
	}
	const formSubmit = (e) => {
		e.preventDefault();
		addStudent({...student, id:uuidv4()});
		setStudent(initialValue);
	}

  	return (
	    <Fragment>
	    	<form onSubmit={formSubmit}>
	    	<legend>Insert Student</legend>
	    		<div>
	    			<label htmlFor="name">Name</label>
		    		<input autoComplete="off" onChange={handleChange} value={student.name} type="text" name="name"/>
	    		</div>
	    		<div>
	    			<label htmlFor="age">Age</label>
	    			<input autoComplete="off" onChange={handleChange} value={student.age} type="number" name="age"/>
	    		</div>
	    		<div>
	    			<label htmlFor="branch">Branch</label>
	    			<select name="branch" onChange={handleChange} value={student.branch}>
	    				<option value="">--select branch--</option>
	    				<option>Computer Science</option>
	    				<option>Mechanical</option>
	    				<option>Civil</option>
	    				<option>Electronics</option>
	    				<option>Electrical</option>
	    			</select>
	    		</div>
	    		<input type="submit"/>
	    	</form>
	    </Fragment>
  	)
}

export default InsertData;