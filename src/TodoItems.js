import React,{Component} from 'react';

class TodoItems extends Component{
    createTask(item){
        return (<li key={item.key}>{item.text}</li>)
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