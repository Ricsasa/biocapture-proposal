import React from 'react';

const DummyForm = ({ section }) => {
  return (
    <form>
      <p>
        <label>{section} Field A</label>
        <input type="text"></input>
      </p>
      <p>
        <label>{section} Field B</label>
        <input type="text"></input>
      </p>
      <p>
        <label>{section} Field C</label>
        <input type="text"></input>
      </p>
      <p>
        <label>{section} Field D</label>
        <input type="text"></input>
      </p>

    </form>
  );
}

export default DummyForm;