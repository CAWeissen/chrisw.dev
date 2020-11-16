import { createContext, useContext, useState } from "react";
import useDarkMode from "use-dark-mode";
import create from 'zustand';

const Context = createContext(undefined)
const useStore = (selector) => useContext(Context)(selector)

function Store({ children }) {
  const [useStore] = useState(
    () => create(set => ({
      darkMode: useDarkMode(true)
    })
  ));

  return (
    <Context.Provider value={useStore}>
      {children}
    </Context.Provider>
  )
}

export { Store, useStore }
