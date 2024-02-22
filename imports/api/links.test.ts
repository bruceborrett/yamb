import { Meteor } from 'meteor/meteor';

import assert from 'assert';

import { LinksCollection } from './links';

describe('links', () => {

    it('should create some links', () => {
        LinksCollection.insert({ title: 'Meteor Docs', url: 'https://docs.meteor.com', createdAt: new Date() });
        LinksCollection.insert({ title: 'React Docs', url: 'https://reactjs.org/docs/getting-started.html', createdAt: new Date() });
        LinksCollection.insert({ title: 'WhatsApp', url: 'https://web.whatsapp.com/', createdAt: new Date() });
        LinksCollection.insert({ title: 'Google', url: 'https://www.google.com/', createdAt: new Date() });
        assert.equal(LinksCollection.find({}).count(), 4);
    });

    if (Meteor.isClient) {
        it('should return all links on client', function() {
            Meteor.subscribe('links', () => {
                assert.equal(LinksCollection.find({}).count(), 4);
            });    
        });
    }

});