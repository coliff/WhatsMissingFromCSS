import React from 'react'

const Logo = ({ className, animated = true, showText = true, size = 'l' }) => (
    <div aria-hidden="true" className={`Logo__Container Logo--${size} ${className || ''}`}>
        What's Missing From CSS?
    </div>
)


export default Logo
