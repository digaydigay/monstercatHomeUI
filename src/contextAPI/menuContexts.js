import { createContext, useContext, useReducer } from "react"

const ACTIONS = {
  COMMERCIAL: "commercial",
  RADIO: "radio",
  SHOWMENU: "showmenu",
  HIDEMENU: "hidemenu",
}

// For Submenu
const SubmenuReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.RADIO:
      if (state.commercial === false) {
        return { ...state, radio: !state.radio }
      } else {
        return { ...state, radio: !state.radio, commercial: false }

      }
    case ACTIONS.COMMERCIAL:
      if (state.radio === false) {
        return { ...state, commercial: !state.commercial }
      } else {
        return { ...state, commercial: !state.commercial, radio: false }
      }
    default:
      return state
  }
}
const MenuContext = createContext({})
export const UseMenuContext = () => {
  return useContext(MenuContext)
}
export function SubMenuProvider({ children }) {
  const [sbstate, sbdispatch] = useReducer(SubmenuReducer, { commercial: false, radio: false })
  return (
    <MenuContext.Provider value={{ sbstate, sbdispatch }} >
      {children}
    </MenuContext.Provider>
  )
}



// For navigation
const NavigationReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SHOWMENU:
      console.log(state)
      return { ...state, showmenu: !state.showmenu, hidemenu: !state.hidemenu }
    case ACTIONS.HIDEMENU:
      return { ...state, hidemenu: !state.hidemenu, showmenu: !state.showmenu }
    default:
      return state
  }
}
const NavigationContext = createContext()

export const UseaNavigation = () => {
  return useContext(NavigationContext)
}
export const NavigationProvider = ({ children }) => {
  const [navstate, navdispatch] = useReducer(NavigationReducer, { showmenu: false, hidemenu: false })
  return <NavigationContext.Provider value={{ navstate, navdispatch }}>
    {children}
  </NavigationContext.Provider>
}