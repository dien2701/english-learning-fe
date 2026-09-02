import { Button, Card, Typography } from "antd";
import "./App.css";

const { Title, Paragraph } = Typography;

function App() {
  return (
    <main className="welcome-page">
      <Card className="welcome-card" bordered={false}>
        <p className="eyebrow">EnglishAI</p>

        <Title level={1}>Website học tiếng Anh ứng dụng AI</Title>

        <Paragraph>
          Frontend đã sẵn sàng. Tiếp theo, chúng ta sẽ xây dựng Dashboard cho
          người học.
        </Paragraph>

        <Button type="primary" size="large">
          Bắt đầu xây dựng Dashboard
        </Button>
      </Card>
    </main>
  );
}

export default App;
