import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './FirebaseConfig'
import MainApp from './MainApp';
import SignIn from './SignIn';



export default function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      {user ? <MainApp user={user} /> : <SignIn />}
    </>
  );
}
