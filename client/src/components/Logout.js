import { useHistory } from "react-router-dom"

function Logout({setUser}){
    const history = useHistory()

    fetch('/logout', {
    method: "DELETE"
    })
    .then(resp => resp.json())
    .then(() => {
        history.push("/")
        setUser(null)
    })

    return (
        <></>
    )
}

export default Logout


