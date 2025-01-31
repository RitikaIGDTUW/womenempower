// import { createContext, useContext, useState } from "react";

// export const AuthContext=createContext();

// export const useAuthContext=()=>{
//     return useContext(AuthContext)
// }

// export const AuthContextProvider=({children})=>{
//     const [authUser, setAuthUser]=useState(JSON.parse(localStorage.getItem("chat-user"))|| null)
//     return <AuthContext.Provider value={{authUser,setAuthUser}}>
//         {children}
//     </AuthContext.Provider>
// }


import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  // Initialize authUser with error handling
  const [authUser, setAuthUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("chat-user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return null;
    }
  });

  // Log initialization for debugging
  console.log("AuthContextProvider initialized. authUser:", authUser);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};