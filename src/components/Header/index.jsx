import { StyledHeader, StyledContainerHeader } from "./style";
import Logo from "../../assets/TransactionManager.svg";

export const Header = () => {
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <StyledHeader>
      <StyledContainerHeader>
        <img
          src={Logo}
          alt="Logotipo do Site onde há escrito Nu Kenzie, sendo Nu na cor rosa e Kenzie na cor preto"
          onClick={handleLogoClick}
        />
      </StyledContainerHeader>
    </StyledHeader>
  );
};
