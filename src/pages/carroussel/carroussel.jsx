import "./carroussel.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LOGEMENTS } from "../../data/logements";
import ArrowLeft from "../../assets/arrow_forward_ios-24px 1.svg";
import ArrowRight from "../../assets/arrow_forward_ios-24px 2.svg";
import Dropdown from "../../components/dropdown/dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

function Carroussel() {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = LOGEMENTS.find((l) => l.id === id);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (!logement) {
      navigate("/error", { replace: true });
    }
  }, [logement, navigate]);

  if (!logement) return null;

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % logement.pictures.length);
  };

  const prevImage = () => {
    setImageIndex(
      (prev) => (prev - 1 + logement.pictures.length) % logement.pictures.length
    );
  };

  // Séparer prénom et nom du propriétaire
  const [prenom, nom] = logement.host.name.split(" ");

  return (
    <div className="carrousel">
      <div className="navigation">
        <img
          src={logement.pictures[imageIndex]}
          alt={`logement ${logement.title}`}
          className="image"
        />
        {logement.pictures.length > 1 && (
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
              {imageIndex + 1} / {logement.pictures.length}
            </div>
          </>
        )}
      </div>

      
        <div className="title-location">
          <h2 className="title">{logement.title}</h2>
          <h3 className="location">{logement.location}</h3>
        </div>
        <div className="host">
          <div className="host-common">
            <p className="host-name">{prenom}</p>
            <p className="host-surname">{nom}</p>
          </div>
          <img
            src={logement.host.picture}
            alt={logement.host.name}
            className="host-picture"
          />
        </div>
      

      
        <div className="tags">
          {logement.tags.map((tag, index) => (
            <div key={index} className="tag">
              {tag}
            </div>
          ))}
        </div>
        <div className="star">
          {[1, 2, 3, 4, 5].map((n) => (
            <FontAwesomeIcon
              key={n}
              icon={n <= logement.rating ? faStarSolid : faStarRegular}
              className={n <= logement.rating ? "star-red" : "star-grey"}
            />
          ))}
        </div>
      

      <div className="dropdowns">
        <Dropdown title="Description" content={logement.description} />
        <Dropdown
          title="Équipements"
          content={logement.equipments.join(", ")}
        />
      </div>
    </div>
  );
}

export default Carroussel;
