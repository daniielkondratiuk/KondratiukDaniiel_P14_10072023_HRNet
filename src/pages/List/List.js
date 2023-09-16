import React, { useEffect, useState } from 'react'
import Table from '../../components/Table/Table'
import axios from 'axios'

const List = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:8888/formData')
                setData(res.data)
            } catch (error) {
                console.error('Error while fetching data', error)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>Current Employees</h1>
            {data.length > 0 ? (
                <Table data={data} />
            ) : (
                <h1>No data available</h1>
            )}
        </div>
    )

    // Get data from localStorage
    // const storedData = JSON.parse(localStorage.getItem('storageFormData'))

    // return (
    //     <div>
    //         <h1>Current Employees</h1>
    //         {storedData.length > 0 ? (
    //             <Table data={data} />
    //         ) : (
    //             <h1>No data available</h1>
    //         )}
    //     </div>
    // )
}

export default List
