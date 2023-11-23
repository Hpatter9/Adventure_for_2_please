import LocationImages from "./locationimages";

const locationData = [
    {
      lat: 39.7392,
      lng: -104.9903,
      name: 'Denver, USA (Homebase)',
      date: '2020-current',
      imgs: LocationImages.denverImg,
      detail: 'This has been our home since 2020 but currently is the home to our storage unit as we travel. We moved here right before covid started and have loved it ever since. We are always looking for new places to explore in and around Colorado! ',
    },
    {
      lat: 64.1470,
      lng: -21.9408,
      name: 'Reykjavik, Iceland',
      date: '9 days: October 1 - 9, 2022',
      imgs: LocationImages.icelandImg,
      detail: "This was the first stop on our adventure. We rented a car, found a friend, and explored! So far, this has been Hunter's favorite place and we plan on going back! From here we flew to Scotland.",
    },
    {
      lat: 55.9533,
      lng: -3.1883,
      name: 'Edinburgh, Scotland',
      date: '9 days: October 9 - 19, 2022',
      imgs: LocationImages.edinburghImg,
      detail: 'We spent a week in Edinburgh and loved every minute of it. We stayed in a cute little Airbnb and explored the city. It was cocktail week, so of course that was great. This was our first taste of a castle as well! From one city to another, train ride to London.',
    },
    {
      lat: 51.507222,
      lng: -0.127500,
      name: 'London, England',
      date: '2 day: October 19 - 20, 2022',
      imgs: LocationImages.londonImg,
      detail: "This was just a quick stop over to watch Marlys' favorite play, Wicked! Then flew off to Dublin for some Ireland time."
    },
    {
      lat: 52.9335,
      lng: -9.3441,
      name: 'Lahinch, County Clare, Ireland',
      date: '11 days: October 20 - 30, 2022',
      imgs: LocationImages.irelandImg,
      detail: "This was our first stop in Ireland. We stayed in a great tinyhome Airbnb and explored the towns around us. We went to the Cliffs of Moher and the Burren. We totally loved the pubs with live music everywhere! And live music meant a gourp of people sitting in botths with their own instruments and just jamming away! Also, first time driving on the left side of the road! Drove back to Dublin and took a mior detour...to South Arica!",
    },
    {
      lat: -26.2041,
      lng: 28.0473,
      name: 'Johanasburg, South Africa',
      date: '',
      imgs: LocationImages.johanasburgImg,
      detail: ''
    },
    {
      lat: -33.9249,
      lng: 18.4241,
      name: 'Capetown, South Africa',
      date: '',
      imgs: LocationImages.capetownImg,
      detail: ''
    },
    {
      lat: 50.9375,
      lng: 6.9603,
      name: 'Cologne, Germany',
      date: '',
      imgs: LocationImages.cologneImg,
      detail: ''
    },
    {
      lat: 45.9434,
      lng: 6.0953,
      name: "Chamonix, France",
      date: '',
      imgs: LocationImages.chamonixImg,
      detail: ""
    },
    {
      lat: 45.4347,
      lng: 12.3355,
      name: "Venice, Italy",
      date: '',
      imgs: LocationImages.veniceImg,
      detail: ""
    },
    {
      lat: 40.7422,
      lng: 17.2157,
      name: "Polignano a Mare, Italy",
      date: '',
      imgs: LocationImages.polignanoamareImg,
      detail: ""
    },
    {
      lat: 41.9033,
      lng: 12.4828,
      name: "Rome, Italy",
      date: '',
      imgs: LocationImages.romeImg,
      detail: ""
    },
    {
      lat: 3.1390,
      lng: 101.6869,
      name: "Kuala Lumpur, Malaysia",
      date: '',
      imgs: LocationImages.kualalumpurImg,
      detail: ""
    },
    {
      lat: 13.7563,
      lng: 100.5018,
      name: "Bangkok, Thailand",
      date: "",
      imgs: LocationImages.bangkokImg,
      detail: ""
    },
    {
      lat: 12.9500,
      lng: 103.8667,
      name: "Siem Reap, Cambodia",
      date: "",
      imgs: LocationImages.siemreapImg,
      detail: ""
    },
    {
      lat: 10.7760,
      lng: 106.6917,
      name: "Ho Chi Minh City, Vietnam",
      date: "",
      imgs: LocationImages.hochiminhImg,
      detail: ""
    },
    {
      lat: 15.5267,
      lng: 120.0194,
      name: "Clark, Philippines",
      date: "",
      imgs: LocationImages.clarkImg,
      detail: ""
    },
    {
      lat: 11.9252,
      lng: 121.0316,
      name: "El Nido, Philippines",
      date: "",
      imgs: LocationImages.elnidoImg,
      detail: ""
    },
    {
      lat: 9.5295,
      lng: 117.9744,
      name: "Puerto Princesa, Philippines",
      date: "",
      imgs: LocationImages.puertopricessaImg,
      detail: ""
    },
    {
      lat: -8.3952,
      lng: 115.4715,
      name: "Sanur, Bali, Indonesia",
      date: "",
      imgs: LocationImages.sanurImg,
      detail: ""
    },
    {
      lat: -7.3189,
      lng: 116.4072,
      name: "Gili Trawangan, Indonesia",
      date: "",
      imgs: LocationImages.gilitrawanganImg,
      detail: ""
    },
    {
      lat: -8.6552,
      lng: 116.4337,
      name: "Lombok, Indonesia",
      date: "",
      imgs: LocationImages.lombokImg,
      detail: ""
    },
    {
      lat: 15.8346,
      lng: 108.2770,
      name: "Hoi An, Vietnam",
      date: "",
      imgs: LocationImages.hoianImg,
      detail: ""
    },
    {
      lat: 9.5869,
      lng: 100.0588,
      name: "Ko Samui, Thailand",
      date: "",
      imgs: LocationImages.kosamuiImg,
      detail: ""
    },
    {
      lat: 1.2901,
      lng: 103.8617,
      name: "Singapore",
      date: "",
      imgs: LocationImages.singaporeImg,
      detail: ""
    },
    {
      lat: 41.3833,
      lng: 2.1833,
      name: "Barcelona, Spain",
      date: "",
      imgs: LocationImages.barcelonaImg,
      detail: ""
    },
    {
      lat: 38.7182,
      lng: -9.1353,
      name: "Lisbon, Portugal",
      date: "",
      imgs: LocationImages.lisbonImg,
      detail: ""
    },
    {
      lat: 33.7833,
      lng: -117.8167,
      name: "Orange, California",
      date: "",
      imgs: LocationImages.orangeImg,
      detail: ""
    },
    {
      lat: 44.8204,
      lng: -122.8994,
      name: "Lyons, Oregon",
      date: "",
      imgs: LocationImages.lyonsImg,
      detail: ""
  },
  {
      "lat": 38.2464,
      "lng": 22.1428,
      "name": "Aigio, Greece",
      "date": "",
      "imgs": LocationImages.aigioImg,
      "detail": ""
  },
  {
      "lat": 37.9750,
      "lng": 23.7167,
      "name": "Athens, Greece",
      "date": "",
      "imgs": LocationImages.athensImg,
      "detail": ""
  },
  {
      "lat": 35.2375,
      "lng": 24.9458,
      "name": "Crete, Greece",
      "date": "",
      "imgs": LocationImages.creteImg,
      "detail": ""
  },
  {
      "lat": 42.6977,
      "lng": 23.3219,
      "name": "Sofia, Bulgaria",
      "date": "",
      "imgs": LocationImages.sofiaImg,
      "detail": ""
  },
  {
      "lat": 42.8167,
      "lng": 23.7667,
      "name": "Bansko, Bulgaria",
      "date": "",
      "imgs": LocationImages.banskoImg,
      "detail": ""
  },
  {
      "lat": 42.6977,
      "lng": 23.3219,
      "name": "Sofia, Bulgaria",
      "date": "",
      "imgs": LocationImages.sofiaImg,
      "detail": ""
  },
  {
      "lat": 39.5622,
      "lng": 2.6775,
      "name": "Majorca, Spain",
      "date": "",
      "imgs": LocationImages.majorcaImg,
      "detail": ""
  },
  {
    lat: 35.7854,
    lng: -5.8601,
    name: "Tangier, Morocco",
    date: "",
    imgs: LocationImages.tangierImg,
    detail: ""
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