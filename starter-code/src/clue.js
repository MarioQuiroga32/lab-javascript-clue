// Characters Collection
var charactersArray = [];

var mrGreen = {
  first_name:   'Jacob',
  last_name:    'Green',
  color:        'green',
  description:  'He has a lot of connections',
  age:          '45',
  image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
  occupation:   'Entrepreneur' };

  var drOrchid = {
  first_name:   'Doctor',
  last_name:    'Orchid',
  color:        'white',
  description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
  age:          '26',
  image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
  ocupation:   'Scientist'
  };

var profPlum = {
  first_name:   'Victor',
  last_name:    'Plum',
  color:        'purple',
  description:   'Billionareideo game designer',
  age:          '22',
  image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
  occupation:   'Designer' ,
};

var missScarlet = {
  first_name:   'Kasandra',
  last_name:    'Scarlet',
  color:        'red',
  description:  'She is an A-list movie star with a dark past',
  age:          '31',
  image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
  occupation:   'Actor',
};

var mrsPeacock = {
  first_name:   'Eleanor',
  last_name:    'Peacock',
  color:        'blue',
  description:  'She is from a wealthy family and uses her status and money to earn popularity',
  age:          '36',
  image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
  occupation:   'Socialité',
};

var mrMustard = {
  first_name:   'Jack',
  last_name:    'Mustard',
  color:        'yellow',
  description:  'He is a former football player who tries to get by on his former glory',
  age:          '62',
  image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
  occupation:   'Socialité',
};

charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard)





   


// Rooms' Collection
var roomsArray = [];

 var diningroom = {name: 'Dinning Room'};
 var conservatory = {name: 'Conservatory'};
 var kitchen = {name: 'Kitchen'};
 var study = {name: 'Study'};
 var library = {name: 'Library'};
 var billiard = {name: 'Billiard Room'};
 var lounge = {name: 'Lounge'}; 
 var ballroom = {name: 'Ballroom'};
 var hall = {name: 'Hall'};
 var spa = {name: 'Spa'};
 var livingRoom = {name: 'Living Room'};
 var Observatory = {name: 'Observatory'}; 
 var theater = {name: 'Theater'};
 var guestHouse = {name: 'Guest House'};
 var patio = {name: 'Patio'};

 roomsArray.push(diningroom, conservatory, kitchen, study, library, billiard, lounge, ballroom, hall, spa, livingRoom, Observatory, theater, guestHouse, patio)

// Weapons Collection
var weaponsArray = [];
 var rope = {name: 'rope', weight: 10}
 var knife = {name: 'knife', weight: 8};
 var candlestick = {name: 'candlestick' , weight: 2};
 var dumbell = {name: 'dumbell', weight: 30}; 
 var poison = {name: 'poison',weight: 2};
 var axe = {name: 'axe',weight: 15}; 
 var bat = {name: 'bat' ,weight: 13};
 var trophy = {name: 'trophy', weight: 25};
 var pistol = {name: 'pistol', weight: 20};

 weaponsArray.push(rope, knife, candlestick, dumbell, poison, axe, bat, trophy, pistol)

 //Game

 function randomSelector(array){
  var max = array.length;
  return array[Math.floor(Math.random() * Math.floor(max))];
}

var misteryEnvelope = [];
 
function pickMistery() {
  return misteryEnvelope
}