import { NavLink } from "react-router-dom"

function NavLinks() {
    return (
        <div>
            <div className="bg-blue-400 rounded-lg flex justify-around items-center p-2 gap-5">
                <NavLink to='/' className="text-2xl">&#128179;</NavLink>
                <NavLink to='/pay' className="text-2xl text-blue-900 font-extrabold">$</NavLink>
                <NavLink to='/history' className="text-2xl">&#128260;</NavLink>
            </div>
        </div>
    )
}
export default NavLinks