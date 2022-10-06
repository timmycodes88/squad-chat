import tw from "twin.macro";
import { useState } from "react";
import GlobalChat from "../components/GlobalChat";
import Header from "../components/Header";
import EditableProfile from "../components/EditableProfile";
import useViews from "../hooks/useViews";
import { profile, globalChat } from "../Routes";

export default function MainApp() {
  const Views = [
    {
      element: <GlobalChat />,
      link: globalChat,
    },
    {
      element: <EditableProfile />,
      link: profile,
    },
  ];
  const { view, goTo } = useViews(Views);

  return (
    <>
      <Header goTo={goTo} />
      <Body>
        <button onClick={() => goTo(globalChat)}>Global Chat</button>
        {/* ROUTES */}
        {view}
        {/* END ROUTES */}
      </Body>
    </>
  );
}

//Body
const Body = tw.div``;
