import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { db } from '../firebaseConfig';
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { query, where } from "firebase/firestore";


const Travel = () => {
    // console.log(getHotels());
    const [hotels, setHotels] = React.useState([]);
   
    async function firestoreHotels(){
        const q = query(collection(db, "RSVP"));
        const querySnapshot = await getDocs(q);
        setHotels([]);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            setHotels(prevHotels => [...prevHotels, doc.data().hotel]);
        });
    }

    return (
        <Box sx={{marginLeft: '40px'}} className="travel">
            <h2>Travel Information</h2>
            {/* {isLoaded &&
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    <></>
            
                </GoogleMap>
            } */}
            <a href="https://www.google.com/maps/dir//The+Barn+At+Hornbaker+Gardens,+22937+County+Rd+1140+N,+Princeton,+IL+61356/@41.3111888,-89.4165714,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8809804651e2bd19:0xb7b3bd15dc244050!2m2!1d-89.4139965!2d41.3111888?entry=ttu">
                Directions to The Barn at Hornbaker Gardens
            </a>
            <p>If you're traveling from out of town, here's some information to help you plan your trip:</p>
            <h3>Accommodations</h3>
            <p>Here are some hotels where others are staying:</p>
            <ul>
                {hotels.length > 0 && hotels.map((hotel) => 
                    <li>{hotel}</li>
                )}
            </ul>
            <Button variant="contained" onClick={firestoreHotels} >Update hotels</Button>
            
            <h3>Transportation</h3>
            <p>Here are some transportation options to get to and from the wedding venue:</p>
            <ul>
                <li>Car: Plenty of parking for cars</li>
                <li>Public Transportation: Details will be provided closer to the wedding date</li>
            </ul>
        </Box>
    );
}

export default Travel;