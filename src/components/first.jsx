import React from "react";
import {TextField, Select, MenuItem, FormControl, InputLabel} from "@mui/material";
import BookingSummary from "./bookingsumm";
import Pricing from "./pricing";
import Foreigner from "./Foreigner";

const First = ({ formData, setFormData }) => {
    const countries = [
        "United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "India", "China", "Japan", "Brazil",
        "Mexico", "Russia", "Italy", "Spain", "South Korea", "Netherlands", "Turkey", "Saudi Arabia", "Switzerland", "Argentina",
        "South Africa", "Sweden", "Poland", "Belgium", "Norway", "Austria", "Denmark", "Finland", "Ireland", "New Zealand",
        "Singapore", "Malaysia", "Thailand", "Indonesia", "Philippines", "Vietnam", "Pakistan", "Bangladesh", "Nigeria", "Egypt"
    ];
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Changing ${name} to ${value}`); 
        setFormData({
            ...formData,
            [name]: value
        });
    };
    console.log(`Current country: ${formData.country}`);
    return (
        <main className="max-w-[1250px] mx-auto grid lg:grid-cols-10 md:grid-cols-10 text-base gap-5 p-3 m-3">
            <div className ="col-span-7">
            <div className="contactinfo box col-span-8 rounded-xl border p-7 border-black">
                <h2 className="text-xl font-semibold ">Contact Details</h2>
                <p className="my-5">
                    This information will be used to send you confirmation and update about your booking
                </p>
                <div className="flex gap-5">
                    <div className="grow">
                        <div>
                            <TextField
                                label="First Name"
                                margin="normal"
                                variant="outlined"
                                required
                                name="custFirstName"
                                value={formData.custFirstName}
                                onChange={handleChange}
                                InputProps={{ style: { fontSize: 16, color: "black" } }} 
                                InputLabelProps={{ style: { fontSize: 16, color: "black" } }}
                                sx={{
                                    width: '100%',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#A8A8A8', // Change border color
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'black', // Change border color on hover
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'black', // Change border color when focused
                                        },
                                    }
                                }} />
                        </div>
                        <div>
                            <TextField
                                label="Email"
                                margin="normal"
                                variant="outlined"
                                required
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                InputProps={{ style: { fontSize: 16, color: "black" } }} // Increase input text size
                                InputLabelProps={{ style: { fontSize: 16, color: "black" } }} // Increase label text size
                                sx={{
                                    width: '100%',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#A8A8A8', // Change border color
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'black', // Change border color on hover
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'black', // Change border color when focused
                                        },
                                    }
                                }} />
                        </div>
                        <div>
                            <TextField
                                label="Phone Number"
                                margin="normal"
                                variant="outlined"
                                required
                                name="phNumber"
                                value={formData.phNumber}
                                onChange={handleChange}
                                InputProps={{ style: { fontSize: 16, color: "black" } }}
                                InputLabelProps={{ style: { fontSize: 16, color: "black" } }}
                                sx={{
                                    width: '100%',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#A8A8A8', // Change border color
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'black', // Change border color on hover
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'black', // Change border color when focused
                                        },
                                    }
                                }} />
                        </div>
                    </div>
                    <div className="grow">
                        <div>
                            <TextField
                                label="Last Name"
                                margin="normal"
                                variant="outlined"
                                required
                                name="custLastName"
                                value={formData.custLastName}
                                onChange={handleChange}
                                InputProps={{ style: { fontSize: 16, color: "black" } }}
                                InputLabelProps={{ style: { fontSize: 16, color: "black" } }}
                                sx={{
                                    width: '100%',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#A8A8A8',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'black',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'black', // Change border color when focused
                                        },
                                    }
                                }} />
                        </div>
                        <div>
                        <FormControl margin="normal" sx={{ width: '100%' }}>
                                <InputLabel sx={{ color: 'black', fontSize: "14px" }}>Country</InputLabel>
                                <Select
                                    label="Country"
                                    defaultValue=""
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}

                                >
                                    {countries.map((country, index) => (
                                        <MenuItem key={index} value={country}>
                                            {country}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>
            </div>
            <p className ="my-3">
                <span className="font-semibold">Note:</span> Each candidate must carry their ID card at the time of visit.
            </p>
            {formData.country && formData.country !== "India" && <Foreigner formData={formData} setFormData={setFormData} />}
            
            </div>
            <div className="col-span-3 ">
            <BookingSummary />
            <Pricing />
            
            </div>
        </main>
    );
};

export default First; // Ensure correct export