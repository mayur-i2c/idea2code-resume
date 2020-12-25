import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';

import { TopNavbar, Footer } from '@component';
import { One } from '@template';
// import { Text, TopNavbar, WorkExperience, Education, Skills } from '@component';
import styles from './style.module.scss';
// import { TProps, TState } from "./indexType";

interface TProps {
    theme: {
        color: string;
        fontFamily: string;
    };
    itemStatus: {
        [key: string]: boolean;
    };
    userData: {
        [key: string]: string;
    };
}

const Home = (props: TProps) => {
    return (
        <>
            <Head>
                <title>resume builder</title>
            </Head>
            <div style={{ fontFamily: props.theme.fontFamily }}>
                <div className={styles.loading} style={{ background: "#313B47" }}>
                    <div className={styles.loading_gradient}></div>
                </div>

                <TopNavbar itemStatus={props.itemStatus} theme={props.theme} userData={props.userData} />

                <div className={styles.container}>
                    <One />
                </div>
            </div>
            <Footer />
        </>
    );
}
const mapStateToProps = (store: any) => ({
    theme: store.theme,
    userData: store.userData,
    itemStatus: store.itemStatus,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
