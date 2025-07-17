
import "./carroussel.css";
import ArrowLeft from "../../assets/arrow_forward_ios-24px 1.svg";
import ArrowRight from "../../assets/arrow_forward_ios-24px 2.svg";

function Carroussel({ pictures, imageIndex, nextImage, prevImage, title }) {
  return (
    <div className="navigation">
      <img
        src={pictures[imageIndex]}
        alt={`logement ${title}`}
        className="image"
      />
      {pictures.length > 1 && (
        <>
          <img
            src={ArrowRight}
            alt="Précédente"
            className="left-arrow"
            onClick={prevImage}
          />
          <img
            src={ArrowLeft}
            alt="Suivante"
            className="right-arrow"
            onClick={nextImage}
          />
          <div className="image-counter">
            {imageIndex + 1} / {pictures.length}
          </div>
        </>
      )}
    </div>
  );
}

export default Carroussel;