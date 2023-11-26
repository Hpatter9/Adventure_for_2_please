import LocationImages from "./locationimages";

const locationData = [
    {
      lat: 39.7392,
      lng: -104.9903,
      name: 'Denver, USA (Homebase)',
      date: '2020-current',
      imgs: LocationImages.denverImg,
      detail: 'This has been our home since 2020 but currently is the home to our storage unit as we travel. We moved here right before covid started and have loved it ever since. We are always looking for new places to explore in and around Colorado! ',
      arcstartlat: 39.7392,
      arcstartlng: -104.9903,
      arcendlat: 64.1470,
      arcendlng: -21.9408,
    },
    {
      lat: 64.1470,
      lng: -21.9408,
      name: 'Reykjavik, Iceland',
      date: '9 days: October 1 - 9, 2022',
      imgs: LocationImages.icelandImg,
      detail: "This was the first stop on our adventure. We rented a car, found a friend, and explored! So far, this has been Hunter's favorite place and we plan on going back! From here we flew to Scotland.",
      arcstartlat: 64.1470,
      arcstartlng: -21.9408,
      arcendlat: 55.9533,
      arcendlng: -3.1883,
    },
    {
      lat: 55.9533,
      lng: -3.1883,
      name: 'Edinburgh, Scotland',
      date: '9 days: October 9 - 19, 2022',
      imgs: LocationImages.edinburghImg,
      detail: 'We spent a week in Edinburgh and loved every minute of it. We stayed in a cute little Airbnb and explored the city. It was cocktail week, so of course that was great. This was our first taste of a castle as well! From one city to another, train ride to London.',
      arcstartlat: 55.9533,
      arcstartlng: -3.1883,
      arcendlat: 51.507222,
      arcendlng: -0.127500,
    },
    {
      lat: 51.507222,
      lng: -0.127500,
      name: 'London, England',
      date: '2 day: October 19 - 20, 2022',
      imgs: LocationImages.londonImg,
      detail: "This was just a quick stop over to watch Marlys' favorite play, Wicked! Then flew off to Dublin for some Ireland time.",
      arcstartlat: 51.507222,
      arcstartlng: -0.127500,
      arcendlat: 52.9335,
      arcendlng: -9.3441,
    },
    {
      lat: 52.9335,
      lng: -9.3441,
      name: 'Lahinch, County Clare, Ireland',
      date: '11 days: October 20 - 30, 2022',
      imgs: LocationImages.irelandImg,
      detail: "This was our first stop in Ireland. We stayed in a great tinyhome Airbnb and explored the towns around us. We went to the Cliffs of Moher and the Burren. We totally loved the pubs with live music everywhere! And live music meant a gourp of people sitting in botths with their own instruments and just jamming away! Also, first time driving on the left side of the road! Drove back to Dublin and took a mior detour...to South Arica!",
      arcstartlat: 52.9335,
      arcstartlng: -9.3441,
      arcendlat: -26.2041,
      arcendlng: 28.0473  ,
    },
    {
      lat: -26.2041,
      lng: 28.0473,
      name: 'Johanasburg, South Africa',
      date: '5 days: October 30 - November 4, 2022',
      imgs: LocationImages.johanasburgImg,
      detail: 'Once in a lifetime trip here! We went to the safari nearish to johanasburg at Krugar National Park.  We saw just about every animal we had hoped! Even the "Big 5". This really was one of our favorite things.  After the safari we flew to Cape Town.',
      arcstartlat: -26.2041,
      arcstartlng: 28.0473,
      arcendlat: -33.9249,
      arcendlng: 18.4241,
    },
    {
      lat: -33.9249,
      lng: 18.4241,
      name: 'Capetown, South Africa',
      date: '4 days: November 4 - 8, 2022',
      imgs: LocationImages.capetownImg,
      detail: 'Cape Town was nothing like we expected. The Beaches were beautiful and the food was great. We even got to see a Redbull sponsored box car race. Simply amazing.  So after this little detour, we flew back to Europe to spend a month in Germany.',
      arcstartlat: -33.9249,
      arcstartlng: 18.4241,
      arcendlat: 50.9375,
      arcendlng: 6.9603,
    },
    {
      lat: 50.9375,
      lng: 6.9603,
      name: 'Cologne, Germany',
      date: '',
      imgs: LocationImages.cologneImg,
      detail: '',
      arcstartlat: 50.9375,
      arcstartlng: 6.9603,
      arcendlat: 51.4862,
      arcendlng: -0.9447,
    },
    {
      "lat": 51.4862,
      "lng": -0.9447,
      "name": "London, England - Part 2",
      "date": "",
      "imgs": [],
      "detail": "",
      "arcstartlat": 51.4862,
      "arcstartlng": -0.9447,
      "arcendlat": 45.9434,
      "arcendlng": 6.0953,
    },
    {
      lat: 45.9434,
      lng: 6.0953,
      name: "Chamonix, France",
      date: '',
      imgs: LocationImages.chamonixImg,
      detail: "",
      arcstartlat: 45.9434,
      arcstartlng: 6.0953,
      arcendlat: 45.4347,
      arcendlng: 12.3355,
    },
    {
      lat: 45.4347,
      lng: 12.3355,
      name: "Venice, Italy",
      date: '',
      imgs: LocationImages.veniceImg,
      detail: "",
      arcstartlat: 45.4347,
      arcstartlng: 12.3355,
      arcendlat: 40.7422,
      arcendlng: 17.2157,
    },
    {
      lat: 40.7422,
      lng: 17.2157,
      name: "Polignano a Mare, Italy",
      date: '',
      imgs: LocationImages.polignanoamareImg,
      detail: "",
      arcstartlat: 40.7422,
      arcstartlng: 17.2157,
      arcendlat: 41.9033,
      arcendlng: 12.4828,
    },
    {
      lat: 41.9033,
      lng: 12.4828,
      name: "Rome, Italy",
      date: '',
      imgs: LocationImages.romeImg,
      detail: "",
      arcstartlat: 41.9033,
      arcstartlng: 12.4828,
      arcendlat: 3.1390,
      arcendlng: 101.6869,
    },
    {
      lat: 3.1390,
      lng: 101.6869,
      name: "Kuala Lumpur, Malaysia",
      date: '',
      imgs: LocationImages.kualalumpurImg,
      detail: "",
      arcstartlat: 3.1390,
      arcstartlng: 101.6869,
      arcendlat: -8.6692,
      arcendlng: 115.1652,
    },
    {
      "lat": -8.7000,
      "lng": 115.1652,
      "name": "Bali, Indonesia",
      "date": "",
      "imgs": [],
      "detail": "",
      "arcstartlat": -8.6692,
      "arcstartlng": 115.1652,
      "arcendlat": 13.7563,
      "arcendlng": 100.5018,
    },
    {
      lat: 13.7563,
      lng: 100.5018,
      name: "Bangkok, Thailand",
      date: "",
      imgs: LocationImages.bangkokImg,
      detail: "",
      arcstartlat: 13.7563,
      arcstartlng: 100.5018,
      arcendlat: 12.9500,
      arcendlng: 103.8667,
    },
    {
      lat: 12.9500,
      lng: 103.8667,
      name: "Siem Reap, Cambodia",
      date: "",
      imgs: LocationImages.siemreapImg,
      detail: "",
      arcstartlat: 12.9500,
      arcstartlng: 103.8667,
      arcendlat: 10.7760,
      arcendlng: 106.6917,
    },
    {
      lat: 10.7760,
      lng: 106.6917,
      name: "Ho Chi Minh City, Vietnam",
      date: "",
      imgs: LocationImages.hochiminhImg,
      detail: "",
      arcstartlat: 10.7760,
      arcstartlng: 106.6917,
      arcendlat: 15.5267,
      arcendlng: 120.0194,
    },
    {
      lat: 15.5267,
      lng: 120.0194,
      name: "Clark, Philippines",
      date: "",
      imgs: LocationImages.clarkImg,
      detail: "",
      arcstartlat: 15.5267,
      arcstartlng: 120.0194,
      arcendlat: 11.9252,
      arcendlng: 121.0316,
    },
    {
      lat: 11.9252,
      lng: 121.0316,
      name: "El Nido, Philippines",
      date: "",
      imgs: LocationImages.elnidoImg,
      detail: "",
      arcstartlat: 11.9252,
      arcstartlng: 121.0316,
      arcendlat: 9.5295,
      arcendlng: 117.9744,
    },
    {
      lat: 9.5295,
      lng: 117.9744,
      name: "Puerto Princesa, Philippines",
      date: "",
      imgs: LocationImages.puertopricessaImg,
      detail: "",
      arcstartlat: 9.5295,
      arcstartlng: 117.9744,
      arcendlat: -7.9000,
      arcendlng: 115.1652,
    },
    {
      "lat": -7.9000,
      "lng": 115.1652,
      "name": "Canggu Bali, Indonesia",
      "date": "",
      "imgs": [],
      "detail": "",
      "arcstartlat": -7.9000,
      "arcstartlng": 115.1652,
      "arcendlat": -7.3189,
      "arcendlng": 116.4072,
    },
    {
      lat: -7.3189,
      lng: 116.4072,
      name: "Gili Trawangan, Indonesia",
      date: "",
      imgs: LocationImages.gilitrawanganImg,
      detail: "",
      arcstartlat: -7.3189,
      arcstartlng: 116.4072,
      arcendlat: -8.6552,
      arcendlng: 116.4337,
    },
    {
      lat: -8.6552,
      lng: 116.4337,
      name: "Lombok, Indonesia",
      date: "",
      imgs: LocationImages.lombokImg,
      detail: "",
      arcstartlat: -8.6552,
      arcstartlng: 116.4337,
      arcendlat: -8.3000,
      arcendlng: 114.8000,
    },
    {
      "lat": -8.3000,
      "lng": 114.8000,
      "name": "Seminyak Bali, Indonesia",
      "date": "",
      "imgs": [],
      "detail": "",
      "arcstartlat":  -8.3000,
      "arcstartlng": 114.8000,
      "arcendlat": 13.8700,
      "arcendlng": 100.9925,
    },
    {
      "lat": 13.8700,
      "lng": 100.9925,
      "name": "Bangkok Thailand - Part 2",
      "date": "",
      "imgs": [],
      "detail": "",
      "arcstartlat": 13.8700,
      "arcstartlng": 100.9925,
      "arcendlat": 15.8346,
      "arcendlng": 108.2770,
    },
    {
      lat: 15.8346,
      lng: 108.2770,
      name: "Hoi An, Vietnam",
      date: "",
      imgs: LocationImages.hoianImg,
      detail: "",
      arcstartlat: 15.8346,
      arcstartlng: 108.2770,
      arcendlat: 9.5869,
      arcendlng: 100.0588,
    },
    {
      lat: 9.5869,
      lng: 100.0588,
      name: "Ko Samui, Thailand",
      date: "",
      imgs: LocationImages.kosamuiImg,
      detail: "",
      arcstartlat: 9.5869,
      arcstartlng: 100.0588,
      arcendlat: 1.2901,
      arcendlng: 103.8617,
    },
    {
      lat: 1.2901,
      lng: 103.8617,
      name: "Singapore",
      date: "",
      imgs: LocationImages.singaporeImg,
      detail: "",
      arcstartlat: 1.2901,
      arcstartlng: 103.8617,
      arcendlat: -8.3952,
      arcendlng: 115.4715,
    },

    {
      lat: -8.3952,
      lng: 115.4715,
      name: "Sanur, Bali, Indonesia",
      date: "",
      imgs: LocationImages.sanurImg,
      detail: "",
      arcstartlat: -8.3952,
      arcstartlng: 115.4715,
      arcendlat: 51.1656,
      arcendlng: 7.4515,
    },
    {
      "lat": 51.1656,
      "lng": 7.4515,
      "name": "Cologne, Germany - Part 2",
      "date": "",
      "imgs": [],
      "detail": "",
      "arcstartlat": 51.1656,
      "arcstartlng": 7.4515,
      "arcendlat": 41.3833,
      "arcendlng": 2.1833,
    },
    {
      lat: 41.3833,
      lng: 2.1833,
      name: "Barcelona, Spain",
      date: "",
      imgs: LocationImages.barcelonaImg,
      detail: "",
      arcstartlat: 41.3833,
      arcstartlng: 2.1833,
      arcendlat: 38.7182,
      arcendlng: -9.1353,
    },
    {
      lat: 38.7182,
      lng: -9.1353,
      name: "Lisbon, Portugal",
      date: "",
      imgs: LocationImages.lisbonImg,
      detail: "",
      arcstartlat: 38.7182,
      arcstartlng: -9.1353,
      arcendlat: 39.0000,
      arcendlng: -105.0007,
    },
    {
      "lat": 39.0000,
      "lng": -105.0007,
      "name": "Denver, Colorado - Return Home",
      "date": "",
      "imgs": [],
      "detail": "",
      "arcstartlat": 39.0000,
      "arcstartlng": -105.0007,
      "arcendlat": 44.8204,
      "arcendlng": -122.8994,
    }, 
    {
      lat: 44.8204,
      lng: -122.8994,
      name: "Lyons, Oregon",
      date: "",
      imgs: LocationImages.lyonsImg,
      detail: "",
      arcstartlat: 44.8204,
      arcstartlng: -122.8994,
      arcendlat: 33.7833,
      arcendlng: -117.8167,
  },
    {
      lat: 33.7833,
      lng: -117.8167,
      name: "Orange, California",
      date: "",
      imgs: LocationImages.orangeImg,
      detail: "",
      arcstartlat: 33.7833,
      arcstartlng: -117.8167,
      arcendlat: 38.2464,
      arcendlng: 22.1428,
    },

  {
      "lat": 38.2464,
      "lng": 22.1428,
      "name": "Aigio, Greece",
      "date": "",
      "imgs": LocationImages.aigioImg,
      "detail": "",
      "arcstartlat": 38.2464,
      "arcstartlng": 22.1428,
      "arcendlat": 37.9750,
      "arcendlng": 23.7167,
  },
  {
      "lat": 37.9750,
      "lng": 23.7167,
      "name": "Athens, Greece",
      "date": "",
      "imgs": LocationImages.athensImg,
      "detail": "",
      "arcstartlat": 37.9750,
      "arcstartlng": 23.7167,
      "arcendlat": 35.2375,
      "arcendlng": 24.9458,
  },
  {
      "lat": 35.2375,
      "lng": 24.9458,
      "name": "Crete, Greece",
      "date": "",
      "imgs": LocationImages.creteImg,
      "detail": "",
      "arcstartlat": 35.2375,
      "arcstartlng": 24.9458,
      "arcendlat": 43.6977,
      "arcendlng": 23.3219,
  },
  {
      "lat": 43.6977,
      "lng": 23.3219,
      "name": "Sofia, Bulgaria",
      "date": "",
      "imgs": LocationImages.sofiaImg,
      "detail": "",
      "arcstartlat": 43.6977,
      "arcstartlng": 23.3219,
      "arcendlat": 42.5000,
      "arcendlng": 23.7667,
  },
  {
      "lat": 42.5000,
      "lng": 23.7667,
      "name": "Bansko, Bulgaria",
      "date": "",
      "imgs": LocationImages.banskoImg,
      "detail": "",
      "arcstartlat": 42.5000,
      "arcstartlng": 23.7667,
      "arcendlat": 39.5622,
      "arcendlng": 2.6775,
  },
  {
      "lat": 39.5622,
      "lng": 2.6775,
      "name": "Majorca, Spain",
      "date": "",
      "imgs": LocationImages.majorcaImg,
      "detail": "",
      "arcstartlat": 39.5622,
      "arcstartlng": 2.6775,
      "arcendlat": 35.7854,
      "arcendlng": -5.8601,
  },
  {
    lat: 35.7854,
    lng: -5.8601,
    name: "Tangier, Morocco",
    date: "",
    imgs: LocationImages.tangierImg,
    detail: "",
    arcstartlat: 35.7854,
    arcstartlng: -5.8601,
    arcendlat: 37.0722,
    arcendlng: -8.6144,
  },
  {
      "lat": 37.0722,
      "lng": -8.6144,
      "name": "Carvoeiro, Portugal",
      "date": "",
      "imgs": LocationImages.carvoeiroImg,
      "detail": ""
  },
  ];

  export default locationData;