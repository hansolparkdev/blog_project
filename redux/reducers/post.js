import axios from 'axios';

function getPostAPI(postId) {
  console.log(postId);
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  // return axios.get('../');
}

const initialState = {
  pending: false,
  error: false,
  data: {
    title: '',
    body: '',
  },
};

const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

export const getPost = (postId) => (dispatch) => {
  // 먼저, 요청이 시작했다는것을 알립니다
  console.log('test');
  dispatch({ type: GET_POST_PENDING });

  // 요청을 시작합니다
  // 여기서 만든 promise 를 return 해줘야, 나중에 컴포넌트에서 호출 할 때 getPost().then(...) 을 할 수 있습니다
  return getPostAPI(postId).then(
    (response) => {
      // 요청이 성공했을경우, 서버 응답내용을 payload 로 설정하여 GET_POST_SUCCESS 액션을 디스패치합니다.
      console.log(response);
      dispatch({
        type: GET_POST_SUCCESS,
        payload: response,
      });
    },
  ).catch((error) => {
    // 에러가 발생했을 경우, 에로 내용을 payload 로 설정하여 GET_POST_FAILURE 액션을 디스패치합니다.
    console.log(error);
    dispatch({
      type: GET_POST_FAILURE,
      payload: error,
    });
  });
};

const handleAction = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_PENDING: {
      return {
        ...state,
        pending: true,
        error: false,
      };
    }
    case GET_POST_SUCCESS: {
      const { title, body } = action.payload.data;
      return {
        ...state,
        pending: false,
        data: {
          title, body,
        },
      };
    }
    case GET_POST_FAILURE: {
      return {
        ...state,
        pending: false,
        error: true,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default handleAction;
