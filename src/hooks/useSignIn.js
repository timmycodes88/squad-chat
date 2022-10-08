import { useState } from "react";
import { CreateAccountMode, SignInMode } from "../context/CONSTANTS";
import { signInWithGoogle, signInOrCreateWithEmail } from '../FirebaseConfig'


export default function useSignIn() {
  
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [mode, setMode] = useState(SignInMode)
  
    const getEmail = (e) => {
      setEmail(e.target.value);
    }
  
    const getPassword = (e) => {
      setPass(e.target.value);
    }
    
    function toggleMode() {
        if (mode === SignInMode) setMode(CreateAccountMode);
        else setMode(SignInMode);
    }

    function setModeTo(modeType) {
        setMode(modeType)
    }

    function signInOrCreate() {
        signInOrCreateWithEmail(mode, email, pass)
    }
  
    return {
      email,
      pass,
      mode,
      getEmail,
      getPassword,
      toggleMode,
      setModeTo,
      signInOrCreate,
      signInWithGoogle
    }
  }
