import { ButtonWrapper } from "./GlobalButton.style";

function GlobalButton (props) {
    return ( 
        <ButtonWrapper>{props.label}</ButtonWrapper>
    );
}

export default GlobalButton;