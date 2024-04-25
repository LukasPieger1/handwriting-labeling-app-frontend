import * as localforage from "localforage";
import Feature from "./Feature";
import wordIds from "./wordIds";

class WordRating {
    wordId: typeof wordIds[number]
    rating: FeatureRating

    constructor(wordId: typeof wordIds[number]) {
        this.wordId = wordId
        this.rating = blankFeatureRating()
    }
}
type FeatureRating = {
    [Feature.BASELINE]: 0 | 1 | 2 | undefined,
    [Feature.CLOSED_FORMS]: 0 | 1 | 2 | undefined,
    [Feature.HEIGHT]: 0 | 1 | 2 | undefined,
    [Feature.INCLINATION]: 0 | 1 | 2 | undefined,
    [Feature.NO_CORRECTIONS]: 0 | 1 | 2 | undefined,
    [Feature.SPACING]: 0 | 1 | 2 | undefined,
    [Feature.ROUNDNESS]: 0 | 1 | 2 | undefined,
    [Feature.GENERAL_READABILITY]: 0 | 1 | 2 | 3 | 4 | 5 | undefined,
}
function blankFeatureRating() {
    return {
        [Feature.BASELINE]: undefined,
        [Feature.CLOSED_FORMS]: undefined,
        [Feature.HEIGHT]: undefined,
        [Feature.INCLINATION]: undefined,
        [Feature.NO_CORRECTIONS]: undefined,
        [Feature.SPACING]: undefined,
        [Feature.ROUNDNESS]: undefined,
        [Feature.GENERAL_READABILITY]: undefined,
    }
}

class LocalDatabase {
    store: LocalForage
    constructor(instanceName: string) {
        this.store =  localforage.createInstance({name: instanceName})
        this.store.setDriver([
            localforage.LOCALSTORAGE,
            localforage.INDEXEDDB,
            localforage.WEBSQL
        ]).then(() => console.log("Created local storage"))
    }

    async getWordRating(wordId: typeof wordIds[number]): WordRating {
        let value: WordRating | null = await this.store.getItem("word_" + wordId, (err, value) => {
            if (err !== undefined) {
                console.error(err)
            }
            return value
        })
        if (value === null)
            value = new WordRating(wordId)
        return value
    }
}

const db = new LocalDatabase("ratings")
export default db