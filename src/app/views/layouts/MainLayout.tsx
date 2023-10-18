import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import { styled } from '@mui/material/styles';

const MainLayout: React.FC<{}> = () => {

    const StyledRoot = styled('div')({
        display: 'flex',
        minHeight: '100%',
        overflow: 'hidden',
    });

    const Main = styled('div')(({ theme }) => ({
        flexGrow: 1,
        overflow: 'auto',
        minHeight: '100%',
        // paddingTop: APP_BAR_MOBILE + 24,
        paddingBottom: theme.spacing(10),
        [theme.breakpoints.up('lg')]: {
            //   paddingTop: APP_BAR_DESKTOP + 24,
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));

    return (
        <>
            <StyledRoot>
                <Header />
                
                

                <Main>
                    <Outlet />
                </Main>
            </StyledRoot>
        </>
    );
};

export default MainLayout;
