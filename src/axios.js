import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://data.ca.gov/api/3/action/datastore_search?resource_id=5ebb2d68-1186-4937-acaf-8564c9a01ed6&q='
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

instance.defaults.headers.post['Content-Type'] = 'application/json'//unnecessary, json is default anyway, just for example


export default instance;
