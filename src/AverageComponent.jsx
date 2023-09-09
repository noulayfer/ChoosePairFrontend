import React, {useState} from 'react';

const AverageComponent = (props) => {


    const [flagShowAverage, setFlagShowAverage] = useState(false);

    const handleAverageButton = () => {
        flagShowAverage ? setFlagShowAverage(false) : setFlagShowAverage(true);
    }

    return (
        <div>
            {flagShowAverage ? (
                    <div>
                <h5>{props.averageMark1}</h5>
                <h5>{props.averageMark2}</h5>
                    </div>
            ) : null}
            <button onClick={handleAverageButton}>Average</button>
        </div>
    );
};

export default AverageComponent;