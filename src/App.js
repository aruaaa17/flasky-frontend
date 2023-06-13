import logo from './logo.svg';
import './App.css';
import Animal from './components/Animal';
import AnimalList from './components/AnimalLis';


function App() {
  // Comments outside of JSX (but still in JavaScript (aka JS that is not "returned")) can still be //'s.
  return (
    <section>
      <h1>The Sapphire Animal Adoption Agency</h1>
      <h2>Animal Listings</h2>
      {/* I want to list a bunch of animals... */}
      {/* Each animal has its name and photo */}
      <AnimalList></AnimalList>
    </section>
  );
}

export default App;
