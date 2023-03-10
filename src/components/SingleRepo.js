import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TotalChangesChat from "./TotalChangesChat";
import { getCommitFetch } from "./store/slices/commitSlice";
import { useDispatch, useSelector } from "react-redux";
import ContributerChart from "./ContributerChart";

const SingleRepo = ({ data }) => {
  const commits = useSelector((state) => state.commits.commits);
  const dispatch1 = useDispatch();
  const timeZon = (old) => {
    var date1 = new Date();
    var date2 = new Date(old);
    var diff = new Date(date2.getTime() - date1.getTime());

    return diff.getUTCDate() - 1;
  };
  const handleClick = (data) => {
    console.log("clicked", data.name);
    dispatch1(getCommitFetch(data.name));
    console.log(commits);
  };

  return (
    <div className="single-row" onClick={() => handleClick(data)}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="card">
            <div className="img">
              <img
                src={data.owner.avatar_url}
                alt="images"
                width="100px"
                height="100px"
              />
            </div>
            <div className="content">
              <h2>{data.name}</h2>
              <p>{data.description}</p>
              <div className="star-issue">
                <div className="star">
                  <h5>Stars</h5>
                  <p>{data.stargazers_count}</p>
                </div>
                <div className="issue">
                  <h5>Issues</h5>
                  <p>{data.open_issues_count}</p>
                </div>
                <p className="pushed">
                  Last Pushed {timeZon(data.pushed_at.slice(0, 10))} days before
                  by {data.owner.login}
                </p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <select name="getChange" id="getChange">
            <option value="commits">Commits</option>
            <option value="addition">Additions</option>
            <option value="deletion">Deletions</option>
          </select>
          <TotalChangesChat user={data.owner.login} repoName={data.name} />
          <ContributerChart />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SingleRepo;
