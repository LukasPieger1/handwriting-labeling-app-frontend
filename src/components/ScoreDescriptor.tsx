import React from "react";
import {Question} from "../entities/Batch";

const ScoreDescriptor: React.FC<{ score: number, question: Question }> = ({score, question}) => {
    let text
    switch (question.id) {
        case 1: switch (score) {
            case 1: text = "sehr leserlich"; break;
            case 2: text = "gut leserlich"; break;
            case 3: text = "leserlich"; break;
            case 4: text = "schwer leserlich"; break;
            case 5: text = "sehr schwer leserlich"; break;
            default: text = "Not a score";
        } break;
        case 2: switch (score) {
            case 1: text = "einheitliche Neigung"; break;
            case 2: text = "leicht variierende Neigung"; break;
            case 3: text = "variierende Neigung"; break;
            case 4: text = "stark variierende Neigung"; break;
            case 5: text = "sehr stark variierende Neigung"; break;
            default: text = "Not a score";
        } break;
        case 3: switch (score) {
            case 1: text = "sehr leicht unterscheidbar"; break;
            case 2: text = "leicht unterscheidbar"; break;
            case 3: text = "eher unterscheidbar"; break;
            case 4: text = "schwer unterscheidbar"; break;
            case 5: text = "sehr schwer unterscheidbar"; break;
            default: text = "Not a score";
        } break;
        case 4: switch (score) {
            case 1: text = "sehr leicht unterscheidbar"; break;
            case 2: text = "leicht unterscheidbar"; break;
            case 3: text = "eher unterscheidbar"; break;
            case 4: text = "schwer unterscheidbar"; break;
            case 5: text = "sehr schwer unterscheidbar"; break;
            default: text = "Not a score";
        } break;
        case 5: switch (score) {
            case 1: text = "sehr leicht unterscheidbar"; break;
            case 2: text = "leicht unterscheidbar"; break;
            case 3: text = "eher unterscheidbar"; break;
            case 4: text = "schwer unterscheidbar"; break;
            case 5: text = "sehr schwer unterscheidbar"; break;
            default: text = "Not a score";
        } break;
    }
    return <div style={{
        textAlign: "left"
    }}>{text}</div>
}

export default ScoreDescriptor