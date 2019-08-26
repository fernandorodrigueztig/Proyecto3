import React from 'react'

export const InfoWindow = ({children, show = true})=> {
    return (show ? <div style={{width: "200px;", padding: "20px;" }}>
        <p>{children}</p>
    </div> : <></>)
}