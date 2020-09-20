import React from 'react'

export default function Detail(props) {
    return (
        <div>
            id: { props.match.params.id }
        </div>
    )
}
