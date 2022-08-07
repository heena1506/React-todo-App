import "./App.css";
import React, { Component } from "react";
import { FiEdit } from "react-icons/fi";
import { BsTrashFill } from "react-icons/bs";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      value: "",
      editing: false,
      currentid: "",
      currentValue: "",
    };
  }
  onChange = (e) => {
    this.setState({ value: e.target.value });
  };
  onAddTask = (e) => {
    e.preventDefault();
    
    const obj = {
      name: this.state.value,
      id: Date.now(),
    };
    if (this.state.value !== "") {
      this.setState({ todos: this.state.todos.concat(obj) });
      this.setState({ value: "" });
    }
  };

  onDeleteTask = (itemId) => {
    this.setState({
      todos: [...this.state.todos].filter((id) => id.id !== itemId),
    });
  };

  onSubmitEditTodo = (e) => {
    e.preventDefault();
    this.state.todos.map((todo) => {
      if (todo.id === this.state.currentid) {
        todo.name = this.state.currentValue;
      }
    });
    this.setState({ editing: false });
  };

  onEdit = (todo) => {
    this.setState({ editing: true });
    this.setState({ currentid: todo.id });
    this.setState({ currentValue: todo.name });
  };

  onEditInputChange = (e) => {
    this.setState({ currentValue: e.target.value });
  };

  render() {
    const mylist = this.state.todos.map((todo) => (
      <li className="todo_item">
        <div>{todo.name}</div>
        <div className="divbtn">
          <button onClick={() => this.onEdit(todo)}>
            <FiEdit />
          </button>
          <button onClick={() => this.onDeleteTask(todo.id)}>
            <BsTrashFill />
          </button>
        </div>
      </li>
    ));

    return (
      <>
        <div className="App">
          <h1>Todo App</h1>
          <div className="inputField">
          {this.state.editing === false ? (
            <form onSubmit={this.onAddTask}>
              <input
                placeholder="typeyour task"
                maxLength={15}
                value={this.state.value}
                onChange={this.onChange}
              />
              <button>Add</button>
            </form>
          ) : (
            <form onSubmit={this.onSubmitEditTodo}>
              <input
                placeholder="edit your task"
                maxLength={15}
                value={this.state.currentValue}
                name={this.state.currentValue}
                onChange={this.onEditInputChange}
              />
              <button onClick={this.onSubmitEditTodo}>Update Item</button>
            </form>
          )}
          </div>
          <div className="ul-todo">
          <ul className="todo_wrapper">{mylist}</ul>
          </div>
        </div>
      </>
    );
  }
}

export default Todo;


























// import { useState } from "react";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
// import ListGroup from 'react-bootstrap/ListGroup';

// function App() {
//   const [data, setData] = useState("");

//   const [dataList, setList] = useState(["demo1", "demo2"]);

//   const onChangeData = (e)=>{
//     setData(e.target.value);
//   }

//   const addItem = (e) =>{
//     if(data != ""){
//     const ar = [...dataList, data];
//     setList(ar);
//     }
//     setData("");
//     e.preventDefault();
//   }
//   function deleteItem(index){

//     const newTodos = [...dataList];
//     newTodos.splice(index, 1);
//     setList(newTodos);
//   }
//   return (
//     <div>
//   <form onSubmit={addItem}>
//   <Container>
//           <Row style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   fontSize: '3rem',
//                   fontWeight: 'bolder',
//                 }}
//                 >TODO LIST
//             </Row>

//            <hr/>
//           <Row>
//           <Col md={{ span: 5, offset: 4 }}>
//           <InputGroup className="mb-3">
//           <FormControl
//             placeholder="add item . . . "
//             size="lg"
//             value = {data}
//             onChange = {onChangeData}
//             aria-label="add something"
//             aria-describedby="basic-addon2"
//           />
//             <Button onClick={addItem}
//               variant="dark"
//               size="lg"
//               >
//               ADD
//             </Button>
//         </InputGroup>

//      </Col>
//    </Row>
//    <Row>
//      <Col md={{ span: 5, offset: 4 }}>
//         <ListGroup>

//          {dataList.map((item,index) => (
//             <ListGroup.Item variant="dark" action
//               >
//               {item}

//               <Button onClick={deleteItem}>X</Button>
//             </ListGroup.Item>
//          ))}
//         </ListGroup>
//      </Col>
//    </Row>
//      </Container>
//      </form>
//      </div>
//   );
// }

// export default App;
