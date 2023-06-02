import { Card } from "./Card";
import { StyledList } from "./style";
import { TextStyleH1, TextStyleTitle2 } from "../../styles/fonts";

export const List = ({ items, setItems }) => {
    const handleRemoveItem = (index) => {
        setItems((prevItems) =>
            prevItems.reduce((updatedItems, item, i) => {
                if (i !== index) {
                    updatedItems.push(item);
                }
                return updatedItems;
            }, [])
        );
    };

    const reversedItems = [...items].reverse();

    return (
        <StyledList>
            <TextStyleH1>Resumo Financeiro</TextStyleH1>
            {reversedItems.length === 0 ? (
                <TextStyleTitle2>Você ainda não possui nenhum lançamento</TextStyleTitle2>
            ) : (
                <ul>
                    {reversedItems.map((item, index) => (
                        <Card
                            key={index}
                            description={item.textDescription}
                            type={item.valueType}
                            value={item.value}
                            onRemove={() => handleRemoveItem(items.length - index - 1)}
                        />
                    ))}
                </ul>
            )}
        </StyledList>
    );
};
