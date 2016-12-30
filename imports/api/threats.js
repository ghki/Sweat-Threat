import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import Twit from 'twit';

export const Threats = new Mongo.Collection('threats');

Threats.allow({
    insert: function(userId, doc) {
        // only allow posting if you are logged in
        return !!userId;
    }
});

Threats.allow({
    update: function(userId, doc) {
        // only allow posting if you are logged in
        return !!userId;
    }
});

var twitterClient = new Twit({
    consumer_key: 'CONSUMER-KEY-HERE',
    consumer_secret: 'CONSUMER-SECRET-HERE',
    access_token: 'ACCESS-TOKEN-HERE',
    access_token_secret: 'ACCESS-TOKEN-SECRET-HERE'
});

Meteor.methods({
    'threats.insert' (partner_screenname, location, latitude, longitude, datetime) {
        // Make sure the user is logged in before inserting a threat
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        var partner = Meteor.users.findOne({ 'services.twitter.screenName': partner_screenname });

        if (!partner) {
            //throw new Meteor.Error('partner-does-not-exist');
            Bert.alert('Partner does not exist!', 'danger', 'growl-top-right');
        }

        var now = new Date();
        var overdue = now > new Date(datetime);

        if (overdue) {
            Bert.alert('Date must be in the future!', 'danger', 'growl-top-right');
        }

        Threats.insert({
            userid: this.userId,
            username: Meteor.users.findOne(this.userId).services.twitter.screenName,
            partner_userid: Meteor.users.findOne({ 'services.twitter.screenName': partner_screenname })._id,
            partner_username: partner_screenname,
            location: location,
            latitude: latitude,
            longitude: longitude,
            datetime: datetime,
            status: "active",
            excuse: ""
        })
    },

    'threats.setExcuse' (threatId, setExcuse) {
        check(threatId, String);
        check(setExcuse, String);

        const threat = Threats.findOne(threatId);

        Threats.update(threatId, { $set: { excuse: setExcuse } });
    },

    'threats.setStatus' (threatId, setStatus) {
        check(threatId, String);
        check(setStatus, String);

        const threat = Threats.findOne(threatId);

        Threats.update(threatId, { $set: { status: setStatus } });
    },

    'threats.sendBlackmail' () {
        // twitterClient.get('statuses/user_timeline', {count: '10'}, function(err, data, response) {
        //   console.log(data)
        // });
        twitterClient.getAuth();
        twitterClient.get('saved_searches/list', function(err, data, response) {
            console.log(data);
        });
    }
});
