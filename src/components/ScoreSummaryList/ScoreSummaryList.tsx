import "./ScoreSummaryList.css";
import { ScoreSummaryItem } from "../ScoreSummaryItem/ScoreSummaryItem";
const baseUrl = "src/components/assets/images/";
const icons = {
  iconM: "icon-memory.svg",
  iconVe: "icon-verbal.svg",
  iconVi: "icon-visual.svg",
  iconR: "iconReaction.svg",
};

export const ScoreSummaryList = () => {
  return (
    <>
      <div className="summaryItemsList">
        <ScoreSummaryItem
          value={"/ 100"}
          label="Reaction"
          mark={80}
          backgroundColor={"hsla(0, 100%, 67%,8%)"}
          color={"hsl(0, 100%, 67%)"}
          src={baseUrl + icons.iconR}
        />
        <ScoreSummaryItem
          value={"/ 100"}
          label="Memory"
          mark={92}
          backgroundColor={"hsla(39, 100%, 56%,8%)"}
          color={"hsl(39, 100%, 56%)"}
          src={baseUrl + icons.iconM}
        />
        <ScoreSummaryItem
          value={"/ 100"}
          label="Verbal"
          mark={61}
          backgroundColor={"hsla(166, 100%, 37%,8%"}
          color={"hsl(166, 100%, 37%)"}
          src={baseUrl + icons.iconVe}
        />
        <ScoreSummaryItem
          value={"/ 100"}
          label="Visual"
          mark={73}
          backgroundColor={"hsla(234, 85%, 45%,8%)"}
          color={"hsl(234, 85%, 45%)"}
          src={baseUrl + icons.iconVi}
        />
      </div>
    </>
  );
};
