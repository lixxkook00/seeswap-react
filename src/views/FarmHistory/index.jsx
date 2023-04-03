import React from 'react'
import { Link } from 'react-router-dom'

export default function FarmHistory() {
  return (
    <div className="farm-history">
        <div className="sc-eCApnc sc-jfkLlK fdpNsC eZdLVC">
            <div className="sc-jVSGNQ sc-fnebDD fhuFH iSRtDR">
                <h1 color="secondary" className="sc-gtsrHT sc-fKgJPI ggmOKg iyoHHq">Salmon Farms</h1>
                <h2 color="text" className="sc-gtsrHT sc-fKgJPI dgqbMR dBUfrw">Stake Liquidity Pool (LP) tokens to earn.</h2>
            </div>
        </div>
        <div className="sc-jVSGNQ sc-dHMioH fhuFH gVlRzR">
            <div className="sc-cOohKt kRmOke">
                <div className="sc-cdlubJ gXaRiZ">
                    <div className="sc-iLCGUA hLFNvw">
                        <div scale="sm" className="sc-fXazdy lfdOef">
                            <input scale="sm" type="checkbox" className="sc-FRrlG fSNCbH" />
                            <div scale="sm" className="sc-fbIWvP lkHgvU"></div>
                        </div>
                        <div color="text" className="sc-gtsrHT fuReCb"> Staked only</div>
                    </div>
                    <div className="sc-fpqIuI fsfFWm">
                        <div className="sc-bqGGPW hlzxPu">
                            <Link to='/farm' className="sc-dlnjwi hQKghW sc-ksluID dHBAiJ" variant="tertiary" scale="sm" >Live</Link>
                            <Link to='/farm-history' className="sc-dlnjwi ilodVt" variant="subtle" scale="sm" >Finished</Link>
                        </div>
                    </div>
                </div>
                <div className="sc-lMZDC jdnlGX">
                    <div className="sc-fDUjSr gHBtJj">
                    <div color="text" className="sc-gtsrHT fuReCb">SORT BY</div>
                    <div width="168" height="160" className="sc-gSiFqf jMKsPg">
                        <div className="sc-epOimh jPcYOy">
                            <div color="text" className="sc-gtsrHT fuReCb">Hot</div>
                        </div>
                        {/* <svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-bdnxRM cKVKE">
                            <path d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"></path>
                        </svg> */}
                        <div className="sc-hgIrPW gfkZXS">
                            <ul className="sc-gLwjMs hSBWly">
                                <li className="sc-gwWxmB jwFxvc">
                                <div color="text" className="sc-gtsrHT fuReCb">APR</div>
                                </li>
                                <li className="sc-gwWxmB jwFxvc">
                                <div color="text" className="sc-gtsrHT fuReCb">Multiplier</div>
                                </li>
                                <li className="sc-gwWxmB jwFxvc">
                                <div color="text" className="sc-gtsrHT fuReCb">Earned</div>
                                </li>
                                <li className="sc-gwWxmB jwFxvc">
                                <div color="text" className="sc-gtsrHT fuReCb">Liquidity</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className="sc-fDUjSr gHBtJj">
                    <div color="text" className="sc-gtsrHT fuReCb">SEARCH</div>
                    <div className="sc-hDlsYP">
                        <div className="sc-hRLfyG jOUQDW">
                            <input placeholder="Search farms" scale="md" className="sc-jrsJWt sc-faQVUR bpOLEU hybaCY" value="" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="sc-hgRTRj eOOzbn">
                <div className="sc-joaiRD jVrluP">
                    <div className="sc-bOKJCu izPptq">
                    <table className="sc-hrlCSN coixXJ">
                        <tbody className="sc-bZesDY lkxyKm">
                            <tr className="sc-hRUHzT NzNFE">
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-zHacW krxMGU">
                                            <div className="sc-gGqFFC dxoHxU">
                                            <div width="40" height="40" className="sc-bCwfaz kcoDOv sc-jxFFCz jsawmL">
                                                <img src="/images/farms/ssg-bnb.png" alt="icon" className="sc-iwajpm ikqMKG" />    
                                            </div>
                                            <div>
                                                <div color="text" className="sc-gtsrHT dgqbMR">SEF-BNB</div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-bOCfAF jDfdVA">Earned</div>
                                        <div className="sc-zHacW krxMGU"><span className="sc-juNJA-d cIocdv">?</span></div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-bOCfAF jDfdVA">APR</div>
                                        <div className="sc-zHacW krxMGU">
                                            <div className="sc-dMackw dyLjKA">
                                            <div className="sc-ljpcbl iofoOg">Loading...</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-bOCfAF jDfdVA">Liquidity</div>
                                        <div className="sc-zHacW krxMGU">
                                            <div className="sc-fbOasq fNfnWS">
                                            <div className="sc-eTTTle kPtWWs">
                                                <div color="text" className="sc-gtsrHT fuReCb">$ 0.1</div>
                                            </div>
                                            <div className="sc-hLiTib bUdeEc">
                                                {/* <svg viewBox="0 0 24 24" color="textSubtle" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-bdnxRM gAYMcp">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
                                                </svg> */}
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-bOCfAF jDfdVA">Multiplier</div>
                                        <div className="sc-zHacW krxMGU">
                                            <div className="sc-fSvVUw hrubp">
                                            <div className="sc-iJKVRt iJQAHH">0x</div>
                                            <div className="sc-fVnRWS cHVDRu">
                                                {/* <svg viewBox="0 0 24 24" color="textSubtle" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-bdnxRM gAYMcp">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
                                                </svg> */}
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-zHacW krxMGU">
                                            <div className="sc-gDyJDg ghGGVL">
                                            Details
                                            {/* <svg viewBox="0 0 24 24" color="primary" className="sc-bdnxRM gAYMcp sc-iMCRTP kfbWrJ" width="20px" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                                            </svg> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                            </tr>
                            <tr className="sc-hRUHzT NzNFE">
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-zHacW krxMGU">
                                            <div className="sc-gGqFFC dxoHxU">
                                                <div width="40" height="40" className="sc-bCwfaz kcoDOv sc-jxFFCz jsawmL">
                                                    <img src="/images/farms/busd-bnb.png" alt="icon" className="sc-iwajpm ikqMKG" />
                                                </div>
                                            <div>
                                                <div color="text" className="sc-gtsrHT dgqbMR">BUSD-BNB</div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-bOCfAF jDfdVA">Earned</div>
                                        <div className="sc-zHacW krxMGU"><span className="sc-juNJA-d cIocdv">?</span></div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-bOCfAF jDfdVA">APR</div>
                                        <div className="sc-zHacW krxMGU">
                                            <div className="sc-dMackw dyLjKA">
                                            <div className="sc-ljpcbl iofoOg">Loading...</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-bOCfAF jDfdVA">Liquidity</div>
                                        <div className="sc-zHacW krxMGU">
                                            <div className="sc-fbOasq fNfnWS">
                                            <div className="sc-eTTTle kPtWWs">
                                                <div color="text" className="sc-gtsrHT fuReCb">$ 0.1</div>
                                            </div>
                                            <div className="sc-hLiTib bUdeEc">
                                                {/* <svg viewBox="0 0 24 24" color="textSubtle" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-bdnxRM gAYMcp">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
                                                </svg> */}
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-bOCfAF jDfdVA">Multiplier</div>
                                        <div className="sc-zHacW krxMGU">
                                            <div className="sc-fSvVUw hrubp">
                                            <div className="sc-iJKVRt iJQAHH">0x</div>
                                            <div className="sc-fVnRWS cHVDRu">
                                                {/* <svg viewBox="0 0 24 24" color="textSubtle" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-bdnxRM gAYMcp">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
                                                </svg> */}
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-zHacW krxMGU">
                                            <div className="sc-gDyJDg ghGGVL">
                                            Details
                                            {/* <svg viewBox="0 0 24 24" color="primary" className="sc-bdnxRM gAYMcp sc-iMCRTP kfbWrJ" width="20px" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                                            </svg> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                            </tr>
                            <tr className="sc-hRUHzT NzNFE">
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-zHacW krxMGU">
                                            <div className="sc-gGqFFC dxoHxU">
                                            <div width="40" height="40" className="sc-bCwfaz kcoDOv sc-jxFFCz jsawmL">
                                                <img src="/images/farms/btcd-busd.png" alt="icon" className="sc-iwajpm ikqMKG" />
                                            </div>
                                            <div>
                                                <div color="text" className="sc-gtsrHT dgqbMR">BTCD-BUSD</div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-bOCfAF jDfdVA">Earned</div>
                                        <div className="sc-zHacW krxMGU"><span className="sc-juNJA-d cIocdv">?</span></div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-bOCfAF jDfdVA">APR</div>
                                        <div className="sc-zHacW krxMGU">
                                            <div className="sc-dMackw dyLjKA">
                                            <div className="sc-ljpcbl iofoOg">Loading...</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-bOCfAF jDfdVA">Liquidity</div>
                                        <div className="sc-zHacW krxMGU">
                                            <div className="sc-fbOasq fNfnWS">
                                            <div className="sc-eTTTle kPtWWs">
                                                <div color="text" className="sc-gtsrHT fuReCb">$ 0.1</div>
                                            </div>
                                            <div className="sc-hLiTib bUdeEc">
                                                {/* <svg viewBox="0 0 24 24" color="textSubtle" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-bdnxRM gAYMcp">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
                                                </svg> */}
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-bOCfAF jDfdVA">Multiplier</div>
                                        <div className="sc-zHacW krxMGU">
                                            <div className="sc-fSvVUw hrubp">
                                            <div className="sc-iJKVRt iJQAHH">0x</div>
                                            <div className="sc-fVnRWS cHVDRu">
                                                {/* <svg viewBox="0 0 24 24" color="textSubtle" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-bdnxRM gAYMcp">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
                                                </svg> */}
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-zHacW krxMGU">
                                            <div className="sc-gDyJDg ghGGVL">
                                            Details
                                            {/* <svg viewBox="0 0 24 24" color="primary" className="sc-bdnxRM gAYMcp sc-iMCRTP kfbWrJ" width="20px" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                                            </svg> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                            </tr>
                            <tr className="sc-hRUHzT NzNFE">
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-zHacW krxMGU">
                                            <div className="sc-gGqFFC dxoHxU">
                                            <div width="40" height="40" className="sc-bCwfaz kcoDOv sc-jxFFCz jsawmL">
                                                <img src="/images/farms/lmt-bnb.png" alt="icon" className="sc-iwajpm ikqMKG" />
                                            </div>
                                            <div>
                                                <div color="text" className="sc-gtsrHT dgqbMR">LMT-BNB</div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-bOCfAF jDfdVA">Earned</div>
                                        <div className="sc-zHacW krxMGU"><span className="sc-juNJA-d cIocdv">?</span></div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-bOCfAF jDfdVA">APR</div>
                                        <div className="sc-zHacW krxMGU">
                                            <div className="sc-dMackw dyLjKA">
                                            <div className="sc-ljpcbl iofoOg">Loading...</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-bOCfAF jDfdVA">Liquidity</div>
                                        <div className="sc-zHacW krxMGU">
                                            <div className="sc-fbOasq fNfnWS">
                                            <div className="sc-eTTTle kPtWWs">
                                                <div color="text" className="sc-gtsrHT fuReCb">$ 0.1</div>
                                            </div>
                                            <div className="sc-hLiTib bUdeEc">
                                                {/* <svg viewBox="0 0 24 24" color="textSubtle" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-bdnxRM gAYMcp">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
                                                </svg> */}
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-bOCfAF jDfdVA">Multiplier</div>
                                        <div className="sc-zHacW krxMGU">
                                            <div className="sc-fSvVUw hrubp">
                                            <div className="sc-iJKVRt iJQAHH">0x</div>
                                            <div className="sc-fVnRWS cHVDRu">
                                                {/* <svg viewBox="0 0 24 24" color="textSubtle" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-bdnxRM gAYMcp">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
                                                </svg> */}
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-zHacW krxMGU">
                                            <div className="sc-gDyJDg ghGGVL">
                                            Details
                                            {/* <svg viewBox="0 0 24 24" color="primary" className="sc-bdnxRM gAYMcp sc-iMCRTP kfbWrJ" width="20px" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                                            </svg> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                            </tr>
                            <tr className="sc-hRUHzT NzNFE">
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-zHacW krxMGU">
                                            <div className="sc-gGqFFC dxoHxU">
                                            <div width="40" height="40" className="sc-bCwfaz kcoDOv sc-jxFFCz jsawmL">
                                                <img src="/images/farms/dfd-busd.png" alt="icon" className="sc-iwajpm ikqMKG" />

                                            </div>
                                            <div>
                                                <div color="text" className="sc-gtsrHT dgqbMR">DFD-BUSD</div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-bOCfAF jDfdVA">Earned</div>
                                        <div className="sc-zHacW krxMGU"><span className="sc-juNJA-d cIocdv">?</span></div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-bOCfAF jDfdVA">APR</div>
                                        <div className="sc-zHacW krxMGU">
                                            <div className="sc-dMackw dyLjKA">
                                            <div className="sc-ljpcbl iofoOg">Loading...</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-bOCfAF jDfdVA">Liquidity</div>
                                        <div className="sc-zHacW krxMGU">
                                            <div className="sc-fbOasq fNfnWS">
                                            <div className="sc-eTTTle kPtWWs">
                                                <div color="text" className="sc-gtsrHT fuReCb">$ 0.1</div>
                                            </div>
                                            <div className="sc-hLiTib bUdeEc">
                                                {/* <svg viewBox="0 0 24 24" color="textSubtle" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-bdnxRM gAYMcp">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
                                                </svg> */}
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-bOCfAF jDfdVA">Multiplier</div>
                                        <div className="sc-zHacW krxMGU">
                                            <div className="sc-fSvVUw hrubp">
                                            <div className="sc-iJKVRt iJQAHH">0x</div>
                                            <div className="sc-fVnRWS cHVDRu">
                                                {/* <svg viewBox="0 0 24 24" color="textSubtle" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-bdnxRM gAYMcp">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
                                                </svg> */}
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="sc-dYCqDv dWkpok">
                                    <div>
                                        <div className="sc-zHacW krxMGU">
                                            <div className="sc-gDyJDg ghGGVL">
                                            Details
                                            {/* <svg viewBox="0 0 24 24" color="primary" className="sc-bdnxRM gAYMcp sc-iMCRTP kfbWrJ" width="20px" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                                            </svg> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="sc-dVSYCO fDXrLu">
                    <button className="sc-dlnjwi knYkV" scale="md">
                        To Top
                        {/* <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-bdnxRM gAYMcp">
                            <path d="M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z"></path>
                        </svg> */}
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
