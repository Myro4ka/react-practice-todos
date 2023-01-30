import { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  Grid,
  GridItem,
  SearchForm,
  EditForm,
  Text,
  Todo,
  Button,
} from 'components';

import todosJson from '../data/todos.json';

const firstTodo = { ...todosJson[0] };

export class Todos extends Component {
  state = {
    todos: todosJson,
    isFiltered: false,
    search: '',
  };

  handleDeleteTodo = todoId => {
    return () => {
      this.setState(prev => ({
        todos: prev.todos.filter(el => el.id !== todoId),
      }));
    };
  };

  handleAddTodo = () => {
    const newTodo = { ...firstTodo, id: Date.now() };
    this.setState(prev => ({
      todos: [newTodo, ...prev.todos],
    }));
  };

  // =====лише фільтрує масив=====
  applyFilterTodo = () => {
    if (this.state.isFiltered) {
      const filteredTodo = this.state.todos.filter(todo => todo.completed);
      return filteredTodo;
    } else if (this.state.search) {
      return this.applySearchTodo();
    }
    return this.state.todos;
  };

  handleFilterTodo = () => {
    this.setState(prev => ({ isFiltered: !prev.isFiltered }));
  };

  handleSearchTodo = e => {
    const { value } = e.target;
    this.setState({ search: value });
  };

  applySearchTodo = () => {
    const { search, todos } = this.state;
    const searchedTodo = todos.filter(({ todo }) =>
      todo.toLowerCase().includes(search.toLowerCase().trim())
    );
    return searchedTodo;
  };

  render() {
    const { todos, search } = this.state;
    console.log(search);
    return (
      <>
        <SearchForm search={search} onChangeSearch={this.handleSearchTodo} />
        <Button type="button" onClick={this.handleFilterTodo}>
          Filter TODO
        </Button>

        <Grid>
          {this.applyFilterTodo().map(({ id, todo }) => (
            <GridItem key={id}>
              <Todo todo={todo} id={id} onDelete={this.handleDeleteTodo} />
            </GridItem>
          ))}
          <GridItem>
            <Button type="button" onClick={this.handleAddTodo}>
              Add TODO
            </Button>
          </GridItem>
        </Grid>
      </>
    );
  }
}
