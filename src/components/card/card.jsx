import "./card.css";



function Card({cardTitle, cardPicture}) {
  return (
    <div className="card">
      <img src={cardPicture} alt="cardPicture" className="image" />
      <h3 className="title">{cardTitle}</h3>
    </div>
  );
}




export default Card ;

