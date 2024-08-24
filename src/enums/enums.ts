
export type TSex = 'm' | 'f' | 'all';

export interface ICovidAPIQuery {
  stratum?: string | undefined;
  age?: string;
  sex?: TSex;
  year?: number;
  epiweek?: number;
  date?: string;
  in_reporting_delay_period?: boolean;
  page_size?: number;
}

export interface ICovidAPIURL {
  theme: string;
  subtheme: string;
  topic: string;
  geography_type: string;
  geography: string;
  metric: string;
};
