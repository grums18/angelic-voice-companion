
export interface AuthEntry {
  name?: string;
  email: string;
  timestamp: string;
}

export const saveSignUpEntry = (entry: AuthEntry): void => {
  try {
    // Get existing entries
    const existingEntriesJSON = localStorage.getItem('signups') || '[]';
    const existingEntries: AuthEntry[] = JSON.parse(existingEntriesJSON);
    
    // Add new entry
    existingEntries.push(entry);
    
    // Save back to localStorage
    localStorage.setItem('signups', JSON.stringify(existingEntries));
    
    // Also log to console for demonstration purposes
    console.log('Sign up entries:', existingEntries);
  } catch (error) {
    console.error('Error saving sign up entry:', error);
  }
};

export const saveSignInEntry = (entry: AuthEntry): void => {
  try {
    // Get existing entries
    const existingEntriesJSON = localStorage.getItem('signins') || '[]';
    const existingEntries: AuthEntry[] = JSON.parse(existingEntriesJSON);
    
    // Add new entry
    existingEntries.push(entry);
    
    // Save back to localStorage
    localStorage.setItem('signins', JSON.stringify(existingEntries));
    
    // Also log to console for demonstration purposes
    console.log('Sign in entries:', existingEntries);
  } catch (error) {
    console.error('Error saving sign in entry:', error);
  }
};

export const getSignUpEntries = (): AuthEntry[] => {
  try {
    const entriesJSON = localStorage.getItem('signups') || '[]';
    return JSON.parse(entriesJSON);
  } catch (error) {
    console.error('Error retrieving sign up entries:', error);
    return [];
  }
};

export const getSignInEntries = (): AuthEntry[] => {
  try {
    const entriesJSON = localStorage.getItem('signins') || '[]';
    return JSON.parse(entriesJSON);
  } catch (error) {
    console.error('Error retrieving sign in entries:', error);
    return [];
  }
};
