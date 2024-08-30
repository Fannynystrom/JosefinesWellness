import React from 'react';
import treatmentStyles from './TreatmentStyles'; 


function TreatmentsScreen() {
  return (
    <div style={treatmentStyles.container}>
      <h1>Våra Behandlingar</h1>
      <p>
        På Josefines Wellness erbjuder vi en rad olika behandlingar som är utformade för att förbättra ditt välbefinnande och hälsa. Våra behandlingar inkluderar massage, ansiktsbehandlingar, och andra specialiserade tjänster som är anpassade för att möta dina specifika behov.
      </p>
    </div>
  );
}

export default TreatmentsScreen;