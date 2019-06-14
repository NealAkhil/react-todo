import React,{Component} from 'react';
import FlipMove from 'react-flip-move'
class TodoItems extends Component{
    constructor(props){
        super(props);

        this.createTask= this.createTask.bind(this);
        // this.props.delete=this.props.delete.bind(this);
    }
    createTask(item){
        return (<li 
            onClick={()=> this.delete(item.key)}
            key={item.key}> {item.text} </li>)
    }
    delete(key){
        console.log("Key at Todoitems is"+ key);
        this.props.delete(key);
    }
    render(){
        const todoEntries= this.props.entries;
        const listItems= todoEntries.map(this.createTask);
        return(
            <ul className="thelist">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
}
 
export default TodoItems;