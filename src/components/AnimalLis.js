import './AnimalList.css'
import Animal from './Animal';

const AnimalList = () => {
    const firstAnimal = {
        name: "Cookie",
        species: "Cutie Cat"
    };
    const secondAnimal = {
        name: "Norman",
        species: "puppy"
    };

    const listOfAnimals = [
        firstAnimal, 
        secondAnimal,
        {
            name: "Kiki",
            species: "Emmm?"
        }
    ];

    const renderedAnimals = listOfAnimals.map(creature => (
        <li>
            <Animal
                name={creature.name}
                species={creature.species}
            />
        </li>
    ));


    return (
        <section className="AnimalList">
            <h2>Animal List</h2>
            <ul className="AnimalList__list">
                <li>
                    {renderedAnimals}
                </li>
                <li><Animal></Animal></li>
                <li><Animal></Animal></li>
                <li><Animal></Animal></li>
                <li><Animal></Animal></li>
            </ul>
        </section>
    )
};

export default AnimalList;