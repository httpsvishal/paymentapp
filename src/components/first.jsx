import React from "react";
import { TextField, Select, MenuItem, FormControl, InputLabel , InputAdornment} from "@mui/material";
import BookingSummary from "./bookingsumm";
import Pricing from "./pricing";
import Foreigner from "./Foreigner";
import NextButton from "./nextButton";

const First = ({ formData, setFormData ,setCurrentStep, currentStep }) => {
    const countries = [
        "United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "India", "China", "Japan", "Brazil",
        "Mexico", "Russia", "Italy", "Spain", "South Korea", "Netherlands", "Turkey", "Saudi Arabia", "Switzerland", "Argentina",
        "South Africa", "Sweden", "Poland", "Belgium", "Norway", "Austria", "Denmark", "Finland", "Ireland", "New Zealand",
        "Singapore", "Malaysia", "Thailand", "Indonesia", "Philippines", "Vietnam", "Pakistan", "Bangladesh", "Nigeria", "Egypt"
    ];
    const countryCodes = {
        "United States": "+1",
        "Canada": "+1",
        "United Kingdom": "+44",
        "Australia": "+61",
        "Germany": "+49",
        "France": "+33",
        "India": "+91",
        "China": "+86",
        "Japan": "+81",
        "Brazil": "+55",
        "Mexico": "+52",
        "Russia": "+7",
        "Italy": "+39",
        "Spain": "+34",
        "South Korea": "+82",
        "Netherlands": "+31",
        "Turkey": "+90",
        "Saudi Arabia": "+966",
        "Switzerland": "+41",
        "Argentina": "+54",
        "South Africa": "+27",
        "Sweden": "+46",
        "Poland": "+48",
        "Belgium": "+32",
        "Norway": "+47",
        "Austria": "+43",
        "Denmark": "+45",
        "Finland": "+358",
        "Ireland": "+353",
        "New Zealand": "+64",
        "Singapore": "+65",
        "Malaysia": "+60",
        "Thailand": "+66",
        "Indonesia": "+62",
        "Philippines": "+63",
        "Vietnam": "+84",
        "Pakistan": "+92",
        "Bangladesh": "+880",
        "Nigeria": "+234",
        "Egypt": "+20"
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Changing ${name} to ${value}`); 
    
        if (name === "country") {
            const countryCode = countryCodes[value] || "";
            setFormData({
                ...formData,
                [name]: value,
                phoneCode: countryCode
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };
    
    console.log(`Current country: ${formData.country}`);
    return (
        <main className="max-w-[1250px] mx-auto grid lg:grid-cols-10 md:grid-cols-10 text-base gap-5 p-3 m-3">
            <div className="col-span-7">
                <div className="contactinfo box col-span-8 rounded-xl border p-7 border-black mb-5">
                    <h2 className="text-2xl font-semibold  ">Contact Details</h2>
                    <p className="mt-5  font-semibold">
                        Fill the Details of Lead Traveller
                    </p>
                    <p>
                        This information will be used to send you confirmation and update your booking
                    </p>
                    <div className="flex gap-5">
                        <div className="grow">
                            <div>
                                <TextField
                                    label="First Name"
                                    margin="normal"
                                    variant="outlined"
                                    required
                                    name="firstName"
                                    value={formData.firstName}
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
                                    InputProps={{ startAdornment: (
                                        <InputAdornment position="start">
                                            {formData.phoneCode}
                                        </InputAdornment>
                                    )
                                        , style: { fontSize: 16, color: "black" } }}
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
                                    value={formData.lastName}
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
                                        defaultValue="India"
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
                            <div>
                                <TextField
                                    label="ID Number"
                                    margin="normal"
                                    variant="outlined"
                                    required
                                    name="idNumber"
                                    value={formData.idNumber}
                                    onChange={handleChange}
                                    InputProps={{ style: { fontSize: "14px", color: "black" } }}
                                    InputLabelProps={{ style: { fontSize: "14px", color: "black" } }}
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
                                                borderColor: 'black',
                                            },
                                        }
                                    }} />
                            </div>
                        </div>
                    </div>
                </div>
                <p className="my-3 text-red-500">
                    <span className="font-semibold text-stone-950">Note:</span> Each candidate must carry their ID card at the time of visit.
                </p>
                {formData.country && formData.country !== "India" && <Foreigner formData={formData} setFormData={setFormData} />}
                <div >
                    <NextButton currentStep={currentStep} setCurrentStep={setCurrentStep} />
                </div>
            </div>
            <div className="col-span-3 ">
                <BookingSummary />
                <Pricing />

            </div>
        </main>
    );
};

export default First; // Ensure correct export