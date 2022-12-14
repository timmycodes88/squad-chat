import tw from "twin.macro";
import { useState } from "react";
import { updateUserProfile, auth } from "../FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import useProfile from "../hooks/useProfile";

export default function EditableProfile({}) {
  const [user] = useAuthState(auth)
  const [newUsername, setNewUsername] = useState("");

  const { fetchProfile } = useProfile(user.uid)

  return (
    <Wrapper>
      <input
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
        placeholder="New Username!"
      />
      <button onClick={() => { updateUserProfile(user.uid, newUsername); fetchProfile(); }}>
        Save
      </button>
    </Wrapper>
  );
}

const Wrapper = tw.div`mt-20 flex justify-center`;
