import React from 'react'
import Logo from '../images/logo.svg'
import { Animated } from "react-animated-css";

export default function Landing() {

    const [isVisible, setIsVisible] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => {
            setIsVisible(!isVisible)
        }, 4000)
    }, [isVisible])

    return (
        <div className='flex flex justify-center h-96 items-end'>
            <Animated animationIn="bounceInDown" animationOut="bounceOutUp" isVisible={isVisible} animateOnMount={true} animationOutDuration={2000} animationInDuration={2000}>
                <img src={Logo} alt='Not Found' className='h-56 shadow-inner align-bottom shadow-white p-8'/>
            </Animated>
        </div>
    )
}
