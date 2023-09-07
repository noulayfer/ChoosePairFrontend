import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AverageComponent = (props) => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/student-pair');
    };


    const [flagShowAverage, setFlagShowAverage] = useState(false);

    const handleAverageButton = () => {
        flagShowAverage ? setFlagShowAverage(false) : setFlagShowAverage(true);
    }

    function average() {
        axios.get("http://localhost:8081/tomcat/controller?command=average")
            .then((response => {
                handleClick()
                handleAverageButton();
            }))
            .catch(e => console.log(e));
    }

    return (
        <div>
            {flagShowAverage ? (
                    <div>
                <h5>props.averageMark1</h5>
                <h5>props.averageMark2</h5>
                    </div>
            ) : null}
            <button onClick={average}>Average</button>
        </div>
    );
};

export default AverageComponent;