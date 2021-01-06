import React, { useState, useCallback } from "react";
import { PostsState, PostState } from "../@type/post";
import { Card, Popover, Button, List, Comment } from "antd";
import {
  RetweetOutlined,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import Avatar from "antd/lib/avatar/avatar";
import PostImages from "./PostImages";
import CommentForm from "./CommentForm";
interface Props {
  post: PostState;
}
function PostCard({ post }: Props) {
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const id = useSelector((state: RootState) => state.user.me?.id);
  // const id = me?.id -> 옵셔널 체이닝 문법: 없으면 undefined를 명시
  // 옵셔널 체이닝 필요한 이유
  // 1. 브라우저에서 동작하는 코드를 개발할 때, 페이지에 존재하지 않는 요소에 접근해 요소의 정보를 가져오려 할 때
  // 2. 사용자가 여러 명 있는데 그중 몇 명은 주소 정보를 가지고 있지 않다.
  // let user = {}; // 주소 정보가 없는 사용자
  // alert(user.address.street) // TypeError: Cannot read property 'street' of undefined
  // 옵셔널 체이닝 문법이 등장하기 전에는 alert( user && user.address && user.address.street ); 식으로 처리했다.

  // ?.은 ?.'앞'의 평가 대상이 undefined 나 null 이면 평가를 멈추고 undefined를 반환
  // 위의 코드를 옵셔널 체이닝을 사용하면
  // alert(user?.address?.street); 로 사용 가능
  const onToggleLike = useCallback(() => {
    setLiked(prev => !prev);
    // true false를 조정할 떄 이런식으로!
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
      {commentFormOpened && (
        <div>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={item => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
    </div>
  );
}

export default PostCard;
