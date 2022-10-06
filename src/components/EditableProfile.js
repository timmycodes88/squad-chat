import tw from "twin.macro";
import { useState } from "react";
import { updateUserProfile, auth } from "../FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

export default function EditableProfile() {
  const [user] = useAuthState(auth);
  const [newUsername, setNewUsername] = useState("");

  return (
    <Temp>
      <input
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
        placeholder="New Username!"
      ></input>
      <button onClick={() => updateUserProfile(user.uid, newUsername)}>
        Save
      </button>
    </Temp>
  );
}

const Temp = tw.div`mt-20 mx-auto flex`;
