import tw from "twin.macro";
import GlobalChat from "../components/GlobalChat";
import Header from "../components/Header";
import EditableProfile from "../components/EditableProfile";
import { PROFILE, GLOBAL_CHAT } from "../Routes";
import UserState from "../context/UserState";
import useViews from '../hooks/useViews'


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
        {view}
      </Body>
    </UserState>
  );
}

//Body
const Body = tw.div``;
