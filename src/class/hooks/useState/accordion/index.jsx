import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import "./styles.css";

export default function Accordion() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="accordion-container">
      <div className="accordion-title">
        <p>Novidades</p>
        {/* se estiver aberto é um ícone, caso fechado outro */}
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <ArrowUp /> : <ArrowDown />}
        </button>
      </div>
      {/* e-comercial pq eu n mostro nada caso estiver false */}
      {isOpen && (
        <div className="accordion-content">
          <p>Sei fazer um accordion jsx com hook</p>
        </div>
      )}
    </div>
  );
}
