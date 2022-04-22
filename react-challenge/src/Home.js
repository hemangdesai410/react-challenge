import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Astro from './astro.jpg';
import "./home.css";

function Home() {
    const [doggo, setDoggo] = useState(false)

    const handleToggle = () => {
        setDoggo(!doggo)
    }

    return (
        <div>
        <Helmet>
        <title>Snow Golden</title>
        <meta name="my lovely doggo" content="the goldenator" />
        <meta name="keywords" content="Image of my best friend!" />
        </Helmet>
        <button onClick={handleToggle}>Doggo</button>
        {doggo ? (<img id="astro__image" alt='doggo' src={Astro}></img>) : (<p></p>)}
        </div>
    )
}

export default Home;