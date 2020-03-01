import React, { Fragment } from 'react';
import { createStore } from 'redux';

const initialState = {
  value: 0,
};

const INCREMENT = 'INCREMENT';

export const increment = () => (
  {
    type: INCREMENT,
  }
);
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    default:
      return {
        ...state,
      };
  }
};
const store = createStore(reducer);

const Index = () => {
  const state = store.getState();

  return (
    <Fragment>
      <div id="cotent">
        <div className="container">
          {state.value}
          <button onClick={() => store.dispatch(increment())} type="button">증가</button>
        </div>
      </div>
      <style jsx>
        {`
        .container {
          height:100px;
          margin: 0 auto;
          width: 1200px;
          overflow:hidden;
        }  
        `}
      </style>
    </Fragment>
  );
};

export default Index;
