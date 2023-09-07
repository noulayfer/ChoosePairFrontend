import React from 'react';
import ReturnButton from "./ReturnButton";

const UpsetStudents = (props) => {

    return (
        <div>
            {props.upsetStudents.length !== 0 ? (
                <div>
                    <h2>UpsetStudents</h2>
                    <ul>
                        {props.upsetStudents.map(student =>
                            <li key={student.id}>{student.name} <ReturnButton studentName={student.name}/></li>
                        )}
                    </ul>
                </div>
            ) : null}
        </div>
    );
};

export default UpsetStudents;