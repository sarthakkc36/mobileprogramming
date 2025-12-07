// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getDatabase, ref, set, get, update, remove, onValue } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaGs6BUVZwQ18ng1uo3aXHerbMBnL-qEo",
  authDomain: "mobileprogramming-837a4.firebaseapp.com",
  databaseURL: "https://mobileprogramming-837a4-default-rtdb.firebaseio.com",
  projectId: "mobileprogramming-837a4",
  storageBucket: "mobileprogramming-837a4.firebasestorage.app",
  messagingSenderId: "217167152180",
  appId: "1:217167152180:web:590f197cdd525e4aeef661"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// CREATE - Write user data
function writeUserData(userId, name, address, phone) {
  set(ref(db, 'users/' + userId), {
    name: name,
    address: address,
    phone: phone
  })
  .then(() => {
    console.log("User data written successfully");
  })
  .catch((error) => {
    console.log("Error writing data:", error);
  });
}

// READ - Get all users
function readUsers() {
  const userRef = ref(db, 'users');
  
  get(userRef).then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      console.log(childSnapshot.val());
    });
  });
}

// UPDATE - Update user data
function updateUserData(userId, updatedData) {
  const userRef = ref(db, 'users/' + userId);
  update(userRef, updatedData)
    .then(() => {
      console.log("User updated successfully");
    })
    .catch((error) => {
      console.log("Error updating user:", error);
    });
}

// DELETE - Delete user data
function deleteUserData(userId) {
  const userRef = ref(db, 'users/' + userId);
  remove(userRef)
    .then(() => {
      console.log("User deleted successfully");
    })
    .catch((error) => {
      console.log("Error deleting user:", error);
    });
}

writeUserData(1, "John Doe", "123 Main St, New York", "555-0101");
writeUserData(2, "Jane Smith", "456 Oak Ave, Boston", "555-0102");
writeUserData(3, "Bob Johnson", "789 Pine Rd, Chicago", "555-0103");
writeUserData(4, "Alice Brown", "321 Elm St, Seattle", "555-0104");
writeUserData(5, "Charlie Wilson", "654 Maple Dr, Austin", "555-0105");
writeUserData(6, "Diana Davis", "987 Cedar Ln, Denver", "555-0106");
writeUserData(7, "Eva Martinez", "147 Birch Ct, Miami", "555-0107");
writeUserData(8, "Frank Garcia", "258 Spruce Way, Portland", "555-0108");
writeUserData(9, "Grace Lee", "369 Willow Pl, Phoenix", "555-0109");
writeUserData(10, "Henry Taylor", "741 Ash Blvd, Atlanta", "555-0110");

// Read all users after a delay to ensure data is written
setTimeout(() => {
  console.log("Reading all users:");
  readUsers();
}, 1000);
