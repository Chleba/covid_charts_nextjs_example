import { ICovidAPIURL, ICovidAPIQuery } from '@/enums/enums';
import { getAPIURL, getAPIQueries } from '@/libs/utils';

const dateNow = new Date();

const apiURL: ICovidAPIURL = {
  theme: 'infectious_disease',
  subtheme: 'respiratory',
  topic: 'COVID-19',
  geography_type: 'Nation',
  geography: 'England',
  // metric: 'COVID-19_cases_casesByDay', 
  metric: 'COVID-19_deaths_ONSByDay'
};

const apiURLQuery: ICovidAPIQuery = {
  sex: 'all',
  year: dateNow.getFullYear(),
  page_size: 365,
};

export async function GET() {
  const API_URL = getAPIURL(apiURL);
  const API_QUERY = getAPIQueries(apiURLQuery);

  const url = API_QUERY ? API_URL + API_QUERY : API_URL;
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
 
  return Response.json({ data })
}
