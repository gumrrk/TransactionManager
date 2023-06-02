import { StyledInput } from "./style";
import { TextStyleLabel, TextStyleAfter } from "../../../styles/fonts";

export const InputNumber = (props) => {
    const handleChangeValue = (event) => {
        const { name, value } = event.target;
        props.onChangeValue(name, value);
    };

    return (
        <StyledInput>
            <TextStyleLabel htmlFor="value">{props.tag}</TextStyleLabel>
            <input
                name="value"
                type="number"
                placeholder={props.placeholder}
                onChange={handleChangeValue}
                value={props.value}
            />
            {props.after && <TextStyleAfter>{props.after}</TextStyleAfter>}
        </StyledInput>
    );
};
