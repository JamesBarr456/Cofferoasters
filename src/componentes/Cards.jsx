export const Card = ({ objeto }) => {
  return (
    <div key={objeto.id}>
      <img src={objeto.imgUrl} alt={objeto.title} />
      <h2>{objeto.title}</h2>
      <p>{objeto.summary}</p>
    </div>
  );
};

export const CardQuality = ({ objeto }) => {
  return (
    <div key={objeto.id}>
      <span>{objeto.sub}</span>
      <h3>{objeto.title}</h3>
      <p>{objeto.summary}</p>
    </div>
  );
};
