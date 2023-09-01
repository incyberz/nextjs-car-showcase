import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters:FilterProps) {

  const {manufacturer,model,year,limit,fuel} = filters
  const fetchUrl = `https://api.api-ninjas.com/v1/cars?model=${model}&make=${manufacturer}&year=${year}&limit=${limit}&fuel_type=${fuel}`
  

  const headers = {
    'X-Api-Key' : 'hS2WfGN1SFFXEZyVUtmhYA==OEFEQkDbthHNndCM'
    ,'X-Api-Host' : 'https://api.api-ninjas.com/v1/cars?model=camry'
  }

  const response = await fetch(fetchUrl,{
    headers:headers
  })

  const result = await response.json()
  
  return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car:CarProps, angle?:string) =>{

  const {make} = car;

  if(!angle) angle='1';

  const url = '/cars/'+make.toLowerCase()+'-'+angle+'.jpg';
  return url;
  
  // const url = new URL('https://cdn.imagin.studio/getimage')

  // const {make,year,model} = car
  // url.searchParams.append('customer','hrjavascript-mastery')
  // url.searchParams.append('make',make)
  // url.searchParams.append('model',model.split(' ')[0])
  // url.searchParams.append('zoomType','fullscreen')
  // url.searchParams.append('modelYear',`${year}`)
  // url.searchParams.append('angle',`${angle}`)

  // return `${url}`
}

export const updateSearchParams = (type:string, value:string)=>{
  const searchParams = new URLSearchParams(window.location.search)

  searchParams.set(type,value)
  return `${window.location.pathname}?${searchParams.toString()}`
}