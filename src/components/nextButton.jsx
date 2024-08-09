import React from "react";
import { Button } from "@mui/material";
const NextButton = ({currentStep, setCurrentStep}) => {
    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };
    return (
        <Button
                        variant="contained"
                        size="large" style={{ width: "20%", height: "50px", color: "white", backgroundColor: "black" }}
                        onClick={handleNext}
                        disabled={currentStep === 3}
                    >
                        {currentStep === 3 ? 'Download Ticket' : 'Next'}
                    </Button>
    )
};
export default NextButton;