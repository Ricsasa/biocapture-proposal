import React from 'react';
import DummySummary from './DummySummary';

const Summary = (props) => {
  const {goToStep} = props;
  return (
    <>
      <h1>Summary</h1>
      <h4>Consultant Info<span><a onClick={() => {goToStep(1)}}>Edit</a></span></h4>
      <DummySummary
        section="Consultant Info"
      />
      <h4>Academic Info<span><a onClick={() => {goToStep(2)}}>Edit</a></span></h4>
      <DummySummary
        section="Academic Info"
      />
    </>
  );
}

export default Summary;