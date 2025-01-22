import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { create, done } from '../store/modules/todo';
import { useRef } from 'react';

export default function TodoList() {
  // useSelector()를 통해서 store의 state 가져오기
  let todoList = useSelector(state => state.todo.list);

  //   console.log(todoList);

  todoList = todoList.filter(todo => todo.done === false);

  //   useDispatch()를 통해서 dispatch 함수 생성
  const dispatch = useDispatch();

  const inputRef = useRef();

  const createTodo = () => {
    dispatch(create({ id: todoList.length + 1, text: inputRef.current.value }));
    inputRef.current.value = '';
    inputRef.current.focus();
  };
  return (
    <section>
      <h3>할 일 목록</h3>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={createTodo}>추가</button>
      </div>
      <ul>
        {todoList.map(todo => {
          return (
            <li key={todo.id}>
              <button
                onClick={() => {
                  dispatch(done(todo.id));
                }}
              >
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <span>{todo.text}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
