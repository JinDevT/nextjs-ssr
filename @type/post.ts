export interface PostState {
  id: number;
  User: {
    id: number;
    nickname: string;
  };
  content: string;
  Comments: {
    User: {
      nickname: string;
    };
    content: string;
  }[];
}

export type PostsState = PostState[];
