import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { clearCategories, clearMovements, clearUser } from "../redux/actions";

export default function LogButton() {

    const dispatch = useDispatch();
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    const logOut = () => {
        dispatch(clearUser())
        dispatch(clearCategories())
        dispatch(clearMovements())
        logout({ returnTo: window.location.origin })
    };

    return (
        <div>
            {
                isAuthenticated ? <button
                    className="mx-4 bg-lightBlue font-pers h-12 outline-double rounded-md w-32 ease-in-out text-black duration-300 hover:bg-blue-800 hover:text-darkWhite md:w-36 sm:h-8"
                    onClick={() => logOut()}
                >LogOut</button>
                    : <button
                        className="mx-4 bg-lightBlue font-pers h-12 text-center outline-double rounded-md w-36 ease-in-out text-black duration-300 hover:bg-blue-800 hover:text-darkWhite md:w-36 sm:h-8"
                        onClick={() => loginWithRedirect()}
                    >Login Or Register</button>
            }
        </div>
    )
}
