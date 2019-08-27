import React from 'react'

export const InfoWindow = ({children, show = false})=> {
    return (show ? <div>
        <p>{children}</p>
    </div> : <></>)
}