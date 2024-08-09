import React from "react";
import confirm from "../animations/confirm.json";
import Lottie from "lottie-react";
import { Button } from "@mui/material";
const Confirmation = () => {
    return(
        
        <>
        <div className="text-center my-5">
        <h1 className="font-semibold">
            Your Booking has been confirmed!
        </h1>
        </div>
        <div className="confirm flex justify-center items-center">
            
            <Lottie animationData={confirm} style={{width: "400px"}} loop={false} />
            
        </div>
        <div className="flex justify-center">
            <Button
                variant="contained"
                size="large" style={{ width: "20%", height: "50px", color: "white", backgroundColor: "black" }}
            >
                Download Ticket
            </Button>
        </div>
        </>
    );
}
export default Confirmation;