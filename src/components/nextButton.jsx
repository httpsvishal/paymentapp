import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useState } from "react";

const NextButton = ({ currentStep, setCurrentStep }) => {
    const [open, setOpen] = useState(false);
    const handleNext = () => {
        if (currentStep === 1) {
            setOpen(true);
        }
        else {
            setCurrentStep((prevStep) => prevStep + 1);
        }
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleConfirm = () => {
        setCurrentStep((prevStep) => prevStep + 1);
        setOpen(false);
    };
    return (
        <div className="ms-7">
        <Button
           
            variant="contained"
            size="large" style={{ width: "20%", height: "50px", color: "white", backgroundColor: "black" }}
            onClick={handleNext}
            disabled={currentStep === 3}
        >
            {currentStep === 3 ? 'Download Ticket' : 'Next'}
        </Button>
        <Dialog
        open={open}
        onClose={handleClose}
        className="p-5"
        sx={{ textAlign: 'center' ,
            width: '450px', // Set the width
            height: '2000px', 
            margin: 'auto' // Center the dialog 
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" 
        sx={{ fontWeight: 'bold', textAlign: 'center',marginTop: '10px', marginBottom :'4px',paddingBottom:"4px", color: 'black' }}
        className="text-l font-bold"
        >{"Ready to Go?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"
          sx = {{ textAlign: 'center' , color: 'black' , paddingTop:"0px",
            fontSize: '12px',}}
          >
          Just a quick double-check! Make sure all your details are spot-on before we hit the payment button.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{justifyContent:"center" }} className="mb-5">
          <Button onClick={handleClose} 
          sx={{ color: 'black',
              border: '1px solid black',
              textTransform: 'none',
              width: '35%'
           }}
          >
            Back
          </Button>
          <Button onClick={handleConfirm} 
            sx={{ color: 'white',
                backgroundColor: 'black',
                border: '1px solid black',
                textTransform: 'none',
                width: '35%'
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
        </div>
        
        
    )
};
export default NextButton;