import { Component } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export default class SearchFormForImages extends Component {
  state = {
    search: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    //   fetch
    console.log(this.state);
    console.log(this.state.search);
  };
  render() {
    return (
      <SearchFormStyled onSubmit={this.handleSubmit}>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>
        <InputSearch
          placeholder="What do you want to write?"
          name="search"
          value={this.state.search}
          onChange={event =>
            this.setState({
              search: event.target.value,
            })
          }
          required
          autoFocus
        />
      </SearchFormStyled>
    );
  }
}
