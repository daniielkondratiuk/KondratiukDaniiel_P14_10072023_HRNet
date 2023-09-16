import React from 'react'
import Table from '../../components/Table/Table'
const List = () => {
    const storedData = JSON.parse(localStorage.getItem('storageFormData'))
    return (
        <div>
            <h1>Current Employees</h1>
            {storedData.length > 0 && <Table data={storedData} />}
            {!storedData.length && <h1>No have data</h1>}
        </div>
    )
}

export default List
