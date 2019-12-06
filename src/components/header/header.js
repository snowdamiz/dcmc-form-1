import React, { useState, useEffect } from 'react';
import { HeaderWrap } from './headerStyles';
import CloseBtn from '../closeBtn/closeBtn';
// import { forceUpdate } from '../../foceUpdate';

function Header (props) {
    // const [header, setHeader] = useState("");
    // const [, forceUpdate] = React.useState(0);

    // // const forceUpdate = forceUpdate();
    // const page = props.page;
    // console.log(props.page);

    // useEffect(() => {
    //     if (props.page === 1) {
    //         setHeader("Interested? Take it out for a drive!");
    //         console.log("DATE");
    //     }
    //     else if (props.page === 2) {
    //         setHeader("Choose the best time for you")
    //         console.log("TIME");
            
    //     } 
    //     else if (props.page === 3) {
    //         setHeader("Complete the form for your free test drive!")
    //         console.log("DETAILS");
    //     }
    // }, [props.page])

    // const update = () => {
    //     if (page === 1) {
    //         return "Interested? Take it out for a drive!";
    //     } else if (page === 2) {
    //         return "Choose the best time for you"
    //     } else if (page === 3) {
    //         return "Complete the form for your free test drive!"
    //     }
    //     forceUpdate(n => !n);
    // }

    return (
        <HeaderWrap>
            <CloseBtn />
                <h1>Interested? Take it out for a drive!</h1>
            {/* {page === 1 ? (
                <h1>Interested? Take it out for a drive!</h1>
            ) : null}
            {page === 2 ? (
                <h1>Choose the best time for you</h1>
            ) : null}
            {page === 3 ? (
                <h1>Complete form for your free test drive</h1>
            ): null} */}
            {/* <h1>
                {page === 1 ? (
                    "Interested? Take it our for a drive!"
                ) : page === 2 ? (
                    "Choose the best time for you"
                ) : "Complete form for your free test drive"}
            </h1> */}
        </HeaderWrap>
    )
}

export default Header;