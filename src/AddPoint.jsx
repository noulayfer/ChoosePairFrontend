import React from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function AddPoint({studentName, command, title}) {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/student-pair');
    };

    const manipulatePoint = async () => {
        try {
            await axios.post('http://localhost:8081/tomcat/controller', null, {
                params: {
                    command: command,
                    name: studentName,
                },
            });
            handleClick();
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <button onClick={manipulatePoint}>{title}{studentName}</button>
    );
}

export default AddPoint;
