import React from "react";
import First from "../components/first";
import Second from "../components/second";
import Confirmation from "../components/third";
import { Stepper, Step, StepLabel, Typography } from "@mui/material";
import { useState } from "react";
import { Button } from "@mui/material";
const PaymentPage = () => {

    // const[currentStep, finalData] = useContext(multiStepContext)
    const showStep = (step) => {
        switch (step) {
            case 1:
                return <First formData={formData} setFormData={setFormData} />;
            case 2:
                return <Second formData={formData} setFormData={setFormData} />;
            case 3:
                return <Confirmation />;
            default:
                return null;
        }
    }
    const handleNext = () => {
        console.log(formData);
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        custFirstName: '',
        custLastName: '',
        email: '',
        custCountry: '',
        phNumber: '',
        travFirstName: '',
        travLastName: '',
        passportNumber: '',
        passportNationality: '',
        passortExpiry: '',
        cardHolderName: '',
        cardNumber: '',
        cardExpiryMonth: '',
        cardExpiryYear: '',
        cardCVV: '',
        cardZipCode: '',
        cardCountry: ''
    });

return (
    <>
        <div className="flex justify-center items-center m-5">
            <Stepper style={{ width: "50%", color: "black" }} activeStep={currentStep - 1} alternativeLabel orientation="horizontal">
                <Step style={{color:"black"}}>
                    <StepLabel StepIconProps={{ style: { color: 'black' } }}>Customer Information</StepLabel>
                </Step>
                <Step>
                    <StepLabel StepIconProps={{ style: { color: 'black' } }}>Payment Information</StepLabel>
                </Step>
                <Step>
                    <StepLabel StepIconProps={{ style: { color: 'black' } }}>Booking is Confirmed</StepLabel>
                </Step>
                
                
            </Stepper>
        </div>
        <hr />
        {showStep(currentStep)}
        <div className="max-w-[1250px] mx-auto text-base gap-5 p-3 m-3">
            <div className={`flex gap-5  ${currentStep === 3 ? 'justify-center' : ''}`}>
                {currentStep !== 4 && (
                    <Button disabled={currentStep === 1} onClick={handleBack} size="large" style={{ width: "20%", height: "50px", color: "black", backgroundColor: "white" , border: "1px solid black" }}>
                    Back
                </Button>
                )}
                <Button
                    variant="contained"
                    size="large" style={{ width: "20%", height: "50px", color: "white", backgroundColor: "black" }}
                    onClick={handleNext}
                    disabled={currentStep === 3}
                >
                    {currentStep === 3 ? 'Download Ticket' : 'Next'}
                </Button>
            </div>
        </div>
    </>
);
};

export default PaymentPage;