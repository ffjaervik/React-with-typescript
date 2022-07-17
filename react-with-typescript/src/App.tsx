import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

interface IState{
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
  }



function App() {
const [people, setPeople] = useState<IState["people"]>([
  {
    name: 'Max',
    age: 28,
    url: '',
    note: "Max is a bit of a jerk"
  },
]);

  return (
    <div className="App">
     <h1>People invited to our Party </h1>
     <List people={people} />
      <AddToList/>
    </div>
  );
}

export default App;
