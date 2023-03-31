import cardFront from '../images/bg-card-front.png'
import cardBack from '../images/bg-card-back.png'

export function Cards({ setName, setNumber, setDateMM, setDateYY, setCvc }) {
    return (
        <>
            <div className='card-back'>
                <img className="min-[1024px]:absolute min-[1024px]:top-[22rem] min-[1024px]:left-[12rem] min-[1024px]:w-[20rem] absolute top-[2rem] w-[17rem] right-5 min-[668px]:right-[7rem]" src={cardBack}/>
                <div>
                    <span className='text-black min-[1024px]:absolute min-[1024px]:top-[26.7rem] min-[1024px]:left-[27.8rem] absolute top-[5.8rem] right-[3.5rem] min-[668px]:right-[9rem]'>{setCvc || '000'}</span>
                </div>
            </div>

            <div className="card-front">
                <img className="min-[1024px]:absolute min-[1024px]:top-[10rem] min-[1024px]:left-[8rem] min-[1024px]:w-[20rem] absolute top-[8rem] w-[17rem] left-5 min-[668px]:left-[7rem]" src={cardFront}/>
                <div className='text-white'>
                    <span className='cardNumber min-[1024px]:top-[15rem] min-[1024px]:left-[9.5rem] absolute left-[3rem] top-[12.2rem] text-[1.2rem] min-[668px]:left-[8.5rem]'>{setNumber.length >= 1 ? setNumber.match(/.{1,4}/g).join(" ") : '0000 0000 0000 0000'}</span>
                    <span className='cardHoulderName min-[1024px]:top-[18rem] min-[1024px]:left-[9.5rem] absolute left-[3rem] top-[14.5rem] min-[668px]:left-[8.5rem]'>{setName || 'XXXXXXXXX'}</span>
                    <span className='cardExpDate min-[1024px]:top-[18rem] min-[1024px]:left-[23rem] absolute left-[13.3rem] top-[14.5rem] min-[668px]:left-[18.8rem]'>{setDateMM || '00'} / {setDateYY || '00'}</span>
                </div>
            </div>
        </>
    )
}