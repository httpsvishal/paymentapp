import React from "react";
import First from "../components/first";
import Second from "../components/second";
import Confirmation from "../components/third";
import { useState } from "react";

const PaymentPage = () => {

    // const[currentStep, finalData] = useContext(multiStepContext)
    const [currentStep, setCurrentStep] = useState(1);
    
    
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        phonecode: '',
        phNumber: '',
        idNumber: '',
        passportNumber: '',
        passportNationality: '',
        passortExpiry: '',
        cardHolderName: '',
        cardNumber: '',
        cardExpiryMonth: '',
        cardExpiryYear: '',
        cardCVV: '',
        cardZipCode: '',
    });
    const showStep = (step) => {
        switch (step) {
            case 1:
                return <First formData={formData} setFormData={setFormData} currentStep={currentStep} setCurrentStep ={setCurrentStep}  />;
            case 2:
                return <Second formData={formData} setFormData={setFormData} currentStep={currentStep} setCurrentStep ={setCurrentStep} />;
            case 3:
                return <Confirmation formData={formData} setFormData={setFormData}  currentStep={currentStep} setCurrentStep ={setCurrentStep} />;
            default:
                return null;
        }
    }
    return (
        <>
            {/* <div className="flex justify-center items-center m-5">
                <ul className="steps text-sm custom-steps"
                >
                    <li className={`step ${currentStep >= 1 ? 'step-neutral' : ''}`}>Payment Information</li>
                    <li className={`step ${currentStep >= 2 ? 'step-neutral' : ''}`}>Customer Information</li>
                    <li className={`step ${currentStep >= 3 ? 'step-neutral' : ''}`}>Booking is Confirmed</li>
                </ul>
            </div>
            <hr /> */}
            {showStep(currentStep)}
            
        </>
    );
};

export default PaymentPage;