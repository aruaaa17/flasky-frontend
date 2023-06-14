import './Animal.css';

// The responsibility of this component is to be a reusable UI element
// - name
// - species
// - photo
// - age
const Animal = (props) => {


    return (
    <section className='Animal'>
        <h3>Animal name: {props.name} uwu</h3>
        <p>Species: {props.species}</p>
        <img src="https://i.etsystatic.com/8213963/r/il/61131e/3746215281/il_fullxfull.3746215281_gdzt.jpg"></img>
    </section>);
};

export default Animal;