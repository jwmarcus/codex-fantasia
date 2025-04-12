import { Button, ButtonProps, PaletteColor } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

// Define custom props if needed, e.g., for color variants beyond MUI's standard
// interface PixelButtonProps extends ButtonProps {
//   pixelColor?: 'primary' | 'secondary' | 'customColor';
// }

// Helper function to safely get palette color or fallback
const getPaletteColor = (palette: any, color: ButtonProps['color']): Partial<PaletteColor> | null => {
    if (!color || color === 'inherit') {
        return null; // Handle inherit or undefined later
    }
    return palette[color] as Partial<PaletteColor> | null;
};

const PixelButtonRoot = styled(Button)<ButtonProps>(({ theme, color = 'primary' }) => {
    const paletteColor = getPaletteColor(theme.palette, color);

    // Define base colors, handling inherit/undefined cases
    const mainColor = paletteColor?.main || theme.palette.primary.main; // Default to primary main
    const contrastColor = paletteColor?.contrastText || theme.palette.primary.contrastText;
    const lightColor = paletteColor?.light || alpha(mainColor, 0.8); // Fallback for light
    const darkColor = paletteColor?.dark || alpha(mainColor, 1.2); // Fallback for dark
    const shadowColor = paletteColor?.dark || theme.palette.grey[800]; // Shadow color

    return {
        // Use the heading font (Silkscreen) for the pixel button text
        fontFamily: theme.typography.h1.fontFamily,
        border: 'none', // Remove default border
        padding: theme.spacing(1, 2), // Adjust padding as needed
        position: 'relative',
        // Create a pixelated border effect using box-shadow
        // A solid outer shadow and a slightly inset shadow of the background color
        boxShadow: `
    2px 0 0 0 ${shadowColor}, 
    0 2px 0 0 ${shadowColor}, 
    2px 2px 0 0 ${shadowColor}, 
    2px 0 0 0 ${shadowColor} inset, 
    0 2px 0 0 ${shadowColor} inset
  `,
        backgroundColor: mainColor,
        color: contrastColor,
        transition: 'transform 0.1s ease-out, box-shadow 0.1s ease-out, background-color 0.1s ease-out',
        '&:hover': {
            backgroundColor: lightColor,
            color: paletteColor ? theme.palette.getContrastText(lightColor) : contrastColor, // Recalculate contrast if possible
            // Keep shadow consistent on hover for simplicity, or adjust as needed
            // transform: 'translateY(-1px)',
        },
        '&:active': {
            // Simulate button press
            transform: 'translateY(1px)',
            boxShadow: ` // Flatten shadow on press
      1px 0 0 0 ${shadowColor}, 
      0 1px 0 0 ${shadowColor}, 
      1px 1px 0 0 ${shadowColor}, 
      1px 0 0 0 ${shadowColor} inset, 
      0 1px 0 0 ${shadowColor} inset
    `,
            backgroundColor: darkColor,
            color: paletteColor ? theme.palette.getContrastText(darkColor) : contrastColor, // Recalculate contrast if possible
        },
        // Handle disabled state
        '&.Mui-disabled': {
            backgroundColor: theme.palette.action.disabledBackground,
            color: theme.palette.action.disabled,
            boxShadow: `
        2px 0 0 0 ${theme.palette.action.disabled}, 
        0 2px 0 0 ${theme.palette.action.disabled}, 
        2px 2px 0 0 ${theme.palette.action.disabled}, 
        2px 0 0 0 ${theme.palette.action.disabled} inset, 
        0 2px 0 0 ${theme.palette.action.disabled} inset
      `,
        },
    };
});

// The actual component just renders the styled root
const PixelButton: React.FC<ButtonProps> = (props) => {
    return <PixelButtonRoot {...props} />;
};

export default PixelButton; 