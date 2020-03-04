import axios from 'axios';
// Action Types
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

// Action Creator
export const increment = () => ({
  type: INCREMENT_COUNTER,
});

export const decrement = () => ({
  type: DECREMENT_COUNTER,
});

// export const incrementAsync = () => (dispatch) => { // dispatch 를 파라미터로 가지는 함수를 리턴합니다.
//   setTimeout(() => {
//     // 1 초뒤 dispatch 합니다
//     dispatch(increment());
//   }, 1000);
// };

// export const decrementAsync = () => (dispatch) => { // dispatch 를 파라미터로 가지는 함수를 리턴합니다.
//   setTimeout(() => {
//     // 1 초뒤 dispatch 합니다
//     dispatch(decrement());
//   }, 1000);
// };

// export const incrementIfOdd = () => (dispatch, getState) => {
//   const { counter } = getState();
//   // console.log(counter);
//   if (counter.value >= 5) {
//     return;
//   }

//   dispatch(increment());
// };
