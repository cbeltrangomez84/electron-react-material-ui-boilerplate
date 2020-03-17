import * as React from 'react';
export const AppContext = React.createContext();

export const withContext = (classToUse) => {
  classToUse.contextType = AppContext;
  return classToUse;
}
