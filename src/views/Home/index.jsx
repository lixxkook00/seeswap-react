import React from 'react'
import './Home.scss'

export default function Home() {

  return (
    <div className="home">
      <div className="sc-jVSGNQ sc-dHMioH fhuFH gVlRzR">
        <div className="sc-iKUVsf kpEjRZ">
            <h1 color="secondary" className="sc-kYPZxB sc-eWnToP dxdeuQ gqGGKb">Sea Finance</h1>
            <div color="text" className="sc-kYPZxB enMIBb">The #1 AMM and yield farm on Tron Chain.</div>
        </div>
        <div>
            <div className="sc-ellfGf sc-gLMgcV fCWbvN ffQoEh">
              <div className="sc-hBMUJo fQeJHI sc-ekA-drt cuAGcR">
                  <div className="sc-fnVZcZ RBusw">
                    <h2 color="text" className="sc-gtsrHT sc-fKgJPI kiwDHC ljuLnR">Farms &amp; Staking</h2>
                    <img src="./images/logo.png" alt="cake logo" width="64" height="64" className="sc-kOokqr jKJekh" />
                    <div className="sc-btlduw eQhtVu">
                        <div className="sc-hWZktu feMcpX">Sea to Harvest:</div>
                        <div color="textDisabled" className="sc-gtsrHT iweUrb" style={{lineHeight: '76px'}}>Locked</div>
                    </div>
                    <div className="sc-btlduw eQhtVu">
                        <div className="sc-hWZktu feMcpX">Sea in Wallet:</div>
                        <div color="textDisabled" className="sc-gtsrHT iweUrb" style={{lineHeight: '54px'}}>Locked</div>
                    </div>
                    <div className="sc-kLwonV kAhjsw"><button className="sc-dlnjwi csATfC" width="100%" scale="md">Coming Soon</button></div>
                  </div>
              </div>
              <div className="sc-hBMUJo fQeJHI sc-cApVyb kyeGiI">
                  <div className="sc-fnVZcZ RBusw">
                    <h2 color="text" className="sc-gtsrHT sc-fKgJPI kiwDHC ljuLnR">Announcements</h2>
                    <div>
                        <div twdiv="yes">
                          <div className="twitter-timeline twitter-timeline-rendered" style={{display: 'flex', maxWidth: '100%', marginTop: '0px', marginBottom: '0px'}}>
                            
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="sc-ellfGf sc-gLMgcV fCWbvN ffQoEh">
              <div className="sc-hBMUJo fQeJHI sc-gpEJdM faiEUM">
                  <div className="sc-fnVZcZ RBusw">
                    <h2 color="text" className="sc-gtsrHT sc-fKgJPI kiwDHC ljuLnR">Stats</h2>
                    <div className="sc-cxxZvF dhUsSv">
                        <div fontSize="14px" color="text" className="sc-gtsrHT dUrmYC">Token Name</div>
                        Sea Swap Global
                    </div>
                    <div className="sc-cxxZvF dhUsSv">
                        <div fontSize="14px" color="text" className="sc-gtsrHT dUrmYC">Token Symbol</div>
                        SEF
                    </div>
                    <div className="sc-cxxZvF dhUsSv">
                        <div fontSize="14px" color="text" className="sc-gtsrHT dUrmYC">Total Supply</div>
                        450.000.000 SEF
                    </div>
                  </div>
              </div>
              <div className="sc-hBMUJo fQeJHI sc-bnFVBq bAbBXY">
                  <div className="sc-fnVZcZ RBusw">
                    <h2 color="text" className="sc-gtsrHT sc-fKgJPI kiwDHC dBUfrw">Total Value Locked (TVL)</h2>
                    <div height="66" className="sc-dPaNzc sc-bBjRSN eBvcDa inBDfO"></div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
