import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleClose() {
    setIsOpen((isOpen) => !isOpen);
  }

  function handlePrevious() {
    if (step === 1) return;
    setStep((step) => step - 1);
  }

  function handleNext() {
    if (step === 3) return;
    setStep((step) => step + 1);
  }

  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                backgroundColor="#7950F2"
                color="#fff"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>
          <div className="buttons">
            <Button
              backgroundColor="#7950F2"
              color="#fff"
              onClick={handlePrevious}
            >
              👈 Previous
            </Button>
            <Button backgroundColor="#7950F2" color="#fff" onClick={handleNext}>
              Next 👉
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ backgroundColor, color, onClick, children }) {
  return (
    <button style={{ backgroundColor, color }} onClick={onClick}>
      {children}
    </button>
  );
}

export default App;
