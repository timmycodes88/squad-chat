import { useContext, useEffect, useState } from "react";
import { SET_PROFILE } from "../context/CONSTANTS";
import { UserContext } from "../context/UserContext";
import { getUser } from "../FirebaseConfig";

export default function useProfile(uid) {
  const { profile, dispatch } = useContext(UserContext)
  const [resetProfile, setResetProfile] = useState(false)

    useEffect(() => {
        getUser(uid).then(res => {
            dispatch({ type: SET_PROFILE, payload: res})
        })
    }, [uid, resetProfile])

    function fetchProfile() {
        setResetProfile((current) => !current)
    }

    return { profile, fetchProfile }
}
