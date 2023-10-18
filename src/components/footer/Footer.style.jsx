import styled from 'styled-components';

export const FooterContainer = styled.div`
width: 100%;
height: 638px; 
display: flex;
justify-content: center;
align-items: center;
padding: 2em;

h1, h2, p {
color: #fff;
text-align: left;
}

.footer-container {
 text-align: left;
 padding-left: 1em;
 padding-right: 4em; 

 h1 {
     font-size: 19px;
 }
  
 p {
      font-size: 15px
  }  
}

.footer-container__wrapper {
    max-width: 497px;
    text-align: left;
    padding-left: 50px;
}
`;