import React from 'react'
import './Home.scss'

export default function Home() {



  return (
    <div className="swap">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="centering h-100">
                        <img className="swap-img" src="./images/ex-right-bg.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="centering">
                        <div className="trade-nav">
                            <div className="trade-nav-item active">
                                Swap
                            </div>
                            <div className="trade-nav-item">
                                Liquidity
                            </div>
                        </div>
                    </div>
                    <div className="swap-wrapper">
                        <div className="swap-title">
                            <div className="swap-text d-flex flex-column">
                                    <div className="swap-name">
                                        Exchange
                                    </div>
                                    <div className="swap-desc">
                                        Trade tokens in an instant
                                    </div>
                                </div>

                                <div className="swap-title-icon d-flex align-items-center">
                                    <i className="fa-solid fa-clock-rotate-left"></i>
                                </div>
                            </div>
                        <div className="swap-content w-100">
                            <div className="swap-block">
                                <div className="swap-block-text">
                                    From
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="swap-block-value">
                                        <input type="text" placeholder='0.0'/>
                                    </div>

                                    <div className="swap-block-select d-flex align-items-center">
                                        <div className="swap-block-select-icon">
                                            <img src="./images/logo.png" alt="" />
                                        </div>
                                        <div className="swap-block-select-name d-flex align-items-center">
                                            BNB <i className="fa-solid fa-angle-down"></i>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>

                            <div className="swap-icon centering">
                                <i className="fa-solid fa-arrow-down"></i>
                            </div>

                            <div className="swap-block">
                                <div className="swap-block-text">
                                    To
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="swap-block-value">
                                        <input type="text" placeholder='0.0'/>
                                    </div>

                                    <div className="swap-block-select d-flex align-items-center">
                                        <div className="swap-block-select-icon">
                                            {/* <img src="./images/logo.png" alt="" /> */}
                                        </div>
                                        <div className="swap-block-select-name d-flex align-items-center">
                                            Select a currency <i className="fa-solid fa-angle-down"></i>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>

                            <div className="primary-btn swap-btn">
                                SWAP
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="centering h-100">
                        <img className="swap-img" src="./images/ex-left-bg.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}