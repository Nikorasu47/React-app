import "./home.css";
import { LOGEMENTS } from "../../data/logements.js";
import Card from "../../components/card/card.jsx";
import Banner from "../../components/banner/banner";
import { Link } from "react-router-dom";  // Import Link

function CardGallery() {
  return (
    <div className="gallery">
      {LOGEMENTS.map((logement) => (
        <Link
          to={`/logement/${logement.id}`}
          key={logement.id}
          className="card-link"
        >
          <Card cardTitle={logement.title} cardPicture={logement.cover} />
        </Link>
      ))}
    </div>
  );
}

function Home() {
  return (
    <div className="home">
      <Banner />
      <CardGallery />
    </div>
  );
}

export default Home;