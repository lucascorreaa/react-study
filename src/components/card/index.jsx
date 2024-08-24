import "./style.css";

export default function Card({ title, description, image, imgAlt }) {
  return (
    <div className="card">
      <img src={image} alt={imgAlt} />
      <div className="text-wrapper">
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
