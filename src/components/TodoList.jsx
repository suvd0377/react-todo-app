import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

export default function TodoList() {
  // useSelector()를 통해서 store의 state 가져오기
  let todoList = useSelector(state => state.todo.list);

  console.log(todoList);

  todoList = todoList.filter(todo => todo.done === false);
  return (
    <section>
      <h3>할 일 목록</h3>
      <div>
        <input type="text" />
        <button>추가</button>
      </div>
      <ul>
        {todoList.map(todo => {
          return (
            <li key={todo.id}>
              <button>
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
