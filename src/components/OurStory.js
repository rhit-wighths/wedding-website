import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography, Divider } from '@mui/material';
import story1 from '../images/story1.png';
import story2 from '../images/story2.png';
import story3 from '../images/story3.jpg';
import story4 from '../images/story4.png';
import story5 from '../images/story5.png';
import eng4 from '../images/eng4.jpg';


const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 500,
    minHeight: 800,
    padding: '20px',
    border: '4px solid rgba(0,0,0,0.1)',
    margin: '20px!important',
    ...theme.typography.body2,
    elevation: 12,
    textAlign: 'center',
    borderRadius: '10px',
        boxSizing: 'border-box',
        backgroundClip: 'padding-box',
  }));

const OurStory = () => {
    return (
        <Box sx={{justifyContent: "center", display: "flex"}}>
            <Stack direction="column" spacing={2} sx={{justifyContent: "center"}}>
                <DemoPaper elevation={6} variant="elevation">
                    <Typography variant="h4" style={{ lineHeight: '1.6' }}>
                        About Us
                    </Typography>
                    <Divider variant="middle" sx={{marginBottom: '16px'}}/>
                    <img alt='First picture' src={story1} style={{maxWidth: '200px'}}/>
                    <Typography variant='body1'>
                        We first started talking in February, 2016 and first met in March at a play. 
                    </Typography>
                    <br/>
                    <img alt='First dance' src={story2} style={{maxWidth: '200px'}}/>
                    <Typography variant='body1'>
                        Our first dance was at Harrison's 8th Grade Promotion.
                    </Typography>
                    <br/>
                    <img alt='hoco' src={story4} style={{maxWidth: '200px'}}/>
                    <Typography variant='body1'>
                        We have spent almost every holiday together since 2016.
                    </Typography>
                    <br/>
                    <img alt='hoco' src={story3} style={{maxWidth: '200px'}}/>
                    <Typography variant='body1'>
                        Throughout high school we attending multiple homecoming and prom dances.
                    </Typography>
                    <br/>
                    <img alt='proposal' src={eng4} style={{maxWidth: '200px'}}/>
                    <Typography variant='body1'>
                        Harrison proposed on December 22, 2023, starting the next chapter of their 'Love Story'.

                    </Typography>
                </DemoPaper>

                {/* <DemoPaper elevation={6} variant="elevation">
                    <Typography variant="h4" style={{ lineHeight: '1.6' }}>
                        About Her
                    </Typography>
                    <Divider variant="middle" sx={{marginBottom: '16px'}}/>
                    <img alt="tmain"/>
                    <Typography variant='body1'>
                        high school
                    </Typography>

                </DemoPaper> */}
            </Stack>
        </Box>
        // <div className="our-story">
        //     <h2>Our Story</h2>
        //     <p>
        //         about us
        //     </p>
        //     <p>
        //         about her
        //     </p>
        //     <p>
        //         about him
        //     </p>
        // </div>
    );
}

export default OurStory;