import { Animated } from "react-animated-css";
import { useSelector } from "react-redux";
import LogButton from "./LogButton";

export default function Header() {

    const userDB = useSelector(state => state.user);

    return (
        <Animated animationIn="fadeInDown" isVisible={true} className="z-50 relative">
            <header className="h-16 bg-lightGray w-100% shadow-md md:h-16">
                <Animated animationIn="fadeInDown" animationInDelay={500} isVisible={true} className="flex justify-between items-center h-full">
                    {
                        userDB.email ? 
                            <p className="text-sm mx-2 md:text-3xl md:mx-4 text-darkWhite text-center">
                                {userDB.email}
                            </p>

                        : <p className="text-sm mx-2 md:text-3xl md:mx-4 text-darkWhite text-center">Challenge Alkemy Full Stack</p>
                    }
                    
                    <LogButton />
                </Animated>
            </header>
        </Animated>
    );
}