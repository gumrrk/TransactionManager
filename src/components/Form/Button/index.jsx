import { StyledButton } from "./style";
import { TextStyleButton } from "../../../styles/fonts";

export const Button = ({ onClick }) => {
    const handleButtonClick = (event) => {
        event.preventDefault();
        onClick();
    };

    return (
        <StyledButton>
            <TextStyleButton type="submit" onClick={handleButtonClick}>
                Inserir valor
            </TextStyleButton>
        </StyledButton>
    );
};
