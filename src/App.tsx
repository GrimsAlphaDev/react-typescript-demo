import './App.css';
import { Greet } from './components/greet';
import { Person } from './components/person';
import { PersonList } from './components/personList';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [{
    first: 'Bruce',
    last: 'Wayne'
  }, {
    first: 'Clark',
    last: 'Kent'
  }, {
    first: 'Diana',
    last: 'Princes'
  }]

  return (
    <div className="App">
      <Greet name="Jonas Blue" messageCount={21} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
