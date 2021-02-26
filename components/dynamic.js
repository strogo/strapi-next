
import React from "react";
import Paragraph from "./custom/paragraph";
import Code from "./custom/code";
import BlockQuote  from "./custom/blockquote";
import DynamicImage from "./custom/dynamicimage";

const Components = {
    "dynamic.paragraph": Paragraph,
    "dynamic.image": DynamicImage,
    "dynamic.code": Code,
    "dynamic.blockquote": BlockQuote,
};


const Dynamic = (props) => {

    if (typeof Components[props.__component] !== "undefined") {
        return <div key={props.__component + props.id}>
            {
                React.createElement(Components[props.__component], {
                    key: props._id,
                    block: props
                })
            }
        </div>

    }

};
export default Dynamic;
