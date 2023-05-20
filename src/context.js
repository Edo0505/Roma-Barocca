import {useState, useContext, createContext } from 'react';
const AppContext = createContext();
const AppProvider = ({children})=>{
    const[isSidebarOpen,setIsSiderOpen] = useState(false);
    
    const openSidebar = ()=>{
        setIsSiderOpen(true);
    }

    const closeSidebar = ()=>{
        setIsSiderOpen(false);
    }
    
    return(
    <AppContext.Provider 
    value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar
    }}
    >
        {children}
    </AppContext.Provider>)
}

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {
    AppProvider, 
    useGlobalContext
};