import './AnimalList.css'
import Animal from './Animal';

const AnimalList = () => {
    return (
        <section className="AnimalList">
            <h2>Animal List</h2>
            <Animal></Animal>
            <Animal></Animal>
            <Animal></Animal>
            <Animal></Animal>
            <Animal></Animal>
            <Animal></Animal>
            <ul className="AnimalList__list">
                <li><Animal></Animal></li>
                <li><Animal></Animal></li>
                <li><Animal></Animal></li>
                <li><Animal></Animal></li>
                <li><Animal></Animal></li>
            </ul>
        </section>
    )
};

export default AnimalList;