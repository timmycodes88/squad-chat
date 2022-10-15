import { useContext, useEffect, useState } from "react";
import { SET_PROFILE } from "../context/CONSTANTS";
import { UserContext } from "../context/UserContext";
import { getUser } from "../FirebaseConfig";

export default function useProfile(uid) {
  const { profile, dispatch } = useContext(UserContext)

    useEffect(() => {
        fetchProfile()
    }, [uid])

    function fetchProfile() {
        getUser(uid).then(res => {
            dispatch({ type: SET_PROFILE, payload: res})
        })
    }

    return { profile, fetchProfile }
}
