import { useSelector } from "react-redux"
import IranClock from "../utils/IranClock"

export default function History() {

    const historyPay = useSelector(state => state.addCard.historyCard)


    const showHistory = historyPay.map((e) => {
        return (
            <div key={`container${e.id}`} className="bg-[#0000ff18] p-5 rounded-xl border-2 border-blue-700 mb-3">
                <div key={`iamges${e.id}`} className="flex justify-between">
                    <img key={`image${e.id}`} className="rounded-sm" src={e.imgCard} alt="" />
                    <img key={`desImage${e.id}`} className="rounded-sm" src={e.imgrDes} alt="" />
                </div>
                <div className="flex justify-between">
                    <div key={`cardNumber${e.id}`} >From: {e.numberCard}</div>
                    <div key={`desNumber${e.id}`} >To Des: {e.numberDes}</div>
                </div>
                <div key={`amount&Date${e.id}`} className="flex justify-between items-center">
                    <div key={`amount${e.id}`} className="text-center">Amount $ {e.amounteDes}</div>
                    <div key={`date${e.id}`} >Date: {e.thisTime}</div>
                </div>
            </div>
        )
    })


    if (historyPay.length != 0) {
        return (
            <div className="p-10 w-9/12 h-4/5 overflow-x-auto">
                <IranClock />
                <div className="shadow-inner  p-3">
                    {showHistory}
                </div>
            </div>
        )
    } else {
        return (
            <div className="m-1 p-10 w-9/12 h-4/5 flex flex-col justify-center items-center text-7xl font-bold drop-shadow-2xl shadow-sm">
                <IranClock />
                <p>No History</p>
            </div>
        )
    }
}