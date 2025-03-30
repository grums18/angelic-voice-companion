
export interface WaitlistEntry {
  name: string;
  email: string;
  age: string;
  timestamp: string;
}

export const saveWaitlistEntry = (entry: WaitlistEntry): void => {
  try {
    // Get existing entries
    const existingEntriesJSON = localStorage.getItem('waitlist') || '[]';
    const existingEntries: WaitlistEntry[] = JSON.parse(existingEntriesJSON);
    
    // Add new entry
    existingEntries.push(entry);
    
    // Save back to localStorage
    localStorage.setItem('waitlist', JSON.stringify(existingEntries));
    
    // Also log to console for demonstration purposes
    console.log('Waitlist entries:', existingEntries);
  } catch (error) {
    console.error('Error saving waitlist entry:', error);
  }
};

export const getWaitlistEntries = (): WaitlistEntry[] => {
  try {
    const entriesJSON = localStorage.getItem('waitlist') || '[]';
    return JSON.parse(entriesJSON);
  } catch (error) {
    console.error('Error retrieving waitlist entries:', error);
    return [];
  }
};

// In a real-world application, this would send the data to a server
// which would store it in a database or write it to a text file
