import Header from "../Header";
import { Container } from "./styles";

interface Props {
  children: React.ReactNode;
  themeToggle: () => void;
}

const Layout = ({ children, themeToggle }: Props) => {
  return (
    <Container>
      <Header themeToggle={themeToggle}/>
      {children}
    </Container>
  );
};

export default Layout;
