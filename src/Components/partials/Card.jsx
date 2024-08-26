import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div>
      {data.map((card, index) => {
        <Link key={index}>
          {card.name || card.title || card.original_name || card.original_title}
        </Link>;
      })}
    </div>
  );
};
export default Card;
