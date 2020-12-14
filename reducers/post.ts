export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "JinDevT",
      },
      content: "첫 번째 게시글 #해시태그",
      Comments: [
        {
          User: {
            nickname: "dev",
          },
          content: "우와",
        },
        {
          User: {
            nickname: "max",
          },
          content: "프론트 개발자",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "POST/ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터",
  User: {
    id: 1,
    nickname: "JinDevT",
  },
  Images: [],
  Comments: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default postReducer;
