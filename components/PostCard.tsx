import React, { useState, useCallback } from "react";
import { PostsState } from "../@type/post";
import { Card, Popover, Button } from "antd";
import {
  RetweetOutlined,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
  HeartTwoTone,
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
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const id = useSelector((state: RootState) => state.user.me?.id);
  // const id = me?.id -> 옵셔널 체이닝 문법: 없으면 undefined를 명시

  const onToggleLike = useCallback(() => {
    setLiked(prev => !prev); // true false를 조정할 떄 이런식으로!
    // 이전 데이트 기반으로 다음 데이터를 만든다.
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened(prev => !prev);
  }, []);
  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          // {
          //   liked ?
          //   <HeartTwoTone key="heart" />
          //   :  <HeartOutlined key="heart" />,
          liked ? (
            <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ),

          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={[
              <Button.Group>
                {id && post.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button>삭제</Button>
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
      {commentFormOpened && <div>댓글부분</div>}
    </div>
  );
}

export default PostCard;
