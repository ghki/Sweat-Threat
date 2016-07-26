import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Threats = new Mongo.Collection('threats');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish threats that are public or belong to the current user
  Meteor.publish('threats', function threatsPublication() {
    return Threats.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    });
  });
}

Meteor.methods({
  'threats.insert'(text) {
    check(text, String);

    // Make sure the user is logged in before inserting a threat
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Threats.insert({
      text,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
      
    });
  },
  'threats.remove'(threatId) {
    check(threatId, String);

    const threat = Threats.findOne(threatId);
    if (threat.private && threat.owner !== this.userId) {
      // If the threat is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }

    Threats.remove(threatId);
  },
  'threats.setChecked'(threatId, setChecked) {
    check(threatId, String);
    check(setChecked, Boolean);

    const threat = Threats.findOne(threatId);
    if (threat.private && threat.owner !== this.userId) {
      // If the threat is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }

    Threats.update(threatId, { $set: { checked: setChecked } });
  },
  'threats.setPrivate'(threatId, setToPrivate) {
    check(threatId, String);
    check(setToPrivate, Boolean);

    const threat = Threats.findOne(threatId);

    // Make sure only the threat owner can make a threat private
    if (threat.owner !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Threats.update(threatId, { $set: { private: setToPrivate } });
  },
});
