// HomePage.js
import React from 'react';
import picture from '../assets/IMG_7635.jpeg';

const HomePage = () => {
  return (
    <div>
      <h2>Joe Bracey Coding</h2>
      <p>I am currently completing the Full Stack Web Development Skills Bootcamp with Step8Up. So far we have learnt HTML, JavaScript, Python, Django and React.</p>
      <p />
      <p>Outside of the bootcamp I am a Product Manager. I regularly attend the gym and play for the local cricket club.</p>
      <h4>Photo of me</h4>
      <img src={picture} style={{ width: "15rem"}}/>
    </div>
  );
};

export default HomePage;
