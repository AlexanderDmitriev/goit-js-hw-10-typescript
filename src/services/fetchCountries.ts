import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
//import { ICountries } from '../interfaces/ICountries';

export const fetchCountries = async(name: string): Promise<any> => {
  const searchParams: string = 'name,capital,population,flags,languages';
  /* return fetch(`https://restcountries.com/v3.1/name/${name}?fields=${searchParams}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Oops, there is no country with that name');
    }) */
  return await axios
    .get(`https://restcountries.com/v3.1/name/${name}?fields=${searchParams}`)
    .catch(error => Notify.failure(error.message));
};
