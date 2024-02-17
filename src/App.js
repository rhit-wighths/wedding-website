import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Switch} from 'react-router';
import Header from './components/Header';
import OurStory from './components/OurStory';
import WeddingParty from './components/WeddingParty';
import Travel from './components/Travel';
import ScheduleOfEvents from './components/ScheduleOfEvents';
import Photos from './components/Photos';
import Registry from './components/Registry';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import Login from './components/Login';
import { pink } from '@mui/material/colors';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // handleLogin = () => {

  // }

  return (
    <div style={{backgroundColor: pink[50]}}>
      <Router>
          <Header isLoggedIn={isLoggedIn}/>
          <Routes>
            <Route path="/" element={!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} />}/>
            <Route path="/our-story" element={isLoggedIn && <OurStory />}/>
            <Route path="/wedding-party" element={isLoggedIn && <WeddingParty />} />
            <Route path="/travel" element={isLoggedIn && <Travel />} />
            <Route path="/schedule-of-events" element={isLoggedIn && <ScheduleOfEvents />}/>
            <Route path="/photos" element={isLoggedIn && <Photos />}/>
            {/* <Route path="/registry" element={isLoggedIn && <Registry />}/> */}
            <Route path="/rsvp" element={isLoggedIn && <RSVP />} />
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
