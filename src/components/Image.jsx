import React from "react";

const Image = (props) => {
    return (
        <div>
            <img src={props.image} style={{width: '500px', maxHeight: '400px'}}/>
        </div>
    )
}

export default Image;