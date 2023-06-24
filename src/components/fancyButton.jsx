import React from 'react'

export default function FancyButton({ content, background, color }) {
    return (
        <button className={`${background} ${color} py-2.5 px-5 rounded-large`}>{content}</button>
    )
}
