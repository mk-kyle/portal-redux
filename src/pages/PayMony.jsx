import { useSelector, useDispatch } from "react-redux"
import PaymonyHelper from "../utils/PaymonyHelper";
import { useState } from "react";
import MinuseTime from "../utils/MinuseTime";
import { payMonyHandler } from "../redux/addCardSlice";


function PayMony() {

  const [numberDes, setNumberDes] = useState('')
  const [amounteDes, setAmountDes] = useState('')
  const [imgrDes, seImgDes] = useState(null)

  const sendedCard = useSelector(state => state.addCard.sendCardToPay)
  const bankCode = useSelector(state => state.addCard.bankCode)
  const disPatch = useDispatch()


  const DestinationHandler = (e) => {
    if (e.target.value.length == 0 && e.which == 48) {
      e.preventDefault()
    } else if (e.target.value.length == 0 && e.which == 96) {
      e.preventDefault()
    }
    if (e.which !== 39 && e.which !== 37 && e.which !== 8 && e.which !== 46 && e.which !== 9 && e.which < 48 || e.which < 96 && e.which > 57 || e.which > 105) {
      e.preventDefault()
    }
  }

  const NumberDestinationHandler = (e) => {
    setNumberDes(e.target.value)
    const fourindex = e.target.value[0] + e.target.value[1] + e.target.value[2] + e.target.value[3]
    const findBank = bankCode.find((bank) => fourindex == bank.code)
    if (findBank) {
      bankCode.map((bank) => {
        if (bank.code == fourindex) {
          seImgDes(bank.url)
        }
      })
    } else {
      seImgDes(null)
    }
  }

  const amountPayDesHandler = (e) => {
    setAmountDes(e.target.value)
  }


  const now = new Date();

  const options = { timeZone: "Asia/Tehran" };

  const formattedDate = now.toLocaleDateString("fa-IR", {
    ...options,
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });


  const thisTime = formattedDate

  let payMonyObj
  if (sendedCard) {
    payMonyObj = {
      sendedCardId: sendedCard.id,
      amountCard: sendedCard.amountCard,
      amounteDes: amounteDes,
      imgrDes: imgrDes,
      imgCard: sendedCard.imgCard,
      numberDes: numberDes,
      numberCard: sendedCard.numberCard,
      thisTime: thisTime,
    }
  }

  const clearInputs = (e) => {
    console.log('hi');
    setNumberDes('')
    setAmountDes('')
    seImgDes('')
  }

  const formHandler = (e) => {
    e.preventDefault()
    e.target[2].value = ''
    e.target[3].value = ''
    e.target[4].value = ''
  }


  if (sendedCard) {
    return (
      <div className="p-10 w-9/12 h-4/5 flex flex-col justify-end">
        <MinuseTime />
        <form action="" onSubmit={formHandler}>
          <input placeholder="Card Name" value={sendedCard.nameCard} readOnly type="text" className="border-2 rounded-lg block w-full h-12 pl-3 outline-none focus:bg-[#0d48a140] focus:border-blue-400 hover:bg-[#0d48a12f] mb-5" />
          <div className="relative flex items-center mb-5">
            <input placeholder="Card Number" value={sendedCard.numberCard} readOnly type="text" className="border-2 rounded-lg block w-full h-12 pl-3 outline-none focus:bg-[#0d48a140] focus:border-blue-400 hover:bg-[#0d48a12f]" />
            <img className="rounded-full absolute right-2 w-9 border-2" src={sendedCard.imgCard} alt="Bank Icon" />
          </div>
          <div className="relative flex items-center mb-5">
            <input placeholder="Card Number Destination" type="text" maxLength={16} onKeyDown={DestinationHandler} onChange={NumberDestinationHandler} className="border-2 rounded-lg block w-full h-12 pl-3 outline-none focus:bg-[#0d48a140] focus:border-blue-400 hover:bg-[#0d48a12f]" />
            {imgrDes && <img className="rounded-full absolute right-2 w-9 border-2" src={imgrDes} alt="Bank Icon" />}
          </div>
          <input placeholder="Password" type="password" maxLength={10} className="border-2 rounded-lg block w-full h-12 pl-3 outline-none focus:bg-[#0d48a140] focus:border-blue-400 hover:bg-[#0d48a12f] mb-5" />
          <input placeholder="Amount Destination" maxLength={10} onChange={amountPayDesHandler} type="text" className="border-2 rounded-lg block w-full h-12 pl-3 outline-none focus:bg-[#0d48a140] focus:border-blue-400 hover:bg-[#0d48a12f] mb-5" />
          <button onClick={() => {
            disPatch(payMonyHandler(payMonyObj))
            clearInputs()
          }} className="w-full h-12 bg-blue-700 rounded-lg text-white font-medium p-2">Pay Money</button>
        </form>
      </div>
    )
  } else {
    return (
      <PaymonyHelper />
    )
  }
}

export default PayMony