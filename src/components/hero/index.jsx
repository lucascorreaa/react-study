import "./style.css";
import Alelo from "../../assets/images/alelo.png";

export default function Hero({ alignment }) {
  return (
    <div className={`hero-container hero-${alignment}`}>
      <img src={Alelo} alt="" />
      <div className="hero-text">
        <h6>Feature one</h6>
        <h2>Describe benefit of feature one</h2>
        <p>
          Highlight Unique Selling Proposition (USP) with a short summary of the
          key feature and how it benefits customers.
        </p>
        <button>Learn more</button>
      </div>
    </div>
  );
}
