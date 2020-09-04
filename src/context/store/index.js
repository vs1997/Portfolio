import React, { useReducer } from 'react';

import { VideoDesc } from '../reducer';

export const Store = React.createContext();

const dispatch = {};

export function StoreProvider(props) {
  const [mapVidDescState, dispatchVidDescAction] = useReducer(
    VideoDesc,
    dispatch
  );

  const descValue = { mapVidDescState, dispatchVidDescAction };

  const value = { ...descValue };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
