import React from 'react';

function About() {
  const aboutStyles = {
    container: {
      maxWidth: '800px', 
      margin: '0 auto',  
      padding: '20px',  
      lineHeight: '1.6', 
      fontSize: '16px',  
      color: '#333',    
    },
    heading: {
      color: '#333',
      textAlign: 'center',
      marginBottom: '20px',
    },
    paragraph: {
      marginBottom: '20px',
    },
  };

  return (
    <div style={aboutStyles.container}>
      <h1 style={aboutStyles.heading}>Om Mig</h1>
      <p style={aboutStyles.paragraph}>
        Josefines Wellness grundades av Josefine Rosén den 1 december 2011 och erbjuder ett brett utbud av behandlingar inom friskvård och skönhet. Genom åren har jag, Josefine, utvecklat mitt företag och utökat tjänsteutbudet genom kontinuerlig utbildning och fortbildning. För närvarande studerar jag till sjuksköterska, vilket ger mig ytterligare insikt och kompetens inom hälso- och sjukvården.
        <br />
        <br />
        År 2008 när jag var 17 år började jag uppleva smärta och svullnad i kroppen. Efter många år av läkarbesök fick jag år 2022 diagnosen lipödem, en sjukdom som orsakar kraftig svullnad och smärta i delar av kroppen. Lipödem är en sjukdom som jag brinner för att uppmärksamma och hjälpa andra att hantera.
        <br />
        <br />
        Efter att ha provat nästan allt som fanns på marknaden upptäckte jag att kompressionsstrumpor, eller som de ofta kallas, "stödstumpor," gav viss lindring. Men jag undrade om det inte kunde finnas fler klädesplagg som gav samma stöd och hjälp. Det var så jag kom i kontakt med Solidea och deras kompressionskläder. Dessa plagg har inte bara hjälpt mig, utan de har också blivit en viktig del av det jag erbjuder på Josefines Wellness.
        <br />
        <br />
        Kompressionskläder är inte bara till för dem som har lipödem. De är utformade för att förbättra blodcirkulationen, minska svullnad och lindra trötthet i musklerna. De kan vara fördelaktiga för alla som står eller sitter mycket under dagen, idrottare som vill förbättra sin prestation och återhämtning, eller för dem som vill förebygga åderbråck och blodproppar. Genom att ge ett jämnt tryck över kroppen hjälper kompressionskläder till att stötta blodflödet, vilket kan minska risken för svullnad och förbättra allmän välbefinnande.
        <br />
        <br />
        På Josefines Wellness är vårt mål att erbjuda produkter och behandlingar som förbättrar din livskvalitet och hjälper dig att må bättre i din vardag. Oavsett om du har en specifik diagnos eller bara vill ta hand om din kropp på bästa sätt, kan kompressionskläder vara ett värdefullt verktyg för att stödja din hälsa och ditt välmående.
      </p>
    </div>
  );
}

export default About;
