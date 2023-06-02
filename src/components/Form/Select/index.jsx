import { StyledSelect } from "./style";
import { useState, useEffect } from "react";
import { TextStyleLabel } from "../../../styles/fonts";

export const Select = ({ tag, onChange }) => {
    const [selectedValue, setSelectedValue] = useState("Entrada");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSelectedValue(value);
        onChange(name, value);
    };

    useEffect(() => {
        onChange("valueType", "Entrada");
    }, []);

    return (
        <StyledSelect>
            <TextStyleLabel htmlFor="selectValueType">{tag}</TextStyleLabel>
            <select name="valueType" id="selectValueType" onChange={handleChange} value={selectedValue}>
                <option value="Entrada">Entrada</option>
                <option value="Saída">Saída</option>
            </select>
        </StyledSelect>
    );
};
