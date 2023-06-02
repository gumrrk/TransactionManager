import { StyledCard, StyledDiv1, StyledDiv2 } from "./style";
import { TextStyleH1, TextStyleP } from "../../../styles/fonts";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Card = ({ index, description, type, value, onRemove }) => {
    const handleButtonRemove = () => {
        toast.error('Transação excluída', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        onRemove(index);
    };

    return (
        <StyledCard>
            <section datatype={type}>
                <StyledDiv1>
                    <TextStyleH1>{description}</TextStyleH1>
                    <TextStyleP>{type}</TextStyleP>
                </StyledDiv1>
                <StyledDiv2>
                    <TextStyleP fontColor="var(--color-grey-4)">{value.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}</TextStyleP>
                    <button onClick={handleButtonRemove}>Excluir</button>
                </StyledDiv2>
            </section>
        </StyledCard>
    );
};