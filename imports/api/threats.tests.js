/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

import { Threats } from './threats.js';

if (Meteor.isServer) {
  describe('Threats', () => {
    describe('methods', () => {
      const userId = Random.id();
      let threatId;

      beforeEach(() => {
        Threats.remove({});
        threatId = Threats.insert({
          text: 'test threat',
          createdAt: new Date(),
          owner: userId,
          username: 'tmeasday',
        });
      });

      it('can delete owned threat', () => {
        // Find the internal implementation of the threat method so we can
        // test it in isolation
        const deleteThreat = Meteor.server.method_handlers['threats.remove'];

        // Set up a fake method invocation that looks like what the method expects
        const invocation = { userId };

        // Run the method with `this` set to the fake invocation
        deleteThreat.apply(invocation, [threatId]);

        // Verify that the method does what we expected
        assert.equal(Threats.find().count(), 0);
      });
    });
  });
}
