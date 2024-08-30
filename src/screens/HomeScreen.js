import React from 'react';
import homeStyles from './HomeStyles'; 

function HomeScreen() {
  return (
    <div style={homeStyles.container}>
      <h1>Välkommen till Josefines Wellness</h1>
      <p>
        Här hittar du ett brett utbud av behandlingar inom friskvård och skönhet, tillsammans med våra unika kompressionskläder som kombinerar funktionalitet och stil. Utforska våra tjänster och hitta det som passar just dig.
      </p>
    </div>
  );
}

export default HomeScreen;
