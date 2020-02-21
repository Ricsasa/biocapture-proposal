import React from 'react';
import DummyForm from './dummyForm';

const ConsultantInfo = (props) => {

  const { nextStep } = props;

  return (
    <>
      <h1>Consultant Info</h1>
      <DummyForm />
      <p className="button-section">
        <button onClick={nextStep}>Next Step</button>
      </p>
    </>
  );
};

export default ConsultantInfo;

