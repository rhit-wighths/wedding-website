import React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Person from './Person';

const WeddingParty = () => {
    return (
        <Box sx={{flexGrow: 1, marginTop: '30px'}}>
            <Grid container spacing={2} sx={{justifyContent: "center"}} >
                <Grid item xs={5} md={5} sx={{justifyContent: "center"}}>
                    <Person
                        initials="HW"
                        name="Harrison Wight"
                        description="He's the groom"
                        role="Groom"
                        image="https://athletics.rose-hulman.edu/images/2023/8/15/Wight-Harrison-FB-2023.JPG?width=300"
                        people={groomsmen}
                    />
                </Grid>
                <Grid item xs={5} md={5}>
                    <Person
                        initials="TM"
                        name="Taylor Main"
                        description="She's the bride"
                        role="Bride"
                        image="https://media.licdn.com/dms/image/D5603AQGYh_nahKl3eQ/profile-displayphoto-shrink_800_800/0/1695947049871?e=2147483647&v=beta&t=Xpbfd3acspvAMqBgg6GBe3pR4Az0WBOnnEXrdFVaf_M"
                        people={bridesmaids}
                    />
                </Grid>
            </Grid>
            {/* <h2>Wedding Party</h2>
            <div className="member">
                <h3>Bride</h3>
                <p>Name: Taylor</p>
                <p>Role: Bride</p>
            </div>
            <Divider sx={{width: '300px'}}></Divider>
            <div className="member">
                <h3>Groom</h3>
                <p>Name: Harrison</p>
                <p>Role: Groom</p>
            </div>
            <div className="member">
                <h3>Maid of Honor</h3>
                <p>Name: Gracie</p>
                <p>Role: Maid of Honor</p>
            </div>
            <div className="member">
                <h3>Best Man</h3>
                <p>Name: Graham</p>
                <p>Role: Best Man</p>
            </div> */}
            {/* add more HERE*/}
        </Box>
    );
}

const groomsmen = [
    {
      name: 'Graham Wight'
    },
    {
      name: 'Parker Wight'
    },
    {
      name: 'Garrett Wight'
    },
    {
      name: 'Ethan Main'
    },
  ]
  const bridesmaids = [
    {
      name: 'Gracie Gibbons'
    },
    {
      name: 'Riley Menzer'
    },
    {
      name: 'Meridian Beal'
    },
    {
      name: 'Erin Anderson'
    },
  ]

export default WeddingParty;