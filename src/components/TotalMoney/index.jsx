import { StyledTotalMoney } from "./style";
import { TextStyleH1, TextStyleP, TextStyleValue } from "../../styles/fonts";

export const TotalMoney = ({ children }) => {
    return (
        <StyledTotalMoney>
            <div>
                <TextStyleH1>Valor Total:</TextStyleH1>
                <TextStyleP>O valor se refere ao saldo</TextStyleP>
            </div>
            <TextStyleValue>{children}</TextStyleValue>
        </StyledTotalMoney>
    );
};
