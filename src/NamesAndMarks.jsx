import React from 'react';

const NamesAndMarks = (props) => {
    return (
        <div>
            {Object.keys(props.namesAndMarks).length !== 0 ? (
                <div>
                    <h2>Names and Marks</h2>
                    <ul>
                        {Object.entries(props.namesAndMarks).map(([name, mark]) => (
                            <li key={name}>
                                {name}: {mark}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    );
};

export default NamesAndMarks;