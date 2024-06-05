import { styled } from "styled-components";

export const PassionateContainer = styled.div `

.passionate-wrapper {
    height: 463px;
}

.passionate-wrapper p {
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: left;
}

.passionate-wrapper h2 {
    font-family: Manrope;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: left;
    color: var(--text-primary);
}

.passionate-container__background {
    display: grid;
    justify-content: flex-start;
    background-color: var(--bg-primary);
    width: 744px;
    height: 374px;
    padding: 41px;
    margin-top: 41px;
    margin-left: 39px;
    margin-bottom: 48px;
    flex-shrink: 0;
    position: absolute;
 
   
}

@media (max-width: 776px) {
    .passionate-container__background {
        width: 76%;
        height: auto;
        padding: 10px 5px 20px;

        p {
            color: var(--text-primary);
            }
    }

    .passionate-wrapper h2 {
        font-size: 33px;

        p {
           color: var(--text-primary);
        }
    }


}

`;