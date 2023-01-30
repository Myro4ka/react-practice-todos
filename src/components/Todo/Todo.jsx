import { Text } from 'components';
import PropTypes from 'prop-types';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

export const Todo = ({ id, todo, onDelete }) => {
  // const handleDelete = () => {
  //   onDelete(id);
  //   console.log(id);
  // };
  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        TODO #{id}
      </Text>
      <Text>{todo}</Text>
      <DeleteButton type="button" onClick={onDelete(id)}>
        <RiDeleteBinLine size={24} />
      </DeleteButton>
    </TodoWrapper>
  );
};

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  todo: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
