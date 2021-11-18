import React from 'react';

const Display: React.FC<{ displayValue: string }> = props =>
{
    return (
        <div className="display"><span>{props.displayValue}</span></div>
    );
};

export default Display;