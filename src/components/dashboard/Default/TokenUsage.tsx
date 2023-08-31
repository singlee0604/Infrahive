import React from 'react';
import TokenProvider from './TokenProvider';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface Props {
        score: number;
}

const TokenBar: React.FC<Props> = (props) => {
        const { score } = props;

        return (
                <TokenProvider valueStart={0} valueEnd={score}>
                        {(value) => (
                                <CircularProgressbar
                                        value={value}
                                        text={`${value} %`}
                                        circleRatio={0.6} /* Make the circle only 0.7 of the full diameter */
                                        styles={{
                                                trail: {
                                                        strokeLinecap: 'butt',
                                                        transform: 'rotate(-110deg)',
                                                        transformOrigin: 'center center',
                                                },
                                                path: {
                                                        strokeLinecap: 'butt',
                                                        transform: 'rotate(-110deg)',
                                                        transformOrigin: 'center center',
                                                        stroke:"#FEC200",
                                                },
                                                text: {
                                                        fill: '#000',
                                                },
                                        }}
                                        strokeWidth={10}
                                />
                        )}
                </TokenProvider>
        );
};

export default TokenBar;
