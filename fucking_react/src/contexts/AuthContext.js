import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();
export const AuthProvider =({children})=>(
    <AuthContext.Provider value={{isLoggedIn:false}}>
        {children}
    </AuthContext.Provider>
);

export const useAuth = () => {

    const context = useContext(AuthContext);
  
    console.log('AuthContext:', context);  // This will help you see when it’s null
  
    if (!context) {
  
      throw new Error('useAuth must be used within an AuthProvider');
  
    }
  
    return context;
  
  };
  
  
  
  
  // This will help you see when it’s null if (!context) { throw new Error('useAuth must be used within an AuthProvider'); } return context; };

// export const AuthProvider = ({ children }) => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     const login = () => setIsLoggedIn(true);
//     const logout = () => setIsLoggedIn(false);

//     return (
//         <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

