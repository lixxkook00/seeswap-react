import React, { useState } from 'react'
import './SideBar.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { hiddenSideBar } from '../../actions'

export default function SideBar() {
    const [submenu, setSubmenu] = useState('hidden')

    const dispatch = useDispatch()

    const sideBarStatus = useSelector(state => state.sideBar)

    return (
        <div className={`sidebar ${sideBarStatus ? "show" : ""}`}>
            <div className="overlay" onClick={() => dispatch(hiddenSideBar())}></div>
            <div className="sidebar-content">
                <div className="sidebar-item">
                    <Link to="/" onClick={() => dispatch(hiddenSideBar())}>
                        <i className="fa-solid fa-house"></i>
                        <div className="sidebar-name">
                            Home
                        </div>
                    </Link>
                </div>
                <div className="sidebar-item">
                    <a to="#" onClick={() => {
                        setSubmenu(`${submenu === '' ? "hidden" : ""}`)
                    }}>
                        <i className="fa-solid fa-arrow-right-arrow-left"></i>
                        <div className="sidebar-name">
                            Trade
                        </div>
                        <i className={`fa-solid fa-caret-${submenu === '' ? "up" : "down"} sidebar-arrow-down`}></i>
                    </a>
                    <div className={`sidebar-sub ${submenu}`}>
                        <Link to="/swap" className="sidebar-sub-item" onClick={() => dispatch(hiddenSideBar())}>
                            Swap
                        </Link>
                        <Link to="/liquidity" className="sidebar-sub-item" onClick={() => dispatch(hiddenSideBar())}>
                            Liquidity
                        </Link>
                    </div>
                </div>
                <div className="sidebar-item">
                    <Link to="/farm" onClick={() => dispatch(hiddenSideBar())}>
                        <i className="fa-solid fa-tractor"></i>
                        <div className="sidebar-name">
                            Farm
                        </div>
                    </Link>
                </div>
                <div className="sidebar-item">
                    <Link to="/pool" onClick={() => dispatch(hiddenSideBar())}>
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
                        $0.0
                    </div>
                </div>
                <div className="social">
                    <a target="_blank" href="https://t.me/SeaFinanceChannel" className="social-item">
                        <i className="fa-brands fa-telegram"></i>
                    </a>
                    <a target="_blank" href="https://t.me/seafifinancegroup" className="social-item">
                        <i className="fa-brands fa-telegram"></i>
                    </a>
                    <a target="_blank" href="https://twitter.com/FianceSeafi" className="social-item">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
