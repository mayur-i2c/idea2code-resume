import React from 'react';
import ReactLoading from 'react-loading';

import styles from './style.module.scss';

interface TProps {
    show: boolean;
}

export default function Loading(props: TProps) {
    return props.show ? (
        <div className={styles.container}>
            {/* <div className={['verticalCenter', styles.gif].join(' ')}> */}
            {/* <img src="/images/pdf-generate.gif" alt="pdf generate animation" /> */}
            {/* </div> */}
            <div className={styles.container}>
                <div className="verticalCenter" style={{ left: '50%' }}>
                    <ReactLoading type={'bars'} color="#313B47" />
                </div>
            </div>
        </div>
    ) : (
        <div />
    );
}
