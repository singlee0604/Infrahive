import React, { useState, useEffect, ReactNode } from 'react';

interface Props {
        valueStart: number;
        valueEnd: number;
        children: (value: number) => ReactNode;
}

const TokenProvider: React.FC<Props> = ({ valueStart, valueEnd, children }) => {
        const [value, setValue] = useState<number>(valueStart);

        useEffect(() => {
                setValue(valueEnd);
        }, [valueEnd]);

        return <>{children(value)}</>;
};

export default TokenProvider;
