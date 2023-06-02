import { GlobalReset } from "./styles/reset";
import { GlobalStyles } from "./styles/global";
import { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { TotalMoney } from "./components/TotalMoney";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [items, setItems] = useState([]);

    const handleAddItem = (newItem) => {
        const { textDescription, value, valueType } = newItem;

        if (!textDescription || textDescription.trim() === "" || !value || value.trim() === "") {
            toast.warning('Preencha todos os campos', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        toast.success('Valor adicionado com sucesso!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        const numericValue = Number(value.replace(/\D/g, ""));
        const formattedItem = {
            textDescription,
            value: numericValue,
            valueType: valueType,
        };
        setItems((prevItems) => [...prevItems, formattedItem]);
    };


    const valueEntry = items
        .filter((item) => item.valueType === "Entrada")
        .reduce((itemInit, itemFinal) => {
            return itemInit + Number(itemFinal.value);
        }, 0);

    const valueExit = items
        .filter((item) => item.valueType === "Saída")
        .reduce((itemInit, itemFinal) => {
            return itemInit + Number(itemFinal.value);
        }, 0);


    const totalValue = valueEntry - valueExit;

    return (
        <>
            <GlobalReset />
            <GlobalStyles />
            <Header />
            <main>
                <section>
                    <Form onAddItem={handleAddItem} />
                    <TotalMoney>{totalValue.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}</TotalMoney>
                </section>
                <List items={items} setItems={setItems} />
            </main>
            <ToastContainer />
        </>
    );
};

export default App;
