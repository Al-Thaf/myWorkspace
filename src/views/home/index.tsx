import {
    Autocomplete, Checkbox, FormControlLabel,
    FormGroup, MenuItem, Radio, RadioGroup, Select,
    TextField, Typography
} from '@mui/material'
import { useAppSelector } from '../../store/hooks'
import { useEffect, useState } from 'react'
import { FormikProps } from '../types'
import "./styles.css"




function Home() {
    const vehicle = useAppSelector((app) => app.VehicleReducer)
    const [filteredVehicle, setFilteredVehicle] = useState<FormikProps[]>(vehicle.data)
    const [selectedLoc, setSelectedLoc] = useState<string>("")
    const [color, setColor] = useState<string>("")
    const [yearofM, setYearofM] = useState<string>("")
    const [owner, setOwner] = useState<string>("")
    const [trasnmission, setTrasnmission] = useState<string>("")

    useEffect(() => {
        if (selectedLoc || color || yearofM || owner || trasnmission) {
            const filteredVehicle = vehicle.data.filter((veh) =>
                veh.color.toLowerCase() === color.toLowerCase() ||
                veh.location.toLowerCase() === selectedLoc.toLowerCase() ||
                veh.yearOfManufacture.toLowerCase() === yearofM.toLowerCase() ||
                veh.noOfOwners.toLowerCase() === owner.toLowerCase() || veh.transmission.toLowerCase() === trasnmission.toLowerCase()

            )
            setFilteredVehicle(filteredVehicle)
        }

    }, [selectedLoc, color, yearofM, owner, trasnmission])

    return (
        <div className='view'>
            <div className='item'>
                <Typography>Filter</Typography>
            </div>
            <div className='filter-view'>
                <div className='filter-section'>
                    <div className='item'>
                        <Typography>Location</Typography>
                    </div>
                    <div className='item'>
                        <Select
                            labelId="division-select-label"
                            id="division-select"
                            name="divn_code"
                            fullWidth
                            value={selectedLoc}
                            onChange={(e) => setSelectedLoc(e.target.value)}
                        >
                            {[...new Set(vehicle.locations.map(loc => loc.toLowerCase()))].map((loc, i) => (
                                <MenuItem key={i} value={loc}>
                                    {loc}
                                </MenuItem>
                            ))}


                        </Select>
                    </div>
                    <div className='item'>
                        <Typography>Color</Typography>
                    </div>
                    <div className='item'>
                        <Autocomplete
                            disablePortal
                            options={[...new Set(vehicle.colors.map(clr => clr.toLowerCase()))].map((c) => c)}
                            fullWidth
                            onChange={(_, value) => setColor(value ?? "")}
                            renderInput={(params) => <TextField {...params} label="Color" />}
                        />
                    </div>
                    <div className='item'>
                        <Typography>Year of Manufacture</Typography>
                    </div>
                    <div className='item'>
                        <FormGroup >
                            <FormControlLabel control={<Checkbox />} label="below 2000" />
                            <FormControlLabel control={<Checkbox />} label="2000-2010" />
                            <FormControlLabel control={<Checkbox />} label="above 2010" />
                        </FormGroup>
                    </div>
                    <div className='item'>
                        <Typography>Owners</Typography>
                    </div>
                    <div className='item'>
                        <RadioGroup
                            name="Owners"
                            onChange={(_, value) => {
                                console.log("value", value)
                                setOwner(value)
                            }}
                        >
                            {vehicle.data.map((v) => (
                                <FormControlLabel value={v.noOfOwners} control={<Radio />} label={`${v.noOfOwners} Owner`} />
                            ))}


                        </RadioGroup>
                    </div>

                    <div className='item'>
                        <Typography>Transmission</Typography>
                    </div>
                    <div className='item'>
                        <RadioGroup
                            name="transmition"
                            onChange={(_, value) => {
                                console.log(value)
                                setTrasnmission(value)
                            }}
                        >
                            <FormControlLabel value="manual" control={<Radio />} label="Manual" />
                            <FormControlLabel value="automatic" control={<Radio />} label="Automaitc" />
                        </RadioGroup>
                    </div>
                </div>
                {filteredVehicle.length > 0 && (
                    <div className='photo-section'>
                        {filteredVehicle.map((vData) => (
                            <>
                                <div>
                                    <Typography>{vData.location}</Typography>
                                </div>
                                <div>
                                    <Typography>{vData.color}</Typography>
                                </div>
                                <div>
                                    <img src={vData.photo} height={200} width={200} />
                                </div>
                            </>
                        ))}

                    </div>
                )}

            </div>
        </div>
    )
}

export default Home