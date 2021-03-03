
class ToDoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos: ["learn react", "become dev"],
            goals: ["make the muns"],
            numberofTodos: 3,
            getGreeting: ()=> "yo"
        };
    componentDidMount(){
        conso0le.log("hey I mounted");
        setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleTimeString()
            });
        }, 1000);
    }

    }

    render(){
        
        const { todos, goals, getGreeting, numberofTodos} = 
        this.state;
        // below is a way not to cal setState



        return (
        <div>
        <p>{this.state.getGreeting()}</p>
        <p> i have {goals.length} goalsd to complete</p>
        </div>
        )
    }
}
export default Todolist