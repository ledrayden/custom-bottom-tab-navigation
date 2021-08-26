import React, { createContext, useState } from 'react';

const TabBarContext = createContext();

const TabBarProvider = ({ children }) => {
  const [showTabBar, setShowTabBar] = useState(true);
  return (
    <TabBarContext.Provider value={{ showTabBar, setShowTabBar }}>
      {children}
    </TabBarContext.Provider>
  )
}

export default TabBarProvider;