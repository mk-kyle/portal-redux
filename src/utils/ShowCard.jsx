import { useSelector, useDispatch } from "react-redux"
import { sendCardToPayHandler } from "../redux/addCardSlice"
import cardIcon from '../kindpng_6039982.png'


function ShowCard() {


    const cards = useSelector(state => state.addCard.newCard)
    const dispatch = useDispatch()

    const showCard = cards.map((e) => {
        let sendCardObj = e
        const numberCard = e.showNumberCard.match(/.{1,4}/g);
        const showNumberCard = numberCard.join(' ')
        return (
            <div>
                <div key={`cardContainer${e.id}`} onClick={() => dispatch(sendCardToPayHandler(sendCardObj))} className="w-52 mx-auto p-5 border-2 rounded-lg h-72 relative -top-[120px] bg-white flex flex-col justify-between">
                    <div className="flex justify-between mb-4">
                        <img className="rotate-90 w-9" src={cardIcon} alt="" />
                        <img key={`image${e.id}`} className="rounded-full right-2 w-9 border-2 " src={e.imgCard} alt="" />
                    </div>
                    <div>
                        <div className="font-bold">Card Name:</div>
                        <div key={`cardName2${e.id}`} className=" rounded-md pl-2 mb-4 flex justify-between items-center">{e.nameCard}
                        </div>
                        <div key={`cardNumber1${e.id}`} className=" rounded-md pl-2 font-bold">Card Number:</div>
                        <div key={`cardNumber2${e.id}`} className=" rounded-md pl-2 mb-4">{showNumberCard}</div>
                    </div>
                </div>
                <div className="w-52 mx-auto p-5 border-2 rounded-lg relative -top-[108px] flex flex-col gap-3">
                    <div className="flex justify-between ">
                        <div className="font-bold">Cvv2: </div>
                        <div key={`cvv2${e.id}`} className=" rounded-md pl-2 ">{e.cvvCard}</div>
                    </div>
                    <div key={`date${e.id}`} className="flex justify-between">
                        <div className="font-bold">Date: </div>
                        <div className="flex">
                            <div key={`year${e.id}`} className=" rounded-md pl-2">{e.yearCard} / </div>
                            <div key={`month${e.id}`} className=" rounded-md pl-2">{e.monthCard}</div>
                        </div>
                    </div>
                </div>
                <div className="w-52 mx-auto p-3 border-2 rounded-lg relative -top-[95px] flex justify-between ">
                    <div className="font-bold">Amount:</div>
                    <div key={`Amount${e.id}`} className=" rounded-md pl-2">$ {e.amountCard}</div>
                </div>
            </div>
        )
    })


    if (cards.length != 0) {
        return (
            <div className="h-4/5 bg-gray-400 rounded-lg flex p-10 gap-10">
                {showCard}
            </div>
        )
    } else {
        return (
            <div className="flex justify-center items-center text-4xl leading-30 font-bold drop-shadow-2xl h-4/5 bg-gray-400 rounded-lg p-10">
                <div className="w-52 mx-auto p-5 border-2 rounded-lg h-72 relative -top-[140px] bg-white ">
                    <img className="rotate-90 w-9" src={cardIcon} alt="" />
                    <p className="text-center mt-10">No Card</p>
                </div>
            </div>
        )
    }
}

export default ShowCard