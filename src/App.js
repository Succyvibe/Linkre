import React from "react";
import LinkButton from "./Components/LinkButton";
import ProfilePic from "./Components/ProfilePic";

import TextBanner from "./components/TextBanner";
function App() {
  return (
    <div className="App">
      <ProfilePic />
      <TextBanner
        title="Zuri Training"
        text="WHere you register for Zuri training"
      />
      <LinkButton name="Zuri Training" link="https://training.zuri.team/" />
      <LinkButton name="Zuri Books" link="https://books.zuri.team/" />
      <LinkButton name="Zuri Training" link="https://training.zuri.team/" />
      <LinkButton name="Zuri Training" link="https://training.zuri.team/" />
      <LinkButton name="Zuri Training" link="https://training.zuri.team/" />
    </div>
  );
}

export default App;
