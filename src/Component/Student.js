import React from 'react';

const Student = () => {
  return (
    <div className='student'>
      <h2>Student Details</h2>
      <button className='btn'>Add New Student</button>
      <table className='table'>
        
<tr>
<th></th>
<td>Age</td>
<th>Name</th>
<th>Course</th>
<th>Batch</th>
</tr>

<hr  />
<tr>
<td>1</td>
<td>25</td>
<td>Varun Jha</td>
<td>Computer Science</td>
<td>March</td>
</tr>

<hr  />

<tr>
<td>2</td>
<td>24</td>
<td>Dhruv</td>
<td>CSE</td>
<td>May</td>
</tr>

<hr  />

<tr>
<td>3</td>
<td>22</td>
<td >Shubh</td>
<td>MBA</td>
<td>Oct</td>
</tr>

      </table>
    </div>
  )
}

export default Student;