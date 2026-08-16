let currentUser = null;
const listeners = new Set();

export const mockAuth = {
    // Subscribe to auth changes
    onAuthStateChange: (callback) => {
        listeners.add(callback);

        callback(currentUser);

        return () => listeners.delete(callback);
    },

    loginWithEmailAndPassword: async (email, password) => {
        if (email == "brentmccaslin@benthic.com" && password == "Iamthecoolestdoc67") {
            currentUser = { email: email, name: "Brent McCaslin", role: "employee"};
        }
        else {
            throw new Error("Incorrect user and/or password");
        }

        listeners.forEach((callback) => callback(currentUser));
        return currentUser;
    },

    logout: () => {
        currentUser = null;
        listeners.forEach((callback) => callback(currentUser));
    }
}