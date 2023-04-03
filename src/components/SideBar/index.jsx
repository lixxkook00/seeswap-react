import React from 'react'
import './SideBar.scss'
import { Link } from 'react-router-dom'

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebar-content">
            <div className="sidebar-item">
                <Link to="/">
                    <i className="fa-solid fa-house"></i>
                    <div className="sidebar-name">
                        Home
                    </div>
                </Link>
            </div>
            <div className="sidebar-item">
                <Link to="/">
                    <i className="fa-solid fa-arrow-right-arrow-left"></i>
                    <div className="sidebar-name">
                        Trade
                    </div>
                    <i className="fa-solid fa-caret-down sidebar-arrow-down"></i>
                </Link>
                <div className="sidebar-sub">
                    <Link to="/" className="sidebar-sub-item">
                        Swap
                    </Link>
                    <Link to="/" className="sidebar-sub-item">
                        Liquidity
                    </Link>
                </div>
            </div>
            <div className="sidebar-item">
                <Link to="/">
                    <i className="fa-solid fa-tractor"></i>
                    <div className="sidebar-name">
                        Farm
                    </div>
                </Link>
            </div>
            <div className="sidebar-item">
                <Link to="/">
                    <i className="fa-solid fa-water"></i>
                    <div className="sidebar-name">
                        Pool
                    </div>
                </Link>
            </div>
        </div>
        <div className="sc-hQYpqk jdvuLe sidebar-bottom">
            <div className="balance">
                <img className="balance-logo" src="./images/logo.png" />
                <div className="balance-value">
                    $0.045
                </div>
            </div>
            <div className="social">
                <div className="social-item">
                    <i className="fa-brands fa-telegram"></i>
                </div>
                <div className="social-item">
                    <i className="fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>
    </div>
  )
}
