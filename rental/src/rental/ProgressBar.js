import React, { useState } from 'react';
import "./ProgressBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

const ProgressBar = () => {
    const list = [
        <Example1 />,
        <Example2 />,
        <Example3 />,
        <Example4 />,
        <Example5 />
      ];
        const [currentStep, setCurrentStep] = useState(0);
        const stepsCount = list.length;
        const steps = [];

        const map = new Map();
        map.set(1,'Truck');
        map.set(2,'Source');
        map.set(3,'Destination');
        map.set(4,'AddOns');
        map.set(5,'Registration');
        const icons = {
            "home": "fa-home",
            "user": "fa-user",
            "settings": "fa-settings"
          };
      
        for (let i = 0; i < stepsCount; i++) {
          steps.push(
            <div 
              onClick={() => setCurrentStep(i)}
              className={`steps ${currentStep >= i ? "active text" : ""}`}
              key={i}
            >
           {/* <div className='key'>{i+1} </div>  */}
           
           <div className='value'>{map.get(i+1)} </div> 
            </div>
          );
        }
       

      
        const progressLineWidth = (100 / (list.length +2.1)) * currentStep;
      
        const onPrev = () => {
          if (currentStep !== 0) {
            setCurrentStep(currentStep - 1);
          }
        };
      
        const onNext = () => {
          if (currentStep !== list.length - 1) {
            setCurrentStep(currentStep + 1);
          }
        };
      
         
       
  return (

    <>
     <section className="stepper">
            <div className="steps-container">
              <div className="steps-wrapper" >
                {steps}
              </div>
              <div
                className="progress-line"
                style={{ width: `${progressLineWidth}%` }}
              ></div>
            </div>
            <div>
                {React.cloneElement(list[currentStep], { onPrev, onNext })}</div>
          </section></>
  );
};

const Example1 = ({ onPrev, onNext }) => {
    return (
      <>
        {/* <h1>Hello 1</h1>
        <div>
          <button onClick={onPrev}>Prev</button>
          <button onClick={onNext}>Next</button>
        </div> */}
      </>
    );
  };

  const Example2 = ({ onPrev, onNext }) => {
    return (
      <>
        {/* <h1>Hello 1</h1>
        <div>
          <button onClick={onPrev}>Prev</button>
          <button onClick={onNext}>Next</button>
        </div> */}
      </>
    );
  };
  const Example3 = ({ onPrev, onNext }) => {
    return (
      <>
        {/* <h1>Hello 1</h1>
        <div>
          <button onClick={onPrev}>Prev</button>
          <button onClick={onNext}>Next</button>
        </div> */}
      </>
    );
  };const Example4 = ({ onPrev, onNext }) => {
    return (
      <>
        {/* <h1>Hello 1</h1>
        <div>
          <button onClick={onPrev}>Prev</button>
          <button onClick={onNext}>Next</button>
        </div> */}
      </>
    );
  };const Example5 = ({ onPrev, onNext }) => {
    return (
      <>
        {/* <h1>Hello 1</h1>
        <div>
          <button onClick={onPrev}>Prev</button>
          <button onClick={onNext}>Next</button>
        </div> */}
      </>
    );
  };

export default ProgressBar;

