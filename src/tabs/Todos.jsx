import { Component } from 'react';
import { Grid, GridItem, SearchForm, Todo, Button } from 'components';
import { Modal } from 'components/Modal/Modal';

import todosJson from '../data/todos.json';

const firstTodo = { ...todosJson[0] };

export class Todos extends Component {
  state = {
    todos: todosJson,
    isFiltered: false,
    search: '',
    isShown: false,
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

  componentDidMount() {
    const localStorageDate = JSON.parse(localStorage.getItem('todos'));
    localStorageDate && this.setState({ todos: localStorageDate });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos)
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  toggleModal = () => {
    this.setState(prev => ({ isShown: !prev.isShown }));
  };

  render() {
    const { search, isShown } = this.state;
    return (
      <>
        {isShown && <Modal onClose={this.toggleModal} />}
        <SearchForm search={search} onChangeSearch={this.handleSearchTodo} />
        <Button type="button" onClick={this.handleFilterTodo}>
          Filter TODO
        </Button>
        <Grid>
          {this.applyFilterTodo().map(({ id, todo }) => (
            <GridItem key={id}>
              <Todo
                todo={todo}
                id={id}
                newObj={{ el1: '' }}
                onDelete={this.handleDeleteTodo}
                onShow={this.toggleModal}
              />
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
