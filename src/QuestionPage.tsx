import "./QuestionPage.css"
import React, {useEffect, useState} from "react";
import Feature, {getORatingOptions} from "./Feature";
import db, {FeatureRating, WordIdType} from "./db";

const QuestionPage: React.FC<{wordId: WordIdType, feature: Feature, onSubmit: ()=>void}> = ({wordId, feature, onSubmit}) => {
    const [rating, setRating] = useState<FeatureRating | undefined>(undefined)

    useEffect(() => {
        db.getWordRating(wordId).then(ratingFromStorage => setRating(ratingFromStorage.rating))
    }, [])

    function submit(ratedValue: number) {
        const newRating = rating!
        if (ratedValue === 0 || ratedValue === 1 || ratedValue === 2)
            newRating[feature] = ratedValue
        setRating(newRating)
        db.updateWordRating(wordId, newRating)
        onSubmit()
    }

    const ratingOptions = getORatingOptions(feature)
    if (rating === undefined)
        return <div></div>
    return <div style={{height: "100%", width: "100%"}}>
        <div style={{height: "80%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center"}}>
            <img src={"/words/" + wordId + ".png"} alt={"The word you need to label"} style={{height: "20%"}}/>
        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", height: "20%", position: "absolute", bottom: "0", width: "100%"}}>
            {
                ratingOptions.map(ratingOption =>
                    <button onClick={() => submit(ratingOption.value)} style={{backgroundColor: rating[feature] === ratingOption.value ? "green" : undefined, width: (99/ratingOptions.length) + "%"}}>
                        <div style={{height: "100%"}}>
                            <div style={{margin: "3px", fontSize: "20px", fontWeight: "bold", color: "lightgreen"}}>{ratingOption.value}</div>
                            <div>{ratingOption.description}</div>
                        </div>
                        </button>
                )}
        </div>
    </div>
}

export default QuestionPage