import "./ScoreSummary.css";
import { Button } from "../CTA/Cta";
import { ScoreSummaryList } from "../ScoreSummaryList/ScoreSummaryList";
export const SumItemsList = () => {
  return (
    <div className="side2Content">
      <h2>Summary</h2>
      <ScoreSummaryList />
      <Button />
    </div>
  );
};
