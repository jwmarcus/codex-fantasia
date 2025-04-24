import { useAuth0 } from '@auth0/auth0-react';
import { useCallback, useState } from 'react';

// Define a type for the API response structure
interface ApiResponse<T> {
    data: T | null;
    error: string | null;
    loading: boolean;
}

// Define options for the fetch call
interface FetchOptions extends RequestInit {
    // You can add specific options if needed later
}

/**
 * Custom hook for making authenticated API calls.
 * Automatically handles adding the Authorization header with the access token.
 */
export const useApi = <T,>() => {
    const { getAccessTokenSilently } = useAuth0();
    const [state, setState] = useState<ApiResponse<T>>({
        data: null,
        error: null,
        loading: false,
    });

    const callApi = useCallback(async (url: string, options: FetchOptions = {}) => {
        setState(prevState => ({ ...prevState, loading: true, error: null }));
        try {
            const token = await getAccessTokenSilently();

            const response = await fetch(url, {
                ...options,
                headers: {
                    ...options.headers,
                    'Content-Type': options.headers?.['Content-Type'] || 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                // Attempt to get error details from response body
                let errorBody: any = null;
                try {
                    errorBody = await response.json();
                } catch (parseError) {
                    // Ignore if response body is not JSON
                }
                const errorMessage = errorBody?.message || errorBody?.error || `HTTP error! Status: ${response.status}`;
                throw new Error(errorMessage);
            }

            // Handle cases where response might be empty (e.g., 204 No Content)
            if (response.status === 204) {
                setState({ data: null, error: null, loading: false });
                return { data: null, error: null }; // Return consistent shape
            }

            const responseData: T = await response.json();
            setState({ data: responseData, error: null, loading: false });
            return { data: responseData, error: null }; // Return consistent shape

        } catch (error) {
            console.error("API call error:", error);
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            setState({ data: null, error: errorMessage, loading: false });
            return { data: null, error: errorMessage }; // Return consistent shape
        }
    }, [getAccessTokenSilently]);

    return {
        ...state,
        callApi,
    };
}; 