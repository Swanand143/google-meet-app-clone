import "../../component/Google-Cards/g-card.css";

function GCards({ Image, Name }) {
  return (
    <>
      <div className="g-cards">
        <img src={Image} alt="" className="image" />
        <span className="person-name">{Name}</span>
      </div>
    </>
  );
}

export default GCards;
