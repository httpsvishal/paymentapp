import React from "react";
import First from "../components/first";
import Second from "../components/second";
import Confirmation from "../components/third";
import { Stepper,Step,StepLabel } from "@mui/material";
import { useState} from "react";
import { Button } from "@mui/material";
const PaymentPage = ()=>{

    // const[currentStep, finalData] = useContext(multiStepContext)
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
    const showStep = (step) =>{
        switch(step){
            case 1:
                return <First formData ={formData} setFormData={setFormData}  />;
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
    return(
        <>
        <div className="flex justify-center items-center m-5">
            <Stepper style={{width: "50%", color:"black"}} activeStep={currentStep - 1} orientation="horizontal">
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
        <div className="mx-5 px-2">
        <div className="flex gap-5 mx-5">
                <Button disabled={currentStep === 1} onClick={handleBack} size="large" style={{ width: "15%", height: "50px" ,color:"white",backgroundColor:"black" }}>
                    Back
                </Button>
                <Button
                    variant="contained"
                    size="large" style={{ width: "15%", height: "50px" ,color:"white",backgroundColor:"black" }}
                    onClick={handleNext}
                    disabled={currentStep === 3}
                >
                    {currentStep === 3 ? 'Finish' : 'Next'}
                </Button>
            </div>
        </div>
        </>
    )
}

export default PaymentPage;