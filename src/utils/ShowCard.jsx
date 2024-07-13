import { useSelector, useDispatch } from "react-redux"
import { sendCardToPayHandler } from "../redux/addCardSlice"


function ShowCard() {


    const cards = useSelector(state => state.addCard.newCard)
    const dispatch = useDispatch()

    const showCard = cards.map((e) => {
        let sendCardObj = e
        return (
            <div key={`cardContainer${e.id}`} onClick={() => dispatch(sendCardToPayHandler(sendCardObj))} className="bg-[fit] bg-[url(https://cardinsider.com/wp-content/uploads/2022/06/au-bank-lit-credit-card-1.png)] bg-no-repeat bg-center pt-28 p-12 h-96">
                <div key={`cardName2${e.id}`} className="bg-white rounded-md pl-2 mb-4 flex justify-between items-center">{e.nameCard}
                    <img key={`image${e.id}`} className="rounded-full right-2 w-9 border-2 " src={e.imgCard} alt="" /></div>
                <div key={`cardNumber1${e.id}`} className="bg-white rounded-md pl-2">Card Number:</div>
                <div key={`cardNumber2${e.id}`} className="bg-white rounded-md pl-2 mb-4">{e.numberCard}</div>
                <div key={`cvv2${e.id}`} className="bg-white rounded-md pl-2 mb-4">Cvv2: {e.cvvCard}</div>
                <div key={`date${e.id}`} className="flex">
                    <div key={`year${e.id}`} className="bg-white rounded-md pl-2 mb-4">Date: {e.yearCard} / </div>
                    <div key={`month${e.id}`} className="bg-white rounded-md pl-2">{e.monthCard}</div>
                </div>
                <div key={`Amount${e.id}`} className="bg-white rounded-md pl-2">$ {e.amountCard}</div>
            </div>
        )
    })


    if (cards.length != 0) {
        return (
            <div>
                {showCard}
                </div>
        )
    } else {
        return (
            <div className="flex justify-center items-center overflow-hidden text-5xl leading-30 h-80 font-bold drop-shadow-2xl">
                No Card
            </div>
        )
    }

}

export default ShowCard