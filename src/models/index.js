// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { News, UserClasses, Classes, Payment, Membership, Users } = initSchema(schema);

export {
  News,
  UserClasses,
  Classes,
  Payment,
  Membership,
  Users
};