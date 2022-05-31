import { Animated } from "react-animated-css";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Footer() {

    return (
        <footer className="h-16 z-50 absolute bottom-auto mt-28 bg-lightGray w-full shadow-md md:h-16 rounded-3xl">
            <Animated animationIn="fadeInUp" isVisible={true} className="flex justify-around items-center h-full">
                <a href="https://www.linkedin.com/in/angel-guillermo-montania/">
                    <BsLinkedin size={30} color="white" xlinkHref="https://www.linkedin.com/in/angel-guillermo-montania/"/>
                </a>
                <a href="https://github.com/AngelGuillermoMontania">
                    <BsGithub size={30} color="white"/>
                </a>
            </Animated>
        </footer>
    );
}