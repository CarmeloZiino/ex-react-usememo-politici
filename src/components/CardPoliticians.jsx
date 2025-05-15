import { memo } from "react";

function CardPoliticians({ politician }) {
  return (
    <div className="card">
      <div className="contentCard">
        <div className="politiciansDetails">
          <img src={politician.image} alt={politician.name} width={100} />{" "}
          <span>
            <p className="politicians">{politician.name}</p>
            <p className="positionPol"> {politician.position}</p>
          </span>
        </div>

        <p className="bioPol">{politician.biography}</p>
      </div>
    </div>
  );
}

const MemoCard = memo(CardPoliticians)
export default MemoCard;