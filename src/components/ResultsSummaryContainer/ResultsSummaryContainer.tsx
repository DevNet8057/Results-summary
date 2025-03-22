import { ScoreResults} from "../OutputScoreResults/OutputScoreResults";
import {SumItemsList } from "../ScoreSummary/ScoreSummary";
import './ResultsSummaryContainer.css';

export default function Main (){
    return(
        <div className="contentAll ">
             <ScoreResults/>
            <SumItemsList/>
        </div>
       
    )
}