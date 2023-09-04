import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ApiComponent() {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8081/tomcat/test')
      .then(function (response) {
        setResponseData(response.data);
      })
      .catch(function (err) {
        setError(err);
      });
  }, []);

  return (
    <div>
      {/* Display responseData or error here */}
      {responseData ? (
        <div>Response Data: {responseData}</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : null}
    </div>
  );
}

export default ApiComponent;
