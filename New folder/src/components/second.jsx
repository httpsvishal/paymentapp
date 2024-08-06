import React from "react";
import cards from "../images/cards.png";
import { TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import BookingSummary from "./bookingsumm";
import Pricing from "./pricing";
const Second = ({formData,setFormData}) => {
    const countries = [
        "United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "India", "China", "Japan", "Brazil",
        "Mexico", "Russia", "Italy", "Spain", "South Korea", "Netherlands", "Turkey", "Saudi Arabia", "Switzerland", "Argentina",
        "South Africa", "Sweden", "Poland", "Belgium", "Norway", "Austria", "Denmark", "Finland", "Ireland", "New Zealand",
        "Singapore", "Malaysia", "Thailand", "Indonesia", "Philippines", "Vietnam", "Pakistan", "Bangladesh", "Nigeria", "Egypt"
    ];
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    
    return (
        <main className="max-w-[1200px] mx-auto grid lg:grid-cols-4 md:grid-cols-3 gap-5 p-3 m -3">
            <div className="lg:col-span-3 md:col-span-2 rounded border border-black p-3 row-span-3">
                <h2 className="text-2xl my-5">Payment</h2>
                <div className="flex items-center">
                    <input
                        type="radio"
                        id="creditDebitCard"
                        name="paymentMethod"
                        value="creditDebitCard"
                        defaultChecked
                    />
                    <label htmlFor="creditDebitCard" className="flex items-center mx-3">Credit/Debit Card <span className="mx-3"><img src={cards} style={{ height: "15px" }}></img></span> </label>
                </div>
                <div className="grid lg:grid-cols-8 md:grid-cols-8 cols-4 gap-5">
                    <div className="lg:col-span-4 md:col-span-4 col-span-2">
                        <TextField
                            label="Cardholder Name"
                            margin="normal"
                            variant="outlined"
                            required
                            name="cardHolderName"
                            value={formData.cardHolderName}
                            onChange={handleChange}
                            InputProps={{ style: { fontSize: 16, color: "black" } }} 
                            InputLabelProps={{ style: { fontSize: 16, color: "black" } }} 
                            sx={{
                                width: '100%',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'black', 
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'black', 
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'black'
                                    },
                                }
                            }} />
                    </div>
                    <br></br>
                    <div className="lg:col-span-4 md:col-span-4 col-span-2">
                        <TextField
                            label="Credit/Debit card Number"
                            margin="normal"
                            variant="outlined"
                            required
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            InputProps={{ style: { fontSize: 16, color: "black" } }} 
                            InputLabelProps={{ style: { fontSize: 16, color: "black" } }} 
                            sx={{
                                width: '100%',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'black', 
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'black', 
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'black'
                                    },
                                }
                            }} />
                    </div>
                    <div className="lg:col-span-4 md:col-span-4 col-span-2">
                    </div>
                    <div >
                        <FormControl margin="normal" sx={{width:'100%' ,color:'black'}}>
                            <InputLabel sx={{color:'black'}}>Month</InputLabel>
                            <Select
                                label="Month"
                                name="cardExpiryMonth"
                                value={formData.cardExpiryMonth}
                                onChange={handleChange}

                                defaultValue=""
                                
                            sx={{
                                width: '100%',
                                color:'black',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'black', 
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'black', 
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'black'
                                    },
                                    '& .MuiSelect-icon': {
                    color: 'black', // Change dropdown icon color to black
                },
                                }
                            }}
                            >
                                {Array.from({ length: 12 }, (_, i) => (
                                    <MenuItem key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <FormControl margin="normal" sx={{ width: '100%', maxWidth: '350px' }}>
                            <InputLabel>Year</InputLabel>
                            <Select
                                label="Year"
                                defaultValue=""
                                name="cardExpiryYear"
                                value={formData.cardExpiryYear}
                                onChange={handleChange}
                                sx={{
                                    width: '100%',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'black', // Change border color
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'black', // Change border color on hover
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'black', // Change border color when focused
                                        },
                                    }

                                }}
                            >
                                {Array.from({ length: 20 }, (_, i) => (
                                    <MenuItem key={i + new Date().getFullYear()} value={i + new Date().getFullYear()}>
                                        {i + new Date().getFullYear()}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="lg:col-span-2 md:col-span-2 ">
                        <TextField
                            label="CVV"
                            margin="normal"
                            variant="outlined"
                            name="cardCVV"
                            value={formData.cardCVV}
                            onChange={handleChange}
                            required
                            InputProps={{ style: { fontSize: 20, color: "black" } }} // Increase input text size
                            InputLabelProps={{ style: { fontSize: 20, color: "black" } }} // Increase label text size
                            sx={{
                                width: {
                                    xs: '100%', // 100% width on extra-small screens
                                    sm: '75%',  // 75% width on small screens
                                    md: '50%',  // 50% width on medium screens
                                    lg: '350px'
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'black', // Change border color
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
                    <div className="lg:col-span-4 md:col-span-4 col-span-2">
                    </div>
                    <div className="lg:col-span-2 md:col-span-2">
                        <FormControl margin="normal" sx={{ width: '100%' }}>
                            <InputLabel>Country</InputLabel>
                            <Select
                                label="Country"
                                defaultValue=""
                                name="cardCountry"
                                value={formData.cardCountry}
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
                    <div className="lg:col-span-2 md:col-span-2">

                        <TextField
                            label="Postal/Zip Code"
                            margin="normal"
                            variant="outlined"
                            name="cardZipCode"
                            value={formData.cardZipCode}
                            onChange={handleChange}
                            
                            required
                            InputProps={{ style: { fontSize: 20, color: "black" } }} // Increase input text size
                            InputLabelProps={{ style: { fontSize: 20, color: "black" } }} // Increase label text size
                            sx={{
                                width: {
                                    xs: '100%', // 100% width on extra-small screens
                                    sm: '75%',  // 75% width on small screens
                                    md: '50%',  // 50% width on medium screens
                                    lg: '350px'
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'black', // Change border color
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'black', // Change border color on hover
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'black', // Change border color when focused
                                    },
                                }
                            }}
                        />
                    </div>
                </div>
            </div>

            <div>
                <BookingSummary />
            </div>
            <div>
                <Pricing />
            </div>


        </main>
    )
}
export default Second;