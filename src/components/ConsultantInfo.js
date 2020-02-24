import React from 'react';
import DummyForm from './DummyForm';

const ConsultantInfo = (props) => {

  const { nextStep } = props;

  return (
    <>
      <h1>Consultant Info</h1>
      <DummyForm 
        section={"Consultant Info"}
      />
      <p className="button-section">
        <button onClick={nextStep}>Next Step</button>
      </p>
    </>
  );
};

export default ConsultantInfo;

