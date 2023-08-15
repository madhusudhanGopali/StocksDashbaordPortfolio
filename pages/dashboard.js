import styles from "./dashboard.module.css";
const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.walletSchedule}>
        <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
        <div className={styles.scheduledTransfers}>
          <div className={styles.titel}>
            <div className={styles.msft}>Scheduled Transfers</div>
            <div className={styles.icExpandMore24px1Parent}>
              <img
                className={styles.icExpandMore24px1Icon}
                alt=""
                src="/icexpandmore24px-11.svg"
              />
              <div className={styles.viewAll}>View All</div>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.main1}>
              <div className={styles.frameParent}>
                <div className={styles.nameDateWrapper}>
                  <div className={styles.nameDate}>
                    <div className={styles.msft}>MSFT</div>
                    <div className={styles.april282022}>
                      April 28, 2022 at 11:00
                    </div>
                  </div>
                </div>
                <div className={styles.div}>- $435,00</div>
              </div>
            </div>
            <div className={styles.main1}>
              <div className={styles.frameParent}>
                <div className={styles.nameDateWrapper}>
                  <div className={styles.nameDate}>
                    <div className={styles.msft}>TSLA</div>
                    <div className={styles.april282022}>
                      April 28, 2022 at 11:00
                    </div>
                  </div>
                </div>
                <div className={styles.div}>- $435,00</div>
              </div>
            </div>
            <div className={styles.main1}>
              <div className={styles.frameParent}>
                <div className={styles.nameDateWrapper}>
                  <div className={styles.nameDate}>
                    <div className={styles.msft}>META</div>
                    <div className={styles.april282022}>
                      April 28, 2022 at 11:00
                    </div>
                  </div>
                </div>
                <div className={styles.div}>- $435,00</div>
              </div>
            </div>
            <div className={styles.main1}>
              <div className={styles.frameParent}>
                <div className={styles.nameDateWrapper}>
                  <div className={styles.nameDate}>
                    <div className={styles.msft}>MSFT</div>
                    <div className={styles.april282022}>
                      April 28, 2022 at 11:00
                    </div>
                  </div>
                </div>
                <div className={styles.div}>- $435,00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardsGraphTransaction}>
        <div className={styles.cards}>
          <div className={styles.totalBalance}>
            <img className={styles.icon} alt="" src="/icon.svg" />
            <div className={styles.totalBalance1}>
              <div className={styles.netWorth}>Net Worth</div>
              <b className={styles.b}>$524</b>
            </div>
          </div>
          <div className={styles.totalSpending}>
            <img className={styles.icon} alt="" src="/icon1.svg" />
            <div className={styles.main5}>
              <div className={styles.netWorth}>Spending</div>
              <b className={styles.b}>$250</b>
            </div>
          </div>
          <div className={styles.totalSpending}>
            <img className={styles.icon} alt="" src="/icon2.svg" />
            <div className={styles.main5}>
              <div className={styles.netWorth}>Saved</div>
              <b className={styles.b}>$550</b>
            </div>
          </div>
        </div>
        <div className={styles.graph}>
          <div className={styles.bg} />
          <div className={styles.shower} />
          <div className={styles.dateAndLine}>
            <div className={styles.lines}>
              <div className={styles.linesChild} />
              <div className={styles.linesChild} />
              <div className={styles.linesChild} />
              <div className={styles.linesChild} />
              <div className={styles.linesChild} />
              <div className={styles.linesChild} />
              <div className={styles.linesChild} />
            </div>
            <div className={styles.date}>
              <div className={styles.k}>Apr 14</div>
              <div className={styles.k}>Apr 15</div>
              <div className={styles.k}>Apr 16</div>
              <div className={styles.apr17}>Apr 17</div>
              <div className={styles.k}>Apr 18</div>
              <div className={styles.k}>Apr 19</div>
              <div className={styles.k}>Apr 20</div>
            </div>
          </div>
          <img className={styles.chartIcon} alt="" src="/chart1.svg" />
          <div className={styles.pointMoney}>
            <div className={styles.dollar}>
              <img
                className={styles.dollarChild}
                alt=""
                src="/rectangle-456.svg"
              />
              <div className={styles.div4}>$5,500</div>
            </div>
            <img className={styles.pointerIcon} alt="" src="/pointer.svg" />
          </div>
          <div className={styles.money}>
            <div className={styles.k}>10K</div>
            <div className={styles.k}>7K</div>
            <div className={styles.k}>5K</div>
            <div className={styles.k}>3K</div>
            <div className={styles.k}>0K</div>
          </div>
          <div className={styles.top}>
            <div className={styles.msft}>Portfolio Value</div>
            <div className={styles.main7}>
              <div className={styles.status}>
                <div className={styles.ellipseParent}>
                  <div className={styles.groupChild} />
                  <div className={styles.income}>Income</div>
                </div>
                <div className={styles.ellipseGroup}>
                  <div className={styles.groupItem} />
                  <div className={styles.income}>Expenses</div>
                </div>
              </div>
              <div className={styles.dateFilter}>
                <div className={styles.k}>Last 7 days</div>
                <img
                  className={styles.icExpandMore24px1Icon1}
                  alt=""
                  src="/icexpandmore24px-12.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.topBar}>
        <div className={styles.msft}>Dashboard</div>
        <div className={styles.topBar1}>
          <div className={styles.icons}>
            <img className={styles.search11Icon} alt="" src="/search1-1.svg" />
            <img
              className={styles.search11Icon}
              alt=""
              src="/notificationbing5-1.svg"
            />
          </div>
          <div className={styles.name}>
            <div className={styles.nameavater}>
              <img
                className={styles.nameavaterChild}
                alt=""
                src="/ellipse-1@2x.png"
              />
              <div className={styles.msft}>Nicolas Aguirre</div>
            </div>
            <img className={styles.dropdownIcon} alt="" src="/dropdown.svg" />
          </div>
        </div>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.nameavater}>
          <img className={styles.excludeIcon} alt="" src="/exclude.svg" />
          <b className={styles.maglo}>Maglo.</b>
        </div>
        <div className={styles.main8}>
          <div className={styles.option}>
            <button className={styles.bar}>
              <img
                className={styles.dashboardIcon}
                alt=""
                src="/dashboard.svg"
              />
              <div className={styles.dashboard2}>Dashboard</div>
            </button>
            <div className={styles.bar1}>
              <img
                className={styles.transactionsIcon}
                alt=""
                src="/transactions.svg"
              />
              <div className={styles.invoices}>Transactions</div>
            </div>
            <div className={styles.bar1}>
              <img
                className={styles.transactionsIcon}
                alt=""
                src="/invoices.svg"
              />
              <div className={styles.invoices}>Invoices</div>
            </div>
            <div className={styles.bar1}>
              <img
                className={styles.transactionsIcon}
                alt=""
                src="/my-wallets.svg"
              />
              <div className={styles.invoices}>My Wallets</div>
            </div>
            <div className={styles.bar1}>
              <img
                className={styles.transactionsIcon}
                alt=""
                src="/settings.svg"
              />
              <div className={styles.invoices}>Settings</div>
            </div>
          </div>
          <div className={styles.option}>
            <div className={styles.bar1}>
              <img className={styles.transactionsIcon} alt="" src="/help.svg" />
              <div className={styles.invoices}>Help</div>
            </div>
            <div className={styles.bar1}>
              <img
                className={styles.transactionsIcon}
                alt=""
                src="/logout.svg"
              />
              <div className={styles.invoices}>Logout</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.recentTransaction}>
        <div className={styles.top1}>
          <div className={styles.msft}>Watch List</div>
          <div className={styles.viewAllParent}>
            <div className={styles.msft}>View All</div>
            <img
              className={styles.icExpandMore24px1Icon1}
              alt=""
              src="/icexpandmore24px-11.svg"
            />
          </div>
        </div>
        <div className={styles.index1}>
          <div className={styles.tickername}>Ticker/Name</div>
          <div className={styles.typeParent}>
            <div className={styles.type}>TYPE</div>
            <div className={styles.type}>AMOUNT</div>
            <div className={styles.type}>DATE</div>
          </div>
        </div>
        <div className={styles.main9}>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.appleIncParent}>
                <div className={styles.appleInc}>Apple. Inc</div>
                <div className={styles.aapl}>AAPL</div>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.image8Icon}
                  alt=""
                  src="/image-8@2x.png"
                />
              </div>
            </div>
            <div className={styles.stockParent}>
              <div className={styles.stock}>Stock</div>
              <div className={styles.div5}>$420.84</div>
              <div className={styles.stock}>14 Apr 2022</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
