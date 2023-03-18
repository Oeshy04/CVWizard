import React, { useState } from 'react';
import { Form, Input, Button, message,Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import "../resources/coverletter.css"
import DefaultLayout from '../components/DefaultLayout';


const { TextArea } = Input;

const CoverLetterForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const res = await axios.post('/api/coverletters', values);
      setLoading(false);
      message.success(res.data.message);
      form.resetFields();
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message);
    }
  };

  return (
    <DefaultLayout>
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Form.Item name="title" label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="content" label="Content" rules={[{ required: true }]}>
        <TextArea rows={6} />
      </Form.Item>
      <Form.Item
        name={['cv', 'file']}
        label="CV"
        valuePropName="fileList"
        getValueFromEvent={(e) =>
          Array.isArray(e) ? e : e && e.fileList
        }
        rules={[{ required: true, message: 'Please upload your CV' }]}
      >
        <Upload name="cv" action="/api/upload" listType="picture">
          <Button icon={<UploadOutlined />}>Upload CV</Button>
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </DefaultLayout>
  );
};

export default CoverLetterForm;
