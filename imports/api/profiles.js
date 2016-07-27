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
    // Make sure the user is logged in before inserting a threat
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

  'profiles.addThreat'( {userid, date_time, location} ) {
    let threat = {date_time: date_time, location: location};
    var doc = Profiles.findOne({userid:userid});
    Profiles.update(doc._id, { $push: { threats: threat } });
  },

  'profiles.updateThreatStatus'(username, threatId, status) {
    check(threatId, Number);
    check(status, String);

    //const threat = Profiles.findOne(username).threats;

    Profiles.update( 
      { username: username, "threats.threatId": threatId },
      { $set: { "threats.$.status": status } }
    );
  },
});