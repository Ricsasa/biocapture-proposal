import React from 'react';

const Summary = (props) => {
  const {goToStep} = props;
  return (
    <>
      <h1>Summary</h1>
      <h4>Consultant Info</h4><a onClick={() => {goToStep(1)}}>Edit</a>
      <h4>Academic Info</h4><a onClick={() => {goToStep(1)}}>Edit</a>
    </>
  );
}

export default Summary;