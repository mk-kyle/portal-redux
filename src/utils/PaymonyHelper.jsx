import IranClock from "./IranClock";
import NavLinks from "./NavLinks";

export default function PaymonyHelper() {
    return (
        <div className="p-10 w-9/12 h-5/6 flex flex-col justify-start">
            <div className="flex justify-between items-end mb-5">
                <NavLinks />
                <IranClock />
            </div>
            <input readOnly placeholder="Card Name" type="text" className="border-2 rounded-lg block w-full h-12 pl-3 outline-none focus:bg-[#0d48a140] focus:border-blue-400 hover:bg-[#0d48a12f] mb-5" />
            <input readOnly placeholder="Card Number" type="text" className="border-2 rounded-lg block w-full h-12 pl-3 outline-none focus:bg-[#0d48a140] focus:border-blue-400 hover:bg-[#0d48a12f] mb-5" />
            <div className="flex justify-between">
                <div>
                    <p>Card Number Destination:</p>
                    <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur  elit.</p>
                </div>
                <input readOnly placeholder="Card Number Destination" type="text" className="border-2 rounded-lg block w-2/4 h-12 pl-3 outline-none focus:bg-[#0d48a140] focus:border-blue-400 hover:bg-[#0d48a12f] mb-5" />
            </div>
            <div className="flex justify-between">
                <div>
                    <p>Password Card:</p>
                    <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur  elit.</p>
                </div>
                <input readOnly placeholder="Password" type="text" className="border-2 rounded-lg block w-2/4 h-12 pl-3 outline-none focus:bg-[#0d48a140] focus:border-blue-400 hover:bg-[#0d48a12f] mb-5" />
            </div>
            <div className="flex justify-between">
                <div>
                    <p>Destination Amount:</p>
                    <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur  elit.</p>
                </div>
                <input readOnly placeholder="Amount" type="text" className="border-2 rounded-lg block w-2/4 h-12 pl-3 outline-none focus:bg-[#0d48a140] focus:border-blue-400 hover:bg-[#0d48a12f] mb-5" />
            </div>
            <button readOnly className="w-full h-12 bg-blue-700 rounded-lg text-white font-medium p-2">Pay Money</button>
        </div>
    )
}
