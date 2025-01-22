import { useSelector } from 'react-redux';

export default function DoneList() {
  // 완료 목록 불러오기
  //   const doneList = useSelector(state => state.list.filter((todo) => todo.done===true));
  let doneList = useSelector(state => state.todo.list);

  // console.log(doneList);

  doneList = doneList.filter(todo => todo.done === true);

  return (
    <section>
      <h3>완료 목록</h3>
      <ul>
        {/* li 태그를 이용하여 완료 목록 표시 */}
        {doneList.map(done => {
          return (
            <li key={done.id}>
              <span>{done.text}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
