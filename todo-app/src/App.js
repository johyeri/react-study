import { useReducer, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1 ; i <= 2500 ; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false
    });
  }
  return array;
}

//11.5.2 useReducer사용하기
function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': // 새로 추가
      // { type: 'INSERT', todo: { id: 1, text: 'todo', checked: false } }
      return todos.concat(action.todo);
    case 'REMOVE': // 제거
      // { type: 'REMOVE', id: 1 }
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE': // 토글
      // { type: 'REMOVE', id: 1 }
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  // 11.5.2 => 세번째 파라미터에 초기상태를 만들어주는 함수를 넣어,
  // 컴포넌트가 맨 처음 렌더링될 때만 createBulkTodos 함수가 호출되도록 함.
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  // const [todos, setTodos] = useState(createBulkTodos);
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: '리액트의 기초 알아보기',
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: '컴포넌트 스타일링해 보기',
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: '일정 관리 앱 만들어 보기',
  //     checked: false,
  //   },
  // ]);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(2501);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      dispatch({ type: 'INSERT', todo });
      // setTodos(todos.concat(todo));
      // setTodos(todos => todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
    },[])

  // const onRemove = useCallback(id => {
  //     setTodos(todos.filter(todo => todo.id !== id));
  //   }, [todos],
  // )
  const onRemove = useCallback(id => {
    dispatch({ type: 'REMOVE', id });
    // setTodos(todos => todos.filter(todo => todo.id !== id));
    }, []);

  // const onToggle = useCallback(
  //   id => {
  //     setTodos(
  //       todos.map(todo =>
  //         todo.id === id ? { ...todo, checked: !todo.checked } : todo,
  //       ),
  //     );
  //   },
  //   [todos],
  // )
  const onToggle = useCallback(id => {
    dispatch({ type: 'TOGGLE', id });
    // setTodos(todos =>
    //   todos.map(todo =>
    //       todo.id === id ? {...todo, checked: !todo.checked} : todo,
    //   ),
    // );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  )
};

export default App;