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

export type Launch = {
   __typename?: 'Launch',
  flight_number?: Maybe<Scalars['Int']>,
  mission_name?: Maybe<Scalars['String']>,
  launch_year?: Maybe<Scalars['String']>,
  launch_date_local?: Maybe<Scalars['String']>,
  launch_success?: Maybe<Scalars['Boolean']>,
  rocket?: Maybe<Rocket>,
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

export type Rocket = {
   __typename?: 'Rocket',
  rocket_id?: Maybe<Scalars['String']>,
  rocket_name?: Maybe<Scalars['String']>,
  rocket_type?: Maybe<Scalars['String']>,
};

export type RootQueryType = {
   __typename?: 'RootQueryType',
  agents?: Maybe<Array<Maybe<Launch>>>,
  launch?: Maybe<Launch>,
  rockets?: Maybe<Array<Maybe<Rocket>>>,
  rocket?: Maybe<Rocket>,
};


export type RootQueryTypeLaunchArgs = {
  flight_number?: Maybe<Scalars['Int']>
};


export type RootQueryTypeRocketArgs = {
  id?: Maybe<Scalars['Int']>
};
