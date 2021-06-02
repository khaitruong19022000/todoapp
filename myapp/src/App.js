import React, {Component} from 'react';
import Ninjas from "./Ninjas";
import Addninjas from "./Addninjas"
class App extends Component{
  state = {
    ninjas: [
      {name: 'Khai', age:25, belt: 'black', id:1},
      {name: 'Lam', age:29, belt: 'red', id:7},
      {name: 'Nam', age:21, belt: 'green', id:2},
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja =>{
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }
  componentDidMount(){
    console.log('component mounted')
  }
  componentDidUpdate(prevProps, prevState){
    console.log('component updated');
    console.log(prevProps, prevState);
  }
  render(){
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <Addninjas addNinja={this.addNinja}/>
      </div>
    )
  }
}

export default App;
