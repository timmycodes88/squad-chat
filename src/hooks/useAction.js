import { useContext, useEffect, useState } from 'react';


const getProfile = async (acellusID) => {
    const res = await fetch('/rest/student/profile?acellusID=' + acellusID)
    return res
}

const postProfile = async (data) => {
    const res = await fetch('/rest/student/profile', { tx: data })
    return res
}

export default function GetProfile({acellusID}) {
    
    const { dispatch, loading, error } = useContext('StudentContext')


    useEffect(() => {
        dispatch({ type: SET_LOADING, next: GET_DATA})
        getProfile(acellusID).then(res => {
            dispatch({ type: SET_DATA, payload: res.data })
        })
    }, [dispatch, acellusID])

    if (loading) return <h1>Loading</h1>
    if (error) return <h1>Error</h1>
}

/** Allows you to access the profile data and manipulate it
 * returns {
 *     data: Int
 *     addOneToData: Function
 * }
 */
export default function useProfile() {
    // const [data, setData] = useState(null)
    const { dispatch, data } = useContext('StudentContext')

    function addOneToData() {
        const newData = data + 1
        postProfile(newData).then(res => {
            if (!res.error) dispatch({ type: SET_DATA, payload: newData })
            // if (!res.error) setData(newData)
        })
    }

    return {
        data,
        addOneToData,
    }

}


export default function Profile() {

    const { data, addOneToData, acellusID } = useProfile()

    return (
        <>
            <GetProfile acellusID={acellusID} />
            <h1>{data}</h1>
            <button onClick={addOneToData}>Add 1</button>
        </>
    )

}



const GET_DATA = 'GET_DATA'
const SET_LOADING = 'SET_LOADING'
