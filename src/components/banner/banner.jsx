import "./banner.css";
import PaysageImg1 from "../../assets/paysage1.png";

function Banner({ showText = true, image, customClass = "" }) {
  const bannerImage = image || PaysageImg1;

  return (
    <div className={`banner ${customClass}`}>
      <img src={bannerImage} alt="bannière" className="imag" />
      {showText && <div className="text">Chez vous,<br className="break"/> partout et ailleurs</div>}
    </div>
  );
}

export default Banner;