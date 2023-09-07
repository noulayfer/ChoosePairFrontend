import React from 'react';
import DeleteStudent from "./DeleteStudent";

function StudentList({ title, students }) {

    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>{student.name} <DeleteStudent studentName={student.name}/></li>
                ))}
            </ul>
        </div>
    );
}

export default StudentList;