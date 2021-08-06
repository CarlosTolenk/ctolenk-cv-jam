import React from "react";
import dynamic from "next/dynamic";

const BgDynamic = () => {

    const Particles = dynamic(
        () => {
            return import("react-particles-js");
        },
        {ssr: false}
    );


    return (
        <>
            <Particles
                width={'100%'}
                height={'100vh'}
                params={{
                    "particles": {
                        "number": {
                            "value": 100,
                            "density": {
                                "enable": true,
                                "value_area": 700
                            }
                        },
                        "size": {
                            "value": 5,
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
            />
        </>
    )

}

export default BgDynamic;
