import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleRepo from "./SingleRepo";

import { getReposFetch } from "./store/slices/slices";

const MostStared = () => {
  //   const [repo, setRepo] = useState([]);
  //   const [load, setLoad] = useState(true);
  //   var date = new Date();
  //   date.setMonth(date.getMonth() - 1);
  //   let day = date.getDate();
  //   let month = date.getMonth();
  //   let year = date.getFullYear();
  //   month = month + 1;
  //   if (month < 10) month = "0" + month;
  //   if (day < 10) day = "0" + day;
  //   const dates = `${year}-${month}-${day}`;
  //   console.log(dates);
  //   useEffect(() => {
  //     fetch(
  //       `https://api.github.com/search/repositories?q=created:>${dates}&sort=stars&order=desc`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setRepo(data.items);
  //         setLoad(false);
  //       });
  //   }, []);
  const repos = useSelector((state) => state.repos.repos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReposFetch());
  }, [dispatch]);
  console.log(repos.items);
  const { items } = repos;

  //   const { items } = repos;

  return (
    <div className="container">
      <h1 className="heading">Most Starred Repos</h1>
      {items &&
        items.map((item) => {
          return <SingleRepo data={item} key={item.id} />;
        })}
    </div>
  );
};

export default MostStared;
