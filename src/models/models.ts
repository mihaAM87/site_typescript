type Modify<T, R> = Omit<T, keyof R> & R;

interface IContentsContent {
  type: string;
  header: string;
  name: string;
  content: string;
  img: string;
}

interface IContents {
  id: number;
  type: string;
  name: string;
  content: IContentsContent;
}

interface ISource {
  type: string;
  header: string;
  contents: Array<IContents>;
}

export interface ICoachesSource extends ISource {}

export interface IContactsSource extends ISource {
  id: number;
  city: string;
  area: string;
  street: string;
  home: number;
  building: number;
  undergrounds: Array<string>;
  emails: Array<string>;
  phones: Array<string>;
}

export interface IGroupTypesSource {
  type: string;
  contents: Array<IContents>;
}

interface IPricesSourceContentsContent {
  conditions: string;
  price: number;
}

export interface IPricesSourceContents
  extends Modify<
    IContents,
    {
      header: string;
      content: IPricesSourceContentsContent;
    }
  > {}

export interface IPricesSource
  extends Modify<
    ISource,
    {
      contents: Array<IPricesSourceContents>;
    }
  > {}

interface IScheduleSourceISessions {
  id: number;
  sessionsIds: Array<number>;
  coachesIds: Array<number>;
}

interface IScheduleSourceContentsContentContents
  extends Modify<
    IContentsContent,
    {
      content: {
        sessions: Array<IScheduleSourceISessions>;
      };
    }
  > {}

interface IScheduleSourceContents {
  id: number;
  header: string;
  type: string;
  from: string;
  to: string;

  contents: Array<IScheduleSourceContentsContentContents>;
}

export interface IScheduleSource
  extends Modify<
    ISource,
    {
      contents: Array<IScheduleSourceContents>;
    }
  > {}

interface ISessionsSourceContents {
  id: number;
  name: string;
}

export interface ISessionsSource
  extends Modify<
    ISource,
    {
      contents: Array<ISessionsSourceContents>;
    }
  > {}

interface IISportTypesSourceContents
  extends Modify<
    IContents,
    {
      header: string;
      img: string;
      content: string;
    }
  > {}

export interface ISportTypesSource
  extends Modify<
    ISource,
    {
      contents: Array<IISportTypesSourceContents>;
    }
  > {}
