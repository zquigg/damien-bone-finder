const firebaseConfig = {

    apiKey: "AIzaSyBWeELGS0hj2LJuQ73s9R6M-FZmCaU9nZQ",

    authDomain: "qrcodegame-2f4ac.firebaseapp.com",

    projectId: "qrcodegame-2f4ac",

    storageBucket: "qrcodegame-2f4ac.appspot.com",

    messagingSenderId: "1013970439711",

    appId: "1:1013970439711:web:2822cce1db7e8096620f2a",

    measurementId: "G-WV7CC0YMMS"

  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
  const auth = firebase.auth()
  const database = firebase.database()

  // Set up our register function
  async function register() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const fullName = document.getElementById('full_name').value.trim();
    const favoriteSong = document.getElementById('favourite_song').value.trim();
    const milkBeforeCereal = document.getElementById('milk_before_cereal').value;
  
    if (!validate_email(email) || !validate_password(password)) {
      console.error('Invalid email or password');
      return;
    }
  
    if (!validate_field(fullName) || !validate_field(favoriteSong) || !validate_field(milkBeforeCereal)) {
      console.error('One or more fields are invalid');
      return;
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      const userData = {
        email,
        full_name: fullName,
        favourite_song: favoriteSong,
        milk_before_cereal: milkBeforeCereal,
        last_login: serverTimestamp()
      };
  
      await set(ref(database, 'users/' + user.uid), userData);
      console.log('User created successfully');
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  }

// Set up our login function
function login () {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return
    // Don't continue running the code
  }

  auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).update(user_data)

    // DOne
    alert('User Logged In!!')

  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}




// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
} 