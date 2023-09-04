import React, { useState } from 'react';
import axios from 'axios';
import { useStudentPair } from './StudentPair';

function AddPoint() {
  const [name, setName] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const studentPair = useStudentPair(); // Get the student pair from StudentPair component

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleStudentSelection = (student) => {
    setSelectedStudent(student);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedStudent) {
      setError('Please select a student from the pair');
      return;
    }

    if (!name) {
      setError('Name cannot be empty');
      return;
    }

    // Make a POST request to your servlet with selectedStudent and name parameters
    axios
      .post('http://localhost:8081/tomcat/controller?command=add-point', {
        selectedStudent,
        name,
      })
      .then((response) => {
        setResponseData(response.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div>
      <h2>Add Point</h2>
      <div>
        <h3>Select a Student:</h3>
        {studentPair.map((student, index) => (
          <button key={index} onClick={() => handleStudentSelection(student)}>
            {student.name}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {responseData && (
        <div>
          <h3>Response Data:</h3>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div>
          <h3>Error:</h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default AddPoint;
