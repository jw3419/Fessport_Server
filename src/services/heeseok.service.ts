import festivalModel from '../models/festivals.model';
import countryModel from '../models/countries.model';
import artistModel from '../models/artists.model';
import userModel from '../models/users.model';
import badgeModel from '../models/badges.model';
import boardModel from '../models/boards.model';

/*
const countryData = [
  { name: 'kr', y: 190, x: 1230, flagImage: 'https://flagcdn.com/kr.svg' },
  { name: 'jp', y: 190, x: 1280, flagImage: 'https://flagcdn.com/jp.svg' },
  { name: 'ph', y: 280, x: 1220, flagImage: 'https://flagcdn.com/ph.svg' },
  { name: 'th', y: 280, x: 1120, flagImage: 'https://flagcdn.com/th.svg' },
  { name: 'sg', y: 270, x: 1200, flagImage: 'https://flagcdn.com/sg.svg' },
  { name: 'tw', y: 230, x: 1200, flagImage: 'https://flagcdn.com/tw.svg' },
  { name: 'vn', y: 300, x: 1150, flagImage: 'https://flagcdn.com/vn.svg' },
  { name: 'in', y: 250, x: 1025, flagImage: 'https://flagcdn.com/in.svg' },
  { name: 'ae', y: 210, x: 900, flagImage: 'https://flagcdn.com/ae.svg' },
  { name: 'cn', y: 200, x: 1150, flagImage: 'https://flagcdn.com/cn.svg' },
  { name: 'hk', y: 250, x: 1170, flagImage: 'https://flagcdn.com/hk.svg' },
  { name: 'be', y: 140, x: 700, flagImage: 'https://flagcdn.com/be.svg' },
  { name: 'fr', y: 150, x: 680, flagImage: 'https://flagcdn.com/fr.svg' },
  { name: 'de', y: 140, x: 720, flagImage: 'https://flagcdn.com/de.svg' },
  { name: 'ie', y: 110, x: 650, flagImage: 'https://flagcdn.com/ie.svg' },
  { name: 'it', y: 180, x: 730, flagImage: 'https://flagcdn.com/it.svg' },
  { name: 'nl', y: 140, x: 700, flagImage: 'https://flagcdn.com/nl.svg' },
  { name: 'es', y: 180, x: 680, flagImage: 'https://flagcdn.com/es.svg' },
  { name: 'gb', y: 120, x: 670, flagImage: 'https://flagcdn.com/gb.svg' },
  { name: 'hr', y: 180, x: 780, flagImage: 'https://flagcdn.com/hr.svg' },
  { name: 'cz', y: 150, x: 750, flagImage: 'https://flagcdn.com/cz.svg' },
  { name: 'gr', y: 190, x: 770, flagImage: 'https://flagcdn.com/gr.svg' },
  { name: 'za', y: 450, x: 800, flagImage: 'https://flagcdn.com/za.svg' },
  { name: 'eg', y: 230, x: 820, flagImage: 'https://flagcdn.com/eg.svg' },
  { name: 'au', y: 450, x: 1300, flagImage: 'https://flagcdn.com/au.svg' },
  { name: 'id', y: 340, x: 1150, flagImage: 'https://flagcdn.com/id.svg' },
  { name: 'nz', y: 450, x: 1350, flagImage: 'https://flagcdn.com/nz.svg' },
  { name: 'ar', y: 450, x: 450, flagImage: 'https://flagcdn.com/ar.svg' },
  { name: 'br', y: 390, x: 490, flagImage: 'https://flagcdn.com/br.svg' },
  { name: 'cl', y: 460, x: 380, flagImage: 'https://flagcdn.com/cl.svg' },
  { name: 'co', y: 300, x: 420, flagImage: 'https://flagcdn.com/co.svg' },
  { name: 'pe', y: 380, x: 360, flagImage: 'https://flagcdn.com/pe.svg' },
  { name: 'ca', y: 130, x: 280, flagImage: 'https://flagcdn.com/ca.svg' },
  { name: 'cu', y: 240, x: 360, flagImage: 'https://flagcdn.com/cu.svg' },
  { name: 'mx', y: 260, x: 250, flagImage: 'https://flagcdn.com/mx.svg' },
  { name: 'us', y: 190, x: 250, flagImage: 'https://flagcdn.com/us.svg' },
];
*/
const genreIdArr = [
  '60070d91a2b4f49b1cadeab8',
  '60070d91a2b4f49b1cadeab9',
  '60070d91a2b4f49b1cadeaba',
  '60070d91a2b4f49b1cadeabb',
  '60070d91a2b4f49b1cadeabc',
];
/*
const countryIdArr = [
  '6006f808a9719d8bbc1eadeb',
  '6006f9157f665a8c8b83f939',
  '6006f970535b098ccac6ab16',
  '6006f9a74697f28cf0ed72d0',
  '6006fb4956e7988de7a0073f',
  '6006fb4956e7988de7a00740',
  '6006fb4956e7988de7a00741',
  '6006fb4956e7988de7a00742',
  '6006fb4956e7988de7a00743',
  '600700fe153ba5919d9df252',
  '600700fe153ba5919d9df253',
  '600700fe153ba5919d9df254',
  '600700fe153ba5919d9df255',
  '600700fe153ba5919d9df256',
  '600700fe153ba5919d9df257',
  '600700fe153ba5919d9df258',
  '600700fe153ba5919d9df259',
  '600700fe153ba5919d9df25a',
  '600700fe153ba5919d9df25b',
  '600700fe153ba5919d9df25c',
  '600700fe153ba5919d9df25d',
  '600700fe153ba5919d9df25e',
  '600700fe153ba5919d9df25f',
  '600700fe153ba5919d9df260',
  '600700fe153ba5919d9df261',
  '600700fe153ba5919d9df262',
  '600700fe153ba5919d9df263',
  '600700fe153ba5919d9df264',
  '600700fe153ba5919d9df265',
  '600700fe153ba5919d9df266',
];
*/
const festivalIdArr = [
  '6007158d433bf3a0fda619ed',
  '6007158d433bf3a0fda619ee',
  '6007158d433bf3a0fda619ef',
  '6007158d433bf3a0fda619f0',
  '600715bbdffadfa150d59d16',
  '600715bbdffadfa150d59d17',
  '600715bbdffadfa150d59d18',
  '600715bbdffadfa150d59d19',
  '60071675820be0a1c65ea26f',
  '60071675820be0a1c65ea270',
  '60071675820be0a1c65ea271',
  '60071675820be0a1c65ea272',
  '600716a319ef15a1fc5fd00f',
  '600716a319ef15a1fc5fd010',
  '600716a319ef15a1fc5fd011',
  '600716a319ef15a1fc5fd012',
  '600716b74cdf0ba211af95d0',
  '600716b74cdf0ba211af95d1',
  '600716b74cdf0ba211af95d2',
  '600716b74cdf0ba211af95d3',
  '600716c86ed02ba223641bf4',
  '600716c86ed02ba223641bf5',
  '600716c86ed02ba223641bf6',
  '600716c86ed02ba223641bf7',
  '600716e3a8f84ba23d2d14d7',
  '600716e3a8f84ba23d2d14d8',
  '600716e3a8f84ba23d2d14d9',
  '600716e3a8f84ba23d2d14da',
  '600716efa70601a24dc8f77a',
  '600716efa70601a24dc8f77b',
  '600716efa70601a24dc8f77c',
  '600716efa70601a24dc8f77d',
  '6007170755749aa266497347',
  '6007170755749aa266497348',
  '6007170755749aa266497349',
  '6007170755749aa26649734a',
  '60071718d71c16a277894070',
  '60071718d71c16a277894071',
  '60071718d71c16a277894072',
  '60071718d71c16a277894073',
];
const artistIdArr = [
  '6009a3aa55efce83112ccf7b',
  '6009a3aa55efce83112ccf7f',
  '6009a3aa55efce83112ccf80',
  '6009a3aa55efce83112ccf81',
  '6009a3aa55efce83112ccf82',
  '6009a3aa55efce83112ccf83',
  '6009a3aa55efce83112ccf84',
  '6009a3aa55efce83112ccf85',
  '6009a3aa55efce83112ccf86',
  '6009a3aa55efce83112ccf87',
  '6009a3aa55efce83112ccf88',
  '6009a3aa55efce83112ccf89',
  '6009a3aa55efce83112ccf8a',
  '6009a3aa55efce83112ccf8b',
  '6009a3aa55efce83112ccf8c',
  '6009a3aa55efce83112ccf8d',
  '6009a3aa55efce83112ccf8e',
  '6009a3aa55efce83112ccf8f',
  '6009a3aa55efce83112ccf90',
  '6009a3aa55efce83112ccf91',
  '6009a3aa55efce83112ccf92',
  '6009a3aa55efce83112ccf93',
  '6009a3aa55efce83112ccf94',
  '6009a3aa55efce83112ccf95',
  '6009a3aa55efce83112ccf96',
  '6009a3aa55efce83112ccf97',
  '6009a3aa55efce83112ccf98',
  '6009a3aa55efce83112ccf7c',
  '6009a3aa55efce83112ccf7d',
  '6009a3aa55efce83112ccf7e',
];
const badgeIdArr = [
  '600acea7851a0c0f5def9ebd',
  '600acea7851a0c0f5def9ec4',
  '600acea7851a0c0f5def9ec5',
  '600acea7851a0c0f5def9ec6',
  '600acea7851a0c0f5def9ec7',
  '600acea7851a0c0f5def9ec8',
  '600acea7851a0c0f5def9ec9',
  '600acea7851a0c0f5def9eca',
  '600acea7851a0c0f5def9ecb',
  '600acea7851a0c0f5def9ebe',
  '600acea7851a0c0f5def9ec1',
  '600acea7851a0c0f5def9ec0',
  '600acea7851a0c0f5def9ec2',
  '600acea7851a0c0f5def9ebf',
  '600acea7851a0c0f5def9ec3',
];
const userIdArr = [
  '6006e148d41f32725d12e1fd',
  '600ad92cdf9a7017b1c4388d',
  '600ad92cdf9a7017b1c4388e',
  '600ad92cdf9a7017b1c4388f',
  '600ad92cdf9a7017b1c43890',
  '600ad92cdf9a7017b1c43891',
  '600ad92cdf9a7017b1c43892',
  '600ad92cdf9a7017b1c43893',
  '600ad92cdf9a7017b1c43894',
  '600ad92cdf9a7017b1c43895',
  '600ad92cdf9a7017b1c43896',
  '600ad92cdf9a7017b1c43897',
  '600ad92cdf9a7017b1c43898',
  '600ad92cdf9a7017b1c43899',
  '600ad92cdf9a7017b1c4389a',
  '600ad92cdf9a7017b1c4389b',
  '600ad92cdf9a7017b1c4389c',
  '600ad92cdf9a7017b1c4389d',
  '600ad92cdf9a7017b1c4389e',
  '600ad92cdf9a7017b1c4389f',
  '600ad92cdf9a7017b1c438a0',
];
// 리뷰, 리셀, 동행
const postCategoryIdArr = ['600ad030d821a35da42aceba', '600ad033d821a35da42acebb', '600ad044d821a35da42acebc'];
const boardIdArr = [
  '600ad53bbcd8f814e18080b1',
  '600ad53bbcd8f814e18080bb',
  '600ad53bbcd8f814e18080bc',
  '600ad53bbcd8f814e18080bd',
  '600ad53bbcd8f814e18080be',
  '600ad53bbcd8f814e18080bf',
  '600ad53bbcd8f814e18080b3',
  '600ad53bbcd8f814e18080b2',
  '600ad53bbcd8f814e18080b5',
  '600ad53bbcd8f814e18080b6',
  '600ad53bbcd8f814e18080b7',
  '600ad53bbcd8f814e18080b8',
  '600ad53bbcd8f814e18080b9',
  '600ad53bbcd8f814e18080ba',
  '600ad53bbcd8f814e18080b4',
  '600ad7b19c2ce916a933caff',
  '600ad7b19c2ce916a933cb00',
  '600ad7b19c2ce916a933cb01',
  '600ad7b19c2ce916a933cb02',
  '600ad7b19c2ce916a933cb03',
  '600ad7b19c2ce916a933cb04',
  '600ad7b19c2ce916a933cb05',
  '600ad7b19c2ce916a933cb06',
  '600ad7b19c2ce916a933cb07',
  '600ad7b19c2ce916a933cb08',
  '600ad7b19c2ce916a933cb09',
  '600ad7b19c2ce916a933cb0a',
  '600ad7b19c2ce916a933cb0b',
  '600ad7b19c2ce916a933cb0c',
  '600ad7b19c2ce916a933cb0d',
];

class InsertDataService {
  public festivals = festivalModel;
  public countries = countryModel;
  public artists = artistModel;
  public users = userModel;
  public badges = badgeModel;
  public boards = boardModel;

  public async insertUsers() {
    //return await this.users.find();
    const usersData = [];
    for (let i = 1; i <= 20; i++) {
      usersData.push({
        email: `abc${i}${i}${i}@gmail.com`,
        password: '1234',
        nickname: `${i}번 사용자 닉네임`,
        image: `${i}번 사용자 이미지`,
        wishFestivals: `${festivalIdArr[i]}`,
        wishArtists: `${artistIdArr[i]}`,
        badges: `${badgeIdArr[(i - 1) % 15]}`,
        visits: `${festivalIdArr[i]}`,
        boards: `${boardIdArr[i]}`,
      });
    }
    await this.users.create(usersData);
  }
  public async insertBoards() {
    // for (let i = 1; i <= 30; i++) {
    //   const t = `${i}번 게시물`;
    //   const userId = Types.ObjectId(userIdArr[(i - 1) % 30]);
    //   await this.boards.update({ title: t }, { $set: { user: userId } });
    // }
    //return await this.boards.find();
    const boardsData = [];
    for (let i = 1; i <= 15; i++) {
      const index = (i - 1) % 3;
      switch (index) {
        case 0: // 리뷰(후기)
          boardsData.push({
            title: `${i + 15}번 게시물`,
            image: `${i + 15}번 게시물 이미지`,
            user: `${userIdArr[i - 1]}`,
            festival: `${festivalIdArr[i + 15]}`,
            postCategory: `${postCategoryIdArr[index]}`,
          });
          break;
        case 1: // 리셀
          boardsData.push({
            title: `${i + 15}번 게시물`,
            description: `${i + 15}번 게시물 설명~`,
            image: `${i + 15}번 게시물 이미지`,
            user: `${userIdArr[i - 1]}`,
            festival: `${festivalIdArr[i]}`,
            postCategory: `${postCategoryIdArr[index]}`,
            comments: `600ad030d821a35da42aceba`,
          });
          break;
        case 2: // 동행
          boardsData.push({
            title: `${i + 15}번 게시물`,
            description: `${i + 15}번 게시물 설명~`,
            image: `${i + 15}번 게시물 이미지`,
            user: `${userIdArr[i - 1]}`,
            festival: `${festivalIdArr[i]}`,
            postCategory: `${postCategoryIdArr[index]}`,
            comments: `600ad030d821a35da42aceba`,
            participants: `${userIdArr[i + 1]}`,
          });
          break;
        default:
          break;
      }
    }
    await this.boards.create(boardsData);
  }
  public async insertBadges() {
    //return await this.badges.find();
    const badgesData = [];
    for (let i = 1; i <= 15; i++) {
      badgesData.push({
        name: `${i}번 뱃지`,
        image: `${i}번 뱃지 이미지`,
      });
    }
    await this.badges.create(badgesData);
  }
  //public async insertFestivals() {}
  //public async insertCountires() {}
  public async insertArtists() {
    const artistsData = [];
    for (let i = 1; i <= 30; i++) {
      artistsData.push({
        name: `${i}번 아티스트 이름`,
        description: `${i}번 아티스트 설명`,
        image: `${i}번 아티스트 이미지`,
        video: `${i}번 아티스트 비디오`,
        genre: `${genreIdArr[(i - 1) % 5]}`,
        festivals: `${festivalIdArr[i]}`,
      });
    }
    await this.artists.create(artistsData);
  }
}

export default InsertDataService;
