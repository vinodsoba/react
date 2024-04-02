import { ButtonWrapper } from "./GlobalButton.style";

import useFetchData from "../../hooks/use-fetch-service";

import { useNavigate } from "react-router-dom";

function GlobalButton () {
    const { data } = useFetchData();

    const history = useNavigate();

    const handleclick = (event) => {

        const id = event.currentTarget.dataset.id;

        history(`/services/servicedetail/${id}`);

    }
    
    return ( 
        <>
        {
            data.map(item => 
                <ButtonWrapper className="button-cta" data-id={item.id} onClick={handleclick}>Learn More</ButtonWrapper>  
            )
        }
         
        </>
    );  
}

export default GlobalButton;