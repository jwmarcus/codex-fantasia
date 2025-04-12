import { createTheme } from '@mui/material/styles';
// Remove unused color imports if any
// import { pink, lightBlue } from '@mui/material/colors';

// Create a theme with a nostalgic JRPG-inspired palette
const theme = createTheme({
  palette: {
    mode: 'light', // Start with light mode
    primary: {
      // A dependable, slightly muted blue (like Indigo 500)
      main: '#3f51b5',
      contrastText: '#ffffff',
    },
    secondary: {
      // A warm gold/amber for accents (like Amber 700)
      main: '#ffa000',
      contrastText: 'rgba(0, 0, 0, 0.87)', // Dark text on gold
    },
    background: {
      // Subtle off-white/parchment background
      default: '#fff8e1', // Light Cornsilk
      paper: '#ffffff', // White for raised elements like cards
    },
    text: {
      // Standard text colors for readability
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    // We can add more specific colors later (e.g., error, warning, success)
  },
  typography: {
    // Define the main body font
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    // Define the heading font
    h1: { fontFamily: '"Silkscreen", "Courier New", monospace', fontWeight: 400 }, // Silkscreen only has weight 400
    h2: { fontFamily: '"Silkscreen", "Courier New", monospace', fontWeight: 400 },
    h3: { fontFamily: '"Silkscreen", "Courier New", monospace', fontWeight: 400 },
    h4: { fontFamily: '"Silkscreen", "Courier New", monospace', fontWeight: 400 },
    h5: { fontFamily: '"Silkscreen", "Courier New", monospace', fontWeight: 400 },
    h6: { fontFamily: '"Silkscreen", "Courier New", monospace', fontWeight: 400 },
    // We can adjust other variants like button, caption etc. if needed
    // Example: Ensure buttons use the main font
    button: {
      fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: 600, // Buttons are often bolder
      textTransform: 'none', // Optional: Keep button text case as typed
    }
  }
});

export default theme; 