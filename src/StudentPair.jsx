import React, {useEffect, useState} from 'react';
import axios from "axios";
import StudentList from "./StudentList";
import {useNavigate} from "react-router-dom";
import AddPoint from "./AddPoint";
import SaveChanges from "./SaveChanges";
import NamesAndMarks from "./NamesAndMarks";
import UpsetStudents from "./UpsetStudents";
import AverageComponent from "./AverageComponent";

const StudentPair = () => {

    const [firstStudentName, setFirstStudentName] = useState('');
    const [secondStudentName, setSecondStudentName] = useState('')

    const navigate = useNavigate();
    const createPair = () => {
        navigate('/student-pair');
    };


    const [mainPageDto, setMainPageDto] = useState({
        firstGroup: [],
        secondGroup: [],
        namesAndMarks: {},
        respondedMarks: [],
        upsetStudents: [],
        mark1: 0,
        mark2: 0,
        student1: {
            name: firstStudentName
        },
        student2: {
            name: secondStudentName
        },
        averageMark1: 0,
        averageMark2: 0,
    });

    useEffect(() => {
        axios.get("http://localhost:8081/tomcat/controller?command=create-pair")
            .then((response) => {
                setMainPageDto(response.data);
                setFirstStudentName(response.data.student1.name);
                setSecondStudentName(response.data.student2.name);
            }).catch((error) => {
            console.error("Some error :" + error);
        })
    }, [mainPageDto]);


    return (
        <div>
            <StudentList title="First Group" students={mainPageDto.firstGroup}/>
            <StudentList title="Second Group" students={mainPageDto.secondGroup}/>
            <div>
                <button onClick={createPair}>Go to Student Pair</button>
            </div>

            <div>
                {firstStudentName} : {mainPageDto.mark1};
                {secondStudentName} : {mainPageDto.mark2};
            </div>

            <div>
                <SaveChanges Save Changes/>
            </div>

            <div>
                <AddPoint studentName={mainPageDto.student1.name} command={'add-point'} title={'Add point for '}/>
                <AddPoint studentName={mainPageDto.student2.name} command={'add-point'} title={'Add point for '}/>
                <AddPoint studentName={mainPageDto.student1.name} command={'steal-point'} title={'Steal point from '}/>
                <AddPoint studentName={mainPageDto.student2.name} command={'steal-point'} title={'Steal point from '}/>
            </div>
            <NamesAndMarks namesAndMarks={mainPageDto.namesAndMarks}/>
            <UpsetStudents upsetStudents={mainPageDto.upsetStudents}/>
            <AverageComponent />
        </div>
    );
};

export default StudentPair;