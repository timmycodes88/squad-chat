import tw, { styled } from "twin.macro";
import { signInWithGoogle, signInOrCreate } from '../FirebaseConfig'
import "firebase/compat/auth";
import bgImage from "../assets/Images/sign-in-bg.png";
import { useState } from "react";

function useUserAuth() {
  
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const getEmail = (e) => {
    setEmail(e.target.value);
  }

  const getPassword = (e) => {
    setPass(e.target.value);
  }


  return {
    email,
    pass,
    getEmail,
    getPassword
  }
}

export default function SignIn() {

  const [signIn, setSignIn] = useState(true);
  const { email, pass, getEmail, getPassword } = useUserAuth();

  return (
    <FullBackground>
      <Modal>
        <Title>Squad Chat</Title>
        <form>
          <Input type="email" value={email} onChange={getEmail} placeholder="Email" />
          <Input type="password" value={pass} onChange={getPassword} placeholder="Password" />
        </form>
        <SignInWithEmail onClick={() => signInOrCreate(signIn, email, pass)}>
          {signIn ? "Sign In with Email" : "Create Account"}
        </SignInWithEmail>
        <GoogleSignIn onClick={signInWithGoogle}>
          Sign in with Google
        </GoogleSignIn>
        <CreateAcct onClick={() => setSignIn(!signIn)}>
          {signIn ? "Create Account" : "Sign In with Email"}{" "}
        </CreateAcct>
      </Modal>
    </FullBackground>
  );
}

const FullBackground = styled.div`
  ${tw`absolute w-screen h-screen bg-gray-100`}
  background-image: url('${bgImage}');
`;
const Modal = tw.div` relative m-auto mt-10 bg-white border-2 border-blue-600 rounded-2xl w-[95%] sm:w-[500px] h-[500px] shadow`;
const Title = tw.h1`text-center text-5xl my-12 text-blue-600`;
const Input = tw.input`w-[75%] block m-auto rounded-md border border-blue-600 mb-4 p-2 text-center`;
const GoogleSignIn = tw.button`block m-auto rounded-md p-4  bg-blue-600 text-white w-[200px]`;
const CreateAcct = tw.button`text-blue-600 mx-auto mt-12 mb-auto block`;
const SignInWithEmail = tw.button`block m-auto rounded-md p-4 bg-green-500 text-white my-4 w-[200px]`;
