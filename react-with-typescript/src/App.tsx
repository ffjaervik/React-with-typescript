import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState{
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
  }



function App(){
const [people, setPeople] = useState<IState["people"]>([
  {
    name: 'Max',
    age: 28,
    url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    note: "Max is a bit of a jerk"
  },
]);

  return (
    <div className="App">
     <h1>People invited to our Party </h1>
     <List people={people} />
      <AddToList people ={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
