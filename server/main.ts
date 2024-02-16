import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';

async function insertLink({ title, url }: { title: string; url: string }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

// Create user roles if they don't exist
if (Roles.getAllRoles().count() === 0) {
  Meteor.settings.userRoles.forEach((role: string) => {
    Roles.createRole(role);
  });
}

// Create admin user if one doesn't exist
if (Meteor.users.find().count() === 0) {
  const user = Accounts.createUser({
    email: Meteor.settings.adminEmail,
    password: Meteor.settings.adminPassword,
  });

  Roles.addUsersToRoles(user, 'admin');
}

Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
  if (await LinksCollection.find().countAsync() === 0) {
    await insertLink({
      title: 'Do the Tutorial',
      url: 'https://www.meteor.com/tutorials/react/creating-an-app',
    });

    await insertLink({
      title: 'Follow the Guide',
      url: 'https://guide.meteor.com',
    });

    await insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com',
    });

    await insertLink({
      title: 'Discussions',
      url: 'https://forums.meteor.com',
    });
  }
});
