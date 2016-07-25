import { Mongo } from 'meteor/mongo';

export const Threat = new Mongo.Collection('Threat');

Threat.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Threat.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});