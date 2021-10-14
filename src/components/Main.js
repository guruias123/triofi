import React from 'react'
import './Main.css'

function Main() {
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    <p>VATM</p>
                </div>

                <div className="sub-logo">
                    <p>Signup</p>
                    <p>Hello</p>
                </div>

            </div>
            <div className="sidebar">
                <button>🏠</button>
                <button>👨</button>
                <button>💳</button>
                <button>🏦</button>
                <button>🏢</button>
            </div>
        </div>
    )
}

export default Main
