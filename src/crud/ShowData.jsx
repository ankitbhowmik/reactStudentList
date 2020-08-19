import React, {Fragment} from 'react';

const ShowData = (props) => {
	let { students, deleteStudent } = props;
	let allStudents = students.map(stu=>(
				<tr key={stu.id}>
					<td>{stu.name}</td>
					<td>{stu.age}</td>
					<td>{stu.branch}</td>
					<td><button onClick={() => deleteStudent(stu.id)}><span role="img" aria-label="delete">❌</span> </button></td>
				</tr>
	)); 
	return (
		<Fragment>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Age</th>
						<th>Branch</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{ allStudents }
				</tbody>
			</table>
		</Fragment>
	)
}

export default ShowData;