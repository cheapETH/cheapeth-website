// Add to metamask
const btn = document.querySelector('#addNow');
const connectionParam = {
    chainId: '0x' + (777).toString(16),
    chainName: 'cheapETH',
    nativeCurrency: {
        name: 'cheapETH',
        symbol: 'cTH',
        decimals: 18
    },
    rpcUrls: [
        'https://rpc.cheapeth.org/rpc',
    ],
    blockExplorerUrls: [
        'https://explore.cheapswap.io/',
    ]
}
btn.onclick = () => {
    event.preventDefault()
    if (typeof window.ethereum === 'undefined') {
        btn.innerHTML = 'Metamask not installed';
        return;
    }

    if (window.ethereum.chainId === '0x309') {
        btn.innerHTML = 'Already on the chain';
        return;
    }

    btn.innerHTML = 'Adding the network...';
    window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [connectionParam],
    }).then(r => {
        if (r === null) {
            btn.innerHTML = 'Added successfully';
        } else {
            btn.innerHTML = 'Something went wrong';
            console.error(r);
        }
    })
}