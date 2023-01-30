import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  render() {
    const { search, onChangeSearch } = this.props;
    return (
      <SearchFormStyled>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>
        <InputSearch
          placeholder="What do you want to write?"
          name="search"
          value={search}
          onChange={onChangeSearch}
          required
          autoFocus
        />
      </SearchFormStyled>
    );
  }
}
