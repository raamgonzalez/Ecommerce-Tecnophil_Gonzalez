import React from 'react'

const Title = (props) => {
    const {greeting} = props
    return (
    <h1 className= "text-center text-slate-300 text-xl">{greeting}</h1>
    )
}

export default Title