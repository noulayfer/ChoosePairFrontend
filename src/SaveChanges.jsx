import {useNavigate} from "react-router-dom";
import axios from "axios";

const SaveChanges = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/student-pair');
    };
    const saveChanges = () => {
        axios.post("http://localhost:8081/tomcat/controller?command=save-changes")
            .then((response) => {
                handleClick()
            })
            .catch(e => console.log(e));
    }
    return (
        <div>
            <button onClick={saveChanges}>Save changes</button>
        </div>
    );
};

export default SaveChanges;