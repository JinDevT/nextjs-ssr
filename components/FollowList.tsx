import React, { useMemo } from "react";

import { List, Button, Card } from "antd";
import { StopOutlined } from "@ant-design/icons";
import styled from "styled-components";

interface Props {
  header: string;
  data: {
    nickname: string;
  }[];
}
function FollowList({ header, data }: Props) {
  const styles = useMemo(() => ({ marginBottom: 20 }), []);
  return (
    <List
      style={styles}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <div style={{ textAlign: "center", margin: "10px 0" }}>
          <Button>더보기</Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={item => (
        <ListItems style={{ marginTop: 20 }}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </ListItems>
      )}
    />
  );
}

const ListItems = styled(List.Item)`
  margin-top: 20px;
`;

export default FollowList;
