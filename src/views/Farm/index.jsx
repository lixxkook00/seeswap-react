import React from 'react'
import { Link } from 'react-router-dom'

export default function Farm() {
  return (
    <div className="farm">
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
                            <Link to='/farm' className="sc-dlnjwi ilodVt" variant="subtle" scale="sm" >Live</Link>
                            <Link to="/farm-history" className="sc-dlnjwi hQKghW sc-ksluID dHBAiJ" variant="tertiary" scale="sm">
                                Finished
                            </Link>
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
                                <input placeholder="Search farms" scale="md" className="sc-jrsJWt sc-faQVUR bpOLEU hybaCY" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="sc-jcsPjo isoErC"></div>
            </div>
            <div>
                <div width="200" height="200" className="sc-bCwfaz dnaaJv sc-iazTlQ fzbiQM">
                    <img src="/images/emptyList.png" alt="Seaswap illustration" className="sc-iwajpm ikqMKG" />
                </div>
                <div className="sc-jcsPjo isoErC">
                    <button className="sc-dlnjwi kjiocC" width="50%" scale="md">Coming Soon</button>
                </div>
            </div>
        </div>
    </div>
  )
}
