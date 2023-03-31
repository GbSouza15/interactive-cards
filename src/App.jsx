import Form from "./Form.jsx";
import { useState } from "react";
import { Cards } from "./Cards.jsx";
import bg from '../images/bg-main-mobile.png'

function App() {

    const [cardName, setCardName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [dateMM, setDateMM] = useState('')
    const [dateYY, setDateYY] = useState('')
    const [cvc, setCvc] = useState('')

    return (
        <div className="App font-spacegrotesk min-[1024px]:flex">
            <img className="w-[100%] h-[15rem] min-[1024px]:h-[100vh] min-[1024px]:w-[26rem]" src={bg}/>
            <Cards
                setName={cardName}
                setNumber={cardNumber}
                setDateMM={dateMM}
                setDateYY={dateYY}
                setCvc={cvc}
            />

            <Form
                catchName={(e) => setCardName(e)} sendName={cardName}
                catchNumber={(e) => setCardNumber(e)} sendNumber={cardNumber}
                catchDateMM={(e) => setDateMM(e)} sendDateMM={dateMM}
                catchDateYY={(e) => setDateYY(e)} sendDateYY={dateYY}
                catchCvc={(e) => setCvc(e)} sendCvc={cvc}
            />
        </div>
    )
}

export default App
