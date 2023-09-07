import React from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const ReturnButton = ({studentName}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/student-pair');
    };

    function returnButton() {
        axios.post("http://localhost:8081/tomcat/controller?command=return", null, {
            params: {
                name: studentName
            }
        })
            .then(response => handleClick())
            .catch(e => console.log(e));
    }

    return (
        <div>
            <button onClick={returnButton}>return</button>
        </div>
    );
}

export default ReturnButton;