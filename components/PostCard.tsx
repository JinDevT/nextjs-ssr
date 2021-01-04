import React from "react";
import { PostsState } from "../@type/post";
import { Card, Popover, Button } from "antd";
import {
  RetweetOutlined,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import ButtonGroup from "antd/lib/button/button-group";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import Avatar from "antd/lib/avatar/avatar";
import PostImages from "./PostImages";
interface Props {
  post: PostsState;
}
function PostCard({ post }: Props) {
  console.log("postssssss: ", post);
  const id = useSelector((state: RootState) => state.user.me?.id);
  // const id = me?.id -> 옵셔널 체이닝 문법: 없으면 undefined를 명시
  return (
    <div>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          <HeartOutlined key="heart" />,
          <MessageOutlined key="comment" />,
          <Popover
            key="more"
            content={[
              <Button.Group>
                {id && post.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>,
            ]}
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content}
        />
      </Card>
    </div>
  );
}

export default PostCard;
