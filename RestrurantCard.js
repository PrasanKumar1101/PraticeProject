const RestranuntCard = ({ name, cusines, image, rating }) => {
  return (
    <div className="card">
      <img src={image}></img>
      <h2>{name}</h2>
      <h3>{cusines.join(",")}</h3>
      <h4>{rating} stars</h4>
    </div>
  );
};

export default RestranuntCard;
