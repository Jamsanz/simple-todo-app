import React from 'react'

const Header = ({ title }: any): JSX.Element => {
    return (
        <header>
            <h1>{title}</h1>
            <button color="green" className="btn">+</button>
        </header>
    );
}

export default Header
