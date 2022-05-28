import { Animated } from "react-animated-css";

export default function Header() {

    return (
        <header className="h-20 z-50 h-10 relative bg-lightGray w-100% shadow-md">
            <Animated animationIn="fadeInDown" isVisible={true} className="flex justify-between items-center h-full">
                <p className="text-sm mx-2 md:text-3xl md:mx-4 text-darkWhite text-center">Challenge Alkemy Full Stack</p>
                <button className='mx-4 bg-lightBlue h-12 outline-double rounded-md w-32 ease-in-out text-black duration-300 hover:bg-blue-800 hover:text-darkWhite md:w-36 sm:h-8'>Login Or Register</button>
            </Animated>
        </header>
    );
}