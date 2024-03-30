import React, { useState , useEffect} from 'react';
import { Box, Stack, Button, Step, StepLabel, Stepper, Typography, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles'; // Import createTheme from Material-UI

const theme = createTheme(); // Create a Material-UI theme

const MuiStepper = ({isPositionFixed, astepper}) => {
// console.log(isPositionFixed)
// console.log("mui",astepper)
    const style1 = {
        marginTop:"71px",
        position:"fixed",
        width:"100%", 
        top:"0",
        padding:"0px",
        zIndex:"10",
        height:"80px", 
        background:"#e9e9ec",
        paddingBottom:"100px"
    };
    
    const style2 = {
        // marginTop:"71px",
        width:"100%", 
        padding:"1px",
        zIndex:"10",
        height:"80px", 
        background:"#e9e9ec",
        paddingBottom:"110px"
    };
    const positionStyle = isPositionFixed ? style1  : style2;

    const [activestep, setActiveStep] = useState(0);

    useEffect(() => {
        // document.body.style.overflowY = "hidden";
        setActiveStep(astepper)
        console.log("a1",astepper)
    //    if(astepper!=-1)
       handleNext();
        
      }, [astepper]);


      
    const [skipActivity, setSkipActivity] = useState(new Set());

    const handleSkip = () => {
        if (activestep < 4) setActiveStep((prevStep) => prevStep + 1);
        setSkipActivity((prevSkip) => {
            const newSkipSet = new Set(prevSkip.values());
            newSkipSet.add(activestep);
            return newSkipSet;
        });
    };

    const handleNext = () => {
        if (activestep < 5) setActiveStep((prevStep) => prevStep + 1);
    };

    const handlePrevious = () => {
        if (activestep > 1) setActiveStep((prevStep) => prevStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        setSkipActivity(new Set());
    };

    const activities = [
        "Select Vehicle",
        "Select Location",
        "Reviews/Add-ons",
        "Your Information"
    ];


    return (
        <div className='allstepper' style={positionStyle}>
        <ThemeProvider theme={theme}> 
            <Box >
                <Box mx={0} mt={2}>
                    <Stepper activeStep={activestep} alternativeLabel>
                        {activities.map((step, index) => {
                            const stepProps = {};
                            const labelProp = {};
                            if (skipActivity.has(index)) {
                                stepProps.completed = false;
                                labelProp.optional = (
                                    <Typography variant="caption" color='error'>Optional</Typography>
                                );
                            }
                            return (
                                <Step key={index} {...stepProps}>
                                    <StepLabel {...labelProp}>{step}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                </Box>

                <Box mx={3} mt={2}
                    sx={{
                        marginTop: "50px",
                        marginLeft: "160px"
                    }}
                    align='center'>
                    {/* <Stack spacing={3} direction='row' maxWidth={500}>
                        <Button variant='contained' color="secondary" onClick={handlePrevious}>
                            {activestep < 2 ? "First" : "Previous"}
                        </Button>

                        <Button variant='contained' color="secondary" onClick={handleNext}>{activestep > 3 ? "Last" : "Next"}</Button>

                        <Button variant='contained' color="secondary" onClick={handleSkip}>Skip</Button>

                        <Button variant='contained' color="secondary" onClick={handleReset}>Reset</Button>
                    </Stack> */}
                </Box>
            </Box>
        </ThemeProvider>
        </div>
    );
}

export default MuiStepper;
