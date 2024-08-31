import Card from "./components/card";
import Box from "./assets/images/box.svg";

export default function App() {
  return (
    <div className="app-container">
      <Card
        src={Box}
        alt="imagem de uma caixa"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
        title="Highlight benefit one"
      />
      <Card
        src={Box}
        alt="imagem de uma caixa"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
        title="Highlight benefit two"
      />
      <Card
        src={Box}
        alt="imagem de uma caixa"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
        title="Highlight benefit three"
      />
    </div>
  );
}
