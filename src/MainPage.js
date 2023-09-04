import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MainPage() {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8081/tomcat/controller?command=students')
      .then(function (response) {
        setResponseData(response.data);
      })
      .catch(function (err) {
        setError(err);
      });
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error.message}</div>
      ) : responseData ? (
        <div>
          <h2>Start Page Data</h2>
          <ul>
            <li>First Group:</li>
            <ul>
              {responseData.firstGroup.map((student, index) => (
                <li key={index}>{student.name}</li>
              ))}
            </ul>
            <li>Second Group:</li>
            <ul>
              {responseData.secondGroup.map((student, index) => (
                <li key={index}>{student.name}</li>
              ))}
            </ul>
            <li>Names and Marks:</li>
            <ul>
              {Object.entries(responseData.namesAndMarks).map(([name, mark], index) => (
                <li key={index}>{name}: {mark}</li>
              ))}
            </ul>
            <li>Responded Students:</li>
            <ul>
              {responseData.respondedStudents.map((student, index) => (
                <li key={index}>{student.name}</li>
              ))}
            </ul>
            <li>Upset Students:</li>
            <ul>
              {responseData.upsetStudents.map((student, index) => (
                <li key={index}>{student.name}</li>
              ))}
            </ul>
          </ul>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default MainPage;
