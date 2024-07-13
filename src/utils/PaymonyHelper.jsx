import IranClock from "./IranClock";

export default function PaymonyHelper() {
    return (
        <div className="p-10 w-9/12 h-4/5 flex flex-col justify-end">
            <IranClock />
            <input readOnly placeholder="Card Name" type="text" className="border-2 rounded-lg block w-full h-12 pl-3 outline-none focus:bg-[#0d48a140] focus:border-blue-400 hover:bg-[#0d48a12f] mb-5" />
            <input readOnly placeholder="Card Number" type="text" className="border-2 rounded-lg block w-full h-12 pl-3 outline-none focus:bg-[#0d48a140] focus:border-blue-400 hover:bg-[#0d48a12f] mb-5" />
            <input readOnly placeholder="Card Number Destination" type="text" className="border-2 rounded-lg block w-full h-12 pl-3 outline-none focus:bg-[#0d48a140] focus:border-blue-400 hover:bg-[#0d48a12f] mb-5" />
            <input readOnly placeholder="Password" type="text" className="border-2 rounded-lg block w-full h-12 pl-3 outline-none focus:bg-[#0d48a140] focus:border-blue-400 hover:bg-[#0d48a12f] mb-5" />
            <input readOnly placeholder="Amount Destination" type="text" className="border-2 rounded-lg block w-full h-12 pl-3 outline-none focus:bg-[#0d48a140] focus:border-blue-400 hover:bg-[#0d48a12f] mb-5" />
            <button readOnly className="w-full h-12 bg-blue-700 rounded-lg text-white font-medium p-2">Pay Money</button>
        </div>
    )
}
