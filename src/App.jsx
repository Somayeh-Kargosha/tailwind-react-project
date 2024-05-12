import Header from "./components/Header";
import FirstColumn from "./components/FirstColumn";
import ToggleButton from "./components/ToggleButton";
import SecondColumn from "./components/SecondColumn";
import UpdateButton from "./components/UpdateButton";
import ThirdBox from "./components/ThirdBox";
import GridContainer from "./components/GridContainer";
import GlobalContainer from "./components/GlobalContainer";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Header />

      <GlobalContainer>
        <GridContainer>
          <FirstColumn isOpen={isOpen} />

          <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
          <SecondColumn />

          <UpdateButton />
          <ThirdBox />
        </GridContainer>
      </GlobalContainer>
    </>
  );
}

export default App;
