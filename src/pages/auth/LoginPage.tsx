import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import AuthLayout from '../../components/auth/AuthLayout';
import { authService } from '../../services/authService';
import { useAuth } from '../../contexts/AuthContext';

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const onFinish = async (values: { email: string; password: string }) => {
    setLoading(true);
    try {
      const response = await authService.login(values.email, values.password);
      login(response.token, response.user);
      message.success('Đăng nhập thành công!');
      navigate('/dashboard');
    } catch {
      message.error('Email hoặc mật khẩu không đúng!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout 
      title="Đăng nhập" 
      subtitle="Chào mừng trở lại! Vui lòng đăng nhập vào tài khoản của bạn."
    >
      <Form
        name="login_form"
        className="auth-form"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        requiredMark={false}
      >
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
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
        >
          <Input.Password 
            prefix={<LockOutlined style={{ color: 'var(--text-secondary)' }} />} 
            placeholder="••••••••" 
            size="large"
          />
        </Form.Item>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Ghi nhớ đăng nhập</Checkbox>
          </Form.Item>
          
          <Link to="/forgot-password" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>
            Quên mật khẩu?
          </Link>
        </div>

        <Form.Item style={{ marginBottom: 0 }}>
          <Button 
            type="primary" 
            htmlType="submit" 
            className="auth-submit-btn"
            loading={loading}
          >
            Đăng nhập
          </Button>
        </Form.Item>
        
        <div className="auth-footer">
          Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default LoginPage;
