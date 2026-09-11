import React, { useState } from 'react';
import { Form, Input, Button, message, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { MailOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import AuthLayout from '../../components/auth/AuthLayout';
import { authService } from '../../services/authService';

const { Text } = Typography;

const ForgotPasswordPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState('');

  const onFinish = async (values: { email: string }) => {
    setLoading(true);
    setEmail(values.email);
    try {
      await authService.forgotPassword(values.email);
      setIsSuccess(true);
    } catch {
      message.error('Có lỗi xảy ra. Vui lòng thử lại!');
    } finally {
      setLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <AuthLayout 
        title="Kiểm tra email của bạn" 
        subtitle="Chúng tôi đã gửi liên kết đặt lại mật khẩu đến email của bạn."
      >
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <Text style={{ display: 'block', marginBottom: 16 }}>
            Email đã được gửi đến: <strong style={{ color: 'var(--primary-color)' }}>{email}</strong>
          </Text>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Button 
              type="primary" 
              className="auth-submit-btn"
              onClick={() => setIsSuccess(false)}
            >
              Gửi lại email
            </Button>
            <Link to="/login" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 8, color: 'var(--text-secondary)' }}>
              <ArrowLeftOutlined /> Quay lại đăng nhập
            </Link>
          </div>
          
          <div style={{ marginTop: 24, fontSize: 13, color: 'var(--text-secondary)' }}>
            <p>Môi trường dev: <Link to="/reset-password?token=mock-token">Đến trang Reset Password để test</Link></p>
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout 
      title="Quên mật khẩu?" 
      subtitle="Đừng lo lắng! Nhập email của bạn và chúng tôi sẽ gửi liên kết để đặt lại mật khẩu."
    >
      <Form
        name="forgot_password_form"
        className="auth-form"
        layout="vertical"
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

        <Form.Item style={{ marginBottom: 0, marginTop: 12 }}>
          <Button 
            type="primary" 
            htmlType="submit" 
            className="auth-submit-btn"
            loading={loading}
          >
            Gửi yêu cầu đặt lại mật khẩu
          </Button>
        </Form.Item>
        
        <div className="auth-footer" style={{ marginTop: 16 }}>
          <Link to="/login" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <ArrowLeftOutlined /> Quay lại đăng nhập
          </Link>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
