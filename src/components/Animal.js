import './Animal.css';
import PropTypes from 'prop-types';

import { useState } from 'react';

// The responsibility of this component is to be a reusable UI element that displays an Animal's
const Animal = (props) => {
    
    const [isBookmarked, setIsBookmarked] = useState(false);

    const altText = `Photo of ${props.name}`

    const toggleBookMark = () => {
        setIsBookmarked(!isBookmarked);
        // console.log('We can click on this button!')
    }

    // If the animal is bookmarked, the CSS class name should be .bookmarked, If the animal is not bookmarked, there should be no CSS class
    let animalStyle = 'Animal';
    if (isBookmarked) {
        animalStyle = 'Animal bookmarked';
    }

    return (
    <section className={animalStyle}>
        <h3>Name: { props.name } (cute!)</h3>
        <p>Species: { props.species }</p>
        { props.photo ? <img src={ props.photo } alt={altText}></img> : "[No Photo]" }
        <button onClick={toggleBookMark}>Bookmark</button>
        <p>Is bookmarked? {isBookmarked ? 'Yes, it is!' : 'No, it is not!'} </p>

    </section>);
};

Animal.propTypes = {
    name: PropTypes.string,
    species: PropTypes.string.isRequired,
    adopted: PropTypes.bool,
    age: PropTypes.number,
    photo: PropTypes.string
}

export default Animal;