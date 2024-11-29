import axios from "axios";
import { useState } from "react";

const AddPatient = ({ handleCancelBtn }) => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [blood, setBlood] = useState('');

    const handleAddSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!first_name || !last_name || !blood) {
            alert("All fields are required!");
            return;
        }

        try {
            console.log("Submitting:", { first_name, last_name, blood });
            const res = await axios.post('http://127.0.0.1:8000/patient/', {
                first_name,
                last_name,
                blood,
            });
            console.log("Patient added:", res.data);

            // Reset the form
            setFirstName('');
            setLastName('');
            setBlood('');
        } catch (error) {
            console.error("Error adding patient:", error.response?.data || error.message);
            alert("Failed to add patient. Please check your input or server configuration.");
        }
    };

    return (
        <>
            <form onSubmit={handleAddSubmit}>
                <div className="mb-3">
                    <label htmlFor="first_name" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="first_name"
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="last_name" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="last_name"
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="blood" className="form-label">Blood Group</label>
                    <input
                        type="text"
                        className="form-control"
                        id="blood"
                        value={blood}
                        onChange={(e) => setBlood(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary m-2">Add</button>
                <button type="button" className="btn btn-secondary" onClick={handleCancelBtn}>Cancel</button>
            </form>
        </>
    );
};

export default AddPatient;
