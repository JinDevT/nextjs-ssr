export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "JinDev",
      },
      content: "첫 번째 게시글",
      Images: [
        {
          src: "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "우와 개정판이 나왔군요~",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "얼른 사고싶어요~",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST_REQUEST = "POST/ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "POST/ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "POST/ADD_POST_FAILURE";

export const addPostAction = data => {
  return {
    type: ADD_POST_REQUEST,
    data,
  };
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [...state.mainPosts],
        postAdded: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        postAddes: false,
      };
    default:
      return state;
  }
};

export default postReducer;
