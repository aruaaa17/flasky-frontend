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

    // for loop is a statement and cannot be wrote directly in the 'return' below
    // const renderedAnimals = [];
    // for (const creature of listOfAnimals) {
    //     renderedAnimals.push(
    //     <li>
    //         <Animal
    //             name={creature.name}
    //             species={creature.species}
    //         />
    //     </li>
    //     );
    // }

    // const renderedAnimals = listOfAnimals.map(creature => (
    //     <li>
    //         <Animal
    //             name={creature.name}
    //             species={creature.species}
    //         />
    //     </li>
    // ));


    return (
        <section className="AnimalList">
            <h2>Animal List</h2>
            <ul className="AnimalList__list">
                {/* <li>
                    {renderedAnimals}
                </li> */}
                {
                    listOfAnimals.map(creature => (
                        <li>
                            <Animal
                                name={creature.name}
                                species={creature.species}
                            />
                        </li>
                    ))
                };
                <li><Animal></Animal></li>
                <li><Animal></Animal></li>
                <li><Animal></Animal></li>
                <li><Animal></Animal></li>
            </ul>
        </section>
    )
};

export default AnimalList;