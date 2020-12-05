import axios from "axios";
import { useEffect, useState } from "react";

const Api = () => {
  const [cricketData, setCricketData] = useState([]);
  console.log(cricketData);
  const getCricketUpdates = async () => {
    try {
      const data = await axios.get(
        `https://cricapi.com/api/matches?apikey=${process.env.REACT_APP_CRICKET_API}`
      );

      setCricketData(data.data.matches);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCricketUpdates();
  }, []);
  return (
    <div>
      {cricketData.map((match) => {
        return (
          <div className="match" key={match.unique_id}>
            <div className="Card">
              <h1>{match["team-1"]}</h1>
              <p>Vs</p>
              <h1>{match["team-2"]}</h1>
              <h1>Toss Winner:{match.winner_team}</h1>
              <h2>Match Start at: {match.dateTimeGMT}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Api;
