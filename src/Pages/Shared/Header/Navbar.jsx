import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-green-400 mx-10 text-center text-white py-5">
            <div className="flex justify-around mx-5 ">
                <Link to="/"><h2>Order page</h2></Link>
                <Link to="login"><h2>Login</h2></Link>                
            </div>
        </div>
    );
};

export default Navbar;