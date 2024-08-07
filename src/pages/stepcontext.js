import react from 'react';
import { useState } from 'react';
import PaymentPage from './paymentpage';
export const multiStepContext = react.createContext();
const StepContext = () =>{
    const [currentStep, setCurrentStep] = useState(1);
    const [userData,setUserData] = useState([]);
    const [finalData,setFinalData] = useState([]);
    return (
        <multiStepContext.Provider value={{currentStep, setCurrentStep, userData, setUserData, finalData, setFinalData }}>
            <PaymentPage /> 
        </multiStepContext.Provider>
    )
}

export default StepContext;