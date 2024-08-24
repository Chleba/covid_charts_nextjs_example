
import { ICovidAPIURL, ICovidAPIQuery } from '@/enums/enums';

export const getAPIURL = (apiArgs: ICovidAPIURL) => {
  const domain = 'https://api.ukhsa-dashboard.data.gov.uk/v2';

  const theme = `/themes/${apiArgs.theme}`;
  const subtheme = `/sub_themes/${apiArgs.subtheme}`;
  const topic = `/topics/${apiArgs.topic}`;
  const geography_type = `/geography_types/${apiArgs.geography_type}`;
  const geography = `/geographies/${apiArgs.geography}`;
  const metric = `/metrics/${apiArgs.metric}`;

  const url = [domain, theme, subtheme, topic, geography_type, geography, metric];

  return url.join('');
}

export const getAPIQueries = (apiQueries?: ICovidAPIQuery ) => {
  if (apiQueries) {
    let query = '';
    for(var i in apiQueries) {
      const value: string = (apiQueries as any)[i];
      query += query === '' ? '?' : '&';
      query += `${i}=${value}`;
    }
    return query;
  }
  return undefined;
}

declare global {
  interface Date {
    getWeek(): number;
  }
};

Date.prototype.getWeek = function() {
  var date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  var week1 = new Date(date.getFullYear(), 0, 4);
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

