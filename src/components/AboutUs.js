import './AboutUs.css';
import aboutUsPhoto from '../images/aboutUs.jpg';

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <div className="title">
                <h1>About Us</h1>
            </div>
            <img src={aboutUsPhoto} alt="barn" />
            <div className="description">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    In odio purus, auctor ut purus sed, lacinia volutpat purus. 
                    Proin tempus accumsan ante nec venenatis. Vestibulum quis 
                    commodo est, quis varius quam. Sed faucibus erat diam, vel 
                    gravida sem aliquet volutpat. Praesent dignissim ultricies 
                    sem, tristique elementum eros. Nullam id nisi congue, dapibus 
                    neque id, condimentum risus. Integer pulvinar, lacus sit amet 
                    ultrices cursus, arcu odio dapibus tellus, quis faucibus urna 
                    eros ac erat. Curabitur pretium mollis nisi a vehicula. Donec 
                    lectus nibh, rhoncus at dolor volutpat, lacinia tincidunt 
                    magna. Sed efficitur bibendum venenatis. Nulla facilisi. 
                </p>
            </div>
        </div>
    )
};

export default AboutUs;