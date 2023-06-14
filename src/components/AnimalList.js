import './AnimalList.css'
import PropTypes from 'prop-types';

import Animal from './Animal';

const AnimalList = ({ listOfAnimals }) => {
    // If the parameter is props instead, you can do these!
    // const listOfAnimals = props.listOfAnimals;
    // const { listOfAnimals } = props;

    return (
    <section className="AnimalList">
        <h2>Animal List</h2>
        <ul className="AnimalList__list">
            {
                listOfAnimals.map((creature) => (
                    <li key={creature.id}>
                        <Animal
                            name={ creature.name }
                            species={ creature.species }
                            photo={ creature.photo }
                        />
                    </li>)
                ) 
            }
        </ul>
    </section>
    );
};

AnimalList.propTypes = {
    listOfAnimals: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            id: PropTypes.number.isRequired,
            species: PropTypes.string.isRequired,
            adopted: PropTypes.bool,
            age: PropTypes.number,
            photo: PropTypes.string
        })
    )
}

export default AnimalList;