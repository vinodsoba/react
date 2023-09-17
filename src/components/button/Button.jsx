import { ButtonWrapper } from "./Button.style";

function Button (props) {
    return ( 
        
            <ButtonWrapper>{props.label}</ButtonWrapper>
       
    );
}

export default Button;