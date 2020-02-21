import React from 'react';
import DummyForm from './dummyForm';

const AcademicInfo = (props) => {

  const { previousStep, nextStep } = props;

  return (
    <>
      <h1>Academic Info</h1>
      <DummyForm />
      <p className="button-section">
        <button onClick={previousStep}>Previous Step</button>
        <button onClick={nextStep}>Final Step</button>
      </p>
    </>
  );
};

export default AcademicInfo;
