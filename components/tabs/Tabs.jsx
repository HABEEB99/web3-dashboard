import React, { useState, useEffect } from 'react';
import { useERC20Balances, useMoralis, useMoralisWeb3Api } from 'react-moralis';
import Moralis from 'moralis';
import { CgArrowLongRightC } from 'react-icons/cg';

const Tabs = () => {
  const web3Api = useMoralisWeb3Api();
  const { fetchERC20Balances, data } = useERC20Balances();
  const [ethBalance, setEthBalance] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const { user } = useMoralis();
  const [activeTab, setActiveTab] = useState(1);
  const toggleTab = (idx) => setActiveTab(idx);

  const getAccountBalance = async () => {
    const eth = await web3Api.account
      .getNativeBalance({
        chain: 'rinkeby',
        address: user.get('ethAddress'),
      })
      .catch((error) => console.log(error));

    if (eth.balance) {
      setEthBalance(Moralis.Units.FromWei(eth.balance));
    }
  };

  const getTransactions = async () => {
    const request = await web3Api.account
      .getTransactions({
        chain: 'rinkeby',
        address: user.get('ethAddress'),
      })
      .catch((error) => console.log(error));

    if (request) {
      setTransactions(request.result);
    }
  };

  useEffect(() => {
    getTransactions();
    getAccountBalance();
    fetchERC20Balances({
      params: {
        chain: 'rinkeby',
        address: user.get('ethAddress'),
      },
    });
  }, []);

  const styles = {
    container: `w-screen h-[80vh] px-3 sm:px-6 md:px-12 lg:px-40 flex flex-col items-center justify-center`,
    tabsContainer: `w-full lg:w-[60vw] h-[5vh] lg:h-[8vh] flex items-center justify-center space-x-8 lg:space-x-20 border-b-2 border-header`,
    tabs: `transition duration-700 text-base sm:text-base lg:text-4xl font-bold text-gray-400 cursor-pointer`,
    activeTabb: `text-btn font-bold text-base lg:text-4xl cursor-pointer`,
    contentWrapper: `w-full lg:w-[60vw]  mt-4`,
    content: `hidden `,
    activeContent: `flex items-center block`,
  };

  return (
    <main className={styles.container}>
      <div className={styles.tabsContainer}>
        <h1
          onClick={() => toggleTab(1)}
          className={
            activeTab === 1 ? styles.tabs && styles.activeTabb : styles.tabs
          }
        >
          Transactions
        </h1>
        <h1
          onClick={() => toggleTab(2)}
          className={
            activeTab === 2 ? styles.tabs && styles.activeTabb : styles.tabs
          }
        >
          Balance
        </h1>
        <h1
          onClick={() => toggleTab(3)}
          className={
            activeTab === 3 ? styles.tabs && styles.activeTabb : styles.tabs
          }
        >
          NFTs
        </h1>
        <h1
          onClick={() => toggleTab(4)}
          className={
            activeTab === 4 ? styles.tabs && styles.activeTabb : styles.tabs
          }
        >
          Send ETH
        </h1>
      </div>

      <div className={styles.contentWrapper}>
        <div
          className={activeTab === 1 ? styles.activeContent : styles.content}
        >
          <h1>Transaction</h1>
        </div>
        <div
          className={activeTab === 2 ? styles.activeContent : styles.content}
        >
          <div className=" flex items-center  space-x-6 bg-white rounded-md shadow-xl w-full">
            <h1 className="text-gray-300 text-2xl font-bold">
              My ERC20 TOKENS
            </h1>
            <CgArrowLongRightC className=" text-5xl font-bold animate-pulse text-btn" />
            <h1 className="text-3xl text-gray-600">
              {ethBalance} <span className="text-green-400 ">ETH</span>
            </h1>
          </div>
          <hr />
          {data &&
            data.map((token) => (
              <div key={token.symbol}>
                <h1>
                  {Moralis.Units.FromWei(token.balance)} <b>{token.symbol}</b>
                </h1>
              </div>
            ))}
        </div>
        <div
          className={activeTab === 3 ? styles.activeContent : styles.content}
        >
          <h1>NFTs</h1>
        </div>
        <div
          className={activeTab === 4 ? styles.activeContent : styles.content}
        >
          <h1>send ETH</h1>
        </div>
      </div>
    </main>
  );
};

export default Tabs;
