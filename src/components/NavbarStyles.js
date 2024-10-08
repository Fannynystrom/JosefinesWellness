

const navbarStyles = {
  container: {
    width: '100%', 
    display: 'flex',
    justifyContent: 'center', 
  },
    nav: {
      maxWidth: '1000px', 
        backgroundColor: '#fff', 
        padding: '0.5rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 2px 0px rgba(0,0,0,0.1)',
        position: 'sticky', 
        top: 0,
        zIndex: 1000,
      },
    ul: {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
    },
    li: {
      marginRight: '80px',
    },
    link: {
      color: 'black',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'color 0.3s ease', 

    },
    linkHover: {
        color: '#007BFF', 
      },

    
  };
  
  export default navbarStyles;
  