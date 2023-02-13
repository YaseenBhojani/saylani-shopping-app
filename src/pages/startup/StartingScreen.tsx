import { Button, Image, Typography } from "antd";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

const { Title, Paragraph } = Typography;

const StartingScreen = () => {
  return (
    <div className="starting-screen">
      <div className="intro">
        <Image src={Logo} preview={false} alt="Logo" />
        <Title>SAYLANI WELFARE</Title>
        <Paragraph className="para">ONLINE DISCOUNT STORE</Paragraph>
      </div>

      <Link to="/signIn">
        <Button type="primary" size="large">
          Set Started
        </Button>
      </Link>
    </div>
  );
};

export default StartingScreen;
