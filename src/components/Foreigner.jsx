import React from "react";
import { TextField } from "@mui/material";

const Foreigner = ({formData,setFormData}) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Changing ${name} to ${value}`); 
        setFormData({
            ...formData,
            [name]: value
        });
    };
    return(
        <div className="contactinfo box col-span-3 rounded-xl mt-5 border p-3 border-black">

                <p className="my-5">
                    Lead Traveller
                </p>
                <div className="flex gap-5">
                    <div className="grow">
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
                    <div className="grow">
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
    );
};
export default Foreigner;