import { Meteor } from 'meteor/meteor';
import { Threat } from './Threat.js';

Meteor.methods({
  'Threat.insertThreat'({ threatId, Date, Location }) {
    new SimpleSchema({
      threatId: { type: String },
      Date: { type: Date },
      Location: { type: String }
    }).validate({ threatId, Date, Location });

    const threat = Threat.findOne(threatId);

    if (!threat.editableBy(this.userId)) {
      throw new Meteor.Error('Threat.insertThreat.unauthorized',
        'Cannot insert threat in a private list that is not yours');
    }

    Threat.update(threatId, {
      $set: { text: Date, text: Location }
    });
  }
});