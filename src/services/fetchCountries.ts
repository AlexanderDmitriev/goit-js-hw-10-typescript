import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {ICountries} from '../interfaces/ICountries';

export const fetchCountries = (name:string):Promise<ICountries> => {
  const searchParams:string = 'name,capital,population,flags,languages';
  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=${searchParams}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Oops, there is no country with that name');
    })
    .catch(error => Notify.failure(error.message));
};