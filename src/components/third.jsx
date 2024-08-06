import React from "react";
import confirm from "../animations/confirm.json";
import Lottie from "lottie-react";

const Confirmation = () => {
    return(
        
        <>
        <div className="text-center my-5">
        <h1>
                Your Booking has been confirmed!
            </h1>
        </div>
        <div className="confirm flex justify-center items-center">
            
            <Lottie animationData={confirm} style={{width: "500px"}} />
            
        </div>
        </>
    );
}
export default Confirmation;