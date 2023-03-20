import { useState, useMemo, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";

// Components
import Layout from "./components/Layout/index";

// Styles
import GlobalStyle from "./styles/global";

// Themes
import { themes } from "./styles/themes/index";

function App() {
  const [ theme, setTheme ] = useState(
    JSON.parse(localStorage.getItem("selectedTheme"))
  );

  const firstRender = useRef(true);

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme(prevState => prevState === "dark" ? "light" : "dark");
  };

  /*
  useEffect é executado DEPOIS QUE O COMPONENTE É MONTADO (aparece na tela)

  Para que o useEffect NÃO seja executado na primeira vez que o componente
  for executado, precisamos usar o useReff

  useEffects(() => {

  }, []);
  */

  /* 
  useEffect executa toda vez que nosso componente for executado, ou seja,
  toda vez que algum state for alterado ou o componente for renderizado
  novamente
  */
  // useEffect(() => {
  //   console.log("useEffect executou");
  // })

  /* 
  useEffect pode ser executado apenas quando for renderizado pela primeira
  vez. Isso é útil quando queremos fazer uma chamada a API logo que o 
  componente é renderizado pela primeira vez. Exetua uma única vez após o 
  MOUNT
  */
  // useEffect(() => {
  //   /* 
  //   É o melhor lugar pra fazer chamada da API e carregar a tela pela
  //   primeira vez
  //   */
  // }, [])

  /*
  Podemos executar o useEffect toda vez que um state ou uma prop for
  alterada. No caso, basta preencher o state ou a prop na array que é
  um parâmetro pro useEffect após a callback
  */
  useEffect(() => {
    console.log("useEffect ao alterar theme");
    localStorage.setItem("selectedTheme", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    console.log("useEffect após o primeiro render")
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
        <Layout 
        onToggletheme={handleToggleTheme}
        selectedTheme={theme}
      />
    </ThemeProvider>
  );
}

export default App;
