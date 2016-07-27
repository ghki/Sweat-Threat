import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Profiles = new Mongo.Collection('profiles');
Profiles.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});

Profiles.allow({
  update: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});

Meteor.methods({
  'profiles.insert'() {
    // Make sure the user is logged in before inserting a task
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    Profiles.insert({
	  userid: this.userId,
      username: Meteor.users.findOne(this.userId).username,
      accountabilityPartner: "",
      threats:[]
    });
	},

  'profiles.remove'(username) {
    check(username, String);
    Profiles.remove(username);
  },

  'profile.setAccountabilityPartner'(profileId, accountabilityPartner) {
	Profiles.update(profileId, { $set: { accountabilityPartner: accountabilityPartner } });
  },

  'profiles.addThreat'(profileId, threat) {
    Profiles.update(profileId, { $push: { threats: threat } });
  }
});