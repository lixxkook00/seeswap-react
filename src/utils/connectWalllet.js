import Web3 from "web3";

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

                let web3 = new Web3('https://babel-api.testnet.iotex.io');
                const result = await web3.eth.getBalance(window.ethereum.selectedAddress);
                console.log("result",result);
                const resultFormated = web3.utils.fromWei(result);
                console.log("resultFormated",resultFormated);

                return window.ethereum.selectedAddress;
            }
        } catch (error) {
            return error
        }
    }else{
      alert("install metamask extension!!")
    }
}