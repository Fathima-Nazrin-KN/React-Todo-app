import React, { Component } from 'react'

 class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      userName : 'Tom',
      toDoList : [
        {id:1,task:'Session At 9AM', done:false},
        {id:2,task:'Session At 10AM', done:false},
        {id:3,task:'Session At 11AM', done:false},
        {id:4,task:'Session At 12AM', done:false},
        {id:5,task:'Session At 1PM', done:false},
      ],
      newToDo:''
    }
  }
 



  render() {
    return (
      <div className='container'>
        <div className='bg-secondary py-3 text-center '>
          <h3 className='text-dark'>{this.state.userName}'s todo list</h3>
      </div>
        <div className="input-group my-3">
        <input type="text" className="form-control" placeholder="Enter new to do " aria-label="Enter new to do " aria-describedby="button-addon2"></input>
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
      </div>
      <table class="table table table-bordered border-secondary">
  <thead>
    <tr>
      <th scope="col"><h5>#</h5></th>
      <th scope="col"><h5>Task</h5></th>
      <th scope="col"><h5>Status</h5></th>

    </tr>
  </thead>
  <tbody>
    {this.state.toDoList.map((todo)=>(
       <tr>
       <th scope="row">{todo.id}</th>
       <td>{todo.task}</td>
       <td>{todo.done?'true':'false'}</td>
       </tr>

    ))}
   
    
  </tbody>
</table>
      </div>
    )
  }
}

export default App