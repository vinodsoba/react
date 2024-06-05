import styled from 'styled-components'

export const HeroWrapper = styled.div`

.herobanner-cont {
    padding-top: 126px;
}

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
    font-size: 47px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: left;
    padding: 20px 10px 20px 0px;
    max-width: 979px;
    height: 171px;
    flex-shrink: 0;

    @media(max-width: 768px){
        padding: 0;
    }
}

h4 {
    font-family: Manrope;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    max-width: 888px;
    text-align: left;
    height: auto;
    flex-shrink: 0;
    padding: 0px 10px 63px 0px;

    @media (max-width: 1425px){
        max-width: 675px;
    }

    @media (max-width: 768px){
        padding: 0;
    }
}

a.cta {
    width: 202px;
    height: 56px;
    background: #0D9488;
    border: none;
    color: #fff;
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 29px;
}

@media(max-width: 776px) {
    .hero-wrapper h1 {
        font-size: 14px;
    }
}

`