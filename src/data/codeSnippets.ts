export interface CodeSnippet {
  id: number;
  title: string;
  description: string;
  code: string;
  language: string;
  tags: string[];
  stars: number;
  explanation: string;
}

export const codeSnippets: CodeSnippet[] = [
  {
    id: 1,
    title: 'Custom React Hook - useLocalStorage',
    description: 'A reusable hook for managing localStorage with React state',
    language: 'typescript',
    tags: ['React', 'Hooks', 'TypeScript'],
    stars: 15,
    explanation: 'This hook provides a simple way to sync React state with localStorage, automatically handling serialization and deserialization.',
    code: `import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue] as const;
}`,
  },
  {
    id: 2,
    title: 'Debounce Function',
    description: 'Optimized debounce implementation for search inputs',
    language: 'javascript',
    tags: ['JavaScript', 'Performance', 'Utility'],
    stars: 12,
    explanation: 'This debounce function delays the execution of a callback until after a specified wait time has passed since the last invocation. Perfect for search inputs and scroll events.',
    code: `export function debounce(func, wait) {
  let timeout;
  
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Usage example:
const handleSearch = debounce((searchTerm) => {
  // API call or expensive operation
  console.log('Searching for:', searchTerm);
}, 300);`,
  },
  {
    id: 3,
    title: 'Responsive Grid Component',
    description: 'Flexible grid layout component with auto-responsive behavior',
    language: 'typescript',
    tags: ['React', 'TypeScript', 'CSS'],
    stars: 18,
    explanation: 'A reusable grid component that automatically adjusts the number of columns based on container width, providing consistent spacing and responsive behavior.',
    code: `interface GridProps {
  children: React.ReactNode;
  minWidth?: string;
  gap?: string;
}

export const ResponsiveGrid: React.FC<GridProps> = ({ 
  children, 
  minWidth = '250px',
  gap = '1rem' 
}) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: \`repeat(auto-fit, minmax(\${minWidth}, 1fr))\`,
        gap: gap,
      }}
    >
      {children}
    </div>
  );
};`,
  },
  {
    id: 4,
    title: 'API Error Handler',
    description: 'Centralized error handling for API requests',
    language: 'typescript',
    tags: ['TypeScript', 'Error Handling', 'API'],
    stars: 20,
    explanation: 'This utility provides a standardized way to handle API errors across your application, with custom error messages and logging capabilities.',
    code: `interface ApiError {
  message: string;
  status: number;
  data?: any;
}

export class ApiErrorHandler {
  static handle(error: any): ApiError {
    if (error.response) {
      // Server responded with error
      return {
        message: error.response.data?.message || 'Server error occurred',
        status: error.response.status,
        data: error.response.data,
      };
    } else if (error.request) {
      // Request made but no response
      return {
        message: 'No response from server',
        status: 0,
      };
    } else {
      // Error in request configuration
      return {
        message: error.message || 'Request failed',
        status: -1,
      };
    }
  }
}`,
  },
];

export const codeSnippetsContent = {
  title: 'Code Snippets',
  subtitle: 'Collection of useful code snippets and utilities I have created. Star your favorites!'
};
