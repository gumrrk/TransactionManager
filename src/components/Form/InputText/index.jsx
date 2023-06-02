import { StyledInput } from "./style";
import { TextStyleLabel, TextStyleAfter } from "../../../styles/fonts";

export const InputText = (props) => {

    const handleChange = (event) => {
        const { name, value } = event.target;
        props.onChange(name, value);
    };

    return (
        <StyledInput>
            <TextStyleLabel htmlFor="textDescription">{props.tag}</TextStyleLabel>
            <input
                name="textDescription"
                type="text"
                placeholder={props.placeholder}
                onChange={handleChange}
            />
            {props.after && <TextStyleAfter>{props.after}</TextStyleAfter>}
        </StyledInput>
    );
};