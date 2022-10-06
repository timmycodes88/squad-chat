import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./FirebaseConfig";
import MainApp from "./pages/MainApp";
import SignIn from "./pages/SignIn";

export default function App() {
  const [user] = useAuthState(auth);

  return <>{user ? <MainApp /> : <SignIn />}</>;
}
