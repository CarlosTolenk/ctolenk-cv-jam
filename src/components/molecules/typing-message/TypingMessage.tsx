import React from "react";
import ReactTypingEffect from 'react-typing-effect';

const TypingMessage = ({className, message}: any) => {

    return (
        <>
            <ReactTypingEffect
                className={className}
                text={message}
                speed={100}
                eraseSpeed={100}
                eraseDelay={1500}
                typingDelay={150}
            />
        </>
    )

}

export default TypingMessage
