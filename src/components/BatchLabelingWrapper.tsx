import React, {ReactNode, useContext} from "react";
import ProgressBar from "./ProgressBar";
import {DisplayContext} from "../util/DisplayContext";
import {House} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {APP_LOGOUT} from "../constants/Urls";

const NAVIGATION_BUTTON_RELATIVE_WIDTH = 15

const BatchLabelingWrapper: React.FC<{children: ReactNode, headline: string, progress: {current: number, end: number}, navigatePrevPage: (() => void) | null, navigateNextPage: (() => void) | null}> = ({children, headline, progress, navigatePrevPage, navigateNextPage}) => {
    const display = useContext(DisplayContext)!
    const navigate = useNavigate();

    return <div style={{width: display.width, height: display.height, maxWidth: "1024px"}}>
        <div style={{position: "relative", width: "100%", top: "0", height: "6%", overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            { navigatePrevPage === null ? <div style={{width: NAVIGATION_BUTTON_RELATIVE_WIDTH + "%"}}/> :
                <button onClick={() => navigatePrevPage()} style={{width: NAVIGATION_BUTTON_RELATIVE_WIDTH + "%", height: "100%", color: "lightgreen", fontWeight: "bolder", cursor: "pointer", fontSize: "2vmin"}}>
                    zurück
                </button>
            }
            <h1 style={{maxWidth: (100-NAVIGATION_BUTTON_RELATIVE_WIDTH*2) + "%", whiteSpace: "nowrap"}}>
                {headline}
            </h1>
            { navigateNextPage === null ? <div style={{width: NAVIGATION_BUTTON_RELATIVE_WIDTH + "%"}}/> :
                <button onClick={() => navigateNextPage()} style={{width: NAVIGATION_BUTTON_RELATIVE_WIDTH + "%", height: "100%", color: "lightgreen", fontWeight: "bolder", cursor: "pointer", fontSize: "2vmin"}}>
                    weiter
                </button>
            }
        </div>
        <ProgressBar style={{height: "1.5%", marginBottom: "2%"}} current={progress.current} end={progress.end}/>
        <div style={{height: "87.5%", width: "100%"}}>
            <div style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
                {children}
            </div>
        </div>
        <div className={"footer"} style={{

            height: "2%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: "10px",
            paddingRight: "10px"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}>
                <div style={{
                    fontSize: "1.5vmin",
                    opacity: "50%"
                }}>Handwriting Legibility Labeling App by Lukas Pieger and Erik Schmidt
                </div>
            </div>
            <div className={"logoutButton"} style={{
                alignSelf: "flex-end",
                opacity: "50%",
                display: "flex",
                alignItems: "center",
                cursor: "pointer"
            }} onClick={() => navigate(APP_LOGOUT)}>
                <House sx={{fontSize: "2vh"}}/>
                <div style={{fontSize: "smaller"}}>logout</div>
            </div>
        </div>
    </div>
}

export default BatchLabelingWrapper