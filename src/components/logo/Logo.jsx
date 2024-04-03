import { useContext } from 'react';
import LogoImg from './../../assets/img/vinod-logo.png';
import LogoImgLight from './../../assets/img/vinod-white-feet-logo.png';
import { ThemeContext } from '../../Theme';

function Logo () {
    const { theme } = useContext(ThemeContext);

    return (  
        <p className="my-logo">
        {
           theme === 'dark-theme' ? 
           <img src={LogoImgLight} alt="vinod soba freelance web developer" /> 
           :
           <img src={LogoImg} alt="vinod soba freelance web developer" /> 
           
        }
        Vinod Soba</p>
    );
}

export default Logo ;