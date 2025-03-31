import ReactFullpage from "@fullpage/react-fullpage";

// Layout
import Header from "./components/Header.jsx";

// header components
import Logo from "./components/header/Logo.jsx";
import MenuList from "./components/header/MenuList.jsx";
import ToggleButton from "./components/header/ToggleButton.jsx";

import "./css/style.css";

export default function App() {
  return (
    <ReactFullpage
      scrollingSpeed={700}
      anchors={["firstPage", "secondPage", "thirdPage"]}
      navigation
      render={() => {
        return (
          <>
            <Header>
              <Logo img="images/favicon.ico" name="Yoon" />
              <MenuList />
              <ToggleButton />
            </Header>
            <ReactFullpage.Wrapper>
              <div className="section">Page 1</div>
              <div className="section">Page 2</div>
              <div className="section">Page 3</div>
            </ReactFullpage.Wrapper>
          </>
        );
      }}
    />
  );
}
