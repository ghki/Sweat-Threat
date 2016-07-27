import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Profiles = new Mongo.Collection('profiles');

Meteor.methods({
  'profiles.insert'() {
    // Make sure the user is logged in before inserting a task
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    Profiles.insert({
      username: Meteor.users.findOne(this.userId).username,
      accountabilityPartner: "",
      threats: []
    });
  },

  'profiles.remove'(username) {
    check(username, String);
    Profiles.remove(username);
  },

  'profile.setAccountabilityPartner'(username, accountabilityPartner) {
	Profiles.update(userId, { $set: { accountabilityPartner: accountabilityPartner } });
  },

  'profiles.addThreat'( {username, threat} ) {
    Profiles.update(username, { $push: { threats: threat } });
  },

  'profiles.updateThreatStatus'(username, threatId, status) {
    check(threatId, Number);
    check(status, String);

    //const threat = Profiles.findOne(username).threats;

    Profiles.update( 
      { username: username, "threats.threatId": threatId },
      { $set: { "threats.$.status": status } }
    )
  },

});