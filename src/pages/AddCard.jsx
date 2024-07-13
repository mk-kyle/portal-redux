import { useState } from "react";
import IranClock from "../utils/IranClock";
import { useSelector, useDispatch } from "react-redux";
import { addNewCard } from "../redux/addCardSlice";
import NavLinks from "../utils/NavLinks";


function AddCard() {
    const [nameCard, setNameCard] = useState('')
    const [numberCard, setnumberCard] = useState('')
    const [cvvCard, setCvvCard] = useState('')
    const [yearCard, setyearCard] = useState('')
    const [monthCard, setMounthCard] = useState('')
    const [amountCard, setAmountCard] = useState('')
    const [imgCard, setImgCard] = useState(null)

    const bankCode = useSelector(state => state.addCard.bankCode)
    const disPatch = useDispatch()


    const nameHandler = (e) => {
        if (e.which !== 39 && e.which !== 37 && e.which !== 8 && e.which !== 46 && e.which !== 9 && e.which < 65 || e.which > 90) {
            e.preventDefault()
        }
    }

    const cardNumberHandler = (e) => {
        if (e.target.value.length == 0 && e.which == 48) {
            e.preventDefault()
        } else if (e.target.value.length == 0 && e.which == 96) {
            e.preventDefault()
        }
        if (e.which !== 39 && e.which !== 37 && e.which !== 8 && e.which !== 46 && e.which !== 9 && e.which < 48 || e.which < 96 && e.which > 57 || e.which > 105) {
            e.preventDefault()
        }
    }

    const numberHandler = (e) => {
        if (e.which !== 39 && e.which !== 37 && e.which !== 8 && e.which !== 46 && e.which !== 9 && e.which < 48 || e.which < 96 && e.which > 57 || e.which > 105) {
            e.preventDefault()
        }
    }

    const cardNameHandler = (e) => {
        setNameCard(e.target.value)
    }

    const valueNumberHandler = (e) => {
        const fourindex = e.target.value[0] + e.target.value[1] + e.target.value[2] + e.target.value[3]
        const bankFindCode = bankCode.find((bank) => fourindex == bank.code)
        if (bankFindCode) {
            bankCode.map((bank) => {
                if (fourindex == bank.code) {
                    setImgCard(bank.url)
                }
            })
        } else {
            setImgCard(null)
        }
        setnumberCard(e.target.value)
    }

    const cvvHandler = (e) => {
        setCvvCard(e.target.value)
    }

    const yearHandler = (e) => {
        if (e.target.value == '00') {
            e.target.value = ''
        }
        setyearCard(e.target.value)
    }

    const dateYearHandler = (e) => {
        if (e.target.value < 10 && e.target.value.length == 1) {
            e.target.value = 0 + e.target.value
        } else if (e.target.value > 12) {
            e.target.value = 12
        }
        if (e.target.value == 0) {
            e.target.value = ''
        }
        setyearCard(e.target.value)
    }

    const monthHandler = (e) => {
        if (e.target.value == '00') {
            e.target.value = ''
        }
        setMounthCard(e.target.value)
    }

    const dateMonthHandler = (e) => {
        if (e.target.value < 10 && e.target.value.length == 1) {
            e.target.value = 0 + e.target.value
        } else if (e.target.value > 12) {
            e.target.value = 12
        }
        if (e.target.value == 0) {
            e.target.value = ''
        }
        setMounthCard(e.target.value)
    }


    const amountHandler = (e) => {
        setAmountCard(e.target.value)
    }


    const addCardObj = {
        id: Math.random() * 1000,
        nameCard: nameCard,
        showNumberCard: numberCard,
        numberCard: numberCard,
        cvvCard: cvvCard,
        yearCard: yearCard,
        monthCard: monthCard,
        amountCard: amountCard,
        imgCard: imgCard,
    }

    const clearInputs = (e) => {
        e.target[0].value = ''
        e.target[1].value = ''
        e.target[2].value = ''
        e.target[3].value = ''
        e.target[4].value = ''
        e.target[5].value = ''
        e.preventDefault()
    }


    return (
        <div className="p-10 w-9/12 h-5/6 flex flex-col justify-start">
            <div className="flex justify-between items-end mb-5">
                <NavLinks />
                <IranClock />
            </div>
            <form action="" onSubmit={clearInputs}>
                <input maxLength={20} placeholder="Card Name" type="text" onChange={cardNameHandler} onKeyDown={nameHandler} className="border-2 rounded-lg block w-full h-12 pl-3 outline-none focus:bg-[#0d48a140] focus:border-blue-400 hover:bg-[#0d48a12f] mb-5" />
                <div className="flex justify-center items-center mb-5 relative">
                    <input maxLength={16} placeholder="Card Number" type="text" onChange={valueNumberHandler} onKeyDown={cardNumberHandler} className="border-2 rounded-lg block w-full h-12 pl-3 outline-none focus:bg-[#0d48a140] focus:border-blue-400 hover:bg-[#0d48a12f]" />
                    {imgCard && <img className="rounded-full absolute right-2 w-9 border-2" src={imgCard} alt="" />}
                </div>
                <div className="flex justify-between items-center mb-5">
                    <div>
                        <span>Cvv2 Number: </span>
                        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing?</p>
                    </div>
                    <input onChange={cvvHandler} onKeyDown={cardNumberHandler} maxLength={4} placeholder="Cvv2" type="text" className="h-12 w-2/4 border-2 rounded-lg pl-3 outline-none focus:bg-[#0d48a140] focus:border-blue-400 hover:bg-[#0d48a12f] text-center" />
                </div>
                <div className="flex justify-between items-center mb-5">
                    <div>
                        <div>Expiry Date: </div>
                        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing?</p>
                    </div>
                    <div className="w-2/4 flex justify-between items-center">
                        <input maxLength={2} placeholder="Year" type="text" onBlur={dateYearHandler} onChange={yearHandler} onKeyDown={numberHandler} className="border-2 rounded-lg pl-3 outline-none focus:bg-[#0d48a140] focus:border-blue-400 hover:bg-[#0d48a12f] h-12 text-center" />
                        <span className="text-2xl"> / </span>
                        <input maxLength={2} placeholder="Month" type="text" onBlur={dateMonthHandler} onChange={monthHandler} onKeyDown={numberHandler} className="border-2 rounded-lg pl-3 outline-none focus:bg-[#0d48a140] focus:border-blue-400 hover:bg-[#0d48a12f] h-12 text-center" />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <div>Amount:</div>
                        <p className="text-sm text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing?</p>
                    </div>
                    <input maxLength={10} placeholder="Amount" type="text" onChange={amountHandler} onKeyDown={cardNumberHandler} className="w-2/4 h-12 border-2 rounded-lg pl-3 outline-none focus:bg-[#0d48a140] focus:border-blue-400 hover:bg-[#0d48a12f]" />
                </div>
                <button onClick={() => disPatch(addNewCard(addCardObj))} className="w-full h-12 mt-5 bg-blue-700 rounded-lg text-white font-medium p-2">ADD CARD</button>
            </form>
        </div>
    )
}

export default AddCard