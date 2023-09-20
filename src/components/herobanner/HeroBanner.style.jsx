import styled from 'styled-components'



export const HeroWrapper = styled.div`
width: 100%;
height: 599px;

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
    position: absolute;
    width: 100%;
    height: 134px;
    flex-shrink: 0;
    text-align:left;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    background: linear-gradient(180deg, #40D6C9 0%, rgba(199, 216, 215, 0.60) 99.99%, rgba(44, 213, 198, 0.00) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 99px 564px 366px 94px; 
}

h4 {
    width: 100%;
    position: absolute;
    text-align: left;
    height: 152px;
    color: #FFF;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 255px 582px 192px 94px;
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