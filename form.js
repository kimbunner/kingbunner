
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAsfFd0JYLBhTNaEUp2pQ7gEWQ1nPPE-44",
    authDomain: "test-adb92.firebaseapp.com",
    databaseURL: "https://fir-authproject-2c928.firebaseio.com",
    projectId: "test-adb92",
    storageBucket: "test-adb92.appspot.com",
    messagingSenderId: "389560445496",
    appId: "1:389560445496:web:6ff70209d3cf5272d3d4cd",
    measurementId: "G-C8Q2HYKHY1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();



function test(){
  firebase.auth().sendPasswordResetEmail(email.value)
}

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
        window.alert("Verification link sent to your email. Kinldy check to verify your account")
    }).catch(function(error) {
        // An error happened.
    });

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value,);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })
