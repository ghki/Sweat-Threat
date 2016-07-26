import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Accounts.onLogin(function() {
  console.log(Meteor.userId());
})