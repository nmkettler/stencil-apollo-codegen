/* tslint:disable */
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Agents = {
   __typename?: 'Agents',
  name?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  age?: Maybe<Scalars['Int']>,
  agent_online?: Maybe<Scalars['Boolean']>,
  newAgentName?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  newAgentName?: Maybe<Scalars['String']>,
  incrementAge?: Maybe<Scalars['Int']>,
};

export type RootQueryType = {
   __typename?: 'RootQueryType',
  agents?: Maybe<Array<Maybe<Agents>>>,
};
