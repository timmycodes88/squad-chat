import tw from "twin.macro";
import GlobalChat from "../components/GlobalChat";
import Header from "../components/Header";
import EditableProfile from "../components/EditableProfile";
import { useViews } from "hooks";
import { PROFILE, GLOBAL_CHAT } from "../Routes";
import UserState from "../context/UserState";


export default function MainApp() {
  const Views = [
    {
      element: <GlobalChat />,
      link: GLOBAL_CHAT,
    },
    {
      element: <EditableProfile />,
      link: PROFILE,
    },
  ];
  const { view, goTo } = useViews(Views);

  return (
    <UserState>
      <Header goTo={goTo} />
      <Body>
        <button onClick={() => goTo(GLOBAL_CHAT)}>Global Chat</button>
        {/* ROUTES */}
        {view}
        {/* END ROUTES */}
      </Body>
    </UserState>
  );
}

//Body
const Body = tw.div``;
