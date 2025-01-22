const initialState = {
  list: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false, // done: false 는 할 일 목록
    },
    {
      id: 1,
      text: '척추의 요정이 말합니다! 척추 펴기!',
      done: true, // done: true 는 완료 목록
    },
    {
      id: 2,
      text: '운동하기',
      done: false,
    },
  ],
};

// action type에 대한 상수 설정
const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';

// components 에서 사용될 액션 반환 함수
export function create(payload) {
  return {
    type: CREATE,
    payload: payload, //{id:number,text:String}
  };
}

export function done(id) {
  return {
    type: DONE,
    id: id, //id:number
  };
}

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      console.log('CREATE 호출됨', action);
      return state;
    case DONE:
      console.log('DONE 호출됨', action);
      return state;

    default:
      return state;
  }
}
