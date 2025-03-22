import { FinalResult } from "../FinalAverage/FinalAverage";
import "./OutputScoreResults.css";

export const ScoreResults = () => {
  return (
    <div className="side1Containerr">
      <h2> Your Result</h2>
      <div className="contentt">
        <FinalResult />
        <div className="comment">
          <h1> Great</h1>
          <p>
            {" "}
            You scored higher than 65% of
            <br /> the people who have taken <br /> these tests.{" "}
          </p>
        </div>{" "}
      </div>
    </div>
  );
};
