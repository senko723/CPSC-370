import React, { useEffect, useState } from 'react';

function BlockchainInfo() {
    const [blockInfo, setBlockInfo] = useState(null);

    useEffect(() => {
        fetch('https://blockchain.info/latestblock')
            .then(response => response.json())
            .then(data => setBlockInfo(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h1>Latest Block Information</h1>
            {blockInfo ? (
                <pre>{JSON.stringify(blockInfo, null, 2)}</pre>
            ) : (
                'Loading...'
            )}
        </div>
    );
}

export default BlockchainInfo;
