import React from 'react'
import './App.css'

function RewardsComponent({ value }) {
  const [rewardsValue, setRewardsValue] = React.useState([]);

  // React.useEffect for data that can be refreshed throughout event loop
  React.useEffect(() => {
    setRewardsValue(value);
  }, [value]);

  return (
    <div>
      {
        Object.keys(rewardsValue).map((key, index) => {
          return key !== "total" && rewardsValue[key] > 0 && (
            <p key={key + index}>{key} Rewards Total: {rewardsValue[key]}</p>
          )
        })
      }
      <br />
      <p key="total">{rewardsValue["total"] !== undefined && rewardsValue["total"] !== 0 && (<span>Rewards Total: {rewardsValue["total"]}</span>)}</p>
      <p key="total">{rewardsValue["total"] !== undefined && rewardsValue["total"] === 0 && (<span>No Rewards Available!</span>)}</p>
    </div>
  );
}

function RewardsContainer() {
  const [rewards, setRewards] = React.useState([]);

  function loadRewards() {
    //  Utilize Promise to simulate asynchronous call
    return (new Promise((res, rej) => {
      try {
        setRewards([
          {
            "_id": "63ed905fe946fd3cbfd44b11",
            "amount": 120.31,
            "date": "2023-01"
          },
          {
            "_id": "63ed905fddd3317fad485000",
            "amount": 60.55,
            "date": "2022-12"
          },
          {
            "_id": "63ed905f97eb106249882fb9",
            "amount": 319.17,
            "date": "2023-02"
          },
          {
            "_id": "63ed905fad8a9ff300563c15",
            "amount": 254.23,
            "date": "2023-01"
          },
          {
            "_id": "63ed905fbe6fbf8f6b275d10",
            "amount": 205.98,
            "date": "2022-12"
          },
          {
            "_id": "63ed905f56fed59f0274e4e1",
            "amount": 385.45,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f5e712efb4b3cd66d",
            "amount": 127.66,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f5ada7230eb4f4e89",
            "amount": 277.05,
            "date": "2022-12"
          },
          {
            "_id": "63ed905ff5dab7d03791d176",
            "amount": 228.54,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f8f213a7bea1dd09d",
            "amount": 122.96,
            "date": "2023-02"
          },
          {
            "_id": "63ed905f26e5af99ae0505e3",
            "amount": 11.41,
            "date": "2023-02"
          },
          {
            "_id": "63ed905ffbe3be3a713e2577",
            "amount": 80.59,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f91267ec1e7ed53cc",
            "amount": 374.69,
            "date": "2023-02"
          },
          {
            "_id": "63ed905f017eaa83b8920f93",
            "amount": 5.32,
            "date": "2022-12"
          },
          {
            "_id": "63ed905fa87dad57a3f3f292",
            "amount": 95.11,
            "date": "2023-02"
          },
          {
            "_id": "63ed905f2e90f2e6d9e303a2",
            "amount": 113.36,
            "date": "2023-02"
          },
          {
            "_id": "63ed905f49367ccc093584b9",
            "amount": 42.25,
            "date": "2022-12"
          },
          {
            "_id": "63ed905f093bd2d0cc655f78",
            "amount": 135.5,
            "date": "2023-01"
          },
          {
            "_id": "63ed905fc4df22f9b648a5e7",
            "amount": 121.53,
            "date": "2022-12"
          },
          {
            "_id": "63ed905ffd93046a043b1246",
            "amount": 46.87,
            "date": "2022-12"
          },
          {
            "_id": "63ed905f7da76a7318e5f839",
            "amount": 382.09,
            "date": "2022-12"
          },
          {
            "_id": "63ed905f874ceb8d3b26d3fc",
            "amount": 300.22,
            "date": "2022-12"
          },
          {
            "_id": "63ed905f9b77d05885862bce",
            "amount": 330.38,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f6ccef18b54a92aca",
            "amount": 209.01,
            "date": "2022-12"
          },
          {
            "_id": "63ed905fa4a10832a03260b1",
            "amount": 347.31,
            "date": "2022-12"
          },
          {
            "_id": "63ed905feb8a051407caead6",
            "amount": 178.45,
            "date": "2023-02"
          },
          {
            "_id": "63ed905f089578818fe3d3e3",
            "amount": 84.47,
            "date": "2023-02"
          },
          {
            "_id": "63ed905f1860865b237f9c42",
            "amount": 339.26,
            "date": "2023-02"
          },
          {
            "_id": "63ed905f6cada0d6a2ca5016",
            "amount": 256.14,
            "date": "2023-02"
          },
          {
            "_id": "63ed905f9f50852fce56afef",
            "amount": 151.59,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f5aee37e159724024",
            "amount": 332.49,
            "date": "2023-01"
          },
          {
            "_id": "63ed905fd6845700a07de641",
            "amount": 208.66,
            "date": "2022-12"
          },
          {
            "_id": "63ed905fc14bb3e7fbee0a21",
            "amount": 247.76,
            "date": "2022-12"
          },
          {
            "_id": "63ed905f9b628d3c578216a4",
            "amount": 5.12,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f2462bc960746d4f3",
            "amount": 86.16,
            "date": "2022-12"
          },
          {
            "_id": "63ed905f299d6140fb312767",
            "amount": 29.92,
            "date": "2023-01"
          },
          {
            "_id": "63ed905fd73c960be7605b1f",
            "amount": 138.87,
            "date": "2023-01"
          },
          {
            "_id": "63ed905fa6752ce9dc9f89cc",
            "amount": 340.99,
            "date": "2023-02"
          },
          {
            "_id": "63ed905f6c20a720cf75df2f",
            "amount": 148.42,
            "date": "2023-02"
          },
          {
            "_id": "63ed905fdf6f415bde18d044",
            "amount": 240.16,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f6a34fe9b230cdb77",
            "amount": 42.98,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f244f7c292b18eb86",
            "amount": 259.74,
            "date": "2023-01"
          },
          {
            "_id": "63ed905ffcb81f7b6a0edae3",
            "amount": 46.16,
            "date": "2022-12"
          },
          {
            "_id": "63ed905f5b584dff831e8294",
            "amount": 367.87,
            "date": "2022-12"
          },
          {
            "_id": "63ed905f8de64f71bebbb752",
            "amount": 390.34,
            "date": "2023-01"
          },
          {
            "_id": "63ed905ffe19dbd12b4d0764",
            "amount": 262.69,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f31f84a78b13a3fe3",
            "amount": 368.01,
            "date": "2022-12"
          },
          {
            "_id": "63ed905fd8c74e19b64885ec",
            "amount": 11.75,
            "date": "2023-02"
          },
          {
            "_id": "63ed905f16abae6662ffa732",
            "amount": 304.83,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f1f75b62548f036b2",
            "amount": 15.84,
            "date": "2023-02"
          },
          {
            "_id": "63ed905f8c2cee72a802790a",
            "amount": 215.34,
            "date": "2023-02"
          },
          {
            "_id": "63ed905f6b95a5be0304a151",
            "amount": 388.65,
            "date": "2023-02"
          },
          {
            "_id": "63ed905f920cf48511e39fa2",
            "amount": 171,
            "date": "2023-01"
          },
          {
            "_id": "63ed905ffeba36c338a49792",
            "amount": 209.38,
            "date": "2023-01"
          },
          {
            "_id": "63ed905ffe8a71f95178c9aa",
            "amount": 22.36,
            "date": "2022-12"
          },
          {
            "_id": "63ed905f765e1b8e78a99da7",
            "amount": 22.6,
            "date": "2023-01"
          },
          {
            "_id": "63ed905fdfff977a24b66576",
            "amount": 286.72,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f024422e0aa5385fd",
            "amount": 246.86,
            "date": "2022-12"
          },
          {
            "_id": "63ed905f4d12e5c449f2eddc",
            "amount": 70.89,
            "date": "2023-01"
          },
          {
            "_id": "63ed905ff6e70f6848cc096f",
            "amount": 21.18,
            "date": "2023-02"
          },
          {
            "_id": "63ed905fcf9583cb89f6e099",
            "amount": 30.6,
            "date": "2023-02"
          },
          {
            "_id": "63ed905ff4c639b16e8dc703",
            "amount": 23.24,
            "date": "2023-02"
          },
          {
            "_id": "63ed905f4f7b35a016880682",
            "amount": 275.34,
            "date": "2023-01"
          },
          {
            "_id": "63ed905fb7db3385618ba528",
            "amount": 388.14,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f83197a36f089a4ab",
            "amount": 230.91,
            "date": "2022-12"
          },
          {
            "_id": "63ed905ff8532d87b10f1d75",
            "amount": 173.93,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f1a6e3340b96814a6",
            "amount": 141.16,
            "date": "2022-12"
          },
          {
            "_id": "63ed905f945dee6ae2b07bc7",
            "amount": 301.85,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f9496d903d632e10f",
            "amount": 111.94,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f69fad82b291d5bea",
            "amount": 71.76,
            "date": "2023-01"
          },
          {
            "_id": "63ed905fbc2416a132fa73cd",
            "amount": 211.1,
            "date": "2023-02"
          },
          {
            "_id": "63ed905fc81e89aa2a70f4bb",
            "amount": 213.57,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f0b6d320e17ff71fc",
            "amount": 161.29,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f54f349e33ea6fd52",
            "amount": 352.06,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f3a7a65ff6b876794",
            "amount": 150.38,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f569c4cac5fe72503",
            "amount": 150.1,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f9ab5e63da727575f",
            "amount": 195.47,
            "date": "2023-01"
          },
          {
            "_id": "63ed905fa502db0ea45abb80",
            "amount": 218.9,
            "date": "2023-01"
          },
          {
            "_id": "63ed905fe424b6469287cd3e",
            "amount": 179.49,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f8ac39789eb44eb85",
            "amount": 74.16,
            "date": "2022-12"
          },
          {
            "_id": "63ed905f25219d4a3da78820",
            "amount": 333.3,
            "date": "2022-12"
          },
          {
            "_id": "63ed905ff0d65a3f13d4e61b",
            "amount": 172.3,
            "date": "2022-12"
          },
          {
            "_id": "63ed905fea5c833904d6d889",
            "amount": 192.45,
            "date": "2023-02"
          },
          {
            "_id": "63ed905f95b8d514fd6a771a",
            "amount": 274.31,
            "date": "2022-12"
          },
          {
            "_id": "63ed905f6cb3b6d4f4cffeb7",
            "amount": 321.55,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f31fedb68590afc28",
            "amount": 226.89,
            "date": "2023-02"
          },
          {
            "_id": "63ed905fdb0a66fd378b3398",
            "amount": 104.33,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f7a1d49125f136f31",
            "amount": 373.7,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f5726a3a8eeeaac81",
            "amount": 337.12,
            "date": "2023-02"
          },
          {
            "_id": "63ed905f2a86b380ac8354ee",
            "amount": 377.87,
            "date": "2023-01"
          },
          {
            "_id": "63ed905f6a453ec65cbe4290",
            "amount": 38.45,
            "date": "2022-12"
          },
          {
            "_id": "63ed905fd51712c810947cc2",
            "amount": 315.86,
            "date": "2022-12"
          }
        ]);

        res(true);
      } catch (exception) {
        rej(false);
        throw new Error(exception);
      }
    }));
  }

  const calculateRewards = () => {
    let values = {};
    rewards.forEach((reward) => {
      const _amt = Math.floor(reward.amount);
      // Create unique key for each month based on month/year
      values[reward.date] = (values[reward.date] == undefined) ? 0 : values[reward.date];
      // Sum up amount based on logic given 
      // A customer receives 2 points for every dollar spent over $100 in each transaction
      // Plus 1 point for every dollar spent between $50 and $100 in each transaction.
      values[reward.date] += (_amt > 100 ? (_amt - 100) * 2 + 50 : _amt > 49 ? _amt - 49 : 0);
      // Sum the total points across all elements in list
      values["total"] = (values["total"] == undefined) ? 0 : values["total"];
      values["total"] += (_amt > 100 ? (_amt - 100) * 2 + 50 : _amt > 49 ? _amt - 49 : 0);
    });
    return values;
  };

  // Memoize results for large datasets
  const result = React.useMemo(calculateRewards, [rewards]);

  return (
    <div>
      <RewardsComponent value={result} />
      <button onClick={async () => {
        try {
          await loadRewards();
        } catch (exception) {
          console.error(exception);
        }
      }}>
        Calculate Rewards
      </button>
    </div>
  )
}

export default function App() {
  return (
    <main>
      <RewardsContainer />
    </main>
  )
}
