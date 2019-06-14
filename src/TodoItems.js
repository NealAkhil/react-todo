import React,{Component} from 'react';

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
                {listItems}
            </ul>
        );
    }
}
 
export default TodoItems;