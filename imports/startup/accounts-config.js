import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Accounts.createUser = _.wrap(Accounts.createUser, function(createUser) {
    // Store the original arguments
    var args = _.toArray(arguments).slice(1),
        user = args[0];
        origCallback = args[1];

    var newCallback = function(error) {
		Meteor.call('profiles.insert');
        origCallback.call(this, error);
    };

    createUser(user, newCallback);
});