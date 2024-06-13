export const options = {
  method: 'GET',
  url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
  params: {
    bl_lat: '34.654293',
    bl_lng: '25.514642',
    tr_lat: '42.793449',
    tr_lng: '43.185981',
    limit: '300',
  },
  headers: {
    'X-RapidAPI-Key': 'd56f0ea823mshc05765494fd4a45p1c3c73jsn5674ba32715e',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
  },
};

export const headers = {
  'x-rapidapi-key': 'd56f0ea823mshc05765494fd4a45p1c3c73jsn5674ba32715e',
  'x-rapidapi-host': 'flight-radar1.p.rapidapi.com',
  'Content-Type': 'application/json',
};
