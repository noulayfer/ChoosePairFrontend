import React from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const DeleteStudent = ({studentName}) => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/student-pair');
    };
    function deleteStudent() {
        axios.post("http://localhost:8081/tomcat/controller?command=delete-student", null, {
                params: {
                    name: studentName,
                },
            }
            )
            .then((response) =>  handleClick())
            .catch((e) => console.log(e));
    }

    return (
        <div>
            <button onClick={deleteStudent}>x</button>
        </div>
    );
};

export default DeleteStudent;