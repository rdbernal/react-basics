import { Container } from "./styles";

export default function Footer({ onToggletheme, selectedTheme }) {
  return (
    <Container>
      <span>Rodrigo's Blog. Todos os direitos reservados</span>
      <button 
        type="button" 
        onClick={onToggletheme}
      >
        { selectedTheme === "dark" ? "🌞" : "🌚" }
      </button>
    </Container>
  )
}