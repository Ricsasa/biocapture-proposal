import React from 'react';
import StepWizard from 'react-step-wizard';

import ConsultantInfo from './components/ConsultantInfo';
import AcademicInfo from './components/AcademicInfo';
import Summary from './components/Summary';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <main>
        <StepWizard
          isHashEnabled
        >
          <ConsultantInfo hashKey={'ConsultantInfo'} />
          <AcademicInfo hashKey={'AcademicInfo'} />
          <Summary hashKey={'Summary'} />
        </StepWizard>
      </main>
    </div>
  );
}

export default App;
