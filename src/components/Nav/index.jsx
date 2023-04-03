import React, { useEffect, useState } from 'react'
import { connectWallet } from '../../utils/connectWalllet'
import truncateEthAddress from 'truncate-eth-address'

export default function Nav() {

    const [walletAddress, setWalletAddress] = useState(window.ethereum.selectedAddress)

    const handleConnect = async () => {
        console.log("check")
        await connectWallet(setWalletAddress)
    }

    // handle changed wallet
    useEffect(() => {
        if (window.ethereum){
            connectWallet(setWalletAddress)
        }
        if (window.ethereum && window.ethereum.selectedAddress) {
            setWalletAddress(window.ethereum.selectedAddress);
        }
    },[])

    // handle on-change wallet
    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on("chainChanged", () => {
                window.location.reload();
            });
            window.ethereum.on("accountsChanged", () => {
                window.location.reload();
            });
        }
    });

    return (
        <nav className="sc-kJNqyW dNeGhK">
            <div className="sc-jHcXXw sc-bQCEYZ eOSeYq hhtRpX">
                <button className="sc-xGAEC dNLokW sc-iuImSO jJhdMY" aria-label="Toggle menu" scale="md">
                    <i className="fa-solid fa-bars"></i>
                </button>
                <a aria-label="Pancake home page " className="sc-EhTUr eYutoQ" href="/">
                    <img className="logo" src="./images/logo.png" />
                </a>
            </div>
            <div className="sc-jHcXXw sc-bQCEYZ eOSeYq hhtRpX">
                <div className="centering">
                    <button onClick={() => handleConnect()} className="sc-xGAEC cXhjLr" scale="sm">
                        {
                            walletAddress === null
                            ?
                            "Connect"
                            :
                            truncateEthAddress(walletAddress)
                        }
                        
                    </button>
                </div>
                <div title="Bunny" className="sc-hndLF fAGAiu">
                    <a aria-label="Link to profile" href="/profile">
                        {/* <img src="/images/profile.png" /> */}
                    </a>
                    <div className="sc-geBCVM fDMxsN"></div>
                </div>
            </div>
        </nav>
    )
}
