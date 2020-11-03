import React, { Component } from 'react';
import './App.css';
import './App.css';
import Person from './Person/Person';
import {BrowserRouter as Router,Switch,Route, Link,useParams,useRouteMatch} from 'react-router-dom';
import File from "./Pages/File";



class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }
 
switchNameHandler = (newName) => {
  // console.log('Was clicked!');
  // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  this.setState( {
    persons: [
      { name: newName, age: 28 },
      { name: 'Manu', age: 29 }, 
      { name: 'Stephanie', age: 27 }
    ]
  } )
}
nameChangedHandler = (event) => {
  this.setState( {
    persons: [
      { name: 'Max', age: 28 },
      { name: event.target.value, age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  } )
}
render () {

  const routes=[
    {
      path:"./File",
      component:File
    }
  ]
    return (
      <div className="App">
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is really working!</p>
          <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
      </div>
      <div className="navijacija">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/File">File</Link>
              </li>
            </ul>
            <hr/>

            <Switch >
              <Route exact path="./File" component={File} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
      
    )
  
    }
  }

  
  

export default App;

