import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

// Extend BoxProps if we need custom props later
interface PixelBorderBoxProps extends BoxProps {
    borderColor?: string; // Allow customizing border color via prop
    borderWidth?: number; // Allow customizing border width
}

const PixelBorderBoxRoot = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'borderColor' && prop !== 'borderWidth',
})<PixelBorderBoxProps>(({ theme, borderColor, borderWidth = 4 }) => {
    // Use a theme color or fallback if borderColor prop is provided
    const color = borderColor || theme.palette.secondary.main; // Default to secondary color
    const pixelSize = 1; // Size of the 'pixel' in the border pattern
    const borderPixelWidth = borderWidth / pixelSize; // Border width in 'pixels'

    // Create a simple repeating gradient for a pixel effect
    // This creates alternating squares of the border color and transparency
    const gradient = `repeating-linear-gradient(45deg, 
    ${color}, 
    ${color} ${pixelSize}px, 
    transparent ${pixelSize}px, 
    transparent ${pixelSize * 2}px
  )`;

    return {
        borderStyle: 'solid',
        borderWidth: `${borderWidth}px`,
        // borderImageSource defines the image/gradient used for the border
        borderImageSource: gradient,
        // borderImageSlice defines how to slice the source image. 
        // The value corresponds to the borderWidth in pixels for a sharp fill.
        borderImageSlice: borderPixelWidth,
        // borderImageRepeat ensures the pattern repeats rather than stretching
        borderImageRepeat: 'repeat',
        // Ensure background color doesn't overlap the border image area
        backgroundClip: 'padding-box',
        // You might need vendor prefixes for border-image depending on browser support targets
        // WebkitBorderImageSource: gradient,
        // WebkitBorderImageSlice: borderPixelWidth,
        // WebkitBorderImageRepeat: 'repeat',
        // MozBorderImageSource: gradient,
        // MozBorderImageSlice: borderPixelWidth,
        // MozBorderImageRepeat: 'repeat',
    };
});

const PixelBorderBox: React.FC<PixelBorderBoxProps> = (props) => {
    // Separate custom props from standard BoxProps
    const { borderColor, borderWidth, ...rest } = props;
    return <PixelBorderBoxRoot borderColor={borderColor} borderWidth={borderWidth} {...rest} />;
};

export default PixelBorderBox; 