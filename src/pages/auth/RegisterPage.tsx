import React, { useState } from 'react';
import { Form, Input, Button, message, Checkbox } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import AuthLayout from '../../components/auth/AuthLayout';
import { authService } from '../../services/authService';

const RegisterPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: { email: string; password: string; fullName: string }) => {
    setLoading(true);
    try {
      await authService.register({
        email: values.email,
        password: values.password,
        fullName: values.fullName
      });
      message.success('Đăng ký thành công! Vui lòng đăng nhập.');
      navigate('/login');
    } catch {
      message.error('Có lỗi xảy ra khi đăng ký!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout 
      title="Tạo tài khoản" 
      subtitle="Bắt đầu hành trình học tiếng Anh của bạn cùng EnglishAI."
    >
      <Form
        name="register_form"
        className="auth-form"
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
      >
        <Form.Item
          label="Họ và tên"
          name="fullName"
          rules={[
            { required: true, message: 'Vui lòng nhập họ và tên!' },
            { whitespace: true, message: 'Họ và tên không được chỉ chứa khoảng trắng!' }
          ]}
        >
          <Input 
            prefix={<UserOutlined style={{ color: 'var(--text-secondary)' }} />} 
            placeholder="Nguyễn Văn A" 
            size="large"
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Vui lòng nhập email!' },
            { type: 'email', message: 'Email không đúng định dạng!' }
          ]}
        >
          <Input 
            prefix={<MailOutlined style={{ color: 'var(--text-secondary)' }} />} 
            placeholder="nhap@email.com" 
            size="large"
          />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            { required: true, message: 'Vui lòng nhập mật khẩu!' },
            { min: 8, message: 'Mật khẩu phải có tối thiểu 8 ký tự!' }
          ]}
        >
          <Input.Password 
            prefix={<LockOutlined style={{ color: 'var(--text-secondary)' }} />} 
            placeholder="••••••••" 
            size="large"
          />
        </Form.Item>
        
        <Form.Item
          label="Xác nhận mật khẩu"
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Vui lòng xác nhận mật khẩu!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
              },
            }),
          ]}
        >
          <Input.Password 
            prefix={<LockOutlined style={{ color: 'var(--text-secondary)' }} />} 
            placeholder="••••••••" 
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Vui lòng đồng ý với điều khoản!')),
            },
          ]}
        >
          <Checkbox>Tôi đồng ý với các điều khoản và điều kiện</Checkbox>
        </Form.Item>

        <Form.Item style={{ marginBottom: 0, marginTop: 12 }}>
          <Button 
            type="primary" 
            htmlType="submit" 
            className="auth-submit-btn"
            loading={loading}
          >
            Đăng ký
          </Button>
        </Form.Item>
        
        <div className="auth-footer">
          Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default RegisterPage;
