import PropTypes from 'prop-types';
import { Component } from 'react';
import { Text } from 'components';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine } from 'react-icons/ri';

export class Todo extends Component {
  // const handleDelete = () => {
  //   onDelete(id);
  //   console.log(id);
  // };
  shouldComponentUpdate(prevProps) {
    if (prevProps.newObj.el1 === this.props.newObj.el1) return false;
    return true;
  }

  render() {
    const { id, todo, onDelete, onShow } = this.props;
    return (
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{id}
        </Text>
        <Text>{todo}</Text>
        <DeleteButton type="button" onClick={onDelete(id)}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
        <EditButton onClick={onShow}>Open</EditButton>
      </TodoWrapper>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  todo: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
