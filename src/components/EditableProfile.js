import tw from "twin.macro";
import { useState } from "react";
import { updateUserProfile } from "../FirebaseConfig";

export default function EditableProfile({}) {
  const [newUsername, setNewUsername] = useState("");

  return (
    <Wrapper>
      <input
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
        placeholder="New Username!"
      />
      <button onClick={() => updateUserProfile(user.uid, newUsername)}>
        Save
      </button>
    </Wrapper>
  );
}

const Wrapper = tw.div`mt-20 flex justify-center`;
