import React, { useState } from 'react'
import Dropdown from 'dk-custom-dropdown'
import Input from '../Input/Input'
import states from '../../dropdownOptions/states'
import department from '../../dropdownOptions/department'
import SuccessModal from '../SuccessModal/SuccessModal'
import './Form.css'

const Form = () => {
    const initialFormData = {
        name: '',
        lastname: '',
        birthday: '',
        startDate: '',
        street: '',
        city: '',
        state: {},
        code: '',
        department: {}
    }
    const [formData, setFormData] = useState(initialFormData)
    const [errorMessage, setErrorMessage] = useState('')
    const [showModal, setShowModal] = useState(false)

    const handleChange = (field, value) => {
        setFormData(prevData => ({
            id: new Date().getTime(),
            ...prevData,
            [field]: value
        }))
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (validateForm()) {
            const storageFormData = getFormData()
            storageFormData.push(formData)
            localStorage.setItem(
                'storageFormData',
                JSON.stringify(storageFormData)
            )

            setFormData(initialFormData)
            setErrorMessage('')

            setShowModal(true) // Show the success modal
        } else {
            setErrorMessage('Please fill out all fields.')
        }
    }

    const getFormData = () => {
        const storedFormData = localStorage.getItem('storageFormData')
        return storedFormData ? JSON.parse(storedFormData) : []
    }

    const closeModal = () => {
        setShowModal(false) // Close the success modal
    }

    const validateForm = () => {
        return (
            formData.name &&
            formData.lastname &&
            formData.birthday &&
            formData.startDate &&
            formData.street &&
            formData.city &&
            formData.state.value &&
            formData.code &&
            formData.department.value
        )
    }

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <Input
                    type='text'
                    placeholder='First Name'
                    value={formData.name}
                    setValue={value => handleChange('name', value)}
                />
                <Input
                    type='text'
                    placeholder='Last Name'
                    value={formData.lastname}
                    setValue={value => handleChange('lastname', value)}
                />
                <Input
                    type='date'
                    placeholder='Date of Birth'
                    value={formData.birthday}
                    setValue={value => handleChange('birthday', value)}
                />
                <Input
                    type='date'
                    placeholder='Start Date'
                    value={formData.startDate}
                    setValue={value => handleChange('startDate', value)}
                />
                <Input
                    type='text'
                    placeholder='Street'
                    value={formData.street}
                    setValue={value => handleChange('street', value)}
                />
                <Input
                    type='text'
                    placeholder='City'
                    value={formData.city}
                    setValue={value => handleChange('city', value)}
                />
                <Dropdown
                    placeholder='State'
                    options={states}
                    selected={formData.state}
                    setSelected={value => handleChange('state', value)}
                />
                <Input
                    type='text'
                    placeholder='Zip Code'
                    value={formData.code}
                    setValue={value => handleChange('code', value)}
                />
                <Dropdown
                    placeholder='Department'
                    options={department}
                    selected={formData.department}
                    setSelected={value => handleChange('department', value)}
                />
                <p
                    className={`form-valid-message ${
                        errorMessage ? 'show' : ''
                    }`}
                >
                    {errorMessage}
                </p>
                <button type='submit'>Save</button>
            </form>
            {showModal && <SuccessModal onClose={closeModal} />}
        </div>
    )
}

export default Form
