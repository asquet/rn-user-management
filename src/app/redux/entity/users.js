import { genActions, genReducer, genConstants } from './_entityGenerators';

const USERS_DEFAULT = [
  {
    id: 0,
    name: 'Wasia Poupquin asd asd asda sda sdas das das dasd asd asdasda sda sd 11111111111111111',
    birthDate: '1985-11-15',
    userPic: 'https://avatarfiles.alphacoders.com/761/thumb-76101.png',
    managerId: null,
    positionId: 1,
  }, {
    id: 1,
    name: 'Another User',
    birthDate: '1989-01-05',
    userPic: 'https://www.gstatic.com/identity/accountsettingsprivacyguide/common_checkup_privacy_initial_76x100_2a861794bbd4c1287bd67a8b4cd14a36.png',
    managerId: 0,
    positionId: 1,
  },
];

function puchuGen(count) {
  const names = [
    'Dennise Hilliard',
    'Ruthann Bilger',
    'Vickey Titcomb',
    'Sarina Roby',
    'Miquel Hunter',
    'Fae Jaffe',
    'Sergio Leong',
    'Johnathon Fullilove',
    'Christy Godlewski',
    'Frederic Pippen',
    'Maragaret Jourdan',
    'Ashli Obert',
    'Tandra Ballard',
    'Quincy Miyamoto',
    'Stefania Doll',
    'Cecil Stwart',
    'Tilda Doi',
    'Reatha Blackmon',
    'Jena Driskill',
    'Courtney Legendre',
  ];

  const pics = [
    'http://vignette4.wikia.nocookie.net/anime-arts/images/0/09/2330594151_small_1.jpg/revision/latest?cb=20130511164913',
    'http://img12.deviantart.net/0984/i/2007/081/8/2/puchuu_vector_by_kupo28.jpg',
    'https://photos.smugmug.com/China/Xian-Terracotta-Warriors/Xian-Terracotta-Warriors-China/1127116408_wqaSf-L.jpg',
    'http://archive.artsmia.org/terracotta-warriors/images/preview/2012_TerracottaWarriors_302_06.jpg',
    'http://archive.artsmia.org/terracotta-warriors/images/preview/2012_TerracottaWarriors_305_08.jpg',
    'http://www.historia.ro/sites/default/files/imagine_stire.JPG',
    'http://jerseykids.net/wp-content/uploads/2012/04/032.jpg',
    'http://giaoduc.net.vn/Uploaded/tavan/2012_08_17/chien_binh_giaoduc.net.vn_2.JPG',
    'http://media-2.web.britannica.com/eb-media/22/20422-004-C8288A44.jpg',
  ];

  const res = [];
  for (let n = 0; n < count; n += 1) {
    res.push({
      id: 100 + n,
      name: names[Math.floor(Math.random() * names.length)],
      userPic: pics[Math.floor(Math.random() * pics.length)],
      birthDate: '1990-09-09',
      managerId: 1,
      positionId: 2,
    });
  }
  return res;
}

const namespace = 'USER';

export const constants = genConstants(namespace);

export const reducer = genReducer(namespace);

export const actions = genActions(namespace);
