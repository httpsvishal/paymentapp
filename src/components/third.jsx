import React from "react";
import confirm from "../animations/confirm.json";
import Lottie from "lottie-react";
import { Button } from "@mui/material";
const Confirmation = () => {
    return(
        
        <>
        <div className="text-center mt-5">
        <h1 className="font-semibold text-2xl mt-11 mb-6">
        Check your Email!
        </h1>
        <div className="confirmp flex justify-center">
        <p>
        Your booking details and tickets have been sent to your email. Please check your inbox for confirmation and instructions.
        </p>
        </div>
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