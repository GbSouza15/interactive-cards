export default function Form({ catchName, sendName, catchNumber, sendNumber, catchDateMM, sendDateMM, catchDateYY, sendDateYY, catchCvc, sendCvc }) {

    function handleClick(e) {
        e.preventDefault()
    }

    return (
        <form className="flex flex-col mt-[6rem] mx-auto my-0 px-5 gap-5 md:max-w-[458px] min-[1024px]:mt-[25vh]">
            <label className="flex flex-col gap-2">
                CARDHOULDER NAME
                <input value={sendName} onChange={(e) => catchName(e.target.value)} className="cardName border-[1px] border-gray-300 rounded-[.5rem] p-2 w-[100%]" type="text" placeholder="Ex. Gabriel Souza" maxLength='15'/>
            </label>
            <label className="flex flex-col">
                CARD NUMBER
                <input value={sendNumber} onChange={(e) => catchNumber(e.target.value)} className="cardNumber15 border-[1px] border-gray-300 rounded-[.5rem] p-2 w-[100%]" type="text" placeholder="Ex. 0000 0000 0000 0000" maxLength='16'/>
            </label>

            <div className="flex gap-5">
                <label className="flex flex-col">
                    EXP. DATE (MM/YY)
                    <div className="flex gap-5">
                        <input value={sendDateMM} onChange={(e) => catchDateMM(e.target.value)} className="cardExpDateMM border-[1px] border-gray-300 w-[4rem] rounded-[.5rem] p-2 w-[100%]" type="text" placeholder="MM" maxLength='2'/>
                        <input value={sendDateYY} onChange={(e) => catchDateYY(e.target.value)} className="cardExpDateYY border-[1px] border-gray-300 w-[4rem] rounded-[.5rem] p-2 w-[100%]" type="text" placeholder="YY" maxLength='2'/>
                    </div>
                </label>

                <label className="flex flex-col w-[100%]">
                    CVC
                    <input value={sendCvc} onChange={(e) => catchCvc(e.target.value)} className="cvcThis border-gray-300 border-[1px] rounded-[.5rem] p-2 w-[100%]" type="text" placeholder="Ex. 123" maxLength='3'/>
                </label>
            </div>

            <button className="btnSubmit bg-[#220930] text-white rounded-[.5rem] p-3" onClick={handleClick}>Confirm</button>
        </form>
    )
}