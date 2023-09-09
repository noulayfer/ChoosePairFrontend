import React, {useEffect, useState} from 'react';
import axios from "axios";
import StudentList from "./StudentList";
import AddPoint from "./AddPoint";
import SaveChanges from "./SaveChanges";
import NamesAndMarks from "./NamesAndMarks";
import UpsetStudents from "./UpsetStudents";
import AverageComponent from "./AverageComponent";
import CreatePair from "./CreatePair";

const StudentPair = () => {

    const [firstStudentName, setFirstStudentName] = useState('');
    const [secondStudentName, setSecondStudentName] = useState('')

    const [mainPageDto, setMainPageDto] = useState({
        firstGroup: [],
        secondGroup: [],
        namesAndMarks: {},
        respondedMarks: [],
        upsetStudents: [],
        mark1: 0,
        mark2: 0,
        student1: {
            name: ''
        },
        student2: {
            name: ''
        },
        averageMark1: 0,
        averageMark2: 0,
    });

    useEffect(() => {
        axios.get("http://localhost:8081/tomcat/controller?command=average")
            .then((response) => {
                setMainPageDto(response.data);

                if (response.data.student1 && Object.keys(response.data.student1).length !== 0) {
                    setFirstStudentName(response.data.student1.name);
                }

                if (response.data.student2 && Object.keys(response.data.student2).length !== 0) {
                    setSecondStudentName(response.data.student2.name);
                }
            })
            .catch((error) => {
                console.error("Some error: " + error);
            });
    }, [mainPageDto]);


    return (
        <div>
            <StudentList title="First Group" students={mainPageDto.firstGroup}/>
            <StudentList title="Second Group" students={mainPageDto.secondGroup}/>
            <div>
                <CreatePair/>
            </div>

            <div>
                <>
                    {firstStudentName !== '' ? (
                        `${firstStudentName} : ${mainPageDto.mark1}`
                    ) : null}
                </>

                <>
                    {secondStudentName !== '' ? (
                        `${secondStudentName} : ${mainPageDto.mark2}`
                    ) : null}
                </>
            </div>

            <div>
                <SaveChanges Save Changes/>
            </div>

            <div>
                {firstStudentName !== '' ? (
                    <>
                        <AddPoint studentName={firstStudentName} command={'add-point'}
                                  title={'Add point for '}/>
                        <AddPoint studentName={firstStudentName} command={'steal-point'}
                                  title={'Steal point from '}/>
                    </>
                ) : null
                }
                {secondStudentName !== '' ? (
                    <>
                        <AddPoint studentName={secondStudentName} command={'add-point'}
                                  title={'Add point for '}/>
                        <AddPoint studentName={secondStudentName} command={'steal-point'}
                                  title={'Steal point from '}/>
                    </>
                ) : null
                }
            </div>
            <NamesAndMarks namesAndMarks={mainPageDto.namesAndMarks}/>
            <UpsetStudents upsetStudents={mainPageDto.upsetStudents}/>
            <AverageComponent averageMark1={mainPageDto.averageMark1} averageMark2={mainPageDto.averageMark2}/>
        </div>
    )
        ;
};

export default StudentPair