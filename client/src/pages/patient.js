// Allows you to create a new exam?
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { redirect, useNavigate } from "react-router-dom";
import { useApi } from '../hooks/use-api';



const Patient = () => {
    const [inputs, setInputs] = useState({});
    const [successMessage, setSuccessMessage] = useState(''); // State to control success message display
    const [urlPath, setPath] = useState("")
    let navigate = useNavigate();
    try {
        const response =  useApi(setPath)
        //setSuccessMessage('Exam successfully created.')
        //setInputs({age:'', sex: '', bmi:''}) //clear inputs
    } catch(error) {
        let path = "/exam" + error;
        navigate(path);
        console.error('Error creating exam:', error);
    }
    
    const useSubmit = async () => {
        //event.preventDefault();
        try {
            //const response =  useApi('/admin/create/{"age": "60","sex": "F","bmi": "27.6","exams":[{"examId":"exam_1","findings":"clear lungs"},{"examId":"exam_1","findings":"swollen lungs"}}')
            const response = await fetch('http://localhost:9000/admin/create/'+ JSON.stringify(inputs));
            // Handle success
            if (response.ok) {
                setSuccessMessage('Exam successfully created.')
                setInputs({age:'', sex: '', bmi:''}) //clear inputs
                //const result = await response.json();
                //console.log('Exam created:', result);
            } else {
                setSuccessMessage('Failed to create exam.')
               console.error('Failed to create exam:', response.statusText);
                // Handle error
            }
        } catch (error) {
            console.error('Error creating exam:', error);
        }
    }
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    return(
        <div className="Patient">
            <h2>Patient</h2>
            <form>
                <div>
                    <label>Age:
                        <input 
                        type="number" 
                        name="age" 
                        value={inputs.age || ""} 
                        onChange={handleChange}
                    />
                    </label>
                </div>
                <div>
                    <label>Sex:
                    <input 
                        type="text" 
                        name="sex"
                        value={inputs.sex || ""}
                        onChange={handleChange}
                    />
                    </label>
                </div>
                <div>
                    <label>BMI:
                    <input 
                        type="float" 
                        name="bmi"
                        value={inputs.bmi || ""}
                        onChange={handleChange}
                    />
                    </label>
                </div>
                <button type="button" onClick={setPath("users")}>Submit</button>
            </form>
            {successMessage && <p>{successMessage}</p>}
        </div>
    )   
}
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<examCreateForm />);

export default Patient