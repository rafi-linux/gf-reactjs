import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';

class App extends Component {
  constructor() {
    super();
    this.state = { todos: [] }
  }

  addTodo = (e) => {
    e.preventDefault();

    let jam = this.refs.jam.value;
    let aktivitas = this.refs.aktivitas.value;

    this.state.todos.push({ jam, aktivitas });
    this.setState({ todos: this.state.todos });

    this.refs.formulir.reset();
    this.refs.jam.focus();
  }

  removeTodo = (i) => {
    this.state.todos.splice(i, 1);
    this.setState({ todos: this.state.todos })
  }

  render() {
    return (
      <div>
        <Header />
        <form ref="formulir">
          <input type="text" ref="jam" placeholder="Waktu aktifitas" />
          <input type="text" ref="aktivitas" placeholder="Judul aktivitas" />
          <button onClick={this.addTodo}>Simpan</button>
        </form>
        <br />
        <div>
          <ul>
            {this.state.todos.map((data, i) =>
              <li key={i}>
                <div>
                  {data.jam} : {data.aktivitas}
                  <button onClick={() => this.removeTodo(i)} className="btn btn-ouline-danger">Hapus</button>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }

}

export default App;
