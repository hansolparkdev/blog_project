import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeInput, insert, toggleCheck, remove,
} from '../redux/reducers/todos';
import TodoList from '../components/TodoList';

const TodoListContainer = () => {
  // todos 리듀서에서 관리하는 객체를 통째로 가져올 거라면 state.todos 로 간소화 시킬 수 있습니다.
  const { todos, input } = useSelector((state) => state.todos, []);
  // const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
  //   [changeInput, insert, toggleCheck, remove],
  //   [],
  // );
  const dispatch = useDispatch();

  // console.log(todos);
  const onChangeInput = (i) => {
    dispatch(changeInput(i));
  };
  const onInsert = (id) => {
    dispatch(insert(id));
  };
  const onToggle = (id) => {
    dispatch(toggleCheck(id));
  };
  const onRemove = (id) => {
    dispatch(remove(id));
  };
  const onChange = useCallback(
    (e) => {
      onChangeInput(e.target.value);
    },
    [onChangeInput],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onInsert(input);
      onChangeInput('');
    },
    [input, onChangeInput, onInsert],
  );
  return (
    <TodoList
      input={input}
      todos={todos}
      onChange={onChange}
      onSubmit={onSubmit}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default TodoListContainer;
