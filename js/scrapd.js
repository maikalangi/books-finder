// const key = 'AIzaSyCeRKMon4_VVEskljoG-PvfJOPbse5qIPY'

// var GoogleAuth; // Google Auth object.
// function initClient() {
//   gapi.client.init({
//       'apiKey': key,
//       'clientId': 'YOUR_CLIENT_ID',
//       'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
//       'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
//   }).then(function () {
//       GoogleAuth = gapi.auth2.getAuthInstance();

//       // Listen for sign-in state changes.
//       GoogleAuth.isSignedIn.listen(updateSigninStatus);
//   });
// }

// // Example 1: Use method-specific function
// var request = gapi.client.drive.about.get({'fields': 'user'});

// // Execute the API request.
// request.execute(function(response) {
//   console.log(response);
// });


// // Example 2: Use gapi.client.request(args) function
// var request = gapi.client.request({
//   'method': 'GET',
//   'path': '/drive/v3/about',
//   'params': {'fields': 'user'}
// });
// // Execute the API request.
// request.execute(function(response) {
//   console.log(response);
// });

