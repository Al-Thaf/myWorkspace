
import { TextField, Button, Typography } from '@mui/material'
import "../styles.css"
import { useFormik } from 'formik'
import { FormikProps } from '../types'
import { useAppDispatch } from '../../store/hooks'
import { addVehicle } from '../../store/reducers/vehicleReducer'
import { useContext } from 'react'
import { MyContext } from '../context'



function VehileForm() {
    const { selectedBrand } = useContext(MyContext);
    const dispatch = useAppDispatch()


    const saveData = (updatedData: FormikProps) => {
        const payaload = { ...updatedData, brandId: selectedBrand.id }
        dispatch(addVehicle(payaload))

    };

    const { handleChange, handleSubmit, setFieldValue } = useFormik<FormikProps>({
        initialValues: {
            color: "",
            yearOfManufacture: "",
            insuranceValidUpto: "",
            kms: "",
            location: "",
            noOfOwners: "",
            transmission: "",
            externalFitments: "",
            photo: ""
        },
        onSubmit: (values) => {
            saveData(values)
            alert(`data added - ${JSON.stringify(values)}`)
        }
    })

    const onChangeFile = (file: File) => {


        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setFieldValue("photo", reader.result);
            };

            reader.readAsDataURL(file);
        }

    }
    return (
        <>
            <div className='form'>
                <div className='form-row'>
                    <div className='item'>
                        <TextField name="model" value={selectedBrand.brand} label="Model" onChange={handleChange} />
                    </div>
                    <div className='item'>
                        <TextField label="Color" name="color" onChange={handleChange} />
                    </div>
                    <div className='item'>
                        <TextField name="yearOfManufacture" label="Year of Manufacture" onChange={handleChange} />
                    </div>
                    <div className='item'>
                        <TextField name="insuranceValidUpto" label="Insurance valid up to" onChange={handleChange} />
                    </div>
                    <div className='item'>
                        <TextField name="kms" label="Kms" onChange={handleChange} />
                    </div>
                </div>
                <div className='form-row'>
                    <div className='item'>
                        <TextField name="location" label="Location" onChange={handleChange} />
                    </div>
                    <div className='item'>
                        <TextField name="noOfOwners" label="No. of Owners" onChange={handleChange} />
                    </div>
                    <div className='item'>
                        <TextField name="transmission" label="Transmission" onChange={handleChange} />
                    </div>
                    <div className='item'>
                        <TextField name="externalFitments" label="External Fitments" onChange={handleChange} />
                    </div>
                    <div className='item'>
                        <div className='file-upload'>
                            <div className='up-label'>
                                <Typography variant='subtitle1'>Upload Photo  </Typography>
                            </div>
                            <div className='file-up'>
                                <input type='file' accept='image/*' name="photo" onChange={(e) => {
                                    if (e.target.files) {
                                        onChangeFile(e.target.files[0])
                                    }
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='btn-div'>
                <div>
                    <Button variant='outlined' onClick={() => handleSubmit()}>Submit</Button>
                </div>
            </div></>
    )
}

export default VehileForm