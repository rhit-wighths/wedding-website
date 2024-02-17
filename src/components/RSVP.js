import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import MuiInput from '@mui/material/Input';
import { Typography } from '@mui/material';

const addRSVP = (name, email, guests, hotel) => {
    const docRef = addDoc(collection(db, "RSVP"), {
        name: name,
        email: email,
        guests: guests,
        hotel: hotel
      });
};
const RSVP = () => {
    // State to manage form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [guests, setGuests] = useState(0);
    const [hotel, setHotel] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Send form data to server or perform other actions
        console.log("RSVP submitted:", { name, email, guests, hotel });
        addRSVP(name,email,guests, hotel);
        // db.collection('RSVP').addDoc({
        //     name: name,
        //     email: email,
        //     guests: guests
        // }).then((docRef) => {console.log("document written with ID: ", docRef.id);});
        // Reset form fields
        setName('');
        setEmail('');
        setGuests(0);
    };

    return (
        <Box sx={{paddingLeft: '40px'}} className="rsvp">
            <h2>RSVP</h2>
            <p>Please RSVP by filling out the form below:</p>
            <form onSubmit={handleSubmit}>
            <TextField onChange={(e) => setName(e.target.value)} id="standard-basic" label="Name" variant="standard" />
            <br/>
            <TextField onChange={(e) => setEmail(e.target.value)} id="standard-basic" label="Email" variant="standard" />
            <br/>
            <TextField onChange={(e) => setHotel(e.target.value)} id="standard-basic" label="Hotel" variant="standard" />
            <br/>
            <Typography sx={{paddingTop: '10px'}}>Guests: </Typography>
            <MuiInput
            value={guests}
            size="small"
            onChange={(e) => setGuests(e.target.value)}
            inputProps={{
              step: 1,
              min: 0,
              max: 6,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />

                {/* <label htmlFor="name">Your Name: </label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                <br />
                <label htmlFor="email">Your Email: </label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <br />
                <label htmlFor="guests">Number of Guests: </label>
                <input type="number" id="guests" value={guests} onChange={(e) => setGuests(parseInt(e.target.value))} min={0} required />
                <br />
                <label htmlFor="hotel">Hotel: </label>
                <input type="text" id="hotel" value={hotel} onChange={(e) => setHotel(e.target.value)} />
                <br /> */}
                <br/>
                <Button sx={{marginTop: '10px'}} variant='contained' type="submit">Submit RSVP</Button>
            </form>
        </Box>
    );
}

export default RSVP;