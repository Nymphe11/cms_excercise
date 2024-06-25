import Search from 'antd/es/transfer/search';
import PageTitle from '../components/PageTitle';
import { profileImages } from '../components/ProfileImg';
import {
  ListGroup,
  Button,
  Table,
  Col,
  Row,
  Tab,
  Image,
} from 'react-bootstrap';
import { useState } from 'react';

const userData = [
  {
    name: '사용자1',
    age: 24,
    address: '서울시 강남구',
    email: 'a@a.a',
    profileImg: profileImages.user1,
    eventKey: '#link1',
  },
  {
    name: '사용자2',
    age: 41,
    address: '경기도 성남시',
    email: 'b@b.b',
    profileImg: profileImages.user2,
    eventKey: '#link2',
  },
];

const RecentActivity = () => {
  const [searchTerm, serSearchTerm] = useState('');

  const filteredUserData = userData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    serSearchTerm(e.target.value);
  };

  return (
    <article>
      <PageTitle
        title="최근 활동 내역"
        desc="사용자의 최근 활동 내역을 볼 수 있는 페이지 입니다."
      />
      <div style={{ paddingBottom: 30 }}>
        <Search
          placeholder="사용자명 검색"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup>
              {filteredUserData.map((item, index) => (
                <ListGroup.Item action href={item.eventKey} key={index}>
                  {item.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              {filteredUserData.map((item, index) => (
                <Tab.Pane eventKey={item.eventKey} key={index}>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>이름</td>
                        <td>{item.name}</td>
                      </tr>
                      <tr>
                        <td>나이</td>
                        <td>{item.age}</td>
                      </tr>
                      <tr>
                        <td>주소</td>
                        <td>{item.address}</td>
                      </tr>
                      <tr>
                        <td>이메일</td>
                        <td>{item.email}</td>
                      </tr>
                      <tr>
                        <td>프로필 이미지</td>
                        <td>
                          <Image
                            src={item.profileImg}
                            style={{ width: '100px', height: '100px' }}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </article>
  );
};

export default RecentActivity;
