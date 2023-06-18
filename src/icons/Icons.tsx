import { Component } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdFastfood } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { LuCat } from "react-icons/lu";

MdFastfood

export class CheckIcon extends Component {
    render() {
        return (
                <AiFillCheckCircle color='purple'/>
            );
        }
}

export class MoneyBackGuaranteeIcon extends Component {
    render() {
        return (
                <LuCat color='purple' size='40px'/>
            );
        }
}

export class ShareWithFacebookIcon extends Component {
    render() {
        return (
                <BsFacebook color='purple' size='40px'/>
            );
        }
}

export class OverOnceBillionFoodsIcon extends Component {
    render() {
        return (
                <MdFastfood color='purple' size='40px'/>
            );
        }
}