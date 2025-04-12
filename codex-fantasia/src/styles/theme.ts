import { createTheme } from '@mui/material/styles';
import { pink, lightBlue } from '@mui/material/colors'; // Removed yellow

// Create a light, fun theme inspired by Kirby
const theme = createTheme({
  palette: {
    mode: 'light', // Switch to light mode
    primary: {
      // Use a playful pink for the primary color
      main: pink[400], 
      contrastText: '#fff', // White text on pink
    },
    secondary: {
      // Use a light blue for the secondary color
      main: lightBlue[300],
      contrastText: '#000', // Dark text on light blue
    },
    background: {
      // Slightly off-white background for softness
      default: '#fafafa', 
      paper: '#ffffff',
    },
    // Example of adding an accent color (optional)
    // accent: {
    //   main: yellow[500],
    // }
  },
  typography: {
    fontFamily: 'Roboto, "Helvetica", "Arial", sans-serif', // Keep standard font for now
    // You could customize fonts here later if desired
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  }
});

export default theme; 