export interface PostState {
  id: number;
  user: {
    id: number;
    nickname: string;
  };
  contnet: string;
  comments: {
    nickname: string;
    cotent: string;
  };
}
