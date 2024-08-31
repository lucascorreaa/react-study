import "./style.css";

export default function Card({ title, description, src, alt }) {
  return (
    <div className="card-container">
      <img src={src} alt={alt} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
