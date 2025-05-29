import "./banner.scss";
import PaysageImg1 from "../../assets/paysage1.png";

function Banner() {
    return(
        <div className="banner">
            <img src={PaysageImg1} alt="paysage océan" className="imag" />
            <p className="text">Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner;