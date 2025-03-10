import Card from "./componentes/Card.jsx";
import './App.css'

function App() {
  const items = ["React", "JavaScript", "Vite"];

  return (
    <section>
      <h1>¡Hola Mundo!</h1>
      <Card title="Card 1" description="Esta es una descripción 1" />
      <Card title="Card 2" description="Esta es otra descripción 2 " />
      <Card title="Card 3" description="Esta es otra descripción 3" />
      <ul>
        {
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </section>
  );
}

export default App
