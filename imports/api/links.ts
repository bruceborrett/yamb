import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export interface Link {
  _id?: string;
  title: string;
  url: string;
  createdAt: Date;
}

if (Meteor.isServer) {
  Meteor.publish('links', function() {
    return LinksCollection.find({});
  });
}

export const LinksCollection = new Mongo.Collection<Link>('links');
