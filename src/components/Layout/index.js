// import { useEffect } from "react";
import Header from "../Header/index";
import PostsList from "../PostsList/index";
import Footer from "../Footer/index";
import { useTheme } from "styled-components";

export default function Layout({ onToggletheme, selectedTheme }) {
  const theme = useTheme();

  // useEffect(() => {
  //   return () => {
  //     console.log("layout saiu da tela");
  //   }
  // });

  return (
    <>
      <Header 
        onToggletheme={onToggletheme}
        selectedTheme={selectedTheme}
      />
      <PostsList />
      <Footer 
        onToggletheme={onToggletheme}
        selectedTheme={selectedTheme}
      />

      <div
        style={{
          marginTop: 24,
          backgroundColor: theme.footerBackgroundColor,
          padding: 24,
          borderRadius: 10
        }}
      >
        Criado por Rodrigo
      </div>
    </>
  )
}