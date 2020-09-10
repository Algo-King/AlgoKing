import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const Leaderboard = () => {
  const [leaderData, setLeaderData] = useState([
    {
      name: '',
      challengeName: '',
      time: 0,
      score: 0,
    },
  ]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await axios.get(`/api/submissions/all`);
    setLeaderData(res.data);
  };

  // console.log(leaderData);
  // let { name, challengeName, time, score } = leaderData;
  // console.log('name', name);
  const sortedArr = leaderData.sort(function (a, b) {
    if (a.time > b.time) {
      return 1;
    }
    if (a.time < b.time) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  return (
    <React.Fragment>
      <Container>
        {sortedArr.map((el) => {
          return (
            <Container style={{ height: '5vh' }}>
              <span>{el.name}</span> <span>{el.challengeName}</span>{' '}
              <span>{el.time} </span>
            </Container>
          );

          // <Container>{el.name}</div>;
        })}
      </Container>
    </React.Fragment>
  );
};

export default Leaderboard;
