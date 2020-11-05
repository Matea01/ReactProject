import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';



class App extends Component {
  state = {
    persons: [
      {id:'first' ,name: 'Max', age: 28 },
      { id: 'second',name: 'Manu', age: 29 },
      {id: 'third' ,name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons:false
  }
 
/* switchNameHandler = (newName) => {
  // console.log('Was clicked!');
  // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  this.setState( {
    persons: [
      { name: newName, age: 28 },
      { name: 'Manu', age: 29 }, 
      { name: 'Stephanie', age: 27 }
    ]
  } )
} */

//findIndex works with funtions that is why there is
//an arrow function(just like map)
nameChangedHandler = (event,id) => {
    const personIndex=this.state.persons.findIndex(name =>{
      return name.id ===id;

    });
    //spread operator
    const person={...this.state.persons[personIndex]};
    person.name=event.target.value;
    const persons =[...this.state.persons];
    persons[personIndex]=person;

    this.setState( {
      persons:persons/*  [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ] */
    } )
}
//Arrays are ref type-> change the original which we don't want
//so we use slice method which copies full array(this.state.persons) and
//stores it in const persons
//const persons=this.state.persons.slice();
//alternative is spread operator(below)->[...array]
deletePersonHandler= (personIndex) => {
  //const persons=this.state.persons.slice();
  const persons=[...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons:persons});

}
togglePersonsHandler=()=>{
  const doesShow=this.state.showPersons;
  this.setState({showPersons:!doesShow});
  let persons = null;
}
render () {

  const styleButton={
    backgroundColor:'white',
    font:'inherit',
    border:'1px solid blue',
    padding:'8px',
    cursor:'pointer'
  };
  let persons= null;
  if(this.state.showPersons)
  {
    persons=(
      <div >
        {this.state.persons.map((person, index) => {
          return <Person 
          //click={()=>this.deletePersonHandler(index)}
          //sa bind je alternativa
          click={this.deletePersonHandler.bind(this,index)}
          name={person.name} 
          age={person.age}
          key={person.id}
          changed={(event)=>this.nameChangedHandler(event,persons.id)}
          />
        })}
      {
      /* <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} /> 
        <p></p>
        
        <p>Change name onChange event</p>
      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Max!')}
        changed={this.nameChangedHandler} >My Hobbies: Racing
      </Person>
      <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} /> */}
    </div>
    );
  }
  
    return (
      <div className="App">
        
        
          <h1>React project!</h1>
         
          <p>Toggle on button  click</p>
          <button style={styleButton} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          { persons}
      </div>
     
      
      
    );
  
    }
  }

  
  

export default App;


