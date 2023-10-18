import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import React, { Component } from "react";
import { getLoadingState, getLoadingText } from "../../reducks/components/loading/selectors";
import { useAppDispatch, useAppSelector } from "../../reducks/hooks";


interface IProps {
    children: React.ReactNode; // 👈️ type children
};

const Loading: React.FC<IProps> = ({children}: IProps) => {

    const selector = useAppSelector((state) => state.loading)
    const isBeingLoaded = getLoadingState(selector);
    const loadingText  = getLoadingText(selector)

    return (
        <>
        {/* {(isBeingLoaded) && (
            <section className="c-section__loading"> */}
                <CircularProgress/>
                {/* <p>{loadingText}</p>
            </section>
        )} */}


        <CircularProgress/>

        {children}
    </>
    );
};

export default Loading;