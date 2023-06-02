import { StyledForm } from "./style";
import { InputText } from "./InputText";
import { InputNumber } from "./InputNumber";
import { Select } from "./Select";
import { Button } from "./Button";
import { useState } from "react";

export const Form = ({ onAddItem }) => {
    const [inputValues, setInputValues] = useState({});

    const handleInputChange = (name, value) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleButtonClick = () => {
        onAddItem(inputValues);
    };

    return (
        <StyledForm>
            <InputText
                tag="Descrição"
                placeholder="Digite aqui sua descrição"
                after="Ex: Compra de roupas"
                onChange={handleInputChange}
                required
            />
            <InputNumber
                tag="Valor (R$)"
                placeholder="Insira um valor"
                onChangeValue={handleInputChange}
                required
            />
            <Select tag="Tipo de valor" onChange={handleInputChange} />
            <Button onClick={handleButtonClick} />
        </StyledForm>
    );
};
