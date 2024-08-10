import React from "react";
import First from "../components/first";
import Second from "../components/second";
import Confirmation from "../components/third";
import { useState } from "react";
import ShowDetails from "../components/ShowDetails";
const PaymentPage = () => {

    // const[currentStep, finalData] = useContext(multiStepContext)
    const [currentStep, setCurrentStep] = useState(1);
    const [showDetails, setShowDetails] = useState(false);
    
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: 'India',
        phonecode: "+91",
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
            <div className= "showdetail m-5 flex justify-between">
                <div className="ms-5">
                <p>Show more Details 
                    <span><button
                className="mt-2"
                onClick={() => setShowDetails(!showDetails)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 ms-3 w-6 transform transition-transform ${showDetails ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
                </svg>
            </button></span></p>

                </div>
                <div>
                    <p className="text-green-950 mt-2 font-semibold">$12000</p>
                </div>
            </div>
            {showDetails && <ShowDetails />}
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