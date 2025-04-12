import React, { createContext, ReactNode, useContext, useState } from 'react';

// 1. Define the type for the context value
interface AuthContextType {
    isAuthenticated: boolean;
    // In a real app, you'd have user info, login/logout functions here
    login: () => void; // Placeholder function
    logout: () => void; // Placeholder function
}

// 2. Create the Context with a default value
// The default value here is just for type safety, the actual value comes from the Provider
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 3. Create the Provider Component
interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Example state

    // Example login/logout functions (replace with real logic later)
    const login = () => {
        console.log('Logging in...'); // Placeholder
        setIsAuthenticated(true);
    };

    const logout = () => {
        console.log('Logging out...'); // Placeholder
        setIsAuthenticated(false);
    };

    // The value that will be available to consuming components
    const value = {
        isAuthenticated,
        login,
        logout,
        // Add user details, etc. here later
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// 4. Create a Custom Hook for easy consumption
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

// Optional: Export the context itself if needed elsewhere, though using the hook is preferred
// export default AuthContext; 