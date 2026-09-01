import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { storage, generateId } from '../services/storage';
import { sampleEmployees } from '../data/sampleData';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => storage.getCurrentUser());
  const [employees, setEmployees] = useState(() => storage.getEmployees());
  const [isAuthenticated, setIsAuthenticated] = useState(() => !!storage.getCurrentUser());

  useEffect(() => {
    const user = storage.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setIsAuthenticated(true);
    }
    const empList = storage.getEmployees();
    if (empList && empList.length > 0) {
      setEmployees(empList);
    } else {
      setEmployees(sampleEmployees);
      storage.setEmployees(sampleEmployees);
    }
  }, []);

  const login = useCallback((email, password) => {
    const matched = employees.find(
      (e) => e.email.toLowerCase() === email.trim().toLowerCase() && (e.password === password || password === 'password123')
    );

    if (matched) {
      setCurrentUser(matched);
      setIsAuthenticated(true);
      storage.setCurrentUser(matched);
      return { success: true, user: matched };
    }

    // If user typed any valid email from employee list
    const byEmail = employees.find((e) => e.email.toLowerCase() === email.trim().toLowerCase());
    if (byEmail) {
      setCurrentUser(byEmail);
      setIsAuthenticated(true);
      storage.setCurrentUser(byEmail);
      return { success: true, user: byEmail };
    }

    return { success: false, error: 'Invalid email or password. You can use password123 or select a Quick Demo Account.' };
  }, [employees]);

  const loginAs = useCallback((employeeId) => {
    const target = employees.find((e) => e.id === employeeId);
    if (target) {
      setCurrentUser(target);
      setIsAuthenticated(true);
      storage.setCurrentUser(target);
      return target;
    }
    return null;
  }, [employees]);

  const register = useCallback((newEmployeeData) => {
    const newEmp = {
      id: generateId('emp'),
      name: newEmployeeData.name,
      email: newEmployeeData.email,
      password: newEmployeeData.password || 'password123',
      role: newEmployeeData.role || 'Employee',
      department: newEmployeeData.department || 'Engineering',
      title: newEmployeeData.title || `${newEmployeeData.role || 'Staff'} Specialist`,
      avatar: newEmployeeData.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(newEmployeeData.name)}`,
      status: 'Active',
      joinedDate: new Date().toISOString().split('T')[0],
      assignedApps: newEmployeeData.assignedApps || ['app-1', 'app-2'],
    };

    const updatedList = [newEmp, ...employees];
    setEmployees(updatedList);
    storage.setEmployees(updatedList);

    setCurrentUser(newEmp);
    setIsAuthenticated(true);
    storage.setCurrentUser(newEmp);

    return newEmp;
  }, [employees]);

  const logout = useCallback(() => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('saas_current_user');
  }, []);

  const updateProfile = useCallback((updates) => {
    if (!currentUser) return;
    const updated = { ...currentUser, ...updates };
    setCurrentUser(updated);
    storage.setCurrentUser(updated);

    const updatedList = employees.map((e) => (e.id === currentUser?.id ? updated : e));
    setEmployees(updatedList);
    storage.setEmployees(updatedList);
  }, [currentUser, employees]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        employees,
        isAuthenticated,
        login,
        loginAs,
        register,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
