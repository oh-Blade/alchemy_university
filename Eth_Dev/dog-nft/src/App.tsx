import React, { useEffect, useState } from 'react';
import './App.css';
import { Flex, Layout } from 'antd';
import { Card, Col, Row } from 'antd';
import { Alchemy, Network, Nft, NftContract } from 'alchemy-sdk';
import { Content } from 'antd/es/layout/layout';
import { useAccount, useConnect, useDisconnect } from 'wagmi'


const { Header, Footer } = Layout;
const { Meta } = Card;

const headerStyle: React.CSSProperties = {
  // textAlign: 'center',
  color: '#fff',
  height: 400,
  // lineHeight: '64px',
  paddingInline: 48,
  backgroundColor: '#fff',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: '100%',
  display: 'flex',
};

const contractAddress = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";
function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();
  
  const [nftData, setNftData] = useState<Nft[]>([]);
  const [contractData, setContractData] = useState<NftContract>();

  const config = {
    apiKey: 'LwEb4y-HiFpcXMvmVGzI6xBCWb-5w7WF',
    network: Network.ETH_MAINNET,
  };
  async function getContract() {
    const alchemy = new Alchemy(config);
    const alchemyContract = await alchemy.nft.getContractMetadata(contractAddress);
    console.log(alchemyContract);
    setContractData(alchemyContract);
  }
  async function getNFTsForContract() {

    const alchemy = new Alchemy(config);
    const alchemyNft = await alchemy.nft.getNftsForContract(contractAddress);
    setNftData(alchemyNft.nfts);

  }
  useEffect(() => {
    getContract();
    getNFTsForContract();
  }, []);

  return (
    <Flex gap="middle" wrap>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <div>
            <h2>Connect</h2>
            {connectors.map((connector) => (
              <button
                key={connector.uid}
                onClick={() => connect({ connector })}
                type="button"
              >
                {connector.name}
              </button>
            ))}
            <div>{status}</div>
            <div>{error?.message}</div>
          </div>

        </Header>
        <Content>
          <Row gutter={24}>
            <Col span={8}>
              <Card
                hoverable
                // style={{ width: 240 }}
                cover={<img alt="example" src={contractData?.openSeaMetadata.imageUrl} />}
              >
              </Card>
            </Col>
            <Col span={16}>
              <Card className='contract-card' title={contractData?.name} bordered={false} >
                <p>Symbol: {contractData?.symbol}</p>
                <p>Contract Address: {contractData?.address}</p>
                <p>Description: {contractData?.openSeaMetadata.description}</p>
              </Card>
            </Col>


          </Row>
          <Row gutter={24}>
            {nftData.map((item) => {
              return (
                <Col span={6}>
                  <Card
                    hoverable
                    // style={{ width: 240 }
                    cover={<img alt="example" src={item.image.cachedUrl} />}
                  >
                    <Meta title={item.tokenId + "." + item.contract.name} description={"Contract Address: " + item.contract.address} />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Content>
        <Footer style={footerStyle}>Choose your own NFT</Footer>
      </Layout>

    </Flex>
  );
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

