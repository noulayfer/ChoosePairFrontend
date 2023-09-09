import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import StudentList from './StudentList';
import NamesAndMarks from "./NamesAndMarks";
import UpsetStudents from "./UpsetStudents";

const MainPage = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/student-pair');
    };

    const [mainPageDto, setMainPageDto] = useState({
        firstGroup: [],
        secondGroup: [],
        namesAndMarks: {},
        respondedMarks: [],
        upsetStudents: [],
    });

    useEffect(() => {
        axios.get("http://localhost:8081/tomcat/controller?command=students")
            .then((response) =>
                setMainPageDto(response.data)
            ).catch((error) => {
            console.error("Some error :" + error);
        })
    }, []);

    return (
        <div>
            <StudentList title="First Group" students={mainPageDto.firstGroup}/>
            <StudentList title="Second Group" students={mainPageDto.secondGroup}/>
            <div>
                <button onClick={handleClick}>Go to Student Pair</button>
            </div>
            <NamesAndMarks namesAndMarks={mainPageDto.namesAndMarks} />
            <UpsetStudents upsetStudents={mainPageDto.upsetStudents} />
        </div>
    );
};

export default MainPage;