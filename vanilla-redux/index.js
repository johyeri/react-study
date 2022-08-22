import { configureStore, createSlice } from 'redux';

// DOM 노드를 가리키는 값을 미리 선언한다.
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('.increase');
const btnDecrease = document.querySelector('.decrease');

//액션은 고유한 값이므로 대문자로 작성한다. 이름이 중복되지 않도록 주의한다.
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 객체르 만드는 액션 생성 함수를 작성한다.
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초깃값 설정
const initialState = {
  toggle: false,
  counter: 0
}

/* 리듀서 함수 정의
 * 리듀서는 변화를 일으키는 함수이고, 파라미터로 state 와 action 값을 받아온다. */
// state 가 undefined 일 때는 initialState 를 기본값으로 사용할것
function reducer(state = initialState, action) {
  // action.type 에 따라 다른 작업을 처리함
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // 불변성을 유지시킨다
        toggle: !state.toggle
      };
    case INCREASE:
      return {
        ...state,
        counter: action.counter + action.difference
      };
    case DECREASE:
      return {
        ...state,
        counter: action.counter - 1
      }
    default:
      return state;
  }
}

// 스토어 만들기
/* 대체된 스토어들
 * createStore -> configureStore
 * reducer -> createSlice */
const store = configureStore(createSlice);