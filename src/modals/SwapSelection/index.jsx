import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import './SwapSelection.scss'

export default function SwapSelection({handleClose, show}) {
    
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <div className="primary-modal">
                    <div className="primary-modal-header d-flex align-items-center justify-content-between">
                        <div className="primary-modal-title">
                            Select a Token
                        </div>

                        <div className="primary-modal-close" onClick={handleClose}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="swap-modal primary-modal-content">
                        <div className="swap-modal-content">
                            <div className="swap-modal-list">
                                <div className="swap-modal-token">
                                    <div className="swap-modal-token-img">
                                        <img src="./images/tokens/bnb.png" alt="" />
                                    </div>
                                    <div className="swap-modal-token-left">
                                        <div className="swap-modal-token-name">
                                            BNB
                                        </div>
                                        <div className="swap-modal-token-full">
                                            Binance Chain Native Token
                                        </div>
                                    </div>
                                </div>

                                <div className="swap-modal-token">
                                    <div className="swap-modal-token-img">
                                        <img src="./images/tokens/belt.png" alt="" />
                                    </div>
                                    <div className="swap-modal-token-left">
                                        <div className="swap-modal-token-name">
                                            BELT
                                        </div>
                                        <div className="swap-modal-token-full">
                                            Belt Finance Token
                                        </div>
                                    </div>
                                </div>

                                <div className="swap-modal-token">
                                    <div className="swap-modal-token-img">
                                        <img src="./images/tokens/bor.png" alt="" />
                                    </div>
                                    <div className="swap-modal-token-left">
                                        <div className="swap-modal-token-name">
                                            BOR
                                        </div>
                                        <div className="swap-modal-token-full">
                                            BoringDAO Token
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
