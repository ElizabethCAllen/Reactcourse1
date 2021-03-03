
// class ToDoList extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             todos: ["learn react", "become dev"],
//             goals: ["make the muns"],
//             numberofTodos: 3,
//             getGreeting: ()=> "yo"
//         };
//     componentDidMount() {
//         console.log("hey I mounted");
//         setInterval(() => {
//             this.setState({
//                 currentTime: new Date().toLocaleTimeString()
//             });
//         }, 1000);
//     }
//     componentDidUpdate(){
//         console.log("I am updating" );
//     }
//     componentWillUnmount(){
//         console.log("Imma go die now, bye UWU");
//     }
//     shouldComponentUpdate(){
//         console.log("hey, should I update?");
//         // supposed to return a boolean
//     }
//     }

//     render(){
        
//         const { todos, goals, getGreeting, numberofTodos} = 
//         this.state;
//         // below is a way not to cal setState



//         return (
//         <div>
//         <p>{this.state.getGreeting()}</p>
//         <p> i have {goals.length} goalsd to complete</p>
//         </div>
//         )
//     }
// }
// export default Todolist