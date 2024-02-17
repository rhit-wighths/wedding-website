import React from 'react';
import { Link } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { pink } from '@mui/material/colors';

const Header = (isLoggedIn, handleLogin) => {
    const [value, setValue] = React.useState('our-story');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{height: '10px'}}/>
      <Box sx={{textAlign: 'right', marginRight: '10px'}}>
      <Button variant="outlined" onClick={handleLogin} sx={{color: pink[100], borderColor: pink[100]}}>login</Button>

      </Box>
    <Box sx={{height: '120px'}}/>
    <Box>
    <h1 id="SiteHeader" style={{textAlign: 'center'}}>Harrison & Taylor</h1>
    <h3 class="subheader" style={{textAlign: 'center'}}>June 8, 2025 &bull; Princeton, IL</h3>
    <h4 class="subheader" style={{textAlign: 'center'}}> 403 days to go!</h4>
    </Box>
    <Box sx={{ width: '100%', justifyContent: 'center' }}>
      <Tabs
        sx={{justifyContent: 'center'}}
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        centered
        // variant="scrollable"
        // scrollButtons="auto"
        >
        <Tab value="our-story" label="Our Story" to="/our-story" component={Link}/>
        <Tab value="weddingParty" label="Wedding Party" to="/wedding-party" component={Link}/>
        <Tab value="travel" label="Travel" to="/travel" component={Link}/>
        <Tab value="scheduleOfEvents" label="Schedule of Events" to="/schedule-of-events" component={Link}/>
        <Tab value="photos" label="Photos" to="/photos" component={Link}/>
        {/* <Tab value="registry" label="Registry" to="/registry" component={Link}/> */}
        <Tab value="rsvp" label="RSVP" to="/rsvp" component={Link}/>
      </Tabs>
    </Box>
    </div>
  );
    // return (
    //     <header>
    //         <nav>
    //             <ul>
    //                 <li>
    //                     <Link to="/">Our Story</Link>
    //                 </li>
    //                 <li>
    //                     <Link to="/wedding-party">Wedding Party</Link>
    //                 </li>
    //                 <li>
    //                     <Link to="/travel">Travel</Link>
    //                 </li>
    //                 <li>
    //                     <Link to="/schedule-of-events">Schedule of Events</Link>
    //                 </li>
    //                 <li>
    //                     <Link to="/photos">Photos</Link>
    //                 </li>
    //                 <li>
    //                     <Link to="/registry">Registry</Link>
    //                 </li>
    //                 <li>
    //                     <Link to="/rsvp">RSVP</Link>
    //                 </li>
    //             </ul>
    //         </nav>
    //     </header>
    // );
}

export default Header;