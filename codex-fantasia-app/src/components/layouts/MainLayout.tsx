import { Box, Container } from '@mui/material';
import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import NavBar from '../navigation/NavBar';

interface MainLayoutProps {
    children: ReactNode;
}

// 90s Digital/Matrix style transition
const digitalGlitch = {
  hidden: {
    opacity: 0,
    filter: 'blur(8px) brightness(1.5)',
    y: 10,
    scale: 0.99,
    textShadow: '0 0 8px rgba(0, 255, 0, 0.5)'
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px) brightness(1)',
    y: 0,
    scale: 1,
    textShadow: '0 0 0px rgba(0, 255, 0, 0)',
    transition: {
      duration: 0.8,
      ease: [0.2, 0.8, 0.2, 1],
      when: 'beforeChildren',
    }
  },
  exit: {
    opacity: 0,
    filter: 'blur(10px) brightness(0.8)',
    y: -10,
    scale: 0.99,
    textShadow: '0 0 15px rgba(0, 255, 0, 0.7)',
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Digital rain effect for the background during transitions
const DigitalRain = () => {
  // Create multiple layers of digital rain
  return (
    <>
      <motion.div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0, 30, 0, 0.8) 0%, rgba(0, 15, 0, 0.9) 100%)',
          pointerEvents: 'none',
          zIndex: 1000,
          mixBlendMode: 'screen',
          opacity: 0.5
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
      />
      <motion.div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'smallGrid\' width=\'10\' height=\'10\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 10 0 L 0 0 0 10\' fill=\'none\' stroke=\'rgba(0,255,0,0.05)\' stroke-width=\'0.5\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23smallGrid)\' /%3E%3C/svg%3E")',
          pointerEvents: 'none',
          zIndex: 1001,
          mixBlendMode: 'screen',
          opacity: 0.3
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        exit={{ opacity: 0 }}
      />
    </>
  );
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const location = useLocation();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBar />
            <>
              <AnimatePresence>
                {location.pathname !== location.pathname && <DigitalRain />}
              </AnimatePresence>
              <Container 
                  component={motion.main}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={digitalGlitch}
                  key={location.pathname}
                  sx={{
                    marginTop: 2,
                    marginBottom: 2,
                    flexGrow: 1,
                    position: 'relative',
                    '&::before': {
                      content: '" "',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(0deg, transparent 0%, rgba(0, 255, 0, 0.1) 1%, transparent 2%)',
                      backgroundSize: '100% 8px',
                      pointerEvents: 'none',
                      zIndex: 1,
                      animation: 'scanline 8s linear infinite',
                      '@keyframes scanline': {
                        '0%': { backgroundPosition: '0 -50vh' },
                        '100%': { backgroundPosition: '0 150vh' },
                      }
                    },
                    '&::after': {
                      content: '" "',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(90deg, rgba(0, 255, 0, 0.1) 0%, transparent 1%)',
                      backgroundSize: '10px 100%',
                      pointerEvents: 'none',
                      zIndex: 1,
                      opacity: 0.3
                    }
                  }}
              >
                  {children}
              </Container>
            </>
            {/* Optional: Add a Footer component here later */}
            {/* <Footer /> */}
        </Box>
    );
};

export default MainLayout; 