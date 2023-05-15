import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerNews = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<News, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly NewsID?: string | null;
  readonly NewsTitle?: string | null;
  readonly NewsContent?: string | null;
  readonly PublicationDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNews = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<News, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly NewsID?: string | null;
  readonly NewsTitle?: string | null;
  readonly NewsContent?: string | null;
  readonly PublicationDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type News = LazyLoading extends LazyLoadingDisabled ? EagerNews : LazyNews

export declare const News: (new (init: ModelInit<News>) => News) & {
  copyOf(source: News, mutator: (draft: MutableModel<News>) => MutableModel<News> | void): News;
}

type EagerUserClasses = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserClasses, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UserClasses?: string | null;
  readonly UserID?: string | null;
  readonly ClassID?: string | null;
  readonly RegistrationDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserClasses = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserClasses, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UserClasses?: string | null;
  readonly UserID?: string | null;
  readonly ClassID?: string | null;
  readonly RegistrationDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserClasses = LazyLoading extends LazyLoadingDisabled ? EagerUserClasses : LazyUserClasses

export declare const UserClasses: (new (init: ModelInit<UserClasses>) => UserClasses) & {
  copyOf(source: UserClasses, mutator: (draft: MutableModel<UserClasses>) => MutableModel<UserClasses> | void): UserClasses;
}

type EagerClasses = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Classes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ClassID?: string | null;
  readonly ClassName?: string | null;
  readonly Instructor?: string | null;
  readonly ClassTime?: string | null;
  readonly ClassDuration?: string | null;
  readonly ClassCapactity?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClasses = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Classes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ClassID?: string | null;
  readonly ClassName?: string | null;
  readonly Instructor?: string | null;
  readonly ClassTime?: string | null;
  readonly ClassDuration?: string | null;
  readonly ClassCapactity?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Classes = LazyLoading extends LazyLoadingDisabled ? EagerClasses : LazyClasses

export declare const Classes: (new (init: ModelInit<Classes>) => Classes) & {
  copyOf(source: Classes, mutator: (draft: MutableModel<Classes>) => MutableModel<Classes> | void): Classes;
}

type EagerPayment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Payment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly PaymentID?: string | null;
  readonly UserID?: string | null;
  readonly MembershipID?: string | null;
  readonly PaymentDate?: string | null;
  readonly PaymentMethod?: string | null;
  readonly PaymentAmmount?: number | null;
  readonly PaymentStatus?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPayment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Payment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly PaymentID?: string | null;
  readonly UserID?: string | null;
  readonly MembershipID?: string | null;
  readonly PaymentDate?: string | null;
  readonly PaymentMethod?: string | null;
  readonly PaymentAmmount?: number | null;
  readonly PaymentStatus?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Payment = LazyLoading extends LazyLoadingDisabled ? EagerPayment : LazyPayment

export declare const Payment: (new (init: ModelInit<Payment>) => Payment) & {
  copyOf(source: Payment, mutator: (draft: MutableModel<Payment>) => MutableModel<Payment> | void): Payment;
}

type EagerMembership = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Membership, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly MembershipID?: string | null;
  readonly MembershipPrice?: number | null;
  readonly Duration?: string | null;
  readonly Benefits?: string | null;
  readonly WalletID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMembership = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Membership, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly MembershipID?: string | null;
  readonly MembershipPrice?: number | null;
  readonly Duration?: string | null;
  readonly Benefits?: string | null;
  readonly WalletID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Membership = LazyLoading extends LazyLoadingDisabled ? EagerMembership : LazyMembership

export declare const Membership: (new (init: ModelInit<Membership>) => Membership) & {
  copyOf(source: Membership, mutator: (draft: MutableModel<Membership>) => MutableModel<Membership> | void): Membership;
}

type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FirstName?: string | null;
  readonly LastName?: string | null;
  readonly Email?: string | null;
  readonly PasswordHash?: string | null;
  readonly MembershipID?: string | null;
  readonly Address?: string | null;
  readonly PhoneNumber?: number | null;
  readonly picture?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FirstName?: string | null;
  readonly LastName?: string | null;
  readonly Email?: string | null;
  readonly PasswordHash?: string | null;
  readonly MembershipID?: string | null;
  readonly Address?: string | null;
  readonly PhoneNumber?: number | null;
  readonly picture?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}