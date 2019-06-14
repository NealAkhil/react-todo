import React, {Component} from 'react';
import './App.css';
import TodoItems from './TodoItems'
class Todolist extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[]
        };
        this.addItem= this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
    }

    addItem(e){
        if(this._inputElement.value !==""){
            const newItem={
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState)=>{
                return{
                    items: prevState.items.concat(newItem)
                };
            });
        }
        this._inputElement.value="";
        console.log(this.state.items);
        e.preventDefault();
    }
    deleteItem(key){
        console.log("Key at todolist is" +key);
        const filteredItems=this.state.items.filter(item=>{
            return (item.key !==key);
        });
        this.setState({
            items: filteredItems
        })
    }
    render(){
        return(
            <div className="todolist">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input  ref={(a)=> this._inputElement=a}
                                placeholder="Enter task"/>
                        <button type="submit" className="btn-todo">Add task</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}
                           delete={this.deleteItem}
                ></TodoItems>
            </div>
        )
    }
}
export default Todolist;