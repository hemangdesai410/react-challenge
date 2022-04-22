import React from 'react';
import { Helmet } from 'react-helmet';
import Astro from './astro.jpg';
import "./home.css";

function Home() {

    function setDoggo() {
        const dog = document.getElementById('astro__image');
        if (dog.style.display === 'none') {
            dog.style.display = 'block';
            dog.style.height = "50%"
        } else {
            dog.style.display = "none"
            dog.style.height = "50%"
        }
    }
    return (
        <div>
        <Helmet>
        <title>Snow Golden</title>
        <meta name="my lovely doggo" content="the goldenator" />
        <meta name="keywords" content="Image of my best friend!" />
        </Helmet>
        <button onClick={() => setDoggo()}>Doggo</button>
        <img id="astro__image" alt='doggo' src={Astro}></img>
        </div>
    )
}

export default Home;