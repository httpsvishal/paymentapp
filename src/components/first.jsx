import React from "react";
import { Button, TextField } from "@mui/material";
import BookingSummary from "./bookingsumm";
import Pricing from "./pricing";
const First = ({ formData, setFormData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    return (
        <main className="max-w-[1200px] mx-auto grid lg:grid-cols-4 md:grid-cols-4 gap-5 p-3 m-3">
            <div className="contactinfo box col-span-3 rounded border p-3 border-black">
                <h2 className="text-xl font-semibold ">Contact Details</h2>
                <p className="my-5">
                    This information will be used to send you confirmation and update about your booking
                </p>
                <div className="flex gap-5">
                    <div>
                        <div>
                            <TextField
                                label="First Name"
                                margin="normal"
                                variant="outlined"
                                required
                                name="custFirstName"
                                value={formData.custFirstName}
                                onChange={handleChange}
                                InputProps={{ style: { fontSize: 16, color: "black" } }} // Increase input text size
                                InputLabelProps={{ style: { fontSize: 16, color: "black" } }} // Increase label text size
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
                    </div>
                    <div>
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
                                            borderColor: 'black',
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
                            <TextField
                                label="Country/region of residence"
                                margin="normal"
                                variant="outlined"
                                required
                                name="custCountry"
                                value={formData.custCountry}
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
                                            borderColor: 'black',
                                        },
                                    }
                                }} />
                        </div>
                    </div>
                </div>
            </div>
            <BookingSummary />
            <div className="contactinfo box col-span-3 rounded border p-3 border-black">

                <p className="my-5">
                    Lead Traveller
                </p>
                <div className="flex gap-5">
                    <div>
                        <div>
                            <TextField
                                label="First Name"
                                margin="normal"
                                variant="outlined"
                                required
                                name="travFirstName"
                                value={formData.travFirstName}
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
                                            borderColor: 'black',
                                        },
                                    }
                                }} />
                        </div>
                        <div>
                            <TextField
                                label="Passport Number"
                                margin="normal"
                                variant="outlined"
                                required
                                name="passportNumber"
                                value={formData.passportNumber}
                                onChange={handleChange}
                                InputProps={{ style: { fontSize: 16, color: "black" } }} 
                                InputLabelProps={{ style: { fontSize: 16, color: "black" } }}
                                sx={{
                                    width: '100$',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'black', 
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
                        <div>
                            <TextField
                                label="Expiration Date"
                                margin="normal"
                                variant="outlined"
                                required
                                name="passportExpiry"
                                value={formData.passportExpiry}
                                onChange={handleChange}
                                InputProps={{ style: { fontSize: 16, color: "black" } }} 
                                InputLabelProps={{ style: { fontSize:16, color: "black" } }} 
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
                                            borderColor: 'black', 
                                        },
                                    }
                                }} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <TextField
                                label="Last Name"
                                margin="normal"
                                variant="outlined"
                                required
                                name="travLastName"
                                value={formData.travLastName}
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
                                            borderColor: 'black', 
                                        },
                                    }
                                }} />
                        </div>
                        <div>
                            <TextField
                                label="Passport Nationality"
                                margin="normal"
                                variant="outlined"
                                required
                                name="passportNationality"
                                value={formData.passportNationality}
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
                                            borderColor: 'black', 
                                        },
                                    }
                                }} />
                        </div>
                    </div>
                </div>
            </div>
            <Pricing />

        </main>
    );
};

export default First; // Ensure correct export