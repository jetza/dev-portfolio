'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
type ThemeMode = 'cyber' | 'minimal';
interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  isMobile: boolean;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>('minimal');

  useEffect(() => {
    // Check if screen is mobile
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024; // lg breakpoint
      setIsMobile(mobile);
      // Force cyber theme on mobile
      if (mobile) {
        setTheme('cyber');
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleTheme = () => {
    // Only allow theme toggle on desktop
    if (!isMobile) {
      setTheme(prev => prev === 'cyber' ? 'minimal' : 'cyber');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isMobile }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
