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
        <>
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
        sx={{ textAlign: 'center' ,
            width: '450px', // Set the width
            height: '450px', // Set the height to the same value to make it a square
            maxWidth: '400px', // Ensure the dialog doesn't exceed this width
            maxHeight: '400px', // Ensure the dialog doesn't exceed this height
            margin: 'auto' // Center the dialog 
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" 
        sx={{ fontWeight: 'bold', textAlign: 'center' }}
        >{"Are You Sure ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"
          sx = {{ textAlign: 'center' , color: 'black' ,
            fontSize: '14px',}}
          >
          Please confirm that all your details are correct before proceeding to payment.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{justifyContent:"center"}}>
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
        </>
        
        
    )
};
export default NextButton;