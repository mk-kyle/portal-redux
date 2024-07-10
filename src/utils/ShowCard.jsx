import { useSelector } from "react-redux"
import cardBgImg from '../Bank-Card.png'

function ShowCard() {

    const cards = useSelector(state => state.addCard.newCard)

    console.log(cards);

    const showCard = cards.map((e) => {
        const CardNumber = e.justShowNumberCard.match(/.{1,4}/g);
        const CardAmount = e.justShowAmountCard.match(/.{1,3}/g);
        return (
            <div className="bg-cover bg-[url(https://cardinsider.com/wp-content/uploads/2022/06/au-bank-lit-credit-card-1.png)] bg-no-repeat bg-center pt-28 p-14 h-96">
                <div className="bg-white rounded-md pl-2">Card Name:</div>
                <div className="bg-white rounded-md pl-2 mb-4">{e.nameCard}</div>
                <div className="bg-white rounded-md pl-2">Card Number:</div>
                <div className="bg-white rounded-md pl-2 mb-4">{CardNumber.join(' ')}</div>
                <div className="bg-white rounded-md pl-2 mb-4">Cvv2: {e.cvvCard}</div>
                <div className="flex">
                    <div className="bg-white rounded-md pl-2 mb-4">Expory Date: {e.yearCard} / </div>
                    <div className="bg-white rounded-md pl-2">{e.monthCard}</div>
                </div>
                <div className="bg-white rounded-md pl-2">$ {CardAmount.join(',')}</div>
            </div>
        )
    })

    return (
        <div>{showCard}</div>
    )
}

export default ShowCard