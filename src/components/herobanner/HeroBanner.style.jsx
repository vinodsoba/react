import styled from 'styled-components'



export const HeroWrapper = styled.div`
width: 100%;
height: 599px;
position: relative;
top: 0;
bottom: 0;
left: 0;
right: 0;

.red {
    position: relative;
    background-color: red;
    width: 100%;
    height: 599px;
}

.black {
    position: relative;
    background-color: black;
    width: 100%;
    height: 599px;
}

.magenta {
    position: relative;
    background-color: #394D6A;
    width: 100%;
    height: 599px;
}

h1 {
    font-family: Manrope;
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: left;
    padding: 20px 10px 20px 20px;
    max-width: 979px;
    height: 151px;
    flex-shrink: 0;

    @media(max-width: 768px){
        padding: 0;
    }
}

h4 {
    font-family: Manrope;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: 1087px;
    text-align: left;
    height: auto;
    flex-shrink: 0;
    padding: 60px 10px 20px 20px;

    @media (max-width: 1425px){
        max-width: 675px;
    }

    @media (max-width: 768px){
        padding: 0;
    }
}

button {
    position: absolute;
    top: 459px;
    right: 1004px;
    left: 94px;
    bottom: 84px;
    width: 202px;
    height: 56px;
    border-radius: 9999px;
    background: #0D9488;
    border: none;
    color: #fff;
}
`