/* eslint-disable @typescript-eslint/no-unused-vars */
export interface User {
  id: string;
  email: string;
  fullName: string;
  avatar?: string;
}

export const authService = {
  // Mock login
  login: async (email: string, password: string):Promise<{token: string, user: User}> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const user: User = {
            id: 'mock-user-123',
            email,
            fullName: 'Mock User',
          };
          resolve({ token: 'mock-jwt-token', user });
        } else {
          reject(new Error('Email and password are required'));
        }
      }, 800); // simulate network delay
    });
  },

  // Mock register
  register: async (_data: { email: string, password: string, fullName: string }): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 800);
    });
  },

  // Mock forgot password
  forgotPassword: async (_email: string): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 800);
    });
  },

  // Mock reset password
  resetPassword: async (_password: string, _token: string): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 800);
    });
  }
};
