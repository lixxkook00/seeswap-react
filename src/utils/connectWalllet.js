
export async function connectWallet(setWalletAddress) {
    if(window.ethereum){
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' })
            if (window.ethereum.selectedAddress) {
                // const infor = await loginWithWallet()

                // await console.log("infor",infor)
                // handle when user change wallet not register yet
                // await dispatch(setUserInfor(infor))
                // if(!infor){
                //     // console.log("navigate run this shit",infor)
                //     // navigate('/')
                // }
                setWalletAddress(window.ethereum.selectedAddress)
                return window.ethereum.selectedAddress;
            }
        } catch (error) {
            return error
        }
    }else{
      alert("install metamask extension!!")
    }
}