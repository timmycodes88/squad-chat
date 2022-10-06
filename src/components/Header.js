import tw from "twin.macro";
import { useEffect, useState } from "react";
import { signOut, getUser, auth } from "../FirebaseConfig";
import defaultUser from "../assets/Images/default-user.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { profile } from "../Routes";

export default function Header({ goTo }) {
  const [user] = useAuthState(auth);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    getUser(user.uid, setUserProfile);
  }, [user.uid]);

  let photoURL;
  if (user.photoURL) photoURL = user.photoURL;
  else photoURL = defaultUser;

  return (
    <Head>
      <PersonBox onClick={() => goTo(profile)}>
        <StyledImg src={photoURL} />
        <DisplayName>
          {userProfile.username && userProfile.username}
        </DisplayName>
      </PersonBox>

      <Title>Squad Chat</Title>

      <SignOutButton onClick={signOut}>Sign Out</SignOutButton>
    </Head>
  );
}

//Head
const Head = tw.div`flex justify-center border-b h-24 bg-blue-700`;
const PersonBox = tw.div`flex absolute top-4 left-4 items-center`;
const Title = tw.h1`text-white text-5xl pt-4`;
const StyledImg = tw.img`w-16 h-16 rounded-full mr-4`;
const DisplayName = tw.h2`text-lg text-white`;
const SignOutButton = tw.button`absolute top-4 right-4 bg-green-600 text-white p-4 rounded-md shadow-md`;
