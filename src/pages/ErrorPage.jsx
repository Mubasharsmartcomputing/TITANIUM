import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage=()=>{
    const error=useRouteError()
    return(
        <>
        <div>
        <h1>Oops! An error occurrred.</h1>
        {error && <p>{error.data} </p>}
        </div>
        <NavLink to={"/"}>
        <button>Go Home</button>
        </NavLink>
        </>
    )
}