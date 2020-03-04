/* eslint-disable no-nested-ternary */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
// import { connect, useDispatch, useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/actions/counterActions';
import * as postActions from '../redux/reducers/post';

// class App extends React.Component {
//   static getInitialProps({ store }) {}

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.props.incrementCounter} type="button">Increment</button>
//         <button onClick={this.props.decrementCounter} type="button">Decrement</button>
//         <h1>{this.props.counter}</h1>
//       </div>
//     );
//   }
// }

const App = () => {
  const { value } = useSelector((state) => state.counter, []);
  const { data, pending, error } = useSelector((state) => state.post, []);
  // console.log(aaa);
  const dispatch = useDispatch();
  // console.log(value);
  useEffect(() => {
    // console.log(postActions);
    console.log(value);
    dispatch(postActions.getPost(value));
  }, [value]);

  const aa = () => {
    dispatch(increment());
  };
  const bb = () => {
    dispatch(decrement());
  };
  return (
    <div>
      {value}
      <button type="button" onClick={aa}>증가</button>
      <button type="button" onClick={bb}>감소</button>
      { pending ? <h2>로딩중...</h2>
        : error ? <h1>에러발생!</h1> : (
          <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
          </div>
        )}
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   counter: state.counter.value,
// });

// const mapDispatchToProps = {
//   incrementCounter,
//   decrementCounter,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
