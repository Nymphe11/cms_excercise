import { useState } from 'react';
import PageTitle from '../components/PageTitle';
import { Form } from 'react-bootstrap';

const sendData = [
  { label: '이메일로 수신' },
  { label: '카톡으로 수신' },
  { label: '전화번호로 수신' },
];

const MassageManager = () => {
  return (
    <article>
      <PageTitle
        title="알림 및 메세지"
        desc="알림 및 메세지를 발송하는 페이지 입니다."
      />
      <div>
        {sendData.map((item) => (
          <Form.Check type="radio" label={item.label} aria-label="radio 1" />
        ))}
      </div>
    </article>
  );
};

export default MassageManager;