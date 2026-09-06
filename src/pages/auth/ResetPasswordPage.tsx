import React, { useState } from 'react';
import { Form, Input, Button, message, Typography } from 'antd';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { LockOutlined, CheckCircleFilled } from '@ant-design/icons';
import AuthLayout from '../../components/auth/AuthLayout';
import { authService } from '../../services/authService';

const { Text } = Typography;

const ResetPasswordPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // Later we can get the token from URL for backend validation
  const token = searchParams.get('token');

  const onFinish = async (values: { password: string }) => {
    setLoading(true);
    try {
      // Pass token along with new password
      await authService.resetPassword(values.password, token || 'mock-token');
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
        title="Đặt lại mật khẩu thành công" 
        subtitle=""
      >
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{ fontSize: 64, color: 'var(--success-color, #52c41a)', marginBottom: 16 }}>
            <CheckCircleFilled />
          </div>
          <Text style={{ display: 'block', marginBottom: 24, fontSize: 16 }}>
            Mật khẩu của bạn đã được cập nhật.<br/>Bạn có thể đăng nhập bằng mật khẩu mới.
          </Text>
          <Button 
            type="primary" 
            className="auth-submit-btn"
            onClick={() => navigate('/login')}
          >
            Đăng nhập ngay
          </Button>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout 
      title="Đặt lại mật khẩu" 
      subtitle="Vui lòng nhập mật khẩu mới cho tài khoản của bạn."
    >
      <Form
        name="reset_password_form"
        className="auth-form"
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
      >
        <Form.Item
          label="Mật khẩu mới"
          name="password"
          rules={[
            { required: true, message: 'Vui lòng nhập mật khẩu mới!' },
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
          label="Xác nhận mật khẩu mới"
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Vui lòng xác nhận mật khẩu mới!' },
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

        <Form.Item style={{ marginBottom: 0, marginTop: 12 }}>
          <Button 
            type="primary" 
            htmlType="submit" 
            className="auth-submit-btn"
            loading={loading}
          >
            Đặt lại mật khẩu
          </Button>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
};

export default ResetPasswordPage;
