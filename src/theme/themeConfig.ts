import type { ThemeConfig } from 'antd';

export const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: '#008FD5',
    colorBgLayout: '#F7F9FF',
    colorBgContainer: '#FFFFFF',
    colorBorder: '#DFE3E9',
    colorTextBase: '#181C20',
    fontFamily: 'Inter, "Segoe UI", system-ui, sans-serif',
    borderRadius: 8,
    wireframe: false,
  },
  components: {
    Card: {
      borderRadiusLG: 12,
      paddingLG: 24,
    },
    Button: {
      borderRadius: 8,
      controlHeightLG: 40,
    },
  },
};
