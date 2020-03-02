import React from 'react';

const CoordinatesContext = React.createContext({
    searchNum: 10,
    coordinateObj: undefined,
});

export default CoordinatesContext;