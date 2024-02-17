import React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

const Footer = () => {
    return (
        <footer>
            <Box
                sx={{
                    padding: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: 'divider',
                    borderRadius: 2,
                    '& svg': {
                    m: 1,
                    },
                }}
                >
                <h3>H&T</h3>
                &nbsp;
                <Divider orientation="vertical" variant="middle" flexItem/>
                &nbsp;
                <h4>6.1.2025</h4>
            </Box>        
        </footer>
    );
}

export default Footer;