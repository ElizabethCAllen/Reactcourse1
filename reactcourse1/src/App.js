
import './App.css';
import React from 'react'
import getMoviesByName from 
// import ToDoList from './todolist'
// import {MovieCard } from './MovieCard'
class App extends React.component{
  constructor(props){
    super(props);
    this.setState={
      search: 'batman',
      isLoading: false,
      movies:[],
      error:null,
    }
  }
  
componentDidMount(){
 tis.setState({
   isLoading:true
 });

 getMoviesByName(this.state.search)
 .then(data =>{
   this.setState({
     isLoadfing:false,
     movies:data,
     
   })
 })
}
}
// function App() {
// <>
//   return (
//    <MovieCard
//    posterUrl="url"
//    title=""
//    type=""
//    );
//    />

// }

export default App;
