import React, { createContext, useContext, useState } from 'react';

const authContext = createContext();

function useProvideAuth() {
  const [canSeeDetailsPage, setCanSeeDetailsPage] = useState(false);

  return { canSeeDetailsPage, setCanSeeDetailsPage };
}

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}