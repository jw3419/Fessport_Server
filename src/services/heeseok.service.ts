import festivalModel from '../models/festivals.model';
import countryModel from '../models/countries.model';
import artistModel from '../models/artists.model';
import userModel from '../models/users.model';
import badgeModel from '../models/badges.model';
import boardModel from '../models/boards.model';
import { Types } from 'mongoose';

/*
const countryData = [
  { name: 'Korea', y: 190, x: 1230, flagImage: 'https://flagcdn.com/kr.svg' },
  { name: 'japan', y: 190, x: 1280, flagImage: 'https://flagcdn.com/jp.svg' },
  { name: 'Philippines', y: 280, x: 1220, flagImage: 'https://flagcdn.com/ph.svg' },
  { name: 'Thailand', y: 280, x: 1120, flagImage: 'https://flagcdn.com/th.svg' },
  { name: 'Singapore', y: 270, x: 1200, flagImage: 'https://flagcdn.com/sg.svg' },
  { name: 'Taiwan', y: 230, x: 1200, flagImage: 'https://flagcdn.com/tw.svg' },
  { name: 'Vietnam', y: 300, x: 1150, flagImage: 'https://flagcdn.com/vn.svg' },
  { name: 'India', y: 250, x: 1025, flagImage: 'https://flagcdn.com/in.svg' },
  { name: 'United Arab Emirates', y: 210, x: 900, flagImage: 'https://flagcdn.com/ae.svg' },
  { name: 'China', y: 200, x: 1150, flagImage: 'https://flagcdn.com/cn.svg' },
  { name: 'Hong Kong', y: 250, x: 1170, flagImage: 'https://flagcdn.com/hk.svg' },
  { name: 'Belgium', y: 140, x: 700, flagImage: 'https://flagcdn.com/be.svg' },
  { name: 'France', y: 150, x: 680, flagImage: 'https://flagcdn.com/fr.svg' },
  { name: 'Germany', y: 140, x: 720, flagImage: 'https://flagcdn.com/de.svg' },
  { name: 'Ireland', y: 110, x: 650, flagImage: 'https://flagcdn.com/ie.svg' },
  { name: 'Italy', y: 180, x: 730, flagImage: 'https://flagcdn.com/it.svg' },
  { name: 'Netherlands', y: 140, x: 700, flagImage: 'https://flagcdn.com/nl.svg' },
  { name: 'Spain', y: 180, x: 680, flagImage: 'https://flagcdn.com/es.svg' },
  { name: 'England', y: 120, x: 670, flagImage: 'https://flagcdn.com/gb.svg' },
  { name: 'Croatia', y: 180, x: 780, flagImage: 'https://flagcdn.com/hr.svg' },
  { name: 'Czech', y: 150, x: 750, flagImage: 'https://flagcdn.com/cz.svg' },
  { name: 'Greece', y: 190, x: 770, flagImage: 'https://flagcdn.com/gr.svg' },
  { name: 'South Africa', y: 450, x: 800, flagImage: 'https://flagcdn.com/za.svg' },
  { name: 'Egypt', y: 230, x: 820, flagImage: 'https://flagcdn.com/eg.svg' },
  { name: 'Australia', y: 450, x: 1300, flagImage: 'https://flagcdn.com/au.svg' },
  { name: 'Indonesia', y: 340, x: 1150, flagImage: 'https://flagcdn.com/id.svg' },
  { name: 'New Zealand', y: 450, x: 1350, flagImage: 'https://flagcdn.com/nz.svg' },
  { name: 'Argentina', y: 450, x: 450, flagImage: 'https://flagcdn.com/ar.svg' },
  { name: 'Brazil', y: 390, x: 490, flagImage: 'https://flagcdn.com/br.svg' },
  { name: 'Chile', y: 460, x: 380, flagImage: 'https://flagcdn.com/cl.svg' },
  { name: 'Colombia', y: 300, x: 420, flagImage: 'https://flagcdn.com/co.svg' },
  { name: 'Peru', y: 380, x: 360, flagImage: 'https://flagcdn.com/pe.svg' },
  { name: 'Canada', y: 130, x: 280, flagImage: 'https://flagcdn.com/ca.svg' },
  { name: 'Cuba', y: 240, x: 360, flagImage: 'https://flagcdn.com/cu.svg' },
  { name: 'Mexico', y: 260, x: 250, flagImage: 'https://flagcdn.com/mx.svg' },
  { name: 'America', y: 190, x: 250, flagImage: 'https://flagcdn.com/us.svg' },
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
  '600d3380ffbadfd02881c738',
  '600d3387ffbadfd02881c739',
  '600d3391ffbadfd02881c73a',
  '600d339bffbadfd02881c73b',
  '600d33a6ffbadfd02881c73c',
  '600d33b0ffbadfd02881c73d',
  '600d33caffbadfd02881c73e',
  '600d33ee3160add174b27bf0',
  '600d33f53160add174b27bf1',
  '600d33fd3160add174b27bf2',
  '600d34043160add174b27bf3',
  '600d340b3160add174b27bf4',
  '600d341b3160add174b27bf5',
  '600d34233160add174b27bf6',
  '600d34283160add174b27bf7',
  '600d342e3160add174b27bf8',
  '600d34343160add174b27bf9',
];
// 리뷰, 리셀, 동행
const postCategoryIdArr = ['600ad030d821a35da42aceba', '600ad033d821a35da42acebb', '600ad044d821a35da42acebc'];
const boardIdArr = [
  '600d353a1bd960d27b83dac5',
  '600d353b1bd960d27b83dacb',
  '600d353b1bd960d27b83dacc',
  '600d353b1bd960d27b83dacd',
  '600d353b1bd960d27b83dace',
  '600d353b1bd960d27b83dacf',
  '600d353b1bd960d27b83dad0',
  '600d353b1bd960d27b83dad1',
  '600d353b1bd960d27b83dad2',
  '600d353b1bd960d27b83dad3',
  '600d353b1bd960d27b83dac7',
  '600d353b1bd960d27b83dac6',
  '600d353b1bd960d27b83dac8',
  '600d353b1bd960d27b83dac9',
  '600d353b1bd960d27b83daca',
  '600d36e0b2dd21d3d48e4010',
  '600d36e0b2dd21d3d48e4011',
  '600d36e0b2dd21d3d48e4012',
  '600d36e0b2dd21d3d48e4013',
  '600d36e0b2dd21d3d48e4014',
  '600d36e0b2dd21d3d48e4015',
  '600d36e0b2dd21d3d48e4016',
  '600d36e0b2dd21d3d48e4017',
  '600d36e0b2dd21d3d48e4018',
  '600d36e0b2dd21d3d48e4019',
  '600d36e0b2dd21d3d48e401a',
  '600d36e0b2dd21d3d48e401b',
  '600d36e0b2dd21d3d48e401c',
  '600d36e0b2dd21d3d48e401d',
  '600d36e0b2dd21d3d48e401e',
  '600d3700a4634cd4000938d4',
  '600d3700a4634cd4000938d5',
  '600d3700a4634cd4000938d6',
  '600d3700a4634cd4000938d7',
  '600d3700a4634cd4000938d8',
  '600d3700a4634cd4000938d9',
  '600d3700a4634cd4000938da',
  '600d3700a4634cd4000938db',
  '600d3700a4634cd4000938dc',
  '600d3700a4634cd4000938dd',
  '600d3700a4634cd4000938de',
  '600d3700a4634cd4000938df',
  '600d3700a4634cd4000938e0',
  '600d3700a4634cd4000938e1',
  '600d3700a4634cd4000938e2',
  '600d3721c3fb18d41c1ec017',
  '600d3721c3fb18d41c1ec018',
  '600d3721c3fb18d41c1ec019',
  '600d3721c3fb18d41c1ec01a',
  '600d3721c3fb18d41c1ec01b',
  '600d3721c3fb18d41c1ec01c',
  '600d3721c3fb18d41c1ec01d',
  '600d3721c3fb18d41c1ec01e',
  '600d3721c3fb18d41c1ec01f',
  '600d3721c3fb18d41c1ec020',
  '600d3721c3fb18d41c1ec021',
  '600d3721c3fb18d41c1ec022',
  '600d3721c3fb18d41c1ec023',
  '600d3721c3fb18d41c1ec024',
  '600d3721c3fb18d41c1ec025',
  '600d3e65fba650d8890c5074',
  '600d3e65fba650d8890c5075',
  '600d3e65fba650d8890c5076',
  '600d3e65fba650d8890c5077',
  '600d3e65fba650d8890c5078',
  '600d3e65fba650d8890c5079',
  '600d3e65fba650d8890c507a',
  '600d3e65fba650d8890c507b',
  '600d3e65fba650d8890c507c',
  '600d3e65fba650d8890c507d',
  '600d3e65fba650d8890c507e',
  '600d3e65fba650d8890c507f',
  '600d3e65fba650d8890c5080',
  '600d3e65fba650d8890c5081',
  '600d3e65fba650d8890c5082',
  '600d3e8560226bd8b06047de',
  '600d3e8560226bd8b06047df',
  '600d3e8560226bd8b06047e0',
  '600d3e8560226bd8b06047e1',
  '600d3e8560226bd8b06047e2',
  '600d3e8560226bd8b06047e3',
  '600d3e8560226bd8b06047e4',
  '600d3e8560226bd8b06047e5',
  '600d3e8560226bd8b06047e6',
  '600d3e8560226bd8b06047e7',
  '600d3e8560226bd8b06047e8',
  '600d3e8560226bd8b06047e9',
  '600d3e8560226bd8b06047ea',
  '600d3e8560226bd8b06047eb',
  '600d3e8560226bd8b06047ec',
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
    //return await this.boards.find();
    const boardsData = [];
    for (let i = 1; i <= 15; i++) {
      const index = (i - 1) % 3;
      switch (index) {
        case 0: // 리뷰(후기)
          boardsData.push({
            title: `${i + 75}번 게시물`,
            image: `${i + 75}번 게시물 이미지`,
            user: Types.ObjectId(`${userIdArr[i - 1]}`),
            festival: Types.ObjectId(`${festivalIdArr[i]}`),
            postCategory: Types.ObjectId(`${postCategoryIdArr[index]}`),
          });
          break;
        case 1: // 리셀
          boardsData.push({
            title: `${i + 75}번 게시물`,
            description: `${i + 75}번 게시물 설명~`,
            image: `${i + 75}번 게시물 이미지`,
            user: Types.ObjectId(`${userIdArr[i - 1]}`),
            festival: Types.ObjectId(`${festivalIdArr[i]}`),
            postCategory: Types.ObjectId(`${postCategoryIdArr[index]}`),
            comments: Types.ObjectId(`600ad030d821a35da42aceba`),
          });
          break;
        case 2: // 동행
          boardsData.push({
            title: `${i + 75}번 게시물`,
            description: `${i + 75}번 게시물 설명~`,
            image: `${i + 75}번 게시물 이미지`,
            user: Types.ObjectId(`${userIdArr[i - 1]}`),
            festival: Types.ObjectId(`${festivalIdArr[i]}`),
            postCategory: Types.ObjectId(`${postCategoryIdArr[index]}`),
            comments: Types.ObjectId(`600ad030d821a35da42aceba`),
            participants: Types.ObjectId(`${userIdArr[i + 1]}`),
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
