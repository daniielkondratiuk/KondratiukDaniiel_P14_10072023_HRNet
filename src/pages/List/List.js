import React from 'react';
import Table from '../../components/Table/Table';
const data = [
    {
        id: 1,
        firstName: "Daniel",
        lastName: "Kondratiuk",
        dateOfBirth: "01/13/1995",
        startDate: "07/08/2023",
        department: "Engineering",
        street: "23B Rue des Petits Champs",
        city: "Schiltigheim",
        state: "GA",
        zipCode: "67300"
    },
    {
        id: 2,
        firstName: "Anhelina",
        lastName: "Kondratiuk",
        dateOfBirth: "09/25/1997",
        startDate: "07/09/2023",
        department: "Marketing",
        street: "23B Rue des Petits Champs",
        city: "Schiltigheim",
        state: "AL",
        zipCode: "57500"
    },
    {
        id: 3,
        firstName: "Mia",
        lastName: "Kondratiuk",
        dateOfBirth: "10/03/2018",
        startDate: "07/02/2023",
        department: "Human Resources",
        street: "23B Rue des Petits Champs",
        city: "Schiltigheim",
        state: "AL",
        zipCode: "87200"
    },
    {
        id: 4,
        firstName: "Arthur",
        lastName: "Kondratiuk",
        dateOfBirth: "07/03/2020",
        startDate: "07/02/2023",
        department: "Legal",
        street: "23B Rue des Petits Champs",
        city: "Schiltigheim",
        state: "AL",
        zipCode: "67100"
    }
]

const List = () => {
    const storedData = JSON.parse(localStorage.getItem('storageFormData'))
    console.log(storedData)
    return (
        <div>
            <h1>Current Employees</h1>
            {storedData && <Table data={storedData} />}
        </div>
    );
};

export default List;
