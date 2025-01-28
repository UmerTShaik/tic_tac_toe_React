Step1:Create UI
Spet2:Create Player.jsx and make sure when user clicks edit/save , the buttom should
behave properly so as to save and edit the name of the user according to button click
Step3:Use state to acheive the above
Step4:Create Gameboard.jsx component/function and include it in App.jsx
Stpe5: Render a 3*3 grid using Array of Arrays
Step6: Now work on button to make it editable using Use state and use a fucntion to 
handle button clicks
Step7:Swtich betwen two players instead of using x all the time, and highlight the acitve 
player. You can highilght current player and that information shoudl be accesible to Player.jsx
 for hihglighting player name and Gamreboard.jsx for symbol. We use "lifting the state up"
 Means Lift the state uu tp the closeset ancestor componetn that has access to all the 
 components that need to work with that state.
 Step8.Now add Log.jsx whcih simply logs the turns in the Gameboard