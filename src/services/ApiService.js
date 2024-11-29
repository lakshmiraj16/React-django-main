import axios from "axios";

export function getpatient() {
    return axios.get('http://127.0.0.1:8000/patient/')
        .then(res => res.data)
        .catch(error => {
            console.error("Error fetching patients:", error);
            throw error;
        });
}

export function deletepatient(id) {
    return axios.delete(`http://127.0.0.1:8000/patient/${id}/`)
        .then(res => res.data)
        .catch(error => {
            console.error(`Error deleting patient with id ${id}:`, error);
            throw error;
        });
}
