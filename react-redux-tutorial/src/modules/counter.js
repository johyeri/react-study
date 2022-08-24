// 액션타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 만들기
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// counter 모듈의 초기 상태와 리듀서 함수 만들기
const initialState = {
  number: 0
};

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1
      };
    case DECREASE:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
}

export default counter;