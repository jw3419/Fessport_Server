import festivalModel from '../models/festivals.model';
import countryModel from '../models/countries.model';
import artistModel from '../models/artists.model';
import userModel from '../models/users.model';
import badgeModel from '../models/badges.model';
import boardModel from '../models/boards.model';
import { Types } from 'mongoose';
import genreModel from '../models/genres.model';
import boardCategoryModel from '../models/boardCategories.model';
/*
const countryData = [
  { name: 'Korea', y: 170, x: 1110, flagImage: 'https://flagcdn.com/kr.svg' },
  { name: 'japan', y: 170, x: 1160, flagImage: 'https://flagcdn.com/jp.svg' },
  { name: 'Philippines', y: 270, x: 1105, flagImage: 'https://flagcdn.com/ph.svg' },
  { name: 'Thailand', y: 260, x: 1000, flagImage: 'https://flagcdn.com/th.svg' },
  { name: 'Singapore', y: 250, x: 1080, flagImage: 'https://flagcdn.com/sg.svg' },
  { name: 'Taiwan', y: 210, x: 1080, flagImage: 'https://flagcdn.com/tw.svg' },
  { name: 'Vietnam', y: 280, x: 1030, flagImage: 'https://flagcdn.com/vn.svg' },
  { name: 'India', y: 230, x: 905, flagImage: 'https://flagcdn.com/in.svg' },
  { name: 'United Arab Emirates', y: 190, x: 780, flagImage: 'https://flagcdn.com/ae.svg' },
  { name: 'China', y: 180, x: 1030, flagImage: 'https://flagcdn.com/cn.svg' },
  { name: 'Hong Kong', y: 230, x: 1050, flagImage: 'https://flagcdn.com/hk.svg' },
  { name: 'Belgium', y: 90, x: 580, flagImage: 'https://flagcdn.com/be.svg' },
  { name: 'France', y: 130, x: 540, flagImage: 'https://flagcdn.com/fr.svg' },
  { name: 'Germany', y: 120, x: 610, flagImage: 'https://flagcdn.com/de.svg' },
  { name: 'Ireland', y: 85, x: 510, flagImage: 'https://flagcdn.com/ie.svg' },
  { name: 'Italy', y: 160, x: 610, flagImage: 'https://flagcdn.com/it.svg' },
  { name: 'Netherlands', y: 120, x: 580, flagImage: 'https://flagcdn.com/nl.svg' },
  { name: 'Spain', y: 160, x: 560, flagImage: 'https://flagcdn.com/es.svg' },
  { name: 'England', y: 100, x: 550, flagImage: 'https://flagcdn.com/gb.svg' },
  { name: 'Croatia', y: 160, x: 660, flagImage: 'https://flagcdn.com/hr.svg' },
  { name: 'Czech', y: 130, x: 640, flagImage: 'https://flagcdn.com/cz.svg' },
  { name: 'Greece', y: 180, x: 640, flagImage: 'https://flagcdn.com/gr.svg' },
  { name: 'South Africa', y: 430, x: 680, flagImage: 'https://flagcdn.com/za.svg' },
  { name: 'Egypt', y: 210, x: 700, flagImage: 'https://flagcdn.com/eg.svg' },
  { name: 'Australia', y: 430, x: 1180, flagImage: 'https://flagcdn.com/au.svg' },
  { name: 'Indonesia', y: 320, x: 1030, flagImage: 'https://flagcdn.com/id.svg' },
  { name: 'New Zealand', y: 430, x: 1230, flagImage: 'https://flagcdn.com/nz.svg' },
  { name: 'Argentina', y: 430, x: 330, flagImage: 'https://flagcdn.com/ar.svg' },
  { name: 'Brazil', y: 370, x: 370, flagImage: 'https://flagcdn.com/br.svg' },
  { name: 'Chile', y: 440, x: 260, flagImage: 'https://flagcdn.com/cl.svg' },
  { name: 'Colombia', y: 280, x: 300, flagImage: 'https://flagcdn.com/co.svg' },
  { name: 'Peru', y: 360, x: 240, flagImage: 'https://flagcdn.com/pe.svg' },
  { name: 'Canada', y: 110, x: 160, flagImage: 'https://flagcdn.com/ca.svg' },
  { name: 'Cuba', y: 220, x: 240, flagImage: 'https://flagcdn.com/cu.svg' },
  { name: 'Mexico', y: 240, x: 130, flagImage: 'https://flagcdn.com/mx.svg' },
  { name: 'America', y: 170, x: 130, flagImage: 'https://flagcdn.com/us.svg' },
];
const genreData = [{ name: 'Electronica' }, { name: 'Rock' }, { name: 'HipHop' }, { name: 'Etc' }, { name: 'All' }];
const badgeData = [
  {
    name: `페스티벌 뉴비`,
    image: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/%12l%EF%BF%BD%09n1.png`,
  },
  {
    name: `페스티벌 입문자`,
    image: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/%12l%EF%BF%BD%09n2.png`,
  },
  {
    name: `페스티벌 고수`,
    image: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/%12l%EF%BF%BD%09n3.png`,
  },
  {
    name: `페스티벌 정복자`,
    image: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/%12l%EF%BF%BD%09n4.png`,
  },
  {
    name: `인생이 축제`,
    image: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/%12l%EF%BF%BD%09n5.png`,
  },
  {
    name: `흥선대원국`,
    image: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/%E1%84%82%E1%85%A1%E1%84%85%E1%85%A11.png`,
  },
  {
    name: `아시아인`,
    image: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/%E1%84%82%E1%85%A1%E1%84%85%E1%85%A12.png`,
  },
  {
    name: `욜로족`,
    image: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/%E1%84%82%E1%85%A1%E1%84%85%E1%85%A13.png`,
  },
  {
    name: `여행가`,
    image: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/%E1%84%82%E1%85%A1%E1%84%85%E1%85%A14.png`,
  },
  {
    name: `세계 정복`,
    image: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/%E1%84%82%E1%85%A1%E1%84%85%E1%85%A15.png`,
  },
  {
    name: `Y2K`, // 락
    image: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/rockgenre.png`,
  },
  {
    name: `정상수`, // 힙합
    image: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/hiphopgenre.png`,
  },
  {
    name: `박명수`, // edm
    image: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/genreElec.png`,
  },
  {
    name: `비주류`, // 머지?
    image: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/allGenre.png`,
  },
  {
    name: `편견 없으신 분`, // 기타
    image: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/genreEtc.png`,
  },
];
const festivalData = [
  {
    name: `Creamfields`,
    description: `One of the two or three most prestigious dance festivals on the planet, Creamfields is always full to bursting with worldwide stars. Whatever flavour of electronic music you're into, you'll find more than you could ask for at Creamfields.`,
    startDate: `2021-08-26`,
    endDate: `2021-08-29`,
    video: [`HDkCCxzVmfk`, `nX3Vt6jKz5Q`, `jqsymLe6CJ8`],
    thumbnail: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/creamfields.png`,
    poster: `https://pbs.twimg.com/media/ElfoUFFW0AA1GQz.jpg`,
    homepage: `https://creamfields.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Creamfields.png`,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), // 일렉트로닉
    country: Types.ObjectId(`6015193ad31d3859d7aeadfe`), // 영국
    artists: [],
  },
  {
    name: `Primavera Sound`,
    description: `Indie King and forceful supporter of new music, Primavera Sound prides itself on pushing the alternative scene forward. Creativity is paramount, with headliners often standing out from the festival crowd.`,
    startDate: `2021-06-02`,
    endDate: `2021-06-06`,
    video: [`sY7-rFElTz0`, `7N89-pSVfh0`, `NNFagPvdr5s`],
    thumbnail: `https://thefestivals.uk/wp-content/uploads/2020/05/8re34qssoyjme5l5o40r_1588093967556.jpg`,
    poster: `https://assets.primaverasound.com/psweb/imxjns0dcn59znmhqv23_1591692035639.png`,
    homepage: `https://www.primaverasound.com/en`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Primavera.png`,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e4`), // 록
    country: Types.ObjectId(`6015193ad31d3859d7aeadfd`), // 스페인
    artists: [],
  },
  {
    name: `Rock am Ring`,
    description: `If rock and metal are your game, then Germany's Rock am Ring needs no introduction. Along with sister festival Rock im Park, it pulls unparalleled lineups year after year and can lay claim to being one of the best-attended weekends in the world.`,
    startDate: `2021-06-11`,
    endDate: `2021-06-13`,
    video: [`wCBjpOa1Wh0`, `pnrx1UV6mdQ`, `Hrtwnv_dcM0`],
    thumbnail: `https://www.rock-am-ring.com/facebook/rar-fallback.jpg`,
    poster: `https://en.concerts-metal.com/images/flyers/202009/1601042158.webp`,
    homepage: `https://www.rock-am-ring.com`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Rock+am+Ring.png`,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e4`), // 록
    country: Types.ObjectId(`6015193ad31d3859d7aeadf9`), // 독일
    artists: [],
  },
  {
    name: `Isle of Wight Festival`,
    description: `Isle of Wight Festival is renowned for exclusive, legendary headliners – Fleetwood Mac, The Stone Roses, Bruce Springsteen – and eclectic lineups that pay homage to its own incredible history. Now over 50 years on from the original edition, IOW is as strong as ever.`,
    startDate: `2021-06-17`,
    endDate: `2021-06-20`,
    video: [`QnWpMe_wZws`, `eH5aH2F4BaM`, `gi_6iiGofeY`],
    thumbnail: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/function%20toString%28%29%20%7B%20%5Bnative%20code%5D%20%7D.png`,
    poster: `https://isleofwightfestival.com/assets/images/lineups/230620-IOW2021-LineUpPoster-AJ.png`,
    homepage: `https://isleofwightfestival.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Isle+of+Wight+Festival.png`,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e4`), // 록
    country: Types.ObjectId(`6015193ad31d3859d7aeadfe`), // 영국
    artists: [],
  },
  {
    name: `Ultra Music Festival`,
    description: `Ultra Music Festival (UMF) is a massive electronic music festival in Miami. Started in 1999 and named after a Depeche Mode album, Ultra Music Festival is one of the biggest festivals in North America.`,
    startDate: `2021-03-26`,
    endDate: `2021-03-28`,
    video: [`oqeKE6P_SZk`, `nNe4RUHpLWI`, `xVUtcN11e1E`],
    thumbnail: `https://ultramusicfestival.com/wp-content/uploads/2020/05/miami-banner-rescheduled-2021.jpg`,
    poster: `https://umfworldwide.com/wp-content/uploads/2019/12/miami-lineup-phase1-2020.jpg`,
    homepage: `https://ultramusicfestival.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_ultra.png`,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), // 일렉트로닉
    country: Types.ObjectId(`6015193ad31d3859d7aeae0f`), // 미국
    artists: [],
  },
  {
    name: `Ultra Europe`,
    description: `Ultra Europe is a multi-venue outdoor electronic music festival that is a part of Ultra Music Festival's worldwide expansion, which has now spread to twenty countries. Ultra Europe made its debut as a two-day festival during 12–13 July 2013, and took place in Split, Croatia, with an additional Ultra Beach party in Hvar Island, Croatia on 14 July 2013. In 2015, the festival became a part of Destination Ultra which now lasts seven days across Croatia and includes an opening party, the three-day festival, yacht regatta, Ultra Beach, and a closing party.`,
    startDate: `2021-07-09`,
    endDate: `2021-07-11`,
    video: [`BWmJw4zLrXY`, `xX59JmrQHv4`, `r-gYigITVNA`],
    thumbnail: `https://ultramusicfestival.com/wp-content/uploads/2020/05/miami-banner-rescheduled-2021.jpg`,
    poster: `https://umfworldwide.com/wp-content/uploads/2020/01/europe-lineup-phase1-2020.jpg`,
    homepage: `https://ultraeurope.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_ultra+eu.png`,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), // 일렉트로닉
    country: Types.ObjectId(`6015193ad31d3859d7aeadff`), // 크로아티아
    artists: [],
  },
  {
    name: `Let it Roll`,
    description: `Let it Roll is, without doubt, recognised as the biggest and most influential drum and bass music festival across the globe. As the fulcrum of the worldwide drum and bass, Let It Roll's lineup represents the most important artists within the scene, showcasing over 300 DJs and producers across its eight stages, all of which possess their own unique flavour and vibe.`,
    startDate: `2021-08-05`,
    endDate: `2021-08-07`,
    video: [`ozpbycgPa4I`, `iFYuP8EwPMM`, `-C2HDKgeQLg`],
    thumbnail: `https://pbs.twimg.com/profile_images/1048159014088003585/SvQNbjCV.jpg`,
    poster: `https://pbs.twimg.com/media/ErsSUCWWMAMmir7.png`,
    homepage: `https://letitroll.eu/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_let+it+roll.png`,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e6`), // etc
    country: Types.ObjectId(`6015193ad31d3859d7aeae00`), // 체코
    artists: [],
  },
  {
    name: `Wireless Festival`,
    description: `The Wireless Festival is a music festival that takes place every year in London, England. It is owned and managed by Live Nation. While it started as primarily a rock and pop festival, in recent years it has focused on hip-hop and other urban music. Headline acts since 2010 have included Jay-Z, Kanye West, Justin Timberlake, Rihanna, Bruno Mars, and Stormzy.`,
    startDate: `2021-07-02`,
    endDate: `2021-07-04`,
    video: [`D8dZIND-8vs`, `vE_JjQMqQeY`, `yza8B-KpTUE`],
    thumbnail: `https://media.resources.festicket.com/image/fit-in/1400x800/filters:quality(70)/www/photos/3516-artwork.jpg`,
    poster: `https://media.ticketmaster.co.uk/tm/en-gb/img/static/wireless/2020/images/lineup.jpg`,
    homepage: `https://www.wirelessfestival.co.uk/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Wireless+Festival.png`,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e7`), // 모든 장르 혼합
    country: Types.ObjectId(`6015193ad31d3859d7aeadfe`), // 영국
    artists: [],
  },
  {
    name: `Glastobury`,
    description: `Glastonbury Festival (formally Glastonbury Festival of Contemporary Performing Arts) is a five-day festival of contemporary performing arts that takes place in Pilton, Somerset, in England. In addition to contemporary music, the festival hosts dance, comedy, theatre, circus, cabaret, and other arts. Leading pop and rock artists have headlined, alongside thousands of others appearing on smaller stages and performance areas. Films and albums recorded at Glastonbury have been released, and the festival receives extensive television and newspaper coverage. Glastonbury is attended by around 200,000 people,[2] requiring extensive infrastructure in terms of security, transport, water, and electricity supply. The majority of staff are volunteers, helping the festival to raise millions of pounds for charity organisations.[3]`,
    startDate: `2021-06-26`,
    endDate: `2021-06-30`,
    video: [`sMgZR1C8xO4`, `mrJikvqZ9IQ`, `i70GfNTQ5yw`, `uDuyXkfmlnY`],
    thumbnail: `https://cdn.glastonburyfestivals.co.uk/wp-content/uploads/2020/03/FINAL-LINEAR-953-27-a-27.png`,
    poster: `https://cdn.glastonburyfestivals.co.uk/wp-content/uploads/2017/03/C953CROP.png`,
    homepage: `https://www.glastonburyfestivals.co.uk/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Glastobury.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4fa`), //
    country: Types.ObjectId(`6015193ad31d3859d7aeadfe`), //
    artists: [], // Radiohead, Foo fighters, Elton John
  },
  {
    name: `Reading Festival`,
    description: `The Reading and Leeds Festivals are a pair of annual music festivals that take place in Reading and Leeds in England. The events take place simultaneously on the Friday, Saturday and Sunday of the August bank holiday weekend, sharing the same bill. The Reading Festival is held at Little John's Farm on Richfield Avenue in central Reading, near the Caversham Bridge. The Leeds event is held in Bramham Park, near Wetherby, the grounds of a historic house. Campsites are available at both sites and weekend tickets include camping. Day tickets are also sold.`,
    startDate: `2021-08-27`,
    endDate: `2021-08-29`,
    video: [`NLXO9Mw6NQ`, `_lE1GYParQA`, `hghXUF7zGXw`, `WektbOne8bg`],
    thumbnail: `https://www.readingfestival.com/wp-content/uploads/2020/09/READING21_Line-up_3rd-Anno_Approved_Square-900x900.jpg`,
    poster: `https://www.readingfestival.com/wp-content/uploads/2020/09/READING21_Line-up_3rd-Anno_Approved_Square-900x900.jpg`,
    homepage: `https://www.readingfestival.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Reading+Festival.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), //
    country: Types.ObjectId(`6015193ad31d3859d7aeadfe`), //
    artists: [], // Stormzy, Liam Gallagger, Post Malone
  },
  {
    name: `Barcelona Beach Festival`,
    description: `Barcelona Beach Festival It is an electronic music festival held annually in Platja del Fòrum, Barcelona. The festival is organized by Live Nation and it is estimated that more than 70,000 people attend annually. It is one of the biggest music festivals in Spain, with many great artists who arrive at the lineups every year, with the recent performances of David Guetta, Armin van Buuren, DJ Snake and Dimitri Vegas & Like Mike.[1]`,
    startDate: `2021-00-00`,
    endDate: `2021-00-00`,
    video: [`CapeoOVZQfY`, `I0DeTBNzk_Y`, `Ff0Hiz1f93g`, `Iz3OeuTwgao`],
    thumbnail: `https://fstvls.s3.amazonaws.com/53/53012.jpeg`,
    poster: `https://fstvls.s3.amazonaws.com/53/53012.jpeg`,
    homepage: `https://en.wikipedia.org/wiki/Barcelona_Beach_Festival`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Barcelona+Beach+Festival.jpg`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), //
    country: Types.ObjectId(`6015193ad31d3859d7aeadfd`), //
    artists: [], // Alesso, David Guetta, Armin Van Buuren
  },
  {
    name: `White Sensation`,
    description: `Sensation is an indoor electronic dance music event which originated in Amsterdam, Netherlands and organized by ID&T. The original event, which ran exclusively in the Amsterdam Arena for a period of five years until 2005, is now located throughout various European and a few non-European countries.`,
    startDate: `2021-07-11`,
    endDate: `2021-07-12`,
    video: [`i3GVX6-SQQE`, `2TfEoC5D09U`, `z-NnLhkoSSA`, `9Cn0P6maFvU`],
    thumbnail: `https://www.themoviedb.org/t/p/original/pt45flGdWP8JXkW9vDZHMbCKjGh.jpg`,
    poster: `https://www.themoviedb.org/t/p/original/pt45flGdWP8JXkW9vDZHMbCKjGh.jpg`,
    homepage: `https://www.sensation.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_White+Sensation.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), //
    country: Types.ObjectId(`6015193ad31d3859d7aeadfc`), //
    artists: [], // Tiesto, Alesso, Armin Van Buuren
  },
  {
    name: `Lollapalooza`,
    description: `Lollapalooza /ˌlɒləpəˈluːzə/ (Lolla) is an annual four-day music festival in Chicago, Illinois, at Grant Park, founded in 1991 and since expanded to other countries. Performances include but are not limited to alternative rock, heavy metal, punk rock, hip hop, and electronic music. Lollapalooza has also provided a platform for nonprofit and political groups and various visual artists. The four-day music festival in Chicago's Grant Park hosts an estimated 400,000 people each year[when?] and sells out annually.[2] Lollapalooza is considered one of the largest and most iconic music festivals in the world and one of the longest running in the United States.[3][4] In 2019, its Brazilian edition was the world's third highest grossing festival, with revenues of $14.5 million.[5]`,
    startDate: `2021-07-30`,
    endDate: `2021-08-02`,
    video: [`MfnHlxLGpBc`, `zns830Yl1b0`, `c_Hjvw0PUa8`, `FnwiIyef-KI`],
    thumbnail: `https://assets.website-files.com/5e927ba01e4ad56ae5465eb8/5f21d87dbd786e1c67237d1a_LOL20-Admat%20(1).png`,
    poster: `https://assets.website-files.com/5e927ba01e4ad56ae5465eb8/5f21d87dbd786e1c67237d1a_LOL20-Admat%20(1).png`,
    homepage: `https://www.lollapalooza.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Lollapalooza.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), //
    country: Types.ObjectId(`6015193ad31d3859d7aeae0f`), //
    artists: [], // Red Hot Chili Peppers, Asap Rocky, The Killers
  },
  {
    name: `Pentaport Festival`,
    description: `Incheon Pentaport Rock Festival is a rock festival, which is held annually in Incheon, South Korea for three days at the end of July. It is considered as one of the biggest live music events in South Korea. The festival covers various genres of music, but mainly rock music and electronic music. The name came from five main themes of the festival; music, passion, environment friendly, DIY, and friendship.[1]`,
    startDate: `2021-08-10`,
    endDate: `2021-08-12`,
    video: [`0SrZUw31yy8`, `GzLIg0Ecwak`, `OjNNLtVlgzI`, `o7P4RWqAeY4`],
    thumbnail: `https://cdn.imweb.me/upload/S20200106a105fd03f4b57/49bd770b56bef.jpg`,
    poster: `https://cdn.imweb.me/upload/S20200106a105fd03f4b57/49bd770b56bef.jpg`,
    homepage: `http://www.pentaport.co.kr/kor/main/main.php`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Pentaport+Festival.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), //
    country: Types.ObjectId(`6015193ad31d3859d7aeadec`), //
    artists: [], // 자우림, 서태지, 넬
  },
  {
    name: `S2O Songkran Festival `,
    description: `S2O Songkran Festival is the world's biggest Songkran celebration, filling Bangkok's Show DC Arena with blasts of cool water and beats from some of our favourite DJs. `,
    startDate: `2021-04-11`,
    endDate: `2021-04-12`,
    video: [`VpRNKy6TVng`, `qe_ZfnuonAU`, `edm3tb4_Oms`, `ZrSAI9-3Cao`],
    thumbnail: `https://thailanddjfestivals.com/wp-content/uploads/2019/01/04-13-19-S2O-Songkran-Music-Festival-Bangkok-2019-Portrait.jpg`,
    poster: `https://thailanddjfestivals.com/wp-content/uploads/2019/01/04-13-19-S2O-Songkran-Music-Festival-Bangkok-2019-Portrait.jpg`,
    homepage: `https://www.festicket.com/festivals/s20-songkran-festival/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_S2O+Songkran+Festival.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), //
    country: Types.ObjectId(`6015193ad31d3859d7aeadef`), //
    artists: [], // Don diablo, Dash Berlin, Martin Garrix
  },
  {
    name: `Coachella`,
    description: `The Coachella Valley Music and Arts Festival (commonly called Coachella or the Coachella Festival) is an annual music and arts festival held at the Empire Polo Club in Indio, California, in the Coachella Valley in the Colorado Desert. It was co-founded by Paul Tollett and Rick Van Santen in 1999, and is organized by Goldenvoice, a subsidiary of AEG Presents.[1] The event features musical artists from many genres of music, including rock, pop, indie, hip hop and electronic dance music, as well as art installations and sculptures. Across the grounds, several stages continuously host live music.`,
    startDate: `2021-04-10`,
    endDate: `2021-04-12`,
    video: [`jjwilAja7Lc`, `OcBr6uQYuQY`, `uttkysjGtJE`, `a5gUds01aXY`],
    thumbnail: `https://www.cactushugs.com/wp-content/uploads/2020/01/81479633_10157654210711648_1678580108127895552_o.jpg`,
    poster: `https://www.cactushugs.com/wp-content/uploads/2020/01/81479633_10157654210711648_1678580108127895552_o.jpg`,
    homepage: `https://www.coachella.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Coachella.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4fa`), //
    country: Types.ObjectId(`6015193ad31d3859d7aeae0f`), //
    artists: [], // Travis Scott, Rage Againist the Machine, Frank Ocean
  },
  {
    name: `Isle of wight festival`,
    description: `The Isle of Wight Festival is a British music festival which takes place annually in Newport on the Isle of Wight, England.[1] It was originally a counterculture event held from 1968 to 1970.[2][3] The 1970 event was by far the largest of these early festivals and the unexpectedly high attendance levels led, in 1971, to Parliament adding a section to the Isle of Wight County Council Act 1971 preventing overnight open-air gatherings of more than 5,000 people on the island without a special licence from the council. The event was revived in 2002.[4]`,
    startDate: `2021-06-21`,
    endDate: `2021-06-24`,
    video: [`vL7JIhP_1l4`, `4IanTf69Y1Q`, `8ewdPcCBT9U`, `7w0yV0BvnpM`],
    thumbnail: `https://isleofwightfestival.com/assets/images/lineups/230620-IOW2021-LineUpPoster-AJ.png`,
    poster: `https://isleofwightfestival.com/assets/images/lineups/230620-IOW2021-LineUpPoster-AJ.png`,
    homepage: `https://isleofwightfestival.com/`,
    stamp: ``,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), //
    country: Types.ObjectId(`6015193ad31d3859d7aeadfe`), //
    artists: [], // Lionel Richie, Lewis Capaldi, The Chemical Brothers
  },
  {
    name: `Lollapalooza Chile`,
    description: `If August is too long to wait for the flagship Lollapalooza (and you’re dying to take a trip to Chile) head to this South American edition. Started in 2011, the Santiago ‘palooza features two days of international headliners mixed with influential Chilean acts. For true Lolla fans, stick around the continent and check out the other editions in Brazil and Argentina.`,
    startDate: `2021-11-26`,
    endDate: `2021-11-28`,
    video: [`6EhL3EWWQPY`, `YPRFHZHx75U`, `Lkd07qvgpkI`, `qcgyRFPx4H4`],
    thumbnail: `https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/Lollapalooza-Chile-2019-Lineup-Poster-1600x2853.jpg`,
    poster: `https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/Lollapalooza-Chile-2019-Lineup-Poster-1600x2853.jpg`,
    homepage: `https://www.lollapaloozacl.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Lollapalooza+Chile.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4fa`), //
    country: Types.ObjectId(`6015193ad31d3859d7aeae09`), //
    artists: [], // Kendrick Lamar, Sam Smith, Tiesto
  },
  {
    name: `Montreux Jazz Festival`,
    description: `The Montreux Jazz Festival (formerly Festival de Jazz Montreux and Festival International de Jazz Montreux) is a music festival in Switzerland, held annually in early July in Montreux on the Lake Geneva shoreline. It is the second largest annual jazz festival in the world after Canada's Montreal International Jazz Festival.[1]`,
    startDate: `2021-07-03`,
    endDate: `2021-07-18`,
    video: [`WBcFDQUbOg0`, `Q3NsRAJ7s1M`, `pgH7OpCCE8s`, `fvQWvmcjdnc`],
    thumbnail: `https://www.montreuxjazzfestival.com/wp-content/uploads/2020/01/Affiche-2020.png`,
    poster: `https://www.montreuxjazzfestival.com/wp-content/uploads/2020/01/Affiche-2020.png`,
    homepage: `https://www.montreuxjazzfestival.com/en/news/poster-2020/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Montreux+Jazz+Festival.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4fe`), //
    country: Types.ObjectId(`6015193ad31d3859d7aeadfb`), //
    artists: [], // Bonobo, Phoenix, Tom Jones
  },
  {
    name: `EXIT Festival`,
    description: `Exit (Serbian: Егзит / Egzit; stylized as EXIT) is a summer music festival which is held at the Petrovaradin Fortress in Novi Sad, Serbia. Founded in 2000, it has twice won the Best Major Festival award at the European Festivals Awards, for 2013 and 2017. EXIT has also won the “Best European Festival” award at the UK Festival Awards in 2007. In March 2018 Regional Cooperation Council awarded EXIT Festival as Champion of Regional Cooperation for 2017.`,
    startDate: `2021-07-08`,
    endDate: `2021-07-11`,
    video: [`t0Su4eN6eAU`, `Vuz_iZoE65s`, `Jj9H5ipneaw`, `J3rKUa3uIFQ`],
    thumbnail: `https://www.exitfest.org/wp-content/uploads/2020/07/featured_EXIT-2-0.jpg`,
    poster: `https://en.concerts-metal.com/images/flyers/202011/1605133025.webp`,
    homepage: `https://www.exitfest.org/en/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_EXIT+Festival.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4fa`), // 모든 장르 혼합
    country: Types.ObjectId(`6015193ad31d3859d7aeadfe`), // 영국
    artists: [], //David Guetta, DJ Snake, Eric Prydz, Four Tet, Tyga, Metronomy, Boris Brejcha, Sepultura
  },
  {
    name: `Mad Cool Festival`,
    description: `Mad Cool is a music festival held annually in Madrid, Spain, since 2016. It chiefly features pop, rock and indie performers. The 2016 and 2017 festivals took place in the Caja Mágica. The organization then moved the festival to an open-air space in Valdebebas.`,
    startDate: `2021-07-07`,
    endDate: `2021-07-10`,
    video: [`cZOQzGmhNZ8`, `sYdPl6FSXP8`, `zEs6zX6UmW0`, `5ksBIACTwGw`],
    thumbnail: `https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/127861511_3498135196943981_6956479048958946824_o.jpg?_nc_cat=100&ccb=2&_nc_sid=8024bb&_nc_ohc=EO6R7OZWYv4AX8Jwhrf&_nc_ht=scontent-ssn1-1.xx&oh=a0082c70207ecd52dafaa1c2c94e1426&oe=603C452E`,
    poster: `https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/127861511_3498135196943981_6956479048958946824_o.jpg?_nc_cat=100&ccb=2&_nc_sid=8024bb&_nc_ohc=EO6R7OZWYv4AX8Jwhrf&_nc_ht=scontent-ssn1-1.xx&oh=a0082c70207ecd52dafaa1c2c94e1426&oe=603C452E`,
    homepage: `https://madcoolfestival.es/en/index.php`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Mad+Cool+Festival.jpeg`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    country: Types.ObjectId(`6015193ad31d3859d7aeadfd`), // 스페인
    artists: [], //Cardi B, Kings of Leon, The War On Drugs, Anderson .Paak, HAIM
  },
  {
    name: `Download Festival`,
    description: `Download Festival is a British-created rock festival, held annually at Donington Park in England (since 2003); in Paris, France (since 2016); at Parramatta Park, Sydney (since 2019); and at Flemington Racecourse in Melbourne (since 2018).`,
    startDate: `2021-06-04`,
    endDate: `2021-06-08`,
    video: [`t0Su4eN6eAU`, `Vuz_iZoE65s`, `Jj9H5ipneaw`, `J3rKUa3uIFQ`],
    thumbnail: `https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/127861511_3498135196943981_6956479048958946824_o.jpg?_nc_cat=100&ccb=2&_nc_sid=8024bb&_nc_ohc=EO6R7OZWYv4AX8Jwhrf&_nc_ht=scontent-ssn1-1.xx&oh=a0082c70207ecd52dafaa1c2c94e1426&oe=603C452E`,
    poster: `https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/127861511_3498135196943981_6956479048958946824_o.jpg?_nc_cat=100&ccb=2&_nc_sid=8024bb&_nc_ohc=EO6R7OZWYv4AX8Jwhrf&_nc_ht=scontent-ssn1-1.xx&oh=a0082c70207ecd52dafaa1c2c94e1426&oe=603C452E`,
    homepage: `https://downloadfestival.co.uk/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Download+Festival.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    country: Types.ObjectId(`6015193ad31d3859d7aeadfe`), // 영국
    artists: [], //KISS, Iron Maiden, System of a Down, Deftones, Korn, The Offspring, Disturbed, Gojira
  },
  {
    name: `Parklife`,
    description: `Parklife is the third studio album by the English rock band Blur, released on 25 April 1994 on Food Records. After disappointing sales for their previous album Modern Life Is Rubbish (1993), Parklife returned Blur to prominence in the UK, helped by its four hit singles: "Girls & Boys", "End of a Century", "Parklife" and "To the End".`,
    startDate: `2021-09-11`,
    endDate: `2021-09-12`,
    video: [`uriGs8LJzsc`, `y7y5UPuin90`, `Pad3elTbioI`, `ivsgINm47Aw`],
    thumbnail: `https://pbs.twimg.com/media/ERzH7wgWoAALApn.jpg`,
    poster: `https://pbs.twimg.com/media/ERzH7wgWoAALApn.jpg`,
    homepage: `https://parklife.uk.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Parklife.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    country: Types.ObjectId(`6015193ad31d3859d7aeadfe`), // 영국
    artists: [], //Tyler, the Creator, Skepta, Lewis Capaldi, Khalid, Jorja Smith, Giggs, Anderson .Paak & The Free Nationals, Robyn
  },
  {
    name: `Awakenings Festival`,
    description: `Awakenings is the collective name of techno parties that have been organized since 1997 by events agency Monumental Productions BV. The parties sometimes have a theme that has to do with techno music, such as minimal, Detroit, schranz, Drumcode or Kne'deep.The place of action is normally the gashouder in Amsterdam, main venue, and the Spaarnwoude recreational area between Amsterdam and Haarlem for the festival. The name Awakenings has to do with the resurrection of Jesus. The first party was around Easter and organizer Rocco Veenboer realized that he did not know what the Easter party meant. After he discovered that at Easter, among other things, the resurrection of Jesus is celebrated, the name Awakenings arose.`,
    startDate: `2021-06-26`,
    endDate: `2021-06-27`,
    video: [`RaXVD8dI5Js`, `ugH9x_a9VC8`, `3w8niQUZMx0`, `Dgc-7Ja72y0`],
    thumbnail: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fthegroovecartel.com%2Fnews%2Ffestivals%2Fawakenings-festival-2020-ticket-sale%2F&psig=AOvVaw3wE1CtjwGbqXYyqsL7Hgp9&ust=1612184060725000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCAk-abxu4CFQAAAAAdAAAAABAD`,
    poster: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fthegroovecartel.com%2Fnews%2Ffestivals%2Fawakenings-festival-2020-ticket-sale%2F&psig=AOvVaw3wE1CtjwGbqXYyqsL7Hgp9&ust=1612184060725000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCAk-abxu4CFQAAAAAdAAAAABAD`,
    homepage: `https://www.awakenings.com/en/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Awakenings+Festival.jpg`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    country: Types.ObjectId(`6015193ad31d3859d7aeadfc`), // 네덜란드
    artists: [], //Carl Cox, Amelie Lens, Richie Hawtin, ANNA, Chris Liebing, Charlotte de Witte, Jeff Mills, Helena Hauff
  },
  {
    name: `Super Bock Super Rock`,
    description: `Super Bock Super Rock is a music festival in Portugal that takes place annually since 1995. It is organized by Portuguese live entertainment company Música no Coração and is named after its main sponsor, Super Bock. Over the years, the festival has had various formats, locations and focus on music genres.`,
    startDate: `2021-07-15`,
    endDate: `2021-07-18`,
    video: [`vhXAZYBWkrI`, `6tdZNlb-NPk`, `-sYWxibGxVc`, `8bAKMWxJgXA`],
    thumbnail: `https://media.resources.festicket.com/www/admin/uploads/images/EDPStage.jpg`,
    poster: `https://media.resources.festicket.com/www/admin/uploads/images/EDPStage.jpg`,
    homepage: `https://www.superbocksuperrock.pt/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Super+Bock+Super+Rock.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 모든 장르 혼합
    country: Types.ObjectId(`6015193ad31d3859d7aeadfd`), // 스페인
    artists: [], //Foals, Kali Uchis, Brockhampton, Local Natives, GoldLink, Slow J, Jungle [DJ set], Boy Pablo
  },
  {
    name: `Hellfest Open Air`,
    description: `Hellfest (French pronunciation: [ɛlfɛst]), also called Hellfest Summer Open Air, is a rock festival focusing on heavy metal music, held annually in June in Clisson in Loire-Atlantique, France. Its high attendance makes it the French music festival with the largest turnover. It is also one of the biggest metal festivals in Europe and the first to exist in France. It originated in another music festival, the Fury Fest, held from 2002 to 2005, in different areas of Pays de la Loire. Hellfest took over in 2006 and over the years has seen a continuous rise in visitors, from 22,000 in the first edition, to 55,000 tickets sold per day in 2017.`,
    startDate: `2021-06-18`,
    endDate: `2021-06-20`,
    video: [`ji3DPTzieFo`, `NB65Ss_Ffxs`, `o2c4hoLT_yU`, `EFHB5UOcc9E`],
    thumbnail: `https://www.amf.cool/_applications/app_amfcool/_assets/images/festivais/europe/France/2021/hellfest-2021.jpg`,
    poster: `https://www.amf.cool/_applications/app_amfcool/_assets/images/festivais/europe/France/2021/hellfest-2021.jpg`,
    homepage: `https://www.hellfest.fr/en/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Hellfest+Open+Air.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4fe`), // etc
    country: Types.ObjectId(`6015193ad31d3859d7aeadf8`), // 프랑스
    artists: [], //Deftones, Faith No More, System of a Down, Volbeat, Deep Purple, Judas Priest
  },
  {
    name: `FIB: Festival Internacional de Benicàssim`,
    description: `The Festival Internacional de Benicàssim (Valencian pronunciation: [festiˈval inteɾnasi.oˈnal de beniˈkasim]), commonly abbreviated to simply FIB, is an annual music festival which takes place in the town of Benicàssim, in the Valencian Community (Spain). It focuses mainly on pop, rock and electronica artists, as well as having other elements including short films, fashion shows and art. Benicassim has a reputation as being among the best on the international festival circuit.`,
    startDate: `2021-07-15`,
    endDate: `2021-07-18`,
    video: [`BJ9s-J8d-i0`, `kC3LQllk4fU`, `42aENZsPlbI`, `Py_H78XmeSE`],
    thumbnail: `https://www.dodmagazine.es/wp-content/uploads/2019/11/fib-2020-cartel-1.jpg`,
    poster: `https://www.dodmagazine.es/wp-content/uploads/2019/11/fib-2020-cartel-1.jpg`,
    homepage: `https://fiberfib.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_FIB-+Festival+Internacional+de+Benica%CC%80ssim.jpeg`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4fa`), // 모든 장르 혼합
    country: Types.ObjectId(`6015193ad31d3859d7aeadfd`), // 스페인
    artists: [], //Khalid, Martin Garrix, Foals, Liam Gallagher, Vampire Weekend, Two Door Cinema Club, The Lumineers, Steve Aoki
  },
  {
    name: `Rolling Loud Portugal`,
    description: `Rolling Loud's Florida flagship festival has seen the hip-hop and rap brand become North America's biggest urban music festival of the past few years. It's debut edition in Portugal looks to cement the title of Europe's too.`,
    startDate: `2021-07-06`,
    endDate: `2021-07-10`,
    video: [`Zk8EdZgK43g`, `ivDcXwlZGA0`, `cY90rJJbe84`, `pFj7pzTI9R8`],
    thumbnail: `https://images.squarespace-cdn.com/content/v1/56bbcc4659827e5156d54504/1603786344466-D4W8Z8E8ZJO5MK1N0UD8/ke17ZwdGBToddI8pDm48kOeC2_vIwtkNO4KLfB1JIsJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UedT6MCuDrG0_6iPwXLGF1669zXNhvZ0Gt3DqtjtSHkNlcTmcwU-Ed_fLjLxuPb0KQ/RL21+PORTUGAL+SHOW+2+FINAL+-+Resized.jpg`,
    poster: `https://images.squarespace-cdn.com/content/v1/56bbcc4659827e5156d54504/1603786344466-D4W8Z8E8ZJO5MK1N0UD8/ke17ZwdGBToddI8pDm48kOeC2_vIwtkNO4KLfB1JIsJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UedT6MCuDrG0_6iPwXLGF1669zXNhvZ0Gt3DqtjtSHkNlcTmcwU-Ed_fLjLxuPb0KQ/RL21+PORTUGAL+SHOW+2+FINAL+-+Resized.jpg`,
    homepage: `https://www.rollingloud.com/portugal`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Rolling+Loud+Portugal.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4fa`), // 모든 장르 혼합
    country: Types.ObjectId(`6015193ad31d3859d7aeadfb`), // 이탈리아
    artists: [], //A$AP Rocky, Cardi B, Stormzy, Future, Wiz Khalifa, DaBaby, Rae Sremmurd, Lil Uzi Vert
  },
  {
    name: `Time Warp DE`,
    description: `Time Warp is an annual electronic music festival originated in Mannheim, Germany. The premiere was in 1994 in the " Walzmühle" in Ludwigshafen. Since 2000, the Mannheim Maimarkthalle has been a permanent venue every spring, with DJ greats such as Sven Väth, Carl Cox and Richie Hawtin being present from the very beginning. In 2019 the festival celebrated its 25th anniversary in Germany and was - as in the years before - completely sold out.`,
    startDate: `2021-11-13`,
    endDate: `2021-11-14`,
    video: [`PglgDCHI6Ww`, `e2QCtQ33b2U`, `VVfbpsgNPXo`, `XE7DXbjLNGA`],
    thumbnail: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.festicket.com%2Fmagazine%2Fnews%2Ftime-warp-de-2020-full-lineup-revealed%2F&psig=AOvVaw0Yh-weqqVuhpGbQ9kfqrcw&ust=1612185098109000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJightOfxu4CFQAAAAAdAAAAABAD`,
    poster: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.festicket.com%2Fmagazine%2Fnews%2Ftime-warp-de-2020-full-lineup-revealed%2F&psig=AOvVaw0Yh-weqqVuhpGbQ9kfqrcw&ust=1612185098109000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJightOfxu4CFQAAAAAdAAAAABAD`,
    homepage: `https://www.time-warp.de/germany/index_eng.html`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Time+Warp+DE.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    country: Types.ObjectId(`6015193ad31d3859d7aeadf9`), // 독일
    artists: [], //Richie Hawtin, Nina Kraviz, Adam Beyer, Sven Väth, Charlotte de Witte, Amelie Lens, Seth Troxler
  },
  {
    name: `Rock en Seine`,
    description: `Rock en Seine (French pronunciation: [ʁɔk ɑ̃ sɛːn]) is a three-day rock music festival, held at Domaine National de Saint-Cloud, the Château de Saint-Cloud's park, west of Paris, inside the garden designed by André Le Nôtre. The festival takes place in the down of the Park of "Domaine national de Saint-Cloud", a historical place at the gates of Paris, and five minutes from the nearest subway station, métro Boulogne - Pont de Saint-Cloud.`,
    startDate: `2021-08-27`,
    endDate: `2021-08-29`,
    video: [`ZdKtO-oR48I`, `cfYGWzDZyQg`, `1TLtBruHeEQ`, `o3pJkpbKXOI`],
    thumbnail: `https://d49r1np2lhhxv.cloudfront.net/www/admin/uploads/images/RockEnSeineTimetable_Q2kXsmi.jpg`,
    poster: `https://d49r1np2lhhxv.cloudfront.net/www/admin/uploads/images/RockEnSeineTimetable_Q2kXsmi.jpg`,
    homepage: `https://www.rockenseine.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Rock+en+Seine.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    country: Types.ObjectId(`6015193ad31d3859d7aeadf8`), // 프랑스
    artists: [], //Rage Against The Machine, Run The Jewels
  },
  {
    name: `Afro Nation`,
    description: `Afro Nation brings star-studded lineups ranging from dancehall, bashment, Afrobeats and R&B to occupy Praia da Rocha's blissful beach for a weekend of pure heat, both in temperature and vibe.`,
    startDate: `2021-07-01`,
    endDate: `2021-07-03`,
    video: [`H9HHoFG0ois`, `E6WsViqtvnA`, `FeU5XJN1p8Q`, `MGibM4LlA-U`],
    thumbnail: `https://afronation-com.s3.eu-west-1.amazonaws.com/app/uploads/2020/12/ANP-Poster-Portrait-WAVE-.jpg`,
    poster: `https://afronation-com.s3.eu-west-1.amazonaws.com/app/uploads/2020/12/ANP-Poster-Portrait-WAVE-.jpg`,
    homepage: `https://afronation.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Afro+Nation.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4fb`), // 힙합
    country: Types.ObjectId(`6015193ad31d3859d7aeadfb`), // 이탈리아
    artists: [], //Chris Brown, Megan Thee Stallion, Burna Boy, Davido, French Montana, Skepta, Wizkid, Tory Lanez
  },
  {
    name: `Rock in Rio Lisboa`,
    description: `Rock in Rio Lisboa shares both it's name and it's legacy with the legendary Brazilian festival, annually alternating between Rio and Lisbon. One thing is certain, however; the calibre of artists, including iconic names from rock, pop, and more, remains at the same extremely high standard, year in, year out.`,
    startDate: `2021-06-19`,
    endDate: `2021-06-27`,
    video: [`zOmtFi9f_A4`, `VhOPWWYOG2U`, `hBI9X356ELk`, `9mxi1ayuhkY-U`],
    thumbnail: `https://www.amf.cool/_applications/app_amfcool/_assets/images/festivais/europe/Portugal/2021/rock-in-rio-lis-2021a.jpg`,
    poster: `https://www.amf.cool/_applications/app_amfcool/_assets/images/festivais/europe/Portugal/2021/rock-in-rio-lis-2021a.jpg`,
    homepage: `https://rockinriolisboa.sapo.pt/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Rock+in+Rio+Lisboa.jpg`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    country: Types.ObjectId(`6015193ad31d3859d7aeadfb`), // 이탈리아
    artists: [], //Foo Fighters, Jason Derulo, Post Malone, Anitta, Duran Duran, A-ha, Liam Gallagher, Black Eyed Peas
  },
  {
    name: `Dekmantel`,
    description: `A hive of forward-thinking electronic music, Dekmantel has cemented itself as the festival of choice for those looking to experience new trends. It's a brand that steers clear of headline grabbing names and gimmicks, instead encouraging and rewarding risk-taking. As a result, Dekmantel has become many DJs' favourite festival to play.`,
    startDate: `2021-08-04`,
    endDate: `2021-08-08`,
    video: [`p6ozF0Y-PzU`, `nKHpbiYCtDQ`, `IxhYDVRqdYY`, `BMCMHpCXwJA-U`],
    thumbnail: `https://pbs.twimg.com/media/EOTxk0ZW4AA0hG4.jpg`,
    poster: `https://pbs.twimg.com/media/EOTxk0ZW4AA0hG4.jpg`,
    homepage: `https://www.dekmantelfestival.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Dekmantel.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4fa`), // 모든 장르
    country: Types.ObjectId(`6015193ad31d3859d7aeadfc`), // 네덜란드
    artists: [], //33EMYBW, 808 State, Air Max '97, Altın Gün, Animistic Beliefs, Antal, Anthony Rother, Aquarian.
  },
  {
    name: `SXSW: South by Southwest`,
    description: `South by Southwest, stylized as SXSW and colloquially referred to as South By, is an annual conglomeration of parallel film, interactive media, and music festivals and conferences organized jointly that take place in mid-March in Austin, Texas, United States. It began in 1987 and has continued to grow in both scope and size every year. In 2017, the conference lasted for 10 days with the interactive track lasting for five days, music for seven days, and film for nine days.`,
    startDate: `2021-03-16`,
    endDate: `2021-03-20`,
    video: [`30Iqjg4F4dU`, `RQRbSX2_Sn4`, `SVpTX9YxpjU`, `DYM_wEVv_-4-U`],
    thumbnail: `https://www.twoscotsabroad.com/wp-content/uploads/2015/03/How-to-do-SXSW-for-free.jpg`,
    poster: `https://www.twoscotsabroad.com/wp-content/uploads/2015/03/How-to-do-SXSW-for-free.jpg`,
    homepage: `https://www.sxsw.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_SXSW-+South+by+Southwes.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4fa`), // 모든 장르
    country: Types.ObjectId(`6015193ad31d3859d7aeae0f`), // 미국
    artists: [], //Chris Brown, Megan Thee Stallion, Burna Boy, Davido, French Montana, Skepta, Wizkid, Tory Lanez
  },
  {
    name: `Melt Festival`,
    description: `Melt! Festival is one of the biggest open-air electronic music festivals in Germany. The festival takes place at the Ferropolis open-air museum, near Gräfenhainichen. It has been held since 1997. Ferropolis sounds like a Marvel city where at least one superhuman fights aliens and the mafia, possibly with a cape. But – I know right – it's not. Melt Festival is one of Europe's stand-out names (even since it lost the '!' on the end of Melt! a few years ago) for its incredible lineups, 24-hour stages, and the seriously imposing cranes of the old ironworks that is its home.`,
    startDate: `2021-06-04`,
    endDate: `2021-06-07`,
    video: [`tA5bpADLbYU`, `NbY_xIPSqE8`, `k4n3_4ZSxPo`, `vlOaoU_PWvE-U`],
    thumbnail: `https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/s960x960/109821686_10158465590728917_1039478636419041851_o.png?_nc_cat=110&ccb=2&_nc_sid=8024bb&_nc_ohc=mvBxP8rkzw0AX_K8yDt&_nc_ht=scontent-ssn1-1.xx&_nc_tp=30&oh=db5334c617dfe46137a99c7547159239&oe=603CFB75`,
    poster: `https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/s960x960/109821686_10158465590728917_1039478636419041851_o.png?_nc_cat=110&ccb=2&_nc_sid=8024bb&_nc_ohc=mvBxP8rkzw0AX_K8yDt&_nc_ht=scontent-ssn1-1.xx&_nc_tp=30&oh=db5334c617dfe46137a99c7547159239&oe=603CFB75`,
    homepage: `https://meltfestival.de/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Melt+Festival.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    country: Types.ObjectId(`6015193ad31d3859d7aeadf9`), // 독일
    artists: [], //Chris Brown, Megan Thee Stallion, Burna Boy, Davido, French Montana, Skepta, Wizkid, Tory Lanez
  },
  {
    name: `Nuits Sonores`,
    description: `Other than Dekmantel, it's hard to think of many underground electronic music festivals as widely respected by everyone in the scene as Lyon's Nuits Sonores. Each year, a selection of forward-thinking artists are invited to be guest curators, and their careful crafting of the lineup means the festival never falls into the pitfalls of predictability or repetition that plague so many similar festivals. `,
    startDate: `2021-07-01`,
    endDate: `2021-07-03`,
    video: [`bZ6_x7aca3w`, `2EaxYi31ips`, `y3VcwaxJzhQ`, `vNrtM6fIWvU-U`],
    thumbnail: `https://image.freepik.com/free-vector/new-year-2021-poster-concept_23-2148745017.jpg`,
    poster: `https://image.freepik.com/free-vector/new-year-2021-poster-concept_23-2148745017.jpg`,
    homepage: `https://www.nuits-sonores.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Nuits+Sonores.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    country: Types.ObjectId(`6015193ad31d3859d7aeadf8`), // 프랑스
    artists: [], //Chris Brown, Megan Thee Stallion, Burna Boy, Davido, French Montana, Skepta, Wizkid, Tory Lanez
  },
  {
    name: `Iceland Airwaves`,
    description: `Heading into its 20th edition this year, Iceland Airwaves is getting back to basics. Everything from lagoons and bookstores to bars and concert halls is filled up with music, and the festival scours the planet to find only the best up-and-coming and genre-bending talent. Plus, the impossibly musical city of Reykjavík is the perfect setting for this artistry-above-all-else showcase festival.`,
    startDate: `2021-11-02`,
    endDate: `2021-11-05`,
    video: [`QuBwQ8S0meE`, `qm8tFvrVx4M`, `EjMSj1AD4cE`, `-n-2JwJx7aI`],
    thumbnail: `https://www.clashmusic.com/sites/default/files/styles/article_feature/public/field/image/iceland%20airwaves.png?itok=wBr4qbRX`,
    poster: `https://www.clashmusic.com/sites/default/files/styles/article_feature/public/field/image/iceland%20airwaves.png?itok=wBr4qbRX`,
    homepage: `https://icelandairwaves.is/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Iceland+Airwaves.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    country: Types.ObjectId(`6015193ad31d3859d7aeadfa`), // 아일랜드
    artists: [], //ADHD – Andavald – Andy Svarthol – Any Other – Aragrúi – Ásta – Balming Tiger – Benni Hemm Hemm – Black Pumas
  },
  {
    name: `Pitchfork Music Festival`,
    description: `For some people, online music publication Pitchfork has become gospel when it comes to identifying musical trends and talent. Regardless of any perceptions you may have of the site or its most devout followers (*cough* posey hipsters *cough*), there's no denying they know how to curate a lineup of the most exciting alternative acts in the world.`,
    startDate: `2021-07-17`,
    endDate: `2021-07-19`,
    video: [`pmfG1yyvIIk`, `zd4p-d-OcFU`, `UEqhmAUvmXk`, `xV_zbJ8SflU-U`],
    thumbnail: `https://cdn.imweb.me/upload/S20200106a105fd03f4b57/2e7f77117c571.png`,
    poster: `https://cdn.imweb.me/upload/S20200106a105fd03f4b57/2e7f77117c571.png`,
    homepage: `https://pitchforkmusicfestival.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Pitchfork+Music+Festival.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4fe`), // etc
    country: Types.ObjectId(`6015193ad31d3859d7aeae0f`), // 미국
    artists: [], //Chris Brown, Megan Thee Stallion, Burna Boy, Davido, French Montana, Skepta, Wizkid, Tory Lanez
  },
  {
    name: `Boomtown`,
    description: `Even if you 100% mean it, describing a festival as 'totally unique' usually just sounds like lazy writing. But in the case of Boomtown – a throwback carnival of music and street performance set in a purpose-built wild-west town in the English countryside – the phrase is as justified as it'll ever be.`,
    startDate: `2021-08-11`,
    endDate: `2021-08-15`,
    video: [`J9hbVmLWd7E`, `vAaRWHRxVlk`, `zdI2oTe-Tuk`, `QM5oKlJRTE0`],
    thumbnail: `https://www.datocms-assets.com/398/1581009403-2020-line-up-final-changes.png?fit=crop&fm=jpeg&q=quality&w=1200`,
    poster: `https://www.datocms-assets.com/398/1581009403-2020-line-up-final-changes.png?fit=crop&fm=jpeg&q=quality&w=1200`,
    homepage: `http://www.boomtownfair.co.uk/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Boomtown.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    country: Types.ObjectId(`6015193ad31d3859d7aeae01`), // 그리스
    artists: [], //Chris Brown, Megan Thee Stallion, Burna Boy, Davido, French Montana, Skepta, Wizkid, Tory Lanez
  },
  {
    name: `Rock Werchter`,
    description: `Rock Werchter is an annual music festival held in the village of Werchter, near Leuven, Belgium, since 1976 and is a large sized rock music festival. The 2003, 2005, 2006, 2007, 2012 and 2014 festivals received the Arthur award for best festival in the world at the International Live Music Conference (ILMC). It can host 88,000 guests daily, of which 67,500 combine all four days, to add up to a total maximum of 149,500 different attendees.[1]`,
    startDate: `2021-07-02`,
    endDate: `2021-07-05`,
    video: [`-lylWq3zMxE`, `tEztItUjtkg`, `NFBbc8R4IvU`, `4Rki32HwpeA`],
    thumbnail: `https://pbs.twimg.com/media/ER4BCC3W4AM1bVM.jpg`,
    poster: `https://pbs.twimg.com/media/ER4BCC3W4AM1bVM.jpg`,
    homepage: `https://www.rockwerchter.be/en/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Rock+Werchter.jpg`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), //
    country: Types.ObjectId(`6015193ad31d3859d7aeadf7`), //
    artists: [], // The Strokes, System of a Down, Pearl Jam
  },
  {
    name: `Splendour in the Grass Festival 2021`,
    description: `With Splendour on hold until July 2021, we have been hard at work locking in the lineup for our new dates and today we are very excited to announce three of your headliners for Splendour in the Grass 2021!`,
    startDate: `2021-07-23`,
    endDate: `2021-07-25`,
    video: [`XifqWdqTosI`, `v62xb4Gu3kU`, `AuFrDHGtZrg`],
    thumbnail: `https://s3-ap-southeast-2.amazonaws.com/static.moshtix.com.au/uploads/879fd2e9-f79e-43d8-99be-f441f93327dex600x600`,
    poster: `https://lastfm.freetls.fastly.net/i/u/ar0/badd0a58d4ef3d9690c7ed40be79e954.webp`,
    homepage: `https://splendourinthegrass.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Splendour+in+the+Grass.png`,
    genre: Types.ObjectId(`601181ed69a90c8aea6ea23e`),
    country: Types.ObjectId(`6015193ad31d3859d7aeae04`),
    artists: [],
  },
  {
    name: `Superbloom 2021`,
    description: `Let’s get Munich blooming! SUPERBLOOM Festival is an event for all the senses—a place where music meets art, culture, lifestyle, community and research. Set in Munich’s breath-taking Olympic Park, the September 2020 festival will be southern Germany’s first weekend event to offer culture and experience in every possible form.`,
    startDate: `2021-09-03`,
    endDate: `2021-09-04`,
    video: [`7QXPSX83fwg`, `fo-P1BEkkp8`, `AgwFPwqDX3Q`, `tufUovtFUs4`],
    thumbnail: `https://images.sk-static.com/images/media/profile_images/events/39696579/huge_avatar`,
    poster: `https://i1.wp.com/www.ultimatefestivalguide.com/wp-content/uploads/2020/10/superbloom-festival-germany-2021-first-acts-poster.jpg?resize=960%2C960&ssl=1`,
    homepage: `https://splendourinthegrass.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Superbloom.jpeg`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`),
    country: Types.ObjectId(`6015193ad31d3859d7aeadf9`),
    artists: [],
  },

  {
    name: `Reggaeton Beach 2021`,
    description: `The biggest Urban Beach Festival in Europe celebrates its fourth edition in Barcelona with all the energy. You cannot miss the date that will bring together the greatest reggaeton lovers and TOP world artists, chosen especially for the occasion.`,
    startDate: `2021-07-24`,
    endDate: `2021-07-25`,
    video: [`ZxkHlUs8tyw`, `hTG_pMhB3bg`, `s9-QVLL8ndE`, `6Mm_6sFMcrM`],
    thumbnail: `https://images.sk-static.com/images/media/img/col6/20200614-132732-250831.jpg`,
    poster: `https://images.sk-static.com/images/media/profile_images/events/39498422/huge_avatar`,
    homepage: `https://www.reggaetonbeachfestival.com/en/festivales/summer/barcelona`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Reggaeton+Beach.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4fb`),
    country: Types.ObjectId(`6015193ad31d3859d7aeadfd`),
    artists: [],
  },

  {
    name: `Highfield Festival 2021`,
    description: `A relaxed atmosphere, a dreamlike location right on the waterfront of the Störmthaler lake and a superb alternative line up: the HIGHFIELD FESTIVAL is the biggest Independent-Rock-Festival of East of Germany.The wonderful dreamscape, the beach, the lake and of course the spectacular artists like Foo Fighters, Thirthy Seconds To Mars, Seeed and The Kooks attracts more than 20.000 visitors every year.`,
    startDate: `2021-08-13`,
    endDate: `2021-08-15`,
    video: [`3Re7l5r6sSo`, `ZoMEg4t7abg`, `mULpVsn0rTk`, `z-d1uS3_Yw8`],
    thumbnail: `https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F113477733%2F108059950523%2F1%2Foriginal.20201003-125021?h=2000&w=720&auto=format%2Ccompress&q=75&sharp=10&s=bbaf783f0ac6ee54b2f6e5b491d5586b`,
    poster: `https://en.concerts-metal.com/images/flyers/202008/1597408735.webp`,
    homepage: `https://www.highfield.de/en/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Highfield+Festival.jpeg`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`),
    country: Types.ObjectId(`6015193ad31d3859d7aeadf9`),
    artists: [],
  },

  {
    name: `Maifeld Derby 2021`,
    description: `Bisher hatten wir noch diverse Ausweichlocations gehalten, aber nun schwenken wir auf das „große“ Derby in der gewohnten Form. Wobei „gewohnt“ natürlich an die derzeit geltenden Umstände angepasst werden muss. Wir arbeiten bereits an einem umfassenden Hygienekonzept, insbesondere einer „Open Air only“ Option. Genaueres erfahrt Ihr sobald es bestätigt ist natürlich zuallererst.`,
    startDate: `2021-06-11`,
    endDate: `2021-06-13`,
    video: [`a3t24Z4_FXc`, `TEWCKOUELFA`, `HtwF_aJY7u4`, `wCQ5YWHD9tk`],
    thumbnail: `https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10:2399970/jb7production-uploads/2019/04/maifeld-derby-2019-featured-1200x675.jpg`,
    poster: `https://images.sk-static.com/images/media/profile_images/events/39695787/huge_avatar`,
    homepage: `https://www.maifeld-derby.de/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Maifeld+Derby.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`),
    country: Types.ObjectId(`6015193ad31d3859d7aeadf9`),
    artists: [],
  },

  {
    name: `Outside Lands Music & Arts Festival 2021`,
    description: `The Outside Lands Music and Arts Festival is a music festival held annually in San Francisco, California, United States, at Golden Gate Park. The festival is produced by Another Planet Entertainment, Superfly Presents, and Starr Hill Presents. It is the largest independently owned music festival in the United States.`,
    startDate: `2021-08-6`,
    endDate: `2021-08-8`,
    video: [`LCQJOxTpWe8`, `pOHo9xuAI3M`, `6esCKTJoM4M`, `7BLZtXgUtaI`],
    thumbnail: `https://liveforlivemusic.com/wp-content/uploads/2020/06/outside-lands-2021-740x390.jpg`,
    poster: `https://www.sfoutsidelands.com/uploads/desktop-admat1800x1988.jpg`,
    homepage: `https://www.sfoutsidelands.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Outside+Lands+Music+%26+Arts+Festival.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4fe`),
    country: Types.ObjectId(`6015193ad31d3859d7aeae0f`),
    artists: [],
  },

  {
    name: `Rock The Castle 2021`,
    description: `In passato si pensava che le noci fossero molto caloriche e che dovessero essere eliminate dalla dieta dimagrante. Qesto mito persiste ancora oggi, ma com’è veramente? Le noci ingrassano? O forse le noci aiutano a perdere peso? Quali sono le noci più sane? Quante noccioline al giorno si possono mangiare? Leggi l’articolo e scopri com’è veramente!`,
    startDate: `2021-06-26`,
    endDate: `2021-06-26`,
    video: [`0oV42G1JWJ0`, `k-jTHfo3efQ`, `zZVNbY8YWfw`, `XGMX7IxHqAM`],
    thumbnail: `https://d31fr2pwly4c4s.cloudfront.net/7/a/4/1282018_2_rock-the-castle-weekender.jpg`,
    poster: `https://en.concerts-metal.com/images/flyers/201911/1574367185.webp`,
    homepage: `https://www.rockthecastle.it/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Rock+The+Castle.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4fe`), //락
    country: Types.ObjectId(`6015193ad31d3859d7aeae0f`), //이태리
    artists: [],
  },

  {
    name: `Carvalheira na Ladeira 2021`,
    description: `Seja nas prévias ou no meio da folia; com o pé na areia ou de gravata borboleta; aqui mesmo na Carvalheira ou no paraíso de Fernando de Noronha. Cada mínimo detalhe é pensado pra que você saia dos nossos encontros com horas de diversão tatuadas nas memórias e no coração. Porque no fim das contas, nosso negócio não é fazer festas. Nosso trabalho mesmo é fabricar boas lembranças. Vem, se joga, curta ao máximo e sinta como é a experiência Carvalheira`,
    startDate: `2021-02-13`,
    endDate: `2021-02-16`,
    video: [`mPMGO3n_LIk`, `Mq98RuyaTmI`, `Xb76eFFXnDw`, `q1aFbClYcgg`],
    thumbnail: `https://portalbrasil.com.br/wp-content/uploads/2020/03/Carvalheira-na-Ladeira-2021-678x381.jpg`,
    poster: `https://images.sk-static.com/images/media/profile_images/events/39720475/huge_avatar`,
    homepage: `https://www.padraocarvalheira.com.br/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Carvalheira+na+Ladeira.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4fa`),
    country: Types.ObjectId(`6015193ad31d3859d7aeae08`),
    artists: [],
  },

  {
    name: `Olinda Beer 2021`,
    description: `Vem ai a maior prévia de carnaval do planeta. Vendas e mais informações em breve.`,
    startDate: `2021-02-07`,
    endDate: `2021-02-07`,
    video: [`52p9oWk8JGg`, `bOSSquU85RM`, `mcjH0Ubmt0c`, `Tnb9GGAOTBQ`],
    thumbnail: `https://portalbrasil.com.br/wp-content/uploads/2020/03/Carvalheira-na-Ladeira-2021-678x381.jpg`,
    poster: `https://images.sk-static.com/images/media/profile_images/events/39717733/huge_avatar`,
    homepage: `https://recifeingressos.com/olinda-beer/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Olinda+Beer.JPG`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4fa`),
    country: Types.ObjectId(`6015193ad31d3859d7aeae07`),
    artists: [],
  },

  {
    name: `Olinda Beer 2021`,
    description: `En 2021 no solo tendremos la revancha de la quinta edición, ¡también celebraremos la edición VI! Vive la experiencia del único festival de metal extremo en México y uno de los más importantes de América Latina.`,
    startDate: `2021-02-07`,
    endDate: `2021-02-07`,
    video: [`WBUi00RNZG8`, `imbHtKUVa48`, `mLv26p5LQBo`, `7eEXPTOZr6g`],
    thumbnail: `http://mty360.net/wp-content/uploads/2019/11/96f718e0-1237-4cb7-a868-27374c3f6a87.jpg`,
    poster: `https://www.concerts-metal.com/images/flyers/202101/1610949750.jpeg`,
    homepage: `http://www.metalstorm.net/home/`,
    stamp: ``,
    genre: Types.ObjectId(`6015193ad31d3859d7aeae0e`),
    country: Types.ObjectId(`6015193ad31d3859d7aeae07`),
    artists: [],
  },
  {
    name: `Tomorrowland`,
    description: `Tomorrowland, held in Belgium, is one of the largest and most famous EDM music festivals in the world. It started relatively recently in 2005, but it has already gained fame around the world and now spinoffs are held in Georgia and Brazil. Notable past musicians include Skrillex, Swedish House Mafia, Armin van Buren, Avicii, David Geta, and Steve Aoki.`,
    startDate: `2021-10-10`,
    endDate: `2021-10-15`,
    video: [`_0KMSc7Jz_Y`, `hvIg3PTJWxs`, `nntg3BCzEp0`, `9KUFBEbvCYY`],
    thumbnail: `https://i1.sndcdn.com/artworks-8kLoINULlqIm2QgI-9sejcQ-t500x500.jpg`,
    poster: `https://cdn.uc.assets.prezly.com/c07fd953-8b93-4422-8b54-3daf2da6baf8/-/preview/1200x1200/-/format/auto/`,
    homepage: `https://www.tomorrowland.com/home/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Tomorrowland.jpg`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`),
    country: Types.ObjectId(`6015193ad31d3859d7aeadf7`),
    artists: [],
  },
  {
    name: `Fugi Rock`,
    description: `Headliner is Tame Impala and Mura Masa participates Spanish female band HINDS and Taiwan's Elephant Gym with amazing techniques`,
    startDate: `2020-08-21`,
    endDate: `2020-08-23`,
    video: [`3rGXF2hTo5c`, `66eLUtaQpfs`, `c7OKoXubu2o`, `3rGXF2hTo5c`],
    thumbnail: `https://news.cgtn.com/news/2020-06-06/Fuji-Rock-Festival-canceled-for-first-time-because-of-pandemic-R6ABqhl03u/img/3741f81e1e7243df9516803cb39ff736/3741f81e1e7243df9516803cb39ff736.jpeg`,
    poster: `https://en.concerts-metal.com/images/flyers/202005/1588445574.webp`,
    homepage: `https://en.fujirockfestival.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Fugi+Rock.jpg`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`),
    country: Types.ObjectId(`6015193ad31d3859d7aeaded`),
    artists: [],
  },
  {
    name: `EDC Las Vegas`,
    description: `Under the Electric Sky, we come together to celebrate life, love, art, and music. From the stages and the sound to the pyrotechnics and the performers, so many unique elements go into bringing this world to life. We invite you to wander, explore, interact, and connect. Imagination and positive energy are the currency of this place.`,
    startDate: `2021-05-21`,
    endDate: `2021-05-23`,
    video: [`EChd8F4mw_g`, `dSXWIXoR_tE`, `AbH2tJrCoAE`, `M-M3rdL_WLQ`],
    thumbnail: `https://i.pinimg.com/originals/cc/dd/45/ccdd454e5b4d9cf2317e199661b81952.jpg`,
    poster: `https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/21/2019/05/13111653/edc_las_vegas_2019_lu_lubd_1080x1350_r08-compressor.png`,
    homepage: `https://lasvegas.electricdaisycarnival.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_EDC+Las+Vegas.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`),
    country: Types.ObjectId(`6015193ad31d3859d7aeae0f`),
    artists: [],
  },
  {
    name: `Elysian Gangchon Beer Festival`,
    description: `This festival, which is held at the outdoor lawn plaza of the Elysian Gangchon Resort, allows you to enjoy not only domestic beer, but also a variety of beers where imported beer brands can enjoy beer on-site at their respective booths. In addition, you can enjoy the food of the chefs that the resort boasts along with beer snacks. 
    Prior to the festival, performances and music videos of various genres such as indie bands, acoustic bands, jazz performances, etc. will be screened from 12 p.m. to 7 p.m., followed by recreational and memorable dance song time, bubble show, mime, etc. conducted by professional announcers. Performances are also held.`,
    startDate: `2017-10-18`,
    endDate: `2017-10-19`,
    video: [`g1SFF9J8E6Q`, `xN6ydnHhtG4`, `Opc57vvrcTk`, `W-g2lpRJnts`],
    thumbnail: `https://mblogthumb-phinf.pstatic.net/MjAxNzA5MDVfMzkg/MDAxNTA0NjExMjczODQ3.pqEUVvigiQVUB-VB9W9dwW90mRr2GISdg78Nr4m7SLAg.yIxRNxj19TZ5kg9-BhBxzCU5wflUmAerx8toIOFTHtcg.PNG.platinumcraftbeer/%EC%98%90%EB%A6%AC%EC%94%A8%EC%95%88%EB%A7%A5%EC%A3%BC%EB%AE%A4%EC%A7%81%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C.png?type=w800`,
    poster: `https://pbs.twimg.com/media/DHgHLRrV0AE8gzB.jpg`,
    homepage: `https://elysian.co.kr/main.asp`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Elysian+Gangchon+Beer+Festival.jpg`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4fe`),
    country: Types.ObjectId(`6015193ad31d3859d7aeadec`),
    artists: [],
  },
  {
    name: `World Dj Festival`,
    description: `The start of the World DJ Festival is the Seoul World DJ Festival, which was selected as a program of the 2007 Hi Seoul Festival, organized by Ryu Jae-hyun, and provided free performances with support from the Seoul Metropolitan Government. Since 2017, the copyright has been transferred to BPC Tangent and is held. From 2016 to 2017, various EDM festivals such as Ultra Music Festival KOREA, World Club Dome KOREA [1], Spectrum Dance Music Festival, and 5TARDIUM will begin in earnest in Korea. It can be said that the EDM festivals before that were opened by Wall Depe. In terms of timing, it is the fastest among the EDM festivals of that year, so there is a feeling to announce the opening of the EDM season. Unfortunately, it feels like an eve because Ultra KOREA, annoyance, is held two to three weeks after the Wall Defe is held. The venue is even more so because both Wall Dipe and Ump were held at Jamsil Olympic Stadium in 2017 and 2018.`,
    startDate: `2020-10-26`,
    endDate: `2020-11-01`,
    video: [`el40Lil06DE`, `hh0tAk5jto4`, `C7IpLSCS-z0`, `Tcvnv8X5Qlc`],
    thumbnail: `https://festpopassets.s3.amazonaws.com/1554254526386`,
    poster: `https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/59373819_439136769989791_8801858801054515200_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=ik-FKgJ6qCkAX_ZGC9f&_nc_ht=scontent-ssn1-1.xx&oh=5c84811f3de486e197225ee316222d94&oe=603D4412`,
    homepage: `http://wdjfest.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_World+Dj+Festiva.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`),
    country: Types.ObjectId(`6015193ad31d3859d7aeadec`),
    artists: [],
  },
  {
    name: `5tardium`,
    description: `Overwhelming pentagon stage around you, miraculous thrill with music flowing all over the body, and performances that bring all fantasy to real. 
    When you enter the 5tardium, unforgettable and supernatural world leads you.`,
    startDate: `2019-06-26`,
    endDate: `2019-06-30`,
    video: [`gf-jZ5eWEYA`, `jDtKCeB86Sg`, `QRacRCaB6f0`, `92TMjGjPWQw`],
    thumbnail: `https://lh3.googleusercontent.com/proxy/wDgsEQ7jVvLlp32NGdrBxb55TkGyhAFOifG5YnwR7to-upkdhQJFfytf6-NEv93f5BSKkugpoLuGNj-gDOStYh_AnrDxLzZVqY7DTlMPv8SViekOQa5wxSijC7ysVdQ6SegPL0jyzAjh6y5sRFK8`,
    poster: `https://lh3.googleusercontent.com/proxy/i5FCZuNoTWuGjewX94eG3yUTqkoyoMhUt3SGazasV7PA3BCfRmb6eREK_qAWGL9oEbTynh5RnS38CVrjqSG4q-lzSfmuF_kAeTLU1THhffjYl6f3HIm4c4YNvwhd_AkTfw`,
    homepage: `http://5tardium.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_5tardium.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`),
    country: Types.ObjectId(`6015193ad31d3859d7aeadec`),
    artists: [],
  },
  {
    name: `Defcon .1`,
    description: `A hard style, hardcore techno[1] festival started in the Netherlands in 2003 hosted by Q-Dance. Among them, hard style is the main axis. The image of the festival is'recycling'. In the trailer video or after movie, it is easy to see playing or carrying around small items using paper boxes. In 2016, Defqon.1, the home of the festival, has reached 100,000 visitors to the Netherlands, and the scale continues to grow.`,
    startDate: `2019-04-12`,
    endDate: `2019-04-15`,
    video: [`vJ2eHsQv7Ac`, `DpxyDPzQZ7E`, `mw9WcQo6aIY`, `fN1Gw8PHkAI`],
    thumbnail: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-Aj7swlrpjdAxx0X6u_cAMDHWYNijGUpPg&usqp=CAU`,
    poster: `https://i.pinimg.com/originals/5d/c4/11/5dc4113c53ba89440357c147ed79914e.jpg`,
    homepage: `https://www.q-dance.com/en/events/defqon-1/defqon-1-weekend-festival-2021`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Defcon.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`),
    country: Types.ObjectId(`6015193ad31d3859d7aeadfc`),
    artists: [],
  },
  {
    name: `World Club Dom`,
    description: `Electronica Festival held in Incheon Metropolitan City from 2017. It is a Korean version of the World Club Dome festival of brands held overseas like Ultra Music Festival Korea.[3] As a result, Incheon Metropolitan City has two major music festivals along with the Pentaport Rock Festival.`,
    startDate: `2020-01-10`,
    endDate: `2020-01-12`,
    video: [`QTW3NrH04sU`, `FnDAhF-nxeA`, `ZD2PiQQTS3M`, `5t-PjX7vF5Q`],
    thumbnail: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJCLY-NDIcsOYlcImAJ-iItOLZz2ca02DThg&usqp=CAU`,
    poster: `https://amf.cool/_applications/app_amfcool/_assets/images/festivais/europe/Germany/2020/wolrd-club-dome-winter-2020.jpg`,
    homepage: `https://www.worldclubdome.com/`,
    stamp: ``,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`),
    country: Types.ObjectId(`6015193ad31d3859d7aeadf9`),
    artists: [],
  },
  {
    name: `A3C`,
    description: `The new A3C Festival features more artists and shows over 5-days across Atlanta. The featured concerts take place at Center Stage, The Masquerade and The Tabernacle celebrating hip-hop's past, present and future.`,
    startDate: `2020-10-07`,
    endDate: `2020-10-09`,
    video: [`rQCr-oKFTWY`, `6Iizfdps1F4`, `wLpoggTLNOU`, `M135cJj3_30`],
    thumbnail: `https://64.media.tumblr.com/fa672f03bff54f141b06109495406019/tumblr_p7k3rgvSDg1s0i82zo1_1280.png`,
    poster: `https://static.hiphopdx.com/2016/09/A3C-Festival-Poster-2016-Final.png`,
    homepage: `https://www.a3cfestival.com/festival`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_A3C.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4fb`),
    country: Types.ObjectId(`6015193ad31d3859d7aeae0f`),
    artists: [],
  },
  {
    name: `Summer Sonic`,
    description: `The Summer Sonic Festival is an annual two- or three-day rock festival held at the same time in Osaka and Chiba, Japan. The majority of the bands playing in Osaka the first day go to Chiba the following day and vice versa. The line-up contains many Japanese rock musicians from both major and indie record companies, and also international acts. It also operates the festival Sonicmania, with an EDM focus, since 2011. Summer Sonic is an independent festival, owned by Creativeman Productions Ltd.`,
    startDate: `2020-09-19`,
    endDate: `2020-09-21`,
    video: [`Z49AnoS7C9Q`, `xEl9G3iKtZM`, `JIpmz8m76PI`, `I8C7F3Yxo4w`],
    thumbnail: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHNNuZbWDzJYCSKbAH3nuBAH2AvLKLwkiq2Q&usqp=CAU`,
    poster: `https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/Super-Sonic-2021-Lineup-Poster.jpg`,
    homepage: `https://www.musicfestivalwizard.com/festivals/summer-sonic-2020/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Summer+Sonic.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`),
    country: Types.ObjectId(`6015193ad31d3859d7aeaded`),
    artists: [],
  },
  {
    name: `Sounce Parade`,
    description: `It is a music festival organized by RYUS, directed by Ryu Jae-hyun, who previously planned Waldife. The concept combines water play, various stages, and artists, and some concepts are similar to Water Bomb, where the holding period remains.`,
    startDate: `2020-09-19`,
    endDate: `2020-09-21`,
    video: [`o4AecMV_qRM`, `a1XC_xap4Kg`, `kPNIwrq4wgI`, `G0Zn0rIyjTU`],
    thumbnail: `https://www.thefestival.co.kr/upfile/photo/2016/01/thumb_b_76253_1453729286.jpg`,
    poster: `https://tkfile.yes24.com/upload2/PerfBlog/201707/20170724/20170724-27025_1.jpg`,
    homepage: `https://www.instagram.com/sounceparade/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Sounce+Parade.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`),
    country: Types.ObjectId(`6015193ad31d3859d7aeadff`),
    artists: [],
  },
  {
    name: `Spectrum`,
    description: `The Electronica Festival has been held by SM Entertainment since 2016. If it is successful in Korea, it will be held in Asia and around the world. Unlike other festivals, it is attracting attention for its conceptualized sculptures and a lineup aimed at a wide range of ages.`,
    startDate: `2020-08-01`,
    endDate: `2020-08-02`,
    video: [`qu0YQ8kAUCU`, `-IyMhWQf_zo`, `gKDdm7AO4jo`, `-zpKYVB24kM`],
    thumbnail: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Spectrum_Dance_Music_Festival_Dream_Station_Stage_%282%29.jpg/1600px-Spectrum_Dance_Music_Festival_Dream_Station_Stage_%282%29.jpg`,
    poster: `https://ww.namu.la/s/06948f6a873547302ad58d41349ba1138f833d71c2ac585905f996fb1cb31eec6bf53fe3637c410de4fa157e003f67bda9851d40c384303f7251492a765e9334bb8b3c353ff38bb2d080d27574ba5333a7252e9886261f3e4c1f74a36a1caa5c35359101d8d112e4d404233b23e47b36`,
    homepage: `http://spectrumdmf.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Spectrum.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`),
    country: Types.ObjectId(`6015193ad31d3859d7aeadf4`),
    artists: [],
  },
  {
    name: `Air Beat One`,
    description: `Meine Reise sollte mich dieses Jahr nach Italien führen. Aber die globale Pandemie machte mir einen Strich durch die Rechnung. Stattdessen erlebte ich, wie stark die mentale Verbindung zu meinen Begleitern der letzten Jahre ist und dafür bin ich unglaublich dankbar. My trip was supposed to take me to Italy this year. But the global pandemic put me through the drain. Instead, I experienced how strong the mental connection to my companions in recent years is, and I am incredibly grateful for that.`,
    startDate: `2018-07-11`,
    endDate: `2018-07-15`,
    video: [`3fxuIcIpZQY`, `sChQpKIB0jg`, `XLYW21mQuRI`, `cDxTNrmIX-E`],
    thumbnail: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-jcccFzdIrVe9Im7LXYoyXQBmTbiVgAtvdg&usqp=CAU`,
    poster: `https://i.pinimg.com/564x/04/7f/9a/047f9ae2e0844428212f6380025c24cc.jpg`,
    homepage: `https://www.airbeat-one.de/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Air+Beat+One.png`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`),
    country: Types.ObjectId(`6015193ad31d3859d7aeae00`),
    artists: [],
  },
  {
    name: `Wild Land`,
    description: `fter a spectacular sold-out debut in 2019, Brisbane’s wildest event will return in March 2021 for a very special Wildlands Weekender!. This All-Australian edition will bring the biggest bands, electronic and hip-hop acts from around the country to our sun-soaked northern doorstep.From the teams who bring you Beyond The Valley in Victoria, and Origin Fields in Western Australia, Wildlands will once again deliver its renowned flair of world-class production and stage design.In line with COVID-19 precautionary measures, this will be a single-stage event with a strictly limited capacity. We have extended the event of two days so more music lovers have the opportunity to enjoy the long awaited return of much loved summer festivals.`,
    startDate: `2021-03-06`,
    endDate: `2021-03-09`,
    video: [`WOsaB1Ay9MU`, `w28PLY8ved8`, `kz4HEf4-nv0`, `81owb93qm-Y`],
    thumbnail: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPBoJvmMBXTemMR_9DPDdmDz6Y9JeniRMn8A&usqp=CAU`,
    poster: `http://amf.cool/_applications/app_amfcool/_assets/images/festivais/oceania/Australia/2021/wildlands-2021.jpg`,
    homepage: `https://www.wildlandsfestival.com.au/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Wild+Land.jpg`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4fa`),
    country: Types.ObjectId(`6015193ad31d3859d7aeae05`),
    artists: [],
  },
  {
    name: `Abroadfest`,
    description: `Abroadfest 2021, the first festival of the year, returns stronger than ever; a weekend dedicated to electronic music lovers in the middle of the winter season. The production, crowd and the atmosphere of the festival make it a unique and unrepeatable experience year after year, as the organisers invite fans to share the magical Abroadfest moments. In past editions, the lineup has included Tiesto, Kaskade, The Chainsmokers, Marshmello, Oliver Heldens, ZedsDead, Rezz, Louis The Child, NGHTMRE, Slander, Two Friends, Gryffin, Flux Pavilion, Slushii, Whethan and many more. Join the unforgettable Abroadfest experience. If it’s exciting to think about, then imagine living it!`,
    startDate: `2021-03-06`,
    endDate: `2021-03-09`,
    video: [`dkIpqGewAOM`, `xSNhxWhuUow`, `v9oTD749yYA`, `-hxDIA4DJWo`],
    thumbnail: `https://media.resources.festicket.com/image/404x570/center/middle/filters:quality(70)/www/photos/02_Afest21_655x926Pix.jpg`,
    poster: `https://i.pinimg.com/originals/19/19/26/191926d175b040152baf31a38af7abe0.png`,
    homepage: `https://www.abroadfest.com/`,
    stamp: `https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_Abroadfest.jpg`,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`),
    country: Types.ObjectId(`6015193ad31d3859d7aeadfd`),
    artists: [],
  },
  {
    name: `Amsterdam Dance Event`,
    description: `The Amsterdam Dance Event (ADE) is a five-day electronic music conference and festival held annually in mid-October. The event is organized by The Amsterdam Dance Event Foundation and offers a full program of daytime conferences at ADE Pro, ADE Tech, ADE University, ADE Beamlab, ADE Green, ADE Sound Lab and ADE Beats alongside the ADE By Day festival program and the nighttime ADE Festival, which features over 1,000 events and 2,500 artists over five days in 200 clubs and venues.`,
    startDate: `2021-10-21`,
    endDate: `2021-10-25`,
    video: [`MTnAWEaYRVc`, `Yikc-gyTukA`, `nHZ9--eN4S0`, `SN61VBillv8`],
    thumbnail: `https://www.ibizabynight.net/wp-content/uploads/2020/09/ade-amsterdam-2021-1024x1024.png`,
    poster: `https://www.ibizabynight.net/wp-content/uploads/2020/09/ade-amsterdam-2021-1024x1024.png`,
    homepage: `https://www.amsterdam-dance-event.nl/en/`,
    stamp: ``,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), // 일렉
    country: Types.ObjectId(``),
    artists: [],
  },
  {
    name: `AFROPUNK`,
    description: `Afro-punk (sometimes spelled Afro-Punk, Afropunk or AfroPunk) refers to the participation of African Americans and other black people in punk and alternative subcultures, especially in the United States where this scene had been overwhelmingly white.`,
    startDate: `2021-07-07`,
    endDate: `2021-07-10`,
    video: [`SLzMI0NK9_o`, `pNfrh8JLDn4`, `xZMMYFCdsf0`, `4IAdQHHNR7I`],
    thumbnail: `https://i.pinimg.com/originals/99/bf/c8/99bfc85a698015ef8ad543f762dae627.jpg`,
    poster: `https://i.pinimg.com/originals/99/bf/c8/99bfc85a698015ef8ad543f762dae627.jpg`,
    homepage: `https://afropunk.com/`,
    stamp: ``,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), // 일렉
    country: Types.ObjectId(``),
    artists: [],
  },
  {
    name: `The Governors Ball`,
    description: `The Governors Ball Music Festival (commonly known as Governors Ball or Gov Ball) is a multi-day music festival held on Randalls Island in New York City. Launched in 2011, the festival features an array of genres and styles of music, including rock, electronic, hip-hop, indie, Americana, pop, folk, and more. It is produced by Founders Entertainment, a festival promotion company based in New York City, which also produces The Meadows Music & Arts Festival. Aside from the wide variety of music, the festival features a multitude of popular New York restaurants and food trucks, as well as activities and games.`,
    startDate: `2021-09-24`,
    endDate: `2021-09-26`,
    video: [`N9oL0nikyZk`, `cw9CbcyY0wM`, `IH-VqDQYi1A`, `3G0Rpm7K-dU`],
    thumbnail: `https://spillmagazine.com/wp-content/uploads/2017/01/The-Governers-Ball-790x1054.jpg`,
    poster: `https://spillmagazine.com/wp-content/uploads/2017/01/The-Governers-Ball-790x1054.jpg`,
    homepage: `https://www.governorsballmusicfestival.com/`,
    stamp: ``,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), // 일렉
    country: Types.ObjectId(``),
    artists: [],
  },
  {
    name: `Les Eurockéennes`,
    description: `Les Eurockéennes de Belfort (French pronunciation: ​[lez‿øʁɔkeɛn də bɛlfɔʁ], English: The Eurockeans from Belfort) is one of France's largest rock music festivals. The Eurockéennes, a play on words involving rock and européennes (Europeans), is a festival based in a nature reserve beside Lac de Malsaucy Belfort.`,
    startDate: `2021-07-04`,
    endDate: `2021-07-07`,
    video: [`Ts94kjvYZho`, `sdqzRtZV3VI`, `CBUicuBd8ow`, `2rFPYQfgESM`],
    thumbnail: `https://www.rocknfolk.com/wp-content/uploads/2020/12/EUROCKEENNES-2021_visuel-scaled.jpg`,
    poster: `https://www.rocknfolk.com/wp-content/uploads/2020/12/EUROCKEENNES-2021_visuel-scaled.jpg`,
    homepage: `https://www.eurockeennes.fr/`,
    stamp: ``,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e4`), // 록
    country: Types.ObjectId(``),
    artists: [],
  },
  {
    name: `Splendour in the Grass`,
    description: `Splendour in the Grass (commonly referred to as Splendour) is an annual Australian music festival held at the North Byron Parklands in Yelgun, New South Wales. Since its inauguration, the festival has also been held in various locations near Byron Bay, New South Wales, and Woodford, Queensland.`,
    startDate: `2021-07-23`,
    endDate: `2021-07-25`,
    video: [`XifqWdqTosI`, `v62xb4Gu3kU`, `crgFPl2eaPE`, `vSflkZTsAxU`],
    thumbnail: `https://www.nme.com/wp-content/uploads/2020/02/poster-sitg-2020@2000x2000.jpg`,
    poster: `https://www.nme.com/wp-content/uploads/2020/02/poster-sitg-2020@2000x2000.jpg`,
    homepage: `https://splendourinthegrass.com/`,
    stamp: ``,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e4`), // 록
    country: Types.ObjectId(``),
    artists: [],
  },
  {
    name: `Defqon.1 Weekend`,
    description: `Defqon.1 Weekend Festival is an annual music festival held in the Netherlands, Chile and Australia. It was founded in 2003 by festival organizer Q-dance. The festival plays mostly hardstyle and related genres such as hardcore techno, hard house and hard trance.`,
    startDate: `2021-06-24`,
    endDate: `2021-06-26`,
    video: [`vJ2eHsQv7Ac`, `mw9WcQo6aIY`, `DpxyDPzQZ7E`, `3skZxOjrJ9c`],
    thumbnail: `https://image.winudf.com/v2/image/Y29tLnBpa3plbHoucWRhbmNlLkRlZnFvbl9zY3JlZW5zaG90c18wX2Q3MmM4NzZm/screen-0.jpg?fakeurl=1&type=.jpg`,
    poster: `https://image.winudf.com/v2/image/Y29tLnBpa3plbHoucWRhbmNlLkRlZnFvbl9zY3JlZW5zaG90c18wX2Q3MmM4NzZm/screen-0.jpg?fakeurl=1&type=.jpg`,
    homepage: `https://www.q-dance.com/en/events/defqon-1/defqon-1-weekend-festival-2021`,
    stamp: ``,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), // 일렉
    country: Types.ObjectId(`6016f3f41372a93cdbd48297`),
    artists: [],
  },
  {
    name: `Mysteryland`,
    description: `Mysteryland is the leading electronic dance music festival in the Netherlands, organized by the Netherlands-based promoter ID&T. Being the first of its kind in the country when it was established, its organizers have billed the event as the oldest dance music festival in the Netherlands. It has most recently been held at Haarlemmermeerse Bos in Haarlemmermeer; an exhibition ground that hosted the 2002 edition of the Dutch gardening festival Floriade. It is traditionally held on the final weekend of August; the next date is August 28-30, 2020. Since 2015, the festival has changed from a one-day to a three-day event with camping. Each year, more than 100.000 visitors from over 100 nationalities are welcomed at Mysteryland.`,
    startDate: `2021-08-27`,
    endDate: `2021-08-29`,
    video: [`oAnzeENTzkA`, `Ivd3e1uUFg4`, `_nfqu72N-wM`, `B9SAuKlVsow`],
    thumbnail: `https://pbs.twimg.com/media/EOPC2mrXsAEKdn0.jpg`,
    poster: `https://pbs.twimg.com/media/EOPC2mrXsAEKdn0.jpg`,
    homepage: `https://www.mysteryland.nl/`,
    stamp: ``,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e6`), // etc
    country: Types.ObjectId(`6016f3f41372a93cdbd48297`),
    artists: [],
  },
  {
    name: `Hot 97 Summer Jam`,
    description: `Summer Jam is the annual hip-hop fest held in East Rutherford, New Jersey and sponsored by New York-based radio station Hot 97FM. Normally held in June, the concert features the most popular acts that hip hop and R&B have to offer in a particular year. The hip-hop summer festival format was originally pioneered and popularized by San Francisco radio station KMEL with their large-scale Summer Jam concerts from 1987 through the 1990s and present day.`,
    startDate: `2021-06-02`,
    endDate: `2021-06-03`,
    video: [`j1jLQtJ0_6o`, `9waimO8gVlQ`, `m4BmKyiqSUM`, `bZ8uBi4oRvc`],
    thumbnail: `https://media.pitchfork.com/photos/5ca3a1ca5885511ab3235ce0/master/pass/Summer-Jam.jpg`,
    poster: `https://media.pitchfork.com/photos/5ca3a1ca5885511ab3235ce0/master/pass/Summer-Jam.jpg`,
    homepage: `https://www.hot97.com/summer-jam/`,
    stamp: ``,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), // 일렉
    country: Types.ObjectId(`6016f3f41372a93cdbd48297`),
    artists: [],
  },
  {
    name: `Best Kept Secret`,
    description: `The Best Kept Secret festival is a three-day music festival held inside the Safaripark Beekse Bergen, within the village of Hilvarenbeek in the south of the Netherlands, since 2013. Best Kept Secret is a music festival with a line-up in which big names are alternated with new discoveries from indie, folk, hip-hop, rock, electronics or a mixture of styles. The festival's centerpiece is a lake at the back of Beekse Bergen safari park. The festival's founder described his vision as aiming to create "something that we’d like to go to ourselves".`,
    startDate: `2021-06-11`,
    endDate: `2021-06-13`,
    video: [`scQSqkYiV3s`, `dabeorqOnSU`, `cPJDBFBhAbo`, `cL7QZv9wCZ8`],
    thumbnail: `https://en.concerts-metal.com/images/flyers/202009/1599310596.webp`,
    poster: `https://en.concerts-metal.com/images/flyers/202009/1599310596.webp`,
    homepage: `https://www.bestkeptsecret.nl/en/`,
    stamp: ``,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e6`), // etc
    country: Types.ObjectId(`6016f3f41372a93cdbd48297`),
    artists: [],
  },
  {
    name: `Distortion`,
    description: `'Controlled chaos' is the only way to describe Distortion. The festival is a celebration of street life and new dance music, so what else could it be other than a massive, 100,000 person strong street party? Split into three parts – Distortion Club, Distortion Ø and Street Parties – Distortion is a multi-facetted experience with varying degrees of premeditation. It's kind of like that movie The Purge, but instead of legal murder, it's all about legal partying. `,
    startDate: `2021-06-03`,
    endDate: `2021-06-07`,
    video: [`27xa11WYzGU`, `KWi7ZfiaV6w`, `uPHQhzbnJ0U`, `dVrTRbA5fH4`],
    thumbnail: `https://img.redbull.com/images/w_830/q_auto,f_auto/redbullcom/2020/5/15/vmqfns2uuarrhewrnuzu/nova-rock-2021-supporting-local-artists`,
    poster: `https://img.redbull.com/images/w_830/q_auto,f_auto/redbullcom/2020/5/15/vmqfns2uuarrhewrnuzu/nova-rock-2021-supporting-local-artists`,
    homepage: `https://www.cphdistortion.dk/`,
    stamp: ``,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e6`), // etc
    country: Types.ObjectId(`6016f3f41372a93cdbd48297`),
    artists: [],
  },
  {
    name: `Electric Daisy Carnival`,
    description: `Electric Daisy Carnival, commonly known as EDC, is the largest electronic dance music festival in North America. The annual flagship event is now held in May, at the Las Vegas Motor Speedway and Orlando. The event primarily features electronic dance producers and DJs, such as Armin van Buuren, Calvin Harris, Diplo, Alesso, Dillon Francis, Martin Garrix, Zedd, Afrojack, Seven Lions, NGHTMRE, Yellow Claw, and Tiësto. The festival incorporates a variety of electronic music, including house, techno, drum and bass, and dubstep.`,
    startDate: `2021-05-21`,
    endDate: `2021-05-23`,
    video: [`Fu6aNpGxaVk`, `wv2SDDcptfU`, `EChd8F4mw_g`, `Zo47D-ZeMmI`],
    thumbnail: `https://cdn.imweb.me/upload/S20200106a105fd03f4b57/fcf9a3f384496.png`,
    poster: `https://cdn.imweb.me/upload/S20200106a105fd03f4b57/fcf9a3f384496.png`,
    homepage: `https://lasvegas.electricdaisycarnival.com/`,
    stamp: ``,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), // 일렉
    country: Types.ObjectId(`6016f3f41372a93cdbd48297`),
    artists: [],
  },
  {
    name: `Dimensions Festival`,
    description: `One of our favourite Croatian music festivals, Dimensions steers clear of the crowded Zrće beach, instead taking itself north to the unique and secluded Fort Punta Christo in Pula. Here it showcases an underground electronic and urban lineup inside the fort's most intimate spaces, including its moat, as well as daytime sessions of the area's stunning beaches.`,
    startDate: `2021-08-13`,
    endDate: `2021-08-18`,
    video: [`y8gJaMOHgSQ`, `r7k5kgbu9zY`, `H_t8PR9qcak`, `3fwdx2V87cY`],
    thumbnail: `https://thegarden.hr/app/uploads/2020/10/dim21-line-up_a3_01-10-600x848.png`,
    poster: `https://thegarden.hr/app/uploads/2020/10/dim21-line-up_a3_01-10-600x848.png`,
    homepage: `https://www.dimensionsfestival.com/`,
    stamp: ``,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e5`), // 힙합
    country: Types.ObjectId(`6016f3f41372a93cdbd48297`),
    artists: [],
  },
  {
    name: `Outlook Festival`,
    description: `Dimensions' sibling festival shares the same stunning location and passion for the electronic underground, but where it deviates is its full-blown commitment to celebrating soundsystem culture. That means reggae, dubstep, drum & bass, jungle, grime and garage are served up on a scale unrivalled anywhere in Europe.`,
    startDate: `2021-07-29`,
    endDate: `2021-08-02`,
    video: [`PWSYi6vQRxg`, `PQ2jJc3DuGo`, `h9hAGm9hEbQ`, `__JiY4WCmno`],
    thumbnail: `https://im.ra.co/images/events/flyer/2019/9/hr-0904-1213209-1261973-front.jpg`,
    poster: `https://im.ra.co/images/events/flyer/2019/9/hr-0904-1213209-1261973-front.jpg`,
    homepage: `https://outlookfestival.com/`,
    stamp: ``,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), // 일렉
    country: Types.ObjectId(`6016f3f41372a93cdbd48297`),
    artists: [],
  },
  {
    name: `Way Out West`,
    description: `Some festivals have a great lineup, others have a great setting. When you combine the two, you're onto something. That's Way Out West in a nut shell. Add in the Stay Out West concept, which keeps the party going well into the wee hours of the night throughout the clubs of Gothenburg, and you have a reliably great festival. It may not have all the bells and whistles of some of the bigger budget festivals, bit it's always a great time. `,
    startDate: `2021-08-12`,
    endDate: `2021-08-14`,
    video: [`zDlKOPC3nxQ`, `P7ODvKN_82c`, `VhwegDuRdTI`, `ReY32F30B-U`],
    thumbnail: `https://www.sonicsherpa.com.au/wp-content/uploads/2019/05/WoW2019.jpg`,
    poster: `https://www.sonicsherpa.com.au/wp-content/uploads/2019/05/WoW2019.jpg`,
    homepage: `https://www.wayoutwest.se/nyheter/way-out-west-will-be-back-2021/`,
    stamp: ``,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e6`), // etc
    country: Types.ObjectId(`6016f3f41372a93cdbd48297`),
    artists: [],
  },
  {
    name: `DGTL Amsterdam`,
    description: `At the forefront of the underground, DGTL balances its uncompromising passion for cutting edge sounds and visual arts with its equally impassioned green initiatives. The concept has clearly worked as the festival has struck a chord with the dance community, resulting in added editions in São Paulo, Barcelona and Tel Aviv. `,
    startDate: `2021-04-10`,
    endDate: `2021-04-12`,
    video: [`ElQZxAORiI4`, `NrQ79UKGcAI`, `Xk2Qi5Old6M`, `IwzOi1q3S3U`],
    thumbnail: `https://dgtl.nl/media/deze.png`,
    poster: `https://dgtl.nl/media/deze.png`,
    homepage: `https://dgtl.nl/?skip_portal=1`,
    stamp: ``,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), // 일렉
    country: Types.ObjectId(`6016f3f41372a93cdbd48297`),
    artists: [],
  },
  {
    name: `Boardmasters`,
    description: `Boardmasters Festival is an annual event held in Cornwall, United Kingdom, usually held over five days on the second weekend of August. The event is a combination of live music and surfing/skateboarding competitions in and around the town of Newquay. The festival was founded in 1981 through the surfing competition, although in 2005 the music side of the festival was created, taking place at Watergate Bay. The current capacity is 53,000.`,
    startDate: `2021-08-11`,
    endDate: `2021-08-15`,
    video: [`1gDujVd9sfM`, `gu_2ADAUOL4`, `lrghaiDh_wg`, `FAFSrq3zy4U`],
    thumbnail: `https://www.boardmasters.com/images/uploads/BM19_Lineup_4th_Announcement_1080x1350.jpg`,
    poster: `https://www.boardmasters.com/images/uploads/BM19_Lineup_4th_Announcement_1080x1350.jpg`,
    homepage: `https://www.boardmasters.com/`,
    stamp: ``,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), // 일렉
    country: Types.ObjectId(`6016f3f41372a93cdbd48297`),
    artists: [],
  },
  {
    name: `BST Hyde Park`,
    description: `British Summer Time Hyde Park (BST Hyde Park) is a music festival held over two weekends once a year in London's Hyde Park. It was the first event AEG Presents held in Hyde Park since they acquired the rights to host concerts there, and features a wide range of musical genres. Since 2013, BST Hyde Park has seen headliners such as Celine Dion, The Rolling Stones, Bon Jovi, Barbra Streisand, Lionel Richie, Kylie Minogue, Black Sabbath, Neil Young, Tom Petty & The Heartbreakers, Arcade Fire, The Who, Blur, The Strokes and Taylor Swift.[1] In 2019 the capacity was 65,000.`,
    startDate: `2021-07-09`,
    endDate: `2021-07-10`,
    video: [`kUryXcq90GA`, `MVQBCZUufLA`, `LddNHrsGnCY`, `7gmCx59jm18`],
    thumbnail: `https://media.resources.festicket.com/www/admin/uploads/images/DD_Socials_NoTicketBox_LN2.jpg`,
    poster: `https://media.resources.festicket.com/www/admin/uploads/images/DD_Socials_NoTicketBox_LN2.jpg`,
    homepage: `https://www.bst-hydepark.com/`,
    stamp: ``,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), // 일렉
    country: Types.ObjectId(`6016f3f41372a93cdbd48297`),
    artists: [],
  },
  {
    name: `Kendal Calling`,
    description: `Each summer Kendal Calling curates a diverse lineup that spans across the genres, taking in rock, indie and dance music, while also laying on a wide range of food and drink, as well as quirky art installations, pop-up bars, a market, and a cinema. All in the beautiful surroundings of Cumbria's Lake District. What's more, Kendal Calling is also a perfect festival to take the family to, thanks to its dedicated kid's area that'll be showcasing all kinds of entertainment throughout the weekend.`,
    startDate: `2021-07-29`,
    endDate: `2021-08-01`,
    video: [`s20mY4r97g8`, `eRJRbmvj_q4`, `_us0c_F-ZHQ`, `fw_k-RGk0zw`],
    thumbnail: `https://bedferret.com/wp-content/uploads/2020/06/2020-Poster.jpg`,
    poster: `https://bedferret.com/wp-content/uploads/2020/06/2020-Poster.jpg`,
    homepage: `https://www.kendalcalling.co.uk/`,
    stamp: ``,
    genre: Types.ObjectId(`6016f660f4857b3e8ca586e4`), // 록
    country: Types.ObjectId(`6016f3f41372a93cdbd48297`),
    artists: [],
  },
];

const artistData = [
  {
    name: `deadmau5`,
    description: `He has worked with other DJs and producers, such as Rob Swire, Wolfgang Gartner, Sofia Toufa, and Kaskade. He has also collaborated with Steve Duda under the group name BSOD (Better Sounding On Drugs), and was part of the group named WTF? with Duda, Tommy Lee and DJ Aero.`,
    image: `https://bookingagentinfo.com/wp-content/uploads/2020/03/Deadmau5-Contact-Information.jpg`,
    video: [`dy3QONktMoY`, `ZEdnybhn7ho`, `5yvwZPyh6To`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec93c`),
      Types.ObjectId(`6016e7ddc5b16c31630ec93d`),
      Types.ObjectId(`6016e7ddc5b16c31630ec93e`),
      Types.ObjectId(`6016e7ddc5b16c31630ec93f`),
    ],
  },
  {
    name: `Martin Garrix`,
    description: `He has performed at music festivals such as Coachella, Electric Daisy Carnival, Ultra Music Festival, Tomorrowland, and Creamfields. In 2014 he headlined the 1st edition of Ultra South Africa making this his first major festival. In the same year he became the youngest DJ to headline 2014 Ultra Music Festival at the age of 17.`,
    image: `https://yt3.ggpht.com/ytc/AAUvwnhrRStY9qD7J5GPEENbaQV0y0LAC8Pn0AuCbdLTfA=s900-c-k-c0x00ffffff-no-rj`,
    video: [`jNF5KWNnbDU`, `quOxSTKB6qk`, `rp31_j9knMI`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec93c`),
      Types.ObjectId(`6016e7ddc5b16c31630ec93d`),
      Types.ObjectId(`6016e7ddc5b16c31630ec93e`),
      Types.ObjectId(`6016e7ddc5b16c31630ec93f`),
    ],
  },
  {
    name: `The Strokes`,
    description: `The Strokes are an American rock band from Manhattan, New York. Formed in 1998, the band is composed of singer Julian Casablancas, guitarists Nick Valensi and Albert Hammond Jr., bassist Nikolai Fraiture, and drummer Fabrizio Moretti. They are one of the more prominent bands of the garage rock and post-punk revivals, aiding in the resurgence of indie rock in New York City.`,
    image: `https://cdn.britannica.com/77/205077-050-358F982F/The-Strokes-Nikolai-Fraiture-Fabrizio-Moretti-Albert-2006.jpg`,
    video: [`ewOPQZZn4SY`, `BjC0KUxiMhc`, `o4qsjmLxhow`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec93c`),
      Types.ObjectId(`6016e7ddc5b16c31630ec93d`),
      Types.ObjectId(`6016e7ddc5b16c31630ec93e`),
      Types.ObjectId(`6016e7ddc5b16c31630ec93f`),
    ],
  },
  {
    name: `Gorillaz`,
    description: `Gorillaz are a British virtual band created in 1998 by musician Damon Albarn and artist Jamie Hewlett. The band primarily consists of four animated members: 2-D, Murdoc Niccals, Noodle, and Russel Hobbs. Their fictional universe is presented in music videos, interviews and short cartoons. In reality, Albarn is the only permanent musical contributor, and Gorillaz' music often features collaborations with a wide range of featured artists.`,
    image: `https://sonar.es/system/attached_images/19685/medium/gorillaz-sonar-bcn-2018.jpg?1517486863`,
    video: [`u0RtFobm4uU`, `fUm7t_BLeME`, `8k0Gyp366Ng`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec93c`),
      Types.ObjectId(`6016e7ddc5b16c31630ec93d`),
      Types.ObjectId(`6016e7ddc5b16c31630ec93e`),
      Types.ObjectId(`6016e7ddc5b16c31630ec93f`),
    ],
  },
  {
    name: `ALAN WALKER`,
    description: `Alan Olav Walker (born 24 August 1997) is an English-Norwegian DJ and record producer. In 2015, Walker received international acclaim after releasing the single "Faded", which received platinum certifications in 14 countries. In 2020, he was ranked 26th on DJ Mag. He released his debut studio album, Different World, in 2018.`,
    image: `https://www.thefamouspeople.com/profiles/images/og-alan-walker-42267.jpg`,
    video: [`wa6Xz6tk_XI`, `jZGWknhg8kA`, `eXzestWGq2U`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec93c`),
      Types.ObjectId(`6016e7ddc5b16c31630ec93d`),
      Types.ObjectId(`6016e7ddc5b16c31630ec93e`),
      Types.ObjectId(`6016e7ddc5b16c31630ec93f`),
    ],
  },
  {
    name: `AIRBOURNE`,
    description: `Airbourne are an Australian hard rock band formed in Warrnambool, Victoria in 2003. Mainstay members are Joel O'Keeffe on lead vocals and lead guitar, and his brother Ryan O'Keeffe on drums. They were later joined by Justin Street on bass guitar and backing vocals. David Roads (rhythm guitar and backing vocals) was also a mainstay member until leaving the band in April 2017 – Harri Harrison was announced as his replacement.`,
    image: `https://townsquare.media/site/366/files/2019/08/44.png?w=980&q=75`,
    video: [`t5lan7-kUc0`, `8GVVIZw_7nE`, `Mxxk5iS9nVM`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec940`),
      Types.ObjectId(`6016e7ddc5b16c31630ec941`),
      Types.ObjectId(`6016e7ddc5b16c31630ec944`),
      Types.ObjectId(`6016e7ddc5b16c31630ec943`),
    ],
  },
  {
    name: `Lionel Richie`,
    description: `Lionel Brockman Richie Jr. (born June 20, 1949) is an American singer, songwriter, composer, record producer, actor, and television judge. In 1970s he recorded with funk band the Commodores, and during his solo career made him one of the most successful balladeers of the 1980s.`,
    image: `https://media.gq.com/photos/5bbfc27db194692d3d422482/4:3/w_4347,h_3260,c_limit/GQ110118GroomingAwards_01.jpg`,
    video: [`mHONNcZbwDY`, `nqAvFx3NxUM`, `s47n8E2BuWc`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fa`), // 재즈
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec940`),
      Types.ObjectId(`6016e7ddc5b16c31630ec941`),
      Types.ObjectId(`6016e7ddc5b16c31630ec944`),
      Types.ObjectId(`6016e7ddc5b16c31630ec943`),
    ],
  },
  {
    name: `Lewis Capaldi`,
    description: `Lewis Marc Capaldi (born 7 October 1996) is a Scottish singer-songwriter and musician. He was nominated for the Critics' Choice Award at the 2019 Brit Awards. In March 2019, his single "Someone You Loved" topped the UK Singles Chart where it remained for seven weeks, and in November 2019, reached number one on the US Billboard Hot 100, it was nominated at the 62nd Annual Grammy Awards for Song of the Year and won the 2020 Brit Award for Song of the Year. Capaldi also won the 2020 Brit Award for Best New Artist.`,
    image: `https://static.billboard.com/files/media/Lewis-Capaldi-bb16-2019-chartbreaker-billboard-ssmfophoi-1548-compressed.jpg`,
    video: [`zABLecsR5UE`, `Jtauh8GcxBY`, `ZHRXmYdwc1o`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fe`), // 기타
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec940`),
      Types.ObjectId(`6016e7ddc5b16c31630ec941`),
      Types.ObjectId(`6016e7ddc5b16c31630ec944`),
      Types.ObjectId(`6016e7ddc5b16c31630ec943`),
    ],
  },
  {
    name: `Flume`,
    description: `Harley Edward Streten (born 5 November 1991), known professionally as Flume, is an Australian musician, DJ and record producer. His self-titled debut studio album, Flume, was released on 9 November 2012 to positive reviews, topping the ARIA Albums Chart and reaching double-platinum accreditation in Australia. Flume is regarded as the pioneer of future bass who helped popularize the genre.`,
    image: `https://static.wikia.nocookie.net/edm/images/1/11/Flume.jpg/revision/latest?cb=20191121182517`,
    video: [`tsK0EG1vpSw`, `eM5DWw3J4BI`, `a2c0IKOS9Oo`],
    genre: Types.ObjectId(`60155e2e646e218005e90634`), // 모든 장르
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec940`),
      Types.ObjectId(`6016e7ddc5b16c31630ec941`),
      Types.ObjectId(`6016e7ddc5b16c31630ec944`),
      Types.ObjectId(`6016e7ddc5b16c31630ec943`),
    ],
  },
  {
    name: `Gessafelstein`,
    description: `Mike Lévy (French pronunciation: [majk levi]; born June 13, 1987), known professionally as Gesaffelstein, is a French musician, DJ, songwriter and record producer from Lyon. He has worked alongside artists as varied as The Weeknd, Daft Punk, Kanye West, A$AP Rocky, Electric Youth, Haim, Miss Kittin, The Hacker, Jean-Michel Jarre and Pharrell Williams.`,
    image: `https://djmag.com/sites/default/files/article/image/gesaffelstein-lofto-nuotr-57a8629293f98.jpg`,
    video: [`HPTBaPZz27M`, `ZGDGdRIxvd0`, `_3YPik6HTpw`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fb`), // 힙합
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec940`),
      Types.ObjectId(`6016e7ddc5b16c31630ec941`),
      Types.ObjectId(`6016e7ddc5b16c31630ec944`),
      Types.ObjectId(`6016e7ddc5b16c31630ec943`),
    ],
  },
  {
    name: `David Guetta`,
    description: `Pierre David Guetta (/ˈɡɛtə/, French pronunciation: [pjɛʁ david ɡɛta]; born 7 November 1967) is a French DJ, record producer and songwriter. Globally, he’s racked up over 50 million record sales, whereas his total number of streams is over 10 billion. In 2011 & 2020, Guetta was voted as the number one DJ in the DJ Mag Top 100 DJs poll. In 2013, Billboard crowned "When Love Takes Over" as the number one dance-pop collaboration of all time. He has been called the "grandfather of EDM".`,
    image: `https://d3vhc53cl8e8km.cloudfront.net/artists/180/q7kxbmvrEbeAio6SVIzRlGzG3kNd6Hk0bpsGOM3V.jpeg`,
    video: [`jHqjkrbQP4Y`, `CGW_jkfA6wc`, `rbMv6o1_3gA`, `5dbEhBKGOtY`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec949`),
      Types.ObjectId(`6016e7ddc5b16c31630ec945`),
      Types.ObjectId(`6016e7ddc5b16c31630ec94b`),
      Types.ObjectId(`6016e7ddc5b16c31630ec948`),
    ], //EXIT Festival
  },
  {
    name: `DJ Snake`,
    description: `William Sami Étienne Grigahcine (born 13 June 1986), better known by his stage name DJ Snake, is a French DJ and record producer from Paris, France. He made his international debut with singles "Bird Machine" and "Turn Down for What" in 2013. "Bird Machine" is a collaboration with fellow French musician Alesia. The single was picked up by Mad Decent, a Los Angeles-based record label run by Diplo.`,
    image: `https://upload.wikimedia.org/wikipedia/commons/2/28/DJ_Snake_Paris_02.2020.jpg`,
    video: [`E0N3TemELaA`, `tD_l_MpuaSo`, `-ZdFgiYZODs`, `WW6MvsQSyxg`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec949`),
      Types.ObjectId(`6016e7ddc5b16c31630ec945`),
      Types.ObjectId(`6016e7ddc5b16c31630ec94b`),
      Types.ObjectId(`6016e7ddc5b16c31630ec948`),
    ], //EXIT Festival
  },
  {
    name: `Eric Prydz`,
    description: `Eric Sheridan Prydz (/prɪdz/; Swedish pronunciation: [ˈêːrɪk ˈɕeːˌrɪdan ˈprʏts]; born 19 July 1976), also known by his aliases Pryda (Swedish pronunciation: [prʏta]) and Cirez D (/ˈsaɪrɛz/) among a number of others, is a Swedish DJ, record producer, and musician. He rose to fame with his 2004 hit single "Call on Me", and saw continued chart success with "Proper Education" in 2007, and "Pjanoo" in 2008. In 2016, he released his debut studio album, Opus.`,
    image: `https://upload.wikimedia.org/wikipedia/commons/2/2c/Eric_Prydz_at_Glastonbury_2009.jpg`,
    video: [`p_rXt7sWn_E`, `A_P5TSuCabg`, `b4xMyJPyVDY`, `alyiA1mtuwo`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec949`),
      Types.ObjectId(`6016e7ddc5b16c31630ec945`),
      Types.ObjectId(`6016e7ddc5b16c31630ec94b`),
      Types.ObjectId(`6016e7ddc5b16c31630ec948`),
    ], //EXIT Festival
  },
  {
    name: `Tyga`,
    description: `Michael Ray Nguyen-Stevenson (born November 19, 1989), known professionally by his stage name Tyga (a backronym for Thank you God always), is an American rapper, singer, songwriter, actor, and television personality. After a number of independent releases, Tyga signed a recording contract with Young Money Entertainment, Cash Money Records and Republic Records in 2008. His major label debut Careless World: Rise of the Last King was released in 2011 and included the successful singles "Rack City", "Faded" featuring Lil Wayne, "Far Away" featuring Chris Richardson, "Still Got It" featuring Drake, and "Make It Nasty".`,
    image: `https://www.aceshowbiz.com/images/wennpic/tyga-iheartradio-music-festival-2015-01.jpg`,
    video: [`LjxulQ1bEWg`, `QOSdNbElLXo`, `lsZDR3s21K8`, `c8Capy5JGto`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fb`), // 힙합
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec949`),
      Types.ObjectId(`6016e7ddc5b16c31630ec945`),
      Types.ObjectId(`6016e7ddc5b16c31630ec94b`),
      Types.ObjectId(`6016e7ddc5b16c31630ec948`),
    ], //EXIT Festival
  },
  {
    name: `The Killers`,
    description: `The Killers are an American rock band formed in Las Vegas in 2001 by Brandon Flowers (lead vocals, keyboards, bass) and Dave Keuning (lead guitar, backing vocals). Since 2002, the band's official lineup has consisted of Flowers, Keuning, Mark Stoermer (bass, rhythm guitar, backing vocals) and Ronnie Vannucci Jr. (drums, percussion), the latter two having joined the band that year. The band's name is derived from a logo on the bass drum of a fictitious band portrayed in the music video for the New Order song "Crystal".`,
    image: `https://i.guim.co.uk/img/media/51878b23b2bf2918e59b6555ea4fbd268328ab68/0_31_3543_2127/master/3543.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=90332f667a27e9e824acc4d7f98f42ac`,
    video: [`gGdGFtwCNBE`, `4go_DzY8wHc`, `iKcCBHDBLAs`, `LOO2orIWdy4`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec949`),
      Types.ObjectId(`6016e7ddc5b16c31630ec945`),
      Types.ObjectId(`6016e7ddc5b16c31630ec94b`),
      Types.ObjectId(`6016e7ddc5b16c31630ec948`),
    ], // Mad Cool Festival
  },
  {
    name: `Deftones`,
    description: `Deftones is an American alternative metal band formed in Sacramento, California in 1988. It was formed by Chino Moreno (lead vocals, rhythm guitar), Stephen Carpenter (lead guitar), Abe Cunningham (drums), and Dominic Garcia (bass). During their first five years, the band's lineup changed several times, but stabilized in 1993 when Cunningham rejoined after his departure in 1990; by this time, Chi Cheng was bassist. The lineup remained stable for fifteen years, with the exception of keyboardist and turntablist Frank Delgado being added in 1999. The band is known as one of the most experimental groups to have come from the alternative metal scene, and are sometimes dubbed by critics as "the Radiohead of metal".`,
    image: `https://www.nme.com/wp-content/uploads/2020/09/DEFTONES_2020_OHMS_INTERVIEW_COMP_2000.jpg`,
    video: [`SRdZTZE5pOA`, `Z6XjTmEYcu8`, `jiY67wIOIw0`, `yKFVHeXFF2I`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec949`),
      Types.ObjectId(`6016e7ddc5b16c31630ec945`),
      Types.ObjectId(`6016e7ddc5b16c31630ec94b`),
      Types.ObjectId(`6016e7ddc5b16c31630ec948`),
    ], // Mad Cool Festival
  },
  {
    name: `Faith No More`,
    description: `Faith No More is an American rock band from San Francisco, California, formed in 1979. Before settling on the current name, the band performed under the names Sharp Young Men and later Faith No Man. Bassist Billy Gould, keyboardist/rhythm guitarist Roddy Bottum and drummer Mike Bordin are the longest-remaining members of the band, having been involved since its inception. The band underwent several early lineup changes, and some major changes later. The current lineup of Faith No More consists of Gould, Bordin, Bottum, lead guitarist Jon Hudson, and vocalist/lyricist Mike Patton.`,
    image: `https://static.billboard.com/files/media/faith-no-more-portrait-1990-billboard-1548-compressed.jpg`,
    video: [`7_7kwmBmoW8`, `W8aviVWYWwU`, `C6hqjJj82ag`, `0rEtmEl-e7M`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec94a`),
      Types.ObjectId(`6016e7ddc5b16c31630ec947`),
      Types.ObjectId(`6016e7ddc5b16c31630ec946`),
      Types.ObjectId(`6016e7ddc5b16c31630ec942`),
    ], // Mad Cool Festival
  },
  {
    name: `Royal Blood`,
    description: `Royal Blood are an English rock duo formed in Brighton in 2011, consisting of Mike Kerr (vocals, bass) and Ben Thatcher (drums). Their sound is anchored in Kerr's unique bass playing technique, in which he uses various effects pedals to make his electric bass sound like a standard electric guitar. Their self-titled debut album was released in August 2014. Their second album How Did We Get So Dark? followed in June 2017.`,
    image: `https://media.resources.festicket.com/www/artists/RoyalBlood.jpg`,
    video: [`k9SQ2xfHEiM`, `XLmx2xLuKCc`, `uURsMKMloM8`, `ho8UoG1wepQ`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec94a`),
      Types.ObjectId(`6016e7ddc5b16c31630ec947`),
      Types.ObjectId(`6016e7ddc5b16c31630ec946`),
      Types.ObjectId(`6016e7ddc5b16c31630ec942`),
    ], // Mad Cool Festival
  },
  {
    name: `Iron Maiden`,
    description: `Iron Maiden are an English heavy metal band formed in Leyton, East London, in 1975 by bassist and primary songwriter Steve Harris. The band's discography has grown to 40 albums, including 16 studio albums, 13 live albums, four EPs, and seven compilations. Pioneers of the new wave of British heavy metal, Iron Maiden achieved initial success during the early 1980s. After several line-up changes, the band went on to release a series of UK and US platinum and gold albums, including 1982's The Number of the Beast, 1983's Piece of Mind, 1984's Powerslave, 1985's live release Live After Death, 1986's Somewhere in Time, and 1988's Seventh Son of a Seventh Son. Since the return of lead vocalist Bruce Dickinson and guitarist Adrian Smith in 1999, the band has undergone a resurgence in popularity, with a series of new albums and tours.`,
    image: `https://i2-prod.mirror.co.uk/incoming/article6441743.ece/ALTERNATES/s1200b/Iron-Maiden.jpg`,
    video: [`X4bgXH3sJ2Q`, `2G5rfPISIwo`, `WxnN05vOuSM`, `86URGgqONvA`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec94a`),
      Types.ObjectId(`6016e7ddc5b16c31630ec947`),
      Types.ObjectId(`6016e7ddc5b16c31630ec946`),
      Types.ObjectId(`6016e7ddc5b16c31630ec942`),
    ], // Download Festival
  },
  {
    name: `The Offspring`,
    description: `The Offspring is an American rock band from Garden Grove, California, formed in 1984. Originally formed under the name Manic Subsidal, the band's lineup consists of lead vocalist and guitarist Bryan "Dexter" Holland, bassist Todd Morse, guitarist Kevin "Noodles" Wasserman and drummer Pete Parada. Over the course of their 37-year career, they have released nine studio albums and experienced lineup changes, most noticeably with their drummers.`,
    image: `https://ents24.imgix.net/image/000/194/352/28676a2a64dc7735c9d4967f4d71385bd3c546f1.jpg?auto=format&fp-x=0.522&fp-y=0.44&fit=crop&crop=focalpoint&w=1600&h=1600`,
    video: [`7iNbnineUCI`, `rZeJa3PGhwg`, `acr_ElNEfN4`, `W_9lPJLtAD8`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec94a`),
      Types.ObjectId(`6016e7ddc5b16c31630ec947`),
      Types.ObjectId(`6016e7ddc5b16c31630ec946`),
      Types.ObjectId(`6016e7ddc5b16c31630ec942`),
    ], // Download Festival
  },
  {
    name: `System of a Down`,
    description: `System of a Down (also known as SoaD or simply System) is an Armenian-American heavy metal band formed in Glendale, California, in 1994. It currently consists of members Serj Tankian (lead vocals, keyboards), Daron Malakian (guitar, vocals), Shavo Odadjian (bass, backing vocals), and John Dolmayan (drums), who replaced original drummer Andy Khachaturian in 1997.`,
    image: `https://images-na.ssl-images-amazon.com/images/I/91E3YMWSTjL._AC_SL1500_.jpg`,
    video: [`CSvFpBOe8eY`, `9VvmixeowNI`, `NMFCvjx9j6U`, `iywaBOMvYLI`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec94a`),
      Types.ObjectId(`6016e7ddc5b16c31630ec947`),
      Types.ObjectId(`6016e7ddc5b16c31630ec946`),
      Types.ObjectId(`6016e7ddc5b16c31630ec942`),
    ], // Download Festival
  },
  {
    name: `Disturbed`,
    description: `Disturbed is an American heavy metal band from Chicago, formed in 1994. The band includes vocalist David Draiman, guitarist/keyboardist Dan Donegan, bassist John Moyer and drummer Mike Wengren. Draiman, Donegan and Wengren have been involved in the band since its inception, with Moyer replacing former bassist Steve Kmak, first as session performer in 2003, and then officially in 2005.`,
    image: `https://i.pinimg.com/originals/8b/ee/33/8bee33cdde335eda6bba17aece78e6c7.jpg`,
    video: [`KY8E-O7LCog`, `UAJs2jptzwU`, `Eoz7aNnrkYQ`, `KzHHzIBHBw0`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec94d`),
      Types.ObjectId(`6016e7ddc5b16c31630ec94c`),
      Types.ObjectId(`6016e7ddc5b16c31630ec94e`),
      Types.ObjectId(`6016e7ddc5b16c31630ec94f`),
    ], // Download Festival
  },
  {
    name: `Skepta`,
    description: `Joseph Junior Adenuga (born 19 September 1982), known professionally as Skepta, is a British rapper, songwriter and record producer from Tottenham, North London. Skepta, alongside his younger brother Jme, joined Roll Deep for a short period of time before becoming founding members of Boy Better Know in 2005.`,
    image: `https://media.timeout.com/images/103285704/image.jpg`,
    video: [`VpD29TcC7cU`, `2Yh753AJgKs`, `ZGL3SCyUwPE`, `PyqFPnAjLPk`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fb`), // 힙합
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec94d`),
      Types.ObjectId(`6016e7ddc5b16c31630ec94c`),
      Types.ObjectId(`6016e7ddc5b16c31630ec94e`),
      Types.ObjectId(`6016e7ddc5b16c31630ec94f`),
    ], // Parklife
  },
  {
    name: `Lewis Capaldi`,
    description: `Khalid Donnel Robinson (born February 11, 1998) is an American singer and songwriter. He is signed to Right Hand Music Group and RCA Records. In March 2017, Khalid released his debut studio album, American Teen, the album spawned the US top-20 singles, "Location" and “Young Dumb & Broke”, and was later certified double platinum by the Recording Industry Association of America (RIAA).`,
    image: `https://upload.wikimedia.org/wikipedia/commons/d/df/Khalid-MTV_smiling.jpg`,
    video: [`x3bfa3DZ8JM`, `hE2Ira-Cwxo`, `IPfJnp1guPc`, `BDocp-VpCwY`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fb`), // 힙합
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec94d`),
      Types.ObjectId(`6016e7ddc5b16c31630ec94c`),
      Types.ObjectId(`6016e7ddc5b16c31630ec94e`),
      Types.ObjectId(`6016e7ddc5b16c31630ec94f`),
    ], // Parklife
  },
  {
    name: `Giggs`,
    description: `Nathaniel Thompson (born 11 May 1981), better known professionally as Giggs, is a British rapper and songwriter from Peckham, London. He released his debut studio album Walk in da Park in 2008 and released a follow-up album Let Em Ave It the following year. Giggs released his third studio album When Will It Stop in October 2013. In 2016, Giggs released his fourth album Landlord, which entered and peaked at number 2 on the UK Albums Chart – becoming the highest-charting album of his career. His mixtape Wamp 2 Dem was released in 2017 and also debuted at No. 2. His latest album ‘Big Bad...’ was released in 2019. Giggs is also the frontman and founder of record label and rap collective SN1 (Spare No 1), which includes, Gunna Dee, Joe Grind, Kyze and Tiny Boost.`,
    image: `https://i.guim.co.uk/img/media/8f45a6d205eed617e710c29ece6fe1673c74e6e7/0_0_2448_1468/master/2448.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=665fe1609f2ba15b0620a0f2e4246b88`,
    video: [`2wwL7bh1jiw`, `-K3qpAePNEw`, `a9jkYrW-pQ0`, `00dFAh9xiE4`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fb`), // 힙합
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec94d`),
      Types.ObjectId(`6016e7ddc5b16c31630ec94c`),
      Types.ObjectId(`6016e7ddc5b16c31630ec94e`),
      Types.ObjectId(`6016e7ddc5b16c31630ec94f`),
    ], // Parklife
  },
  {
    name: `Robyn`,
    description: `Robin Miriam Carlsson (born 12 June 1979), known as Robyn (Swedish pronunciation: [ˈrɔ̌bːʏn]), is a Swedish singer, songwriter, record producer and DJ. She arrived on the music scene with her 1995 debut album, Robyn Is Here, which produced two US Billboard Hot 100 top-10 singles: "Do You Know (What It Takes)" and "Show Me Love". Her second and third albums, My Truth (1999) and Don't Stop the Music (2002), were released in Sweden.`,
    image: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/RobynIn2011_cropped.jpg/1200px-RobynIn2011_cropped.jpg`,
    video: [`CcNo07Xp8aQ`, `F6ImxY6hnfA`, `OMf3W7xw42w`, `uXH0rTleuw4`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fe`), // etc
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec94d`),
      Types.ObjectId(`6016e7ddc5b16c31630ec94c`),
      Types.ObjectId(`6016e7ddc5b16c31630ec94e`),
      Types.ObjectId(`6016e7ddc5b16c31630ec94f`),
    ], // Parklife
  },
  {
    name: `Carl Cox`,
    description: `Carl Cox (born 29 July 1962) is a British house and techno record producer and DJ. Carl played at the 1st night of Danny Rampling's Shoom night after his return from Ibiza in the summer of 1987, largely seen as the original Balearic / Acid House night in London / the UK. In the 1980s, Cox became a mainstage DJ in the electronica industry.`,
    image: `https://upload.wikimedia.org/wikipedia/commons/6/65/CarlCox.jpg`,
    video: [`TOu5pmcoXKQ`, `ZdAwiV4T22I`, `vy-k0FopsmY`, `hFYvaz5oAKI`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec94d`),
      Types.ObjectId(`6016e7ddc5b16c31630ec94c`),
      Types.ObjectId(`6016e7ddc5b16c31630ec94e`),
      Types.ObjectId(`6016e7ddc5b16c31630ec94f`),
    ], // Awakenings Festival
  },
  {
    name: `Amelie Lens`,
    description: `Amelie Lens (Dutch pronunciation: [ɑmɛˈli ˈlɛns], French: [ameli lɑ̃s]; born 31 May 1990) is a Belgian electronic music DJ, record producer, and owner of the Lenske record label. Her debut release came on Italian imprint Lyase, and soon after a trio of releases on Pan-Pot’s Second State. As a resident at Hasselt’s Labyrinth Club, Lens started curating her own nights under the name EXHALE. Lens has expanded the EXHALE parties further afield, with regular showcases at the London’s fabric club and at Creamfields, OFFSonar, Dour and Extrema festivals.`,
    image: `https://1.bp.blogspot.com/-HILJXlYZcjU/XwUBpjur0HI/AAAAAAAALoY/Jab-9oKARdkdJBeDJPMSflZvcshKgNOEQCLcBGAsYHQ/s1600/Amelie%2BLens%2Bpress%2Bpic%2B1%2Bby%2BZeb%2BDaemen%2BWEB.jpg`,
    video: [`ojxZhCj4m7c`, `eb64jGwa00s`, `NyTv1PwyU_Q`, `J0cLY0bQSa4`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec950`),
      Types.ObjectId(`6016e7ddc5b16c31630ec951`),
      Types.ObjectId(`6016e7ddc5b16c31630ec952`),
      Types.ObjectId(`6016e7ddc5b16c31630ec953`),
    ], // Awakenings Festival
  },
  {
    name: `Richie Hawtin`,
    description: `Richard "Richie" Hawtin (born June 4, 1970) is a British-Canadian electronic musician and DJ. A three-time DJ Awards winner, he became involved with Detroit techno's second wave in the early 1990s, and has been a leading exponent of minimal techno since the mid-1990s. He became known for his recordings under the Plastikman and F.U.S.E. aliases. Under the latter, he released his debut album Dimension Intrusion (1993) as part of Warp's Artificial Intelligence series.`,
    image: `https://theoasisfest.com/wp-content/uploads/2017/02/hawtin_portrait_1052-square.jpg`,
    video: [`vK2b8qoVrwg`, `64s9gO5W5Ls`, `PigaZSpn4YM`, `CSJDJZGaKko`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec950`),
      Types.ObjectId(`6016e7ddc5b16c31630ec951`),
      Types.ObjectId(`6016e7ddc5b16c31630ec952`),
      Types.ObjectId(`6016e7ddc5b16c31630ec953`),
    ], // Awakenings Festival
  },
  {
    name: `Chris Liebing`,
    description: `Chris Liebing (born Christopher Liebing on 11 December 1968 in Gießen, Hesse, Germany) is a techno DJ, music producer, radio host and founder of the record label CLR. In the early 1990s, Liebing became active on the Frankfurt dance music scene. He opened the Spinclub techno club in 1994, and worked at Eye Q Records in Frankfurt. He formed his first label, 'Audio' in 1996, which was followed in 1999 by CLR.`,
    image: `https://static.qobuz.com/images/artists/covers/medium/512bafd5ffe08ba0defa35a7df5730c7.jpg`,
    video: [`e5IFjcC7hjk`, `JHVPSr8D6hY`, `rXRB6DBxyIU`, `hM12eYC9I1E`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec950`),
      Types.ObjectId(`6016e7ddc5b16c31630ec951`),
      Types.ObjectId(`6016e7ddc5b16c31630ec952`),
      Types.ObjectId(`6016e7ddc5b16c31630ec953`),
    ], // Awakenings Festival
  },
  {
    name: `Foals`,
    description: `Foals are an English rock band from Oxford, formed in 2005. The band's current line-up consists of lead vocalist and lead guitarist Yannis Philippakis, drummer and percussionist Jack Bevan, rhythm guitarist Jimmy Smith and keyboardist Edwin Congreave. `,
    image: `https://www.nme.com/wp-content/uploads/2019/03/Foals-Web-Header.jpg`,
    video: [`ikkHqIXgPJc`, `YkCy-0S3djM`, `ugsBLdcc5fg`, `0XRE3r39xb8`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec950`),
      Types.ObjectId(`6016e7ddc5b16c31630ec951`),
      Types.ObjectId(`6016e7ddc5b16c31630ec952`),
      Types.ObjectId(`6016e7ddc5b16c31630ec953`),
    ], // Super Bock Super Rock
  },
  {
    name: `Brockhampton`,
    description: `Brockhampton (stylized in all caps) is an American alternative hip hop group founded as AliveSinceForever in San Marcos, Texas, United States, in 2010. In 2014, the band rebranded as Brockhampton. Led by Kevin Abstract and formed partially through the online forum "KanyeToThe", Brockhampton is a self-described boy band, so-called in an effort to redefine the term.`,
    image: `https://www.rollingstone.com/wp-content/uploads/2019/08/Brockhampton-2.jpg`,
    video: [`dFhShHV4daQ`, `-rNtr3sfuqw`, `-tbNVkIlNYo`, `B3WNeXaRrac`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fb`), // 힙합
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec950`),
      Types.ObjectId(`6016e7ddc5b16c31630ec951`),
      Types.ObjectId(`6016e7ddc5b16c31630ec952`),
      Types.ObjectId(`6016e7ddc5b16c31630ec953`),
    ], // Super Bock Super Rock
  },
  {
    name: `GoldLink`,
    description: `D'Anthony William Carlos (born May 17, 1993), better known by his stage name GoldLink, is an American rapper, singer, and songwriter. In 2014, he released his debut mixtape, The God Complex, which received critical acclaim. In June 2015, he was chosen as part of the XXL Freshman Class. In October 2015, GoldLink released his second mixtape, And After That, We Didn't Talk, which was supported by the singles, "Dance on Me" and "Spectrum".`,
    image: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Goldlink_December_2017.png/1200px-Goldlink_December_2017.png`,
    video: [`olLlcGnziNw`, `nhNqbe6QENY`, `WDq0dJbu8sE`, `16EWGI2f2iY`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fb`), // 힙합
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec97c`),
      Types.ObjectId(`6016e7ddc5b16c31630ec97b`),
      Types.ObjectId(`6016e7ddc5b16c31630ec979`),
      Types.ObjectId(`6016e7ddc5b16c31630ec97a`),
    ], // Super Bock Super Rock
  },
  {
    name: `Boy Pablo`,
    description: `Boy Pablo (stylized as boy pablo) is the indie pop music project of Chilean–Norwegian singer songwriter Nicolas Muñoz. In the recording studio, Muñoz writes, records, performs, and produces all of the project's music. As a touring act, Boy Pablo consists of Muñoz (guitar, vocals), Gabriel Muñoz (lead guitar), Henrik Åmdal (bass guitar), Eric Tryland (keyboard), and Sigmund Vestrheim (drums).`,
    image: `https://upload.wikimedia.org/wikipedia/commons/f/fa/Boy_Pablo_Piknik_i_Parken_2019_%28170641%29.jpg`,
    video: [`bdqymOqMYuo`, `9UGfAV5purA`, `16-H1CozG3g`, `wanTYzVCNSI`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fe`), // etc
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec97c`),
      Types.ObjectId(`6016e7ddc5b16c31630ec97b`),
      Types.ObjectId(`6016e7ddc5b16c31630ec979`),
      Types.ObjectId(`6016e7ddc5b16c31630ec97a`),
    ], // Super Bock Super Rock
  },
  {
    name: `Liam Gallagher`,
    description: `William John Paul Gallagher (born 21 September 1972) is an English singer and songwriter. He was the lead singer of the rock band Oasis from 1991 to 2009 and the rock band Beady Eye from 2009 to 2014 before releasing his debut solo album in 2017.`,
    image: `https://www.telegraph.co.uk/content/dam/music/2019/09/13/TELEMMGLPICT000209191760_trans_NvBQzQNjv4BqwBwu1L2eorE4h8CgqGiF4H59u5TJCe6wgxZxXNBbUvw.jpeg`,
    video: [`PsFuqPCs_QQ`, `YkW8_UOVZ0w`, `y1TNEJWCjRU`, `fFxvgW4CRCY`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec97c`),
      Types.ObjectId(`6016e7ddc5b16c31630ec97b`),
      Types.ObjectId(`6016e7ddc5b16c31630ec979`),
      Types.ObjectId(`6016e7ddc5b16c31630ec97a`),
    ], // FIB: Festival Internacional de Benicàssim
  },
  {
    name: `The Lumineers`,
    description: `The Lumineers are an American folk rock band based in Denver, Colorado. The founding members are Wesley Schultz (lead vocals, guitar) and Jeremiah Fraites (drums, percussion, piano). Schultz and Fraites began writing and performing together in Ramsey, New Jersey in 2005. Cellist and vocalist Neyla Pekarek (cello) joined the band in 2010, and was a member until 2018.`,
    image: `https://media.npr.org/assets/img/2019/09/11/lumineers-grab_wide-62975324b77ded6fdd5b514622023632b80797cd.jpg?s=1400`,
    video: [`GdUnBT2xuOQ`, `XRg00JgtaEo`, `z3j3-oq64hg`, `EjG1TFFVAqA`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec97c`),
      Types.ObjectId(`6016e7ddc5b16c31630ec97b`),
      Types.ObjectId(`6016e7ddc5b16c31630ec979`),
      Types.ObjectId(`6016e7ddc5b16c31630ec97a`),
    ], // FIB: Festival Internacional de Benicàssim
  },
  {
    name: `Steve Aoki`,
    description: `Steven Hiroyuki Aoki is an American DJ, record producer, music programmer, and record executive.  In 2012, Pollstar designated Aoki as the highest grossing dance artist in North America from tours. He has collaborated with artists such as will.i.am, Afrojack, LMFAO, Linkin Park, Iggy Azalea, Lil Jon, blink-182, Laidback Luke, BTS, Monsta X, Louis Tomlinson, Backstreet Boys, Rise Against, Vini Vici, Lauren Jauregui, and Fall Out Boy and is known for his remixes of artists such as Kid Cudi. Aoki has released several Billboard-charting studio albums as well, notably Wonderland, which was nominated for Grammy Award for Best Dance/Electronica Album in 2013.`,
    image: `https://www.clubbingtv.com/wp-content/uploads/2020/06/steve_aoki_headshot-1.jpg`,
    video: [`wEX7OjfgOsg`, `6OPDJeAFsmM`, `vzW0Dytbs6w`, `Ep8xwFo4fJ8`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec97c`),
      Types.ObjectId(`6016e7ddc5b16c31630ec97b`),
      Types.ObjectId(`6016e7ddc5b16c31630ec979`),
      Types.ObjectId(`6016e7ddc5b16c31630ec97a`),
    ], // FIB: Festival Internacional de Benicàssim
  },
  {
    name: `Two Door Cinema Club`,
    description: `Two Door Cinema Club is a band from Northern Ireland. The band formed in 2007 and is composed of three members: Alex Trimble (vocals, rhythm guitar, beats, synths), Sam Halliday (lead guitar, backing vocals), and Kevin Baird (bass, synths, backing vocals).`,
    image: `https://i.guim.co.uk/img/media/850e5822610501f7f6ff5592fc537eeee6da304c/0_68_5472_3283/master/5472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=786805d64a2d470094cb90d2426360ed`,
    video: [`2ChOnBV6Lw4`, `Gpaw1IAn87s`, `w3SD96GHeRM`, `PKjl8rqCpcY`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec978`),
      Types.ObjectId(`6016e7ddc5b16c31630ec976`),
      Types.ObjectId(`6016e7ddc5b16c31630ec977`),
      Types.ObjectId(`6016e7ddc5b16c31630ec975`),
    ], // FIB: Festival Internacional de Benicàssim
  },
  {
    name: `Young Thug`,
    description: `Jeffery Lamar Williams (born August 16, 1991), known professionally as Young Thug, is an American rapper, singer, and songwriter. He is considered to be one of the most influential rappers of his generation, with his music having heavily shaped contemporary trap music and inspired numerous artists. Known for his eccentric vocal style and fashion, he first received attention for his collaborations with rappers Birdman and Gucci Mane. Thug initially released a series of independent mixtapes beginning in 2011 with I Came from Nothing. In early 2013, he signed with Gucci Mane's 1017 Records, and later that year he released his label debut mixtape 1017 Thug to critical praise.`,
    image: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Young_Thug_-_Openair_Frauenfeld_2019_20.jpg/220px-Young_Thug_-_Openair_Frauenfeld_2019_20.jpg`,
    video: [`T3VymfY6itY`, `B8ZRVgH2hR0`, `leJNDpm_G10`, `ghzdwjWrWcc`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fb`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec978`),
      Types.ObjectId(`6016e7ddc5b16c31630ec976`),
      Types.ObjectId(`6016e7ddc5b16c31630ec977`),
      Types.ObjectId(`6016e7ddc5b16c31630ec975`),
    ], // Outside Lands Music & Arts Festival 2021, Wireless Festival
  },
  {
    name: `Judas Priest`,
    description: `Judas Priest are an English heavy metal band formed in Birmingham in 1969. They have sold over 50 million copies of their albums, and are frequently ranked as one of the greatest metal bands of all time. Despite an innovative and pioneering body of work in the latter half of the 1970s, the band had struggled with indifferent record production and a lack of major commercial success until 1980, when they rose to commercial success with the album British Steel.`,
    image: `https://images-na.ssl-images-amazon.com/images/I/816wE%2B1ou%2BL._SL1500_.jpg`,
    video: [`nM__lPTWThU`, `0aQ3HnecbWc`, `LyKa_tc3Xr4`, `yMVV_HsHcX0`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 락
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec978`),
      Types.ObjectId(`6016e7ddc5b16c31630ec976`),
      Types.ObjectId(`6016e7ddc5b16c31630ec977`),
      Types.ObjectId(`6016e7ddc5b16c31630ec975`),
    ], // Hellfest Open Air, Rock The Castle 2021
  },
  {
    name: `Doja Cat`,
    description: `Amala Ratna Zandile Dlamini (born October 21, 1995), known professionally as Doja Cat, is an American singer, rapper, songwriter, and record producer. Born and raised in Los Angeles, she began making and releasing music on SoundCloud as a teenager. Her song "So High" caught the attention of Kemosabe Records and RCA Records where she signed a joint record deal at the age of 17, subsequently releasing her debut EP Purrr! in 2014.`,
    image: `https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dc-03-garden-1494-rt2-1573500549.jpg?resize=768:*`,
    video: [`XEJLuJyxLDE`, `pok8H_KF1FA`, `_KbFNKWdnvE`, `5UciR6Foljc`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fb`), //
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec978`),
      Types.ObjectId(`6016e7ddc5b16c31630ec976`),
      Types.ObjectId(`6016e7ddc5b16c31630ec977`),
      Types.ObjectId(`6016e7ddc5b16c31630ec975`),
    ], // Superbloom 2021
  },
  {
    name: `Post Malone`,
    description: `Austin Richard Post (born July 4, 1995), known professionally as Post Malone, is an American rapper, singer, songwriter, and record producer. Known for his introspective songwriting and laconic vocal style, Malone has gained acclaim for bending a range of genres including hip hop, R&B, pop, trap, rap rock, and cloud rap. He first attained recognition in 2015 following the release of his debut single "White Iverson". He subsequently signed a recording contract with Republic Records. His stage name is derived from his last name and from a rap name generator.`,
    image: `https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Post_Malone_at_the_2019_American_Music_Awards.png/220px-Post_Malone_at_the_2019_American_Music_Awards.png`,
    video: [`wXhTHyIgQ_U`, `lj6CEc-ppqo`, `au2n7VVGv_c`, `ApXoWvfEYVU`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fb`),
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec978`),
      Types.ObjectId(`6016e7ddc5b16c31630ec976`),
      Types.ObjectId(`6016e7ddc5b16c31630ec977`),
      Types.ObjectId(`6016e7ddc5b16c31630ec975`),
    ], // Superbloom 2021 , Reading Festival, Rock in Rio Lisboa
  },
  {
    name: `Nelly`,
    description: `Cornell Iral Haynes Jr. (born November 2, 1974), better known by his stage name Nelly, is an American rapper, singer, songwriter, entrepreneur, investor, and occasional actor from St. Louis, Missouri. Nelly embarked on his music career with Midwest hip hop group St. Lunatics in 1993 and signed to Universal Records in 1999. Under Universal, Nelly began his solo career in the year 2000, with his debut album Country Grammar, of which the featured title-track and the single "Ride wit Me" were top ten hits. The album debuted at number three on the Billboard 200 and went on to peak at number one. Country Grammar is Nelly's best-selling album to date, selling over 8.4 million copies in the United States.`,
    image: `https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Cornell-Haynes-Jr_Nelly_2010-06-05_photoby_Adam-Bielawski.jpg/220px-Cornell-Haynes-Jr_Nelly_2010-06-05_photoby_Adam-Bielawski.jpg`,
    video: [`8WYHDfJDPDc`, `N6O2ncUKvlg`, `glJu5P3mR5Y`, `RtSDWq6HsJE`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fb`),
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec974`),
      Types.ObjectId(`6016e7ddc5b16c31630ec973`),
      Types.ObjectId(`6016e7ddc5b16c31630ec971`),
      Types.ObjectId(`6016e7ddc5b16c31630ec970`),
    ], // Outside Lands Music & Arts Festival 2021
  },
  {
    name: `Tame Impala`,
    description: `Tame Impala is the psychedelic music project of Australian multi-instrumentalist Kevin Parker.[5] In the recording studio, Parker writes, records, performs, and produces all of the project's music. As a touring act, Tame Impala consists of Parker (guitar, vocals), Dominic Simper (guitar, synthesiser), Jay Watson (synthesiser, vocals, guitar), Cam Avery (bass guitar, vocals), and Julien Barbagallo (drums, vocals). The group has a close affiliation with fellow Australian psychedelic rock band Pond, sharing members and collaborators, including Nick Allbrook, formerly a live member of Tame Impala. Originally signed to Modular Recordings, Tame Impala is now signed to Interscope Records in the US, and Fiction Records in the UK.`,
    image: `https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tame_Impala_at_Flow_Festival_Helsinki_Aug_10_2019_-24.jpg/300px-Tame_Impala_at_Flow_Festival_Helsinki_Aug_10_2019_-24.jpg`,
    video: [`UTwlmgV3pEI`, `PsHnP2RjCF4`, `2SUwOgmvzK4`, `wycjnCCgUes`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`),
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec974`),
      Types.ObjectId(`6016e7ddc5b16c31630ec973`),
      Types.ObjectId(`6016e7ddc5b16c31630ec971`),
      Types.ObjectId(`6016e7ddc5b16c31630ec970`),
    ], // Primavera Sound, Outside Lands Music & Arts Festival 2021, Fugi Rock
  },
  {
    name: `The Pussycat Dolls`,
    description: `The Pussycat Dolls are an American girl group and dance ensemble, founded in Los Angeles, California, by choreographer Robin Antin in 1995 as a burlesque troupe. At the suggestion of Jimmy Iovine, Antin decided to take the burlesque troupe mainstream as a pop group. Antin negotiated a record deal with Interscope Geffen A&M Records in 2003 turning the group into a music franchise comprising Nicole Scherzinger, Carmit Bachar, Ashley Roberts, Jessica Sutta, Melody Thornton, and Kimberly Wyatt. Their debut single, "Sway", was featured on the soundtrack of the 2004 film Shall We Dance`,
    image: `https://cdn.entertainment-focus.com/wp-content/uploads/2019/11/pussycatdollsfeat2.jpg`,
    video: [`KM3j_TXeqfc`, `fApHQDNTOGM`, `hj8D_8LQFZI`, `YNSxNsr4wmA`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fe`), // 락
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec974`),
      Types.ObjectId(`6016e7ddc5b16c31630ec973`),
      Types.ObjectId(`6016e7ddc5b16c31630ec971`),
      Types.ObjectId(`6016e7ddc5b16c31630ec970`),
    ], // SUper Bloom 2021
  },
  {
    name: `Vampire Weekend`,
    description: `Vampire Weekend is an American rock band from New York City, formed in 2006 and currently signed to Columbia Records. The band was formed by lead vocalist and guitarist Ezra Koenig, multi-instrumentalist Rostam Batmanglij, drummer Chris Tomson, and bassist Chris Baio. The band's eponymous first album Vampire Weekend (2008)—which included the singles "Mansard Roof", "A-Punk", "Oxford Comma", "Cape Cod Kwassa Kwassa", and "The Kids Don't Stand a Chance"—was acclaimed by critics for its world music influences. Their following album, Contra (2010), was similarly acclaimed and garnered strong commercial success. Their third studio album, Modern Vampires of the City (2013), won the group the Grammy Award for Best Alternative Music Album.`,
    image: `https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tame_Impala_at_Flow_Festival_Helsinki_Aug_10_2019_-24.jpg/300px-Tame_Impala_at_Flow_Festival_Helsinki_Aug_10_2019_-24.jpg`,
    video: [`_mDxcDjg9P4`, `_XC2mqcMMGQ`, `1e0u11rgd9Q`, `P_i1xk07o4g`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`),
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec974`),
      Types.ObjectId(`6016e7ddc5b16c31630ec973`),
      Types.ObjectId(`6016e7ddc5b16c31630ec971`),
      Types.ObjectId(`6016e7ddc5b16c31630ec970`),
    ], // Outside Lands Music & Arts Festival 2021, FIB: Festival Internacional de Benicàssim
  },
  {
    name: `Jorge & Mateus`,
    description: `Jorge & Mateus (sometimes written as Jorge e Mateus) is a musical duo and one of the most famous interpreters of música sertaneja. The duo is composed of Goiás, Brazil-based vocalists Jorge Alves Barcelos (born August 27, 1982) and Mateus Pedro Liduário de Oliveira (born July 15, 1986). Both are from the city of Itumbiara, in the Brazilian state of Goiás and are signed to Universal Music label.`,
    image: `https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tame_Impala_at_Flow_Festival_Helsinki_Aug_10_2019_-24.jpg/300px-Tame_Impala_at_Flow_Festival_Helsinki_Aug_10_2019_-24.jpg`,
    video: [`AtHet50A5L4`, `YZT1U2rlvyM`, `cIliVkpvVZw`, `0ZiYOoFAmrg`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`),
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec974`),
      Types.ObjectId(`6016e7ddc5b16c31630ec973`),
      Types.ObjectId(`6016e7ddc5b16c31630ec971`),
      Types.ObjectId(`6016e7ddc5b16c31630ec970`),
    ], // Carvalheira na Ladeira 2021
  },
  {
    name: `Tyler, the creator`,
    description: `Tyler Gregory Okonma (born March 6, 1991), better known as Tyler, the Creator, is an American rapper, musician, songwriter, producer, actor, visual artist, designer and comedian. He rose to prominence in the early 2010s as the co-founder and de facto leader of alternative hip hop group Odd Future and has performed on and produced songs for nearly every Odd Future release.`,
    image: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Tyler%2C_The_Creator_%288048745695%29_%28cropped%29.jpg/220px-Tyler%2C_The_Creator_%288048745695%29_%28cropped%29.jpg`,
    video: [`sOlNhcdlcB4`, `IJilkMPqvs0`, `N1w-hDiJ4dM`, `HmAsUQEFYGI`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fb`),
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec974`),
      Types.ObjectId(`6016e7ddc5b16c31630ec973`),
      Types.ObjectId(`6016e7ddc5b16c31630ec971`),
      Types.ObjectId(`6016e7ddc5b16c31630ec970`),
    ], //  Primavera Sound, Parklife, Splendour in the Grass Festival 2021, Outside Lands Music & Arts Festival 2021
  },
  {
    name: `Megan Thee Stallion`,
    description: `Megan Jovon Ruth Pete (born February 15, 1995), known professionally as Megan Thee Stallion (pronounced "the"), is an American rapper, singer, and songwriter. Originally from Houston, Texas, she first garnered attention when videos of her freestyling became popular on social media platforms such as Instagram. Megan Thee Stallion signed to 300 Entertainment in 2018 where she released the mixtape Fever (2019), the extended play Suga (2020), and her debut studio album, Good News (2020)`,
    image: `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Megan_Thee_Stallion_2019_2.jpg/220px-Megan_Thee_Stallion_2019_2.jpg`,
    video: [`7PBYGu4Az8s`, `BpR9K2iOPIQ`, `ZyescZfgkHY`, `b3ONtxMFtiw`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fb`),
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec972`),
      Types.ObjectId(`6016e7ddc5b16c31630ec96e`),
      Types.ObjectId(`6016e7ddc5b16c31630ec96f`),
      Types.ObjectId(`6016e7ddc5b16c31630ec96d`),
    ], // Afro Nation, SXSW: South by Southwest, Melt Festival,Nuits Sonores, Pitchfork Music Festival, Boomtown
  },
  {
    name: `Neck Deep`,
    description: `Neck Deep is a Welsh pop punk band from Wrexham, Wales formed in 2012. Founded after vocalist Ben Barlow met former lead guitarist Lloyd Roberts, the pair posted a song ("What Did You Expect?") online under the name Neck Deep. The song soon gained attention online, resulting in the addition of rhythm guitarist Matt West, drummer Dani Washington/Abasi, and bassist Fil Thorpe-Evans. They released a pair of EPs, Rain in July (2012) and A History of Bad Decisions (2013), both recorded by Barlow's older brother, before signing with Hopeless in August 2013.`,
    image: `https://www.hysteriamag.com/ahm/uploads/2017/08/Neck_Deep_Hysteria.jpg`,
    video: [`6d3Fb57g1xo`, `RPzf_4dcL28`, `tlO-KOvpPOw`, `ZMorM6M2IlI`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`),
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec972`),
      Types.ObjectId(`6016e7ddc5b16c31630ec96e`),
      Types.ObjectId(`6016e7ddc5b16c31630ec96f`),
      Types.ObjectId(`6016e7ddc5b16c31630ec96d`),
    ], // Maifeld Derby 2021
  },
  {
    name: `Bring Me the Horizon`,
    description: `Bring Me the Horizon (often abbreviated as BMTH) are a British rock band formed in Sheffield in 2004. The group consists of lead vocalist Oliver Sykes, guitarist Lee Malia, bassist Matt Kean, drummer Matt Nicholls and keyboardist Jordan Fish. They are signed to RCA Records globally and Columbia Records exclusively in the United States.`,
    image: `https://townsquare.media/site/366/files/2019/01/BMTH.jpg`,
    video: [`dgaZUOdsN8A`, `ewfdULyvDzg`, `L5uV3gmOH9g`, `racmy7Y9P4M`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`),
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec972`),
      Types.ObjectId(`6016e7ddc5b16c31630ec96e`),
      Types.ObjectId(`6016e7ddc5b16c31630ec96f`),
      Types.ObjectId(`6016e7ddc5b16c31630ec96d`),
    ], // Highfield Festival 2021
  },
  {
    name: `Ludmilla`,
    description: `Ludmila Oliveira da Silva (born April 24, 1995), widely known by her stage name Ludmilla, is a Brazilian singer-songwriter who achieved fame in 2012 with song Fala Mal de Mim (She Speaks Ill of Me). In September 2020, she became the first Black Latin-American female musician to reach 1 billion streams on Spotify.`,
    image: `https://images.sk-static.com/images/media/img/col6/20190130-094531-745089.jpg`,
    video: [`w411X0SxpcQ`, `DWH349RfD7E`, `RNVLCr-Y7rQ`, `XclD4-z4_eA`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fb`),
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec972`),
      Types.ObjectId(`6016e7ddc5b16c31630ec96e`),
      Types.ObjectId(`6016e7ddc5b16c31630ec96f`),
      Types.ObjectId(`6016e7ddc5b16c31630ec96d`),
    ], // Carvalheira na Ladeira 2021
  },
  {
    name: `System of a Down`,
    description: `System of a Down (also known as SoaD or simply System) is an Armenian-American heavy metal band formed in Glendale, California, in 1994. It currently consists of members Serj Tankian (lead vocals, keyboards), Daron Malakian (guitar, vocals), Shavo Odadjian (bass, backing vocals), and John Dolmayan (drums), who replaced original drummer Andy Khachaturian in 1997.`,
    image: `https://pm1.narvii.com/6539/438434448a696529a672793cc409cc67d06e3f96_00.jpg`,
    video: [`9VvmixeowNI`, `CSvFpBOe8eY`, `iywaBOMvYLI`, `XqmknZNg1yw`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`),
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec972`),
      Types.ObjectId(`6016e7ddc5b16c31630ec96e`),
      Types.ObjectId(`6016e7ddc5b16c31630ec96f`),
      Types.ObjectId(`6016e7ddc5b16c31630ec96d`),
    ], // Download Festival, Hellfest Open Air, System of a Down
  },
  {
    name: `ARMIN VAN BUUREN`,
    description: `Van Buuren has won a number of accolades. He has been ranked the number one DJ by DJ Mag a record of five times, four years in a row.[5] He was ranked fourth on the DJ Mag Top 100 DJs list in 2015, 2016, 2019, and 2020,[6] and third in 2017.`,
    image: `https://d3vhc53cl8e8km.cloudfront.net/artists/113/CajWkR3Sbp1M9jB2bxlBwhlwM9GtyPUu9nXAteDt.jpeg`,
    video: [`nKSp33zY4WU`, `ScYoXjpQgcc`, `8XskjcJhFVY`, `JrKdlG-9yxM`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec972`),
      Types.ObjectId(`6016e7ddc5b16c31630ec96e`),
      Types.ObjectId(`6016e7ddc5b16c31630ec96f`),
      Types.ObjectId(`6016e7ddc5b16c31630ec96d`),
    ],
  },
  {
    name: `TCHAMI`,
    description: `Tchami often performs with the persona of a priest and a church theme. He wears a clerical collar and includes visuals such as an altar and stained glass windows. In an interview he explained that "it is [his] message, being spiritual. I think my music is about that too."`,
    image: `https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2014/06/20223701/nKvi36e58oEQJNOvN39bIBQuwpoSo87IvgeUF3ze-972x597.jpeg`,
    video: [`CQBV6cxeI40`, `fro3lapavWI`, `onONTaIF-jE`, `JrKdlG-TJPTlY1caa0`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec955`),
      Types.ObjectId(`6016e7ddc5b16c31630ec956`),
      Types.ObjectId(`6016e7ddc5b16c31630ec958`),
      Types.ObjectId(`6016e7ddc5b16c31630ec957`),
    ],
  },
  {
    name: `NETSKY`,
    description: `Netsky produces music of the liquid funk style – drum and bass music with many instrumental layers and frequent vocals.[5] High Contrast's 'Gold Digger' remix was a major influence on him.`,
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmkVdfgv3HUYN8nDVcFlHxDDoCcNioc7EkSg&usqp=CAU`,
    video: [`l4fuNBpKT_o`, `ix4_DWxIvlw`, `GaAkgmhHTt4`, `UZkrxzT9h_Y`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec955`),
      Types.ObjectId(`6016e7ddc5b16c31630ec956`),
      Types.ObjectId(`6016e7ddc5b16c31630ec958`),
      Types.ObjectId(`6016e7ddc5b16c31630ec957`),
    ],
  },
  {
    name: `MACEO PLEX`,
    description: `He is best known for his diverse production style, which is influenced primarily by house and by techno but also elements of electro and tech house.`,
    image: `https://pbs.twimg.com/profile_images/1308543020166451201/ZiBnEGU__400x400.jpg`,
    video: [`5vHRUsP20dQ`, `-StZqo-j6XY`, `ePolozByGXs`, `OsXh7bvZFF4`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec955`),
      Types.ObjectId(`6016e7ddc5b16c31630ec956`),
      Types.ObjectId(`6016e7ddc5b16c31630ec958`),
      Types.ObjectId(`6016e7ddc5b16c31630ec957`),
    ],
  },
  {
    name: `Zeds Dead`,
    description: `Zeds Dead is a Canadian electronic music duo from Toronto, Canada composed of Dylan Mamid, also known as DC, and Zachary Rapp-Rovan, also known as Hooks, who rose to prominence releasing original music and remixes from 2009–10 before becoming a staple on the international touring circuit thereafter. Today, they are known for their exploration of a diverse variety of genres that combine aspects of UK garage, house, electro house, hip-hop, glitch, drum and bass, and more.`,
    image: `http://apeconcerts.com/wp-content/uploads/2016/08/ZedsDead_1024.jpg`,
    video: [`JJaMQqdPTqM`, `EUz7oQ0Mlcg`, `9a_spSAjUmg`, `iGXB3rEndN8`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec955`),
      Types.ObjectId(`6016e7ddc5b16c31630ec956`),
      Types.ObjectId(`6016e7ddc5b16c31630ec958`),
      Types.ObjectId(`6016e7ddc5b16c31630ec957`),
    ],
  },
  {
    name: `Sub Zero Project`,
    description: `Sub Zero Project is a Dutch hardstyle producer group, consisting of Thomas Velderman (born 19 April 1996) and Nigel Coppen (born 9 March 1997), most known for making the Qlimax 2018 anthem "The Game Changer". They are the youngest Qlimax anthem makers in history.`,
    image: `https://www.amsterdam-dance-event.nl/img/images/artists-speakers/SZP_PRESS_2017_001-THEPROJECT_129029.jpg?w=1200&h=630&fit=crop-50-50`,
    video: [`NaS3frzmsxY`, `WLXqJMfodSY`, `NaQc3jclGgc`, `Rcj2pL1EcCg`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec955`),
      Types.ObjectId(`6016e7ddc5b16c31630ec956`),
      Types.ObjectId(`6016e7ddc5b16c31630ec958`),
      Types.ObjectId(`6016e7ddc5b16c31630ec957`),
    ],
  },
  {
    name: `Meduza`,
    description: `Meduza is an Italian production trio consisting of Luca de Gregorio, Mattia Vitale and Simone Giani. They are best known for their 2019 breakthrough song "Piece of Your Heart", which was a collaboration with British production trio Goodboys. It reached number two on the UK Singles Chart upon release,[3] and was eventually nominated for the Grammy Award for Best Dance Recording.`,
    image: `https://i0.wp.com/secretsolstice.is/wp-content/uploads/2019/11/MEDUZA.png?fit=1200%2C800&ssl=1`,
    video: [`CNNHSZpNSwU`, `xxCc3BrNzRA`, `-3P2USPFDcE`, `S8lRJhM-9h0`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec95a`),
      Types.ObjectId(`6016e7ddc5b16c31630ec95b`),
      Types.ObjectId(`6016e7ddc5b16c31630ec95c`),
      Types.ObjectId(`6016e7ddc5b16c31630ec95d`),
    ],
  },
  {
    name: `MARTIN GARRIX`,
    description: `Martijn Gerard Garritsen (Dutch: [mɑrˈtɛi̯n ɣəˈrɑrt ˈxɑrɪtsə(n)]; born 14 May 1996),[8] professionally known as Martin Garrix and under other pseudonyms such as Ytram[9] and GRX,[10] is a Dutch DJ and record producer. His most known singles are "Animals", "In the Name of Love", and "Scared to Be Lonely". He was ranked number one on DJ Mag's Top 100 DJs list for three consecutive years (2016, 2017, and 2018).`,
    image: `https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2014/05/14223504/XuWD5RgHnmoJVir2EqZuEUxPKIiJiHpYnKbtQHmj-972x597.jpeg`,
    video: [`tspNk3SwZ9s`, `WKuaujIHBT4`, `lGCo8ILvauI`, `06eSsOWcKYA`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec95a`),
      Types.ObjectId(`6016e7ddc5b16c31630ec95b`),
      Types.ObjectId(`6016e7ddc5b16c31630ec95c`),
      Types.ObjectId(`6016e7ddc5b16c31630ec95d`),
    ],
  },
  {
    name: `Major Lazer`,
    description: `Major Lazer is a Jamaican-American electronic dance music trio, which includes record producer Diplo, and DJs Walshy Fire and Ape Drums. It was founded in 2008 by Diplo and Switch, with Switch leaving after three years in 2011. He was then replaced by both Jillionaire and Walshy Fire. In June 2019, Jillionaire left the group and was replaced by Ape Drums.[1] Its music spans numerous genres, mixing reggae with dancehall, reggaeton, soca, house and moombahton.`,
    image: `https://s3-us-west-2.amazonaws.com/paradigm-media-library/music_artists/major-lazer-20200327.jpg`,
    video: [`MT4-PD6k4Dk`, `r2LpOUwca94`, `Sgp0WDMH88g`, `a59gmGkq_pw`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fe`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec95a`),
      Types.ObjectId(`6016e7ddc5b16c31630ec95b`),
      Types.ObjectId(`6016e7ddc5b16c31630ec95c`),
      Types.ObjectId(`6016e7ddc5b16c31630ec95d`),
    ],
  },
  {
    name: `LOST FREQUENCIES`,
    description: `Felix De Laet (born 30 November 1993),[3] known by his stage name Lost Frequencies, is a Belgian DJ and record producer. He is best known for his singles "Are You with Me" in 2014 and "Reality" in 2015.`,
    image: `https://www.clubbingtv.com/wp-content/uploads/2020/06/4f4a4159-274b-40af-8c53-ebaebbfe48d3_1110001_RETINA_PORTRAIT_16_9-400x400.jpg`,
    video: [`aimtMHXEOeI`, `Zz-bhLjVS5o`, `q-ktd4nEi3w`, `lukliv3VUz8`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fe`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec95a`),
      Types.ObjectId(`6016e7ddc5b16c31630ec95b`),
      Types.ObjectId(`6016e7ddc5b16c31630ec95c`),
      Types.ObjectId(`6016e7ddc5b16c31630ec95d`),
    ],
  },
  {
    name: `Boys Noize`,
    description: `Alexander Ridha (born 22 August 1982), better known by his stage name Boys Noize, is a German electronic music record producer, songwriter, and DJ. It is similar to the name of Ridha's label, Boysnoize Records, which he established in 2005. Ridha has remixed a number of other artist's work, including Snoop Dogg and Depeche Mode. In 2019, he produced Frank Ocean's song "DHL".`,
    image: `https://static.wikia.nocookie.net/ladygaga/images/4/4a/Boys_Noize.jpg/revision/latest?cb=20180422130515`,
    video: [`l8vwmUDKUAs`, `IloS4zK7hD0`, `t0yHAgDICno`, `wJ9aEMyRsnw`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fb`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec95a`),
      Types.ObjectId(`6016e7ddc5b16c31630ec95b`),
      Types.ObjectId(`6016e7ddc5b16c31630ec95c`),
      Types.ObjectId(`6016e7ddc5b16c31630ec95d`),
    ],
  },
  {
    name: `CamelPhat`,
    description: `CamelPhat is a British DJ and production duo, consisting of Dave Whelan and Mike Di Scala, formed in Liverpool in 2004. They are best known for the 2017 single "Cola", which peaked at number 3 in the UK Dance Chart, and at number 18 in the UK Singles Chart. The single was a collaboration with UK dance act Elderbrook and was released on Defected Records.`,
    image: `https://weraveyou.com/wp-content/uploads/2018/12/camelphat-press.jpg`,
    video: [`3PTQAg3Vd-Y`, `uGGjmrUwUys`, `uMd-zfBecQ4`, `d2FlmIt-gfE`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fa`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec95e`),
      Types.ObjectId(`6016e7ddc5b16c31630ec95f`),
      Types.ObjectId(`6016e7ddc5b16c31630ec960`),
      Types.ObjectId(`6016e7ddc5b16c31630ec961`),
    ],
  },
  {
    name: `CHARLOTTE DE WITTE`,
    description: `Charlotte de Witte (Born 21 July 1992) is a Belgian DJ and record producer. Best known for her "dark and stripped-back" brand of minimal techno and acid techno music. She has previously performed under the alias Raving George. She is the founder of the label KNTXT.`,
    image: `https://i1.sndcdn.com/avatars-000730092496-deopd2-t500x500.jpg`,
    video: [`pZ1TH6kV50U`, `mgtu7u9PKkI`, `-_G7pZhLOkA`, `RF60iDaoEPw`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fa`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec95e`),
      Types.ObjectId(`6016e7ddc5b16c31630ec95f`),
      Types.ObjectId(`6016e7ddc5b16c31630ec960`),
      Types.ObjectId(`6016e7ddc5b16c31630ec961`),
    ],
  },
  {
    name: `COONE`,
    description: `Koen Bauweraerts (born 30 May 1983), better known by his stage name Coone, is a Belgian hardstyle producer and DJ.`,
    image: `https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Coone-1407241968.jpg/440px-Coone-1407241968.jpg`,
    video: [`QMfhIYr3sXY`, `OYmhy6o2PGY`, `SMwuOVcIo78`, `nA84okTxawc`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec95e`),
      Types.ObjectId(`6016e7ddc5b16c31630ec95f`),
      Types.ObjectId(`6016e7ddc5b16c31630ec960`),
      Types.ObjectId(`6016e7ddc5b16c31630ec961`),
    ],
  },
  {
    name: `D-Block & S-te-Fan`,
    description: `D-Block & S-te-Fan sind ein niederländisches Hardstyle-DJ- und Musikproduzenten-Duo. Beide sind derzeit beim Plattenlabel Scantraxx Records unter Vertrag und führen dort ihr eigenes Sublabel namens Scantraxx Evolutionz.[1] Von 2015 bis 2017 waren sie unter dem Pseudonym DBSTF auch im Bereich der Big-Room-Musik aktiv. Gemeinsam mit Bakkers Schwester Evelyn als Sängerin bilden sie den Live-Act "Ghost Stories".`,
    image: `https://i1.sndcdn.com/artworks-000559003581-4tyn43-t500x500.jpg`,
    video: [`2lJcpn943w0`, `UCsSh0usvEo`, `IW-ZPFr8gVk`, `XPvZPHXH9w0`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec95e`),
      Types.ObjectId(`6016e7ddc5b16c31630ec95f`),
      Types.ObjectId(`6016e7ddc5b16c31630ec960`),
      Types.ObjectId(`6016e7ddc5b16c31630ec961`),
    ],
  },
  {
    name: `DA TWEEKAZ`,
    description: `Da Tweekaz ist ein norwegisches Hardstyle-Duo, bestehend aus Kenth Kvien und Marcus Nordli, das seit 2012 in Belgien beheimatet ist.[1] Seit 2017 produzieren sie auch Happy Hardcore unter dem Alias Tweekacore.`,
    image: `https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2014/11/14004020/zRkoSYX6DmSKG98GrNMI1MrHBk6EFxp1KbuD4jsK-972x597.jpeg`,
    video: [`zocGe1sTH50`, `1houOeXgIyk`, `fNyQl6juTbg`, `Wr7Z6iURkgI`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec963`),
      Types.ObjectId(`6016e7ddc5b16c31630ec967`),
      Types.ObjectId(`6016e7ddc5b16c31630ec964`),
      Types.ObjectId(`6016e7ddc5b16c31630ec968`),
    ],
  },
  {
    name: `DAVID GUETTA`,
    description: `Pierre David Guetta (/ˈɡɛtə/, French pronunciation: [pjɛʁ david ɡɛta]; born 7 November 1967) is a French DJ, record producer and songwriter. Globally, he’s racked up over 50 million record sales, whereas his total number of streams is over 10 billion.`,
    image: `https://d3vhc53cl8e8km.cloudfront.net/artists/180/q7kxbmvrEbeAio6SVIzRlGzG3kNd6Hk0bpsGOM3V.jpeg`,
    video: [`jHqjkrbQP4Y`, `CGW_jkfA6wc`, `rbMv6o1_3gA`, `P2x3-b6JEj8`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fb`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec963`),
      Types.ObjectId(`6016e7ddc5b16c31630ec967`),
      Types.ObjectId(`6016e7ddc5b16c31630ec964`),
      Types.ObjectId(`6016e7ddc5b16c31630ec968`),
    ],
  },
  {
    name: `Dimitri Vegas & Like Mike`,
    description: `Dimitri Vegas & Like Mike are a Belgian DJ duo composed of brothers Dimitri Thivaios and Michael Thivaios. They were ranked No. 1 in 2015 and 2019, and were ranked No. 2 in 2014, 2016, 2017, 2018 and 2020 on DJ Mag's Top 100 DJs list.`,
    image: `https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Dimitri_Vegas_%26_Like_Mike_in_TomorrowWorld_2013.jpg/600px-Dimitri_Vegas_%26_Like_Mike_in_TomorrowWorld_2013.jpg`,
    video: [`_0KMSc7Jz_Y`, `WyXu-u8Lvhs`, `v2cNgve6_0c`, `Z2oQq7D-EK0`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec963`),
      Types.ObjectId(`6016e7ddc5b16c31630ec967`),
      Types.ObjectId(`6016e7ddc5b16c31630ec964`),
      Types.ObjectId(`6016e7ddc5b16c31630ec968`),
    ],
  },
  {
    name: `Diplo`,
    description: `Thomas Wesley Pentz (born November 10, 1978),[2] known professionally as Diplo, is an American DJ, songwriter and record producer based in Los Angeles.`,
    image: `https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Diplo_2014_Press_Photo_%28cropped%29.jpg/440px-Diplo_2014_Press_Photo_%28cropped%29.jpg`,
    video: [`8BQqX3bUqtY`, `zPSsXs8-6Qw`, `wylMwU1wEOM`, `ud6tWL8lCV8`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec963`),
      Types.ObjectId(`6016e7ddc5b16c31630ec967`),
      Types.ObjectId(`6016e7ddc5b16c31630ec964`),
      Types.ObjectId(`6016e7ddc5b16c31630ec968`),
    ],
  },
  {
    name: `DJ SNOOPADELIC`,
    description: `Calvin Cordozar Broadus Jr. (born October 20, 1971), known professionally as Snoop Dogg (previously Snoop Doggy Dogg and briefly Snoop Lion),[note 1] is an American rapper and media personality.`,
    image: `https://bucket.mn2s.com/wp-content/uploads/2019/08/30072324/DJ-Snoopadelic-MN2S-1.png`,
    video: [`ClsCLJpKRlQ`, `u6XtR7PQYYw`, `cguyn_ypVWI`, `XaT5IOEFE2E`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec965`),
      Types.ObjectId(`6016e7ddc5b16c31630ec966`),
      Types.ObjectId(`6016e7ddc5b16c31630ec969`),
      Types.ObjectId(`6016e7ddc5b16c31630ec96a`),
    ],
  },
  {
    name: `Nina Kraviz`,
    description: `Nina Kraviz is a Russian DJ, music producer and singer. After moving to Moscow in 2000 to study dentistry, Kraviz worked in a number of roles in the early 2000s before her music career took off, including fixing "cosmonauts' teeth", hosting a local Irkutsk radio show and writing for a fanzine.`,
    image: `https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Nina_Kraviz%2C_2012.jpg/1200px-Nina_Kraviz%2C_2012.jpg`,
    video: [`fte7HL2AH44`, `bOnGflCqtnQ`, `2LIfQotjbMs`, `pQK1SuWWInw`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec965`),
      Types.ObjectId(`6016e7ddc5b16c31630ec966`),
      Types.ObjectId(`6016e7ddc5b16c31630ec969`),
      Types.ObjectId(`6016e7ddc5b16c31630ec96a`),
    ], // Time Warp DE
  },
  {
    name: `Adam Beyer`,
    description: `Adam Beyer (born 15 May 1976 in Stockholm, Sweden) is a Swedish techno producer and DJ. He is the founder of Drumcode Records, and is one of several Swedish techno artists to emerge in the mid-1990s, along with Cari Lekebusch and Jesper Dahlbäck. Beyer is married to fellow Swedish DJ Ida Engberg, with whom he has three daughters.`,
    image: `https://www.dancetelevision.net/assets/www.dancetelevision.net/artists/19030590_10154831225593299_6280288327620119444_n.jpg`,
    video: [`_4eUkff6vzQ`, `XWfGPGQnYew`, `CPYC6fv-8Xk`, `DNZZF4NzQSM`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec965`),
      Types.ObjectId(`6016e7ddc5b16c31630ec966`),
      Types.ObjectId(`6016e7ddc5b16c31630ec969`),
      Types.ObjectId(`6016e7ddc5b16c31630ec96a`),
    ], // Time Warp DE
  },
  {
    name: `Sven Vath`,
    description: `Sven Väth (born 26 October 1964) is a German DJ/producer and three time DJ Awards winner  whose career in electronic music spans well over 30 years. The single “Electrica Salsa” with OFF launched his career in 1986.`,
    image: `https://upload.wikimedia.org/wikipedia/commons/4/42/V%C3%A4th_0047.jpg`,
    video: [`uInltd4OkTQ`, `y37cDo_CTu4`, `cTNDf9P6F7s`, `nFS-qV6EuX0`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId(`6016e7ddc5b16c31630ec965`),
      Types.ObjectId(`6016e7ddc5b16c31630ec966`),
      Types.ObjectId(`6016e7ddc5b16c31630ec969`),
      Types.ObjectId(`6016e7ddc5b16c31630ec96a`),
    ], // Time Warp DE
  },
  {
    name: `Seth Troxler`,
    description: `Seth Troxler is an American DJ and record producer from Lake Orion, Michigan. His DJ work focuses on house and techno, while he has produced on the Wolf + Lamb, Crosstown Rebels and Circus Company labels, collaborating with artists Art Department, Deetron, Tiefschwarz, Matthew Dear and Subb-an.`,
    image: `https://circuscompany.fr/wordpress/wp-content/uploads/2019/01/seth-troxler.jpg`,
    video: [`C8iwk-iDHw8`, `QbeD_Q3l0ts`, `MOOam-wU6IY`, `Oo_EMQQ7rEE`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [
      Types.ObjectId('6016e7ddc5b16c31630ec93e'),
      Types.ObjectId('6016e7ddc5b16c31630ec93d'),
      Types.ObjectId('6016e7ddc5b16c31630ec94b'),
      Types.ObjectId('6016e7ddc5b16c31630ec948'),
    ], // Time Warp DE
  },
  {
    name: `Foo Fighters`,
    description: `Foo Fighters is an American rock band formed in Seattle in 1994. It was founded by former Nirvana drummer Dave Grohl as a one-man project following the dissolution of Nirvana after the suicide of Kurt Cobain. The group took its name from "Foo fighter", a nickname coined by Allied aircraft pilots for UFOs and other aerial phenomena. Over the course of their career, Foo Fighters have won 12 Grammy Awards, including Best Rock Album four times.`,
    image: `https://www.rollingstone.com/wp-content/uploads/2018/06/foo-fighters-congrete-and-gold-review-9506116c-34b2-4619-bace-cf6df4db7bd9.jpg`,
    video: [`SBjQ9tuuTJQ`, `2eW1kUBJPFc`, `eWQB5xDnr2s`, `T_bQ9nzt9Xo`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    festivals: [
      Types.ObjectId('6016e7ddc5b16c31630ec944'),
      Types.ObjectId('6016e7ddc5b16c31630ec941'),
      Types.ObjectId('6016e7ddc5b16c31630ec940'),
      Types.ObjectId('6016e7ddc5b16c31630ec93f'),
    ], // Rock in Rio Lisboa
  },
  {
    name: `Jason Derulo`,
    description: `Jason Joel Desrouleaux (born September 21, 1989), better known by his stage name Jason Derulo (/dəˈruːloʊ/; formerly stylised as Derülo), is an American singer, songwriter, and dancer. Since the start of his solo recording career in 2009, Derulo has sold over 30 million singles and has achieved eleven Platinum singles including "Wiggle", "Talk Dirty", "Want to Want Me", "Trumpets", "It Girl", "In My Head", "Ridin' Solo", and "Whatcha Say".`,
    image: `https://www.thesun.co.uk/wp-content/uploads/2020/08/NINTCHDBPICT000604243913-1.jpg`,
    video: [`Uki_hD8Z_qw`, `fZMRc-UyPm0`, `9TpopkoyQVw`, `gTOYhxubOmk`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fe`), // etc
    festivals: [
      Types.ObjectId('6016e7ddc5b16c31630ec93f'),
      Types.ObjectId('6016e7ddc5b16c31630ec93e'),
      Types.ObjectId('6016e7ddc5b16c31630ec93c'),
      Types.ObjectId('6016e7ddc5b16c31630ec94e'),
    ], // Rock in Rio Lisboa
  },
  {
    name: `Anitta`,
    description: `Larissa de Macedo Machado (born March 30, 1993), known professionally by her stage name Anitta, is a Brazilian singer, songwriter, television host, actress, and businesswoman. In 2010, after posting a video on YouTube, Renato Azevedo, then producer of the independent record company Furacão 2000, called her to sign a contract with the label. Due to the success of the song "Meiga e Abusada" in 2012, she signed a contract with Warner Music Brasil the following year.`,
    image: `https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Anitta-2019.png/1200px-Anitta-2019.png`,
    video: [`57cdlk2C6sI`, `2fATjmtnE4s`, `vqvLV7lnSo8`, `R20kWqP9HcU`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fe`), // etc
    festivals: [
      Types.ObjectId('6016e7ddc5b16c31630ec945'),
      Types.ObjectId('6016e7ddc5b16c31630ec949'),
      Types.ObjectId('6016e7ddc5b16c31630ec943'),
      Types.ObjectId('6016e7ddc5b16c31630ec941'),
    ], // Rock in Rio Lisboa
  },
  {
    name: `Black Eyed Peas`,
    description: `Black Eyed Peas (also known as The Black Eyed Peas) is an American musical group, consisting of rappers will.i.am, apl.de.ap, Taboo and J. Rey Soul. Originally an alternative hip hop group, they subsequently refashioned themselves as a more marketable pop-rap act.`,
    image: `https://cdn.britannica.com/82/149182-050-574AF9C2/Black-Eyed-Peas-Fergie-Taboo-ap.jpg`,
    video: [`zXpXPCMlCmA`, `vMLk_T0PPbk`, `Jk7LPpY8pXM`, `b0WLp44qDdc`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fb`), // 힙합
    festivals: [
      Types.ObjectId('6016e7ddc5b16c31630ec94f'),
      Types.ObjectId('6016e7ddc5b16c31630ec94e'),
      Types.ObjectId('6016e7ddc5b16c31630ec94c'),
      Types.ObjectId('6016e7ddc5b16c31630ec94d'),
    ], // Rock in Rio Lisboa
  },
];
*/

class InsertDataService {
  public festivals = festivalModel;
  public countries = countryModel;
  public artists = artistModel;
  public users = userModel;
  public badges = badgeModel;
  public boards = boardModel;
  public genres = genreModel;
  public boardCategories = boardCategoryModel;

  public async insertUsers() {}

  public async insertBadges() {
    //await this.badges.create(badgeData);
    return await this.badges.find();
  }

  public async insertFestivals() {
    const festivalId = [
      '6016e7ddc5b16c31630ec93c',
      '6016e7ddc5b16c31630ec93d',
      '6016e7ddc5b16c31630ec93e',
      '6016e7ddc5b16c31630ec93f',
      '6016e7ddc5b16c31630ec940',
      '6016e7ddc5b16c31630ec941',
      '6016e7ddc5b16c31630ec944',
      '6016e7ddc5b16c31630ec943',
      '6016e7ddc5b16c31630ec949',
      '6016e7ddc5b16c31630ec945',
      '6016e7ddc5b16c31630ec94b',
      '6016e7ddc5b16c31630ec948',
      '6016e7ddc5b16c31630ec94a',
      '6016e7ddc5b16c31630ec947',
      '6016e7ddc5b16c31630ec946',
      '6016e7ddc5b16c31630ec942',
      '6016e7ddc5b16c31630ec94d',
      '6016e7ddc5b16c31630ec94c',
      '6016e7ddc5b16c31630ec94e',
      '6016e7ddc5b16c31630ec94f',
      '6016e7ddc5b16c31630ec950',
      '6016e7ddc5b16c31630ec951',
      '6016e7ddc5b16c31630ec952',
      '6016e7ddc5b16c31630ec953',
      '6016e7ddc5b16c31630ec954',
      '6016e7ddc5b16c31630ec955',
      '6016e7ddc5b16c31630ec956',
      '6016e7ddc5b16c31630ec958',
      '6016e7ddc5b16c31630ec957',
      '6016e7ddc5b16c31630ec959',
      '6016e7ddc5b16c31630ec95a',
      '6016e7ddc5b16c31630ec95b',
      '6016e7ddc5b16c31630ec95c',
      '6016e7ddc5b16c31630ec95d',
      '6016e7ddc5b16c31630ec95e',
      '6016e7ddc5b16c31630ec95f',
      '6016e7ddc5b16c31630ec960',
      '6016e7ddc5b16c31630ec961',
      '6016e7ddc5b16c31630ec962',
      '6016e7ddc5b16c31630ec963',
      '6016e7ddc5b16c31630ec967',
      '6016e7ddc5b16c31630ec964',
      '6016e7ddc5b16c31630ec968',
      '6016e7ddc5b16c31630ec965',
      '6016e7ddc5b16c31630ec966',
      '6016e7ddc5b16c31630ec969',
      '6016e7ddc5b16c31630ec96a',
      '6016e7ddc5b16c31630ec96b',
      '6016e7ddc5b16c31630ec96c',
      '6016e7ddc5b16c31630ec96f',
      '6016e7ddc5b16c31630ec96e',
      '6016e7ddc5b16c31630ec972',
      '6016e7ddc5b16c31630ec970',
      '6016e7ddc5b16c31630ec971',
      '6016e7ddc5b16c31630ec973',
      '6016e7ddc5b16c31630ec974',
      '6016e7ddc5b16c31630ec975',
      '6016e7ddc5b16c31630ec976',
      '6016e7ddc5b16c31630ec977',
      '6016e7ddc5b16c31630ec978',
      '6016e7ddc5b16c31630ec97a',
      '6016e7ddc5b16c31630ec979',
      '6016e7ddc5b16c31630ec97b',
      '6016e7ddc5b16c31630ec97c',
      '60171a64b5e629593340318a',
      '60171a64b5e629593340318b',
      '60171a64b5e629593340318c',
      '60171a64b5e629593340318e',
      '60171a64b5e629593340318f',
      '60171a64b5e6295933403190',
      '60171a64b5e6295933403191',
      '60171a64b5e6295933403192',
      '60171a64b5e6295933403193',
      '60171a64b5e6295933403194',
      '60171a64b5e6295933403195',
      '60171a64b5e6295933403196',
      '60171a64b5e6295933403197',
      '60171a64b5e6295933403198',
      '60171a64b5e6295933403199',
      '60171a64b5e629593340319a',
      '60171a64b5e629593340319b',
      '60171a64b5e629593340319c',
      '60171a64b5e629593340319d',
      '60171a64b5e629593340319e',
      '60171a64b5e629593340319f',
      '60171a64b5e62959334031a0',
      '60171a64b5e62959334031a1',
      '60171a64b5e62959334031a2',
      '60171a64b5e62959334031a3',
      '60171a64b5e62959334031a4',
      '60171a64b5e62959334031a5',
      '60171a64b5e62959334031a6',
      '60171a64b5e62959334031a7',
      '60171a64b5e62959334031a8',
      '60171a64b5e62959334031a9',
      '60171a64b5e62959334031aa',
      '60171a64b5e62959334031ab',
      '60171a64b5e62959334031ac',
      '60171a64b5e62959334031ae',
      '60171a64b5e62959334031ad',
      '60171a64b5e62959334031af',
      '60171a64b5e62959334031b0',
      '60171a64b5e62959334031b1',
      '60171a64b5e62959334031b2',
      '60171a64b5e62959334031b3',
      '60171a64b5e62959334031b4',
      '60171a64b5e62959334031b5',
      '60171a64b5e62959334031b6',
      '60171a64b5e62959334031b7',
      '60171a64b5e62959334031b8',
      '60171a64b5e62959334031b9',
      '60171a64b5e62959334031ba',
      '60171a64b5e62959334031bb',
      '60171a64b5e62959334031bc',
      '60171a64b5e62959334031bd',
      '60171a64b5e62959334031be',
      '60171a64b5e62959334031bf',
      '60171a64b5e62959334031c0',
      '60171a64b5e62959334031c1',
      '60171b36e472bf59e2a394bd',
    ];

    const countryId = [
      Types.ObjectId('6016f3f41372a93cdbd48274'), // Korea
      Types.ObjectId('6016f3f41372a93cdbd48275'), // japan
      Types.ObjectId('6016f3f41372a93cdbd48276'), // Philippines
      Types.ObjectId('6016f3f41372a93cdbd48277'), // Thailand
      Types.ObjectId('6016f3f41372a93cdbd48278'), // Singapore
      Types.ObjectId('6016f3f41372a93cdbd48279'), // Taiwan
      Types.ObjectId('6016f3f41372a93cdbd4827a'), // Vietnam
      Types.ObjectId('6016f3f41372a93cdbd4827b'), // India
      Types.ObjectId('6016f3f41372a93cdbd4827c'), // United Arab Emirates
      Types.ObjectId('6016f3f41372a93cdbd4827d'), // China
      Types.ObjectId('6016f3f41372a93cdbd4827e'), // Hong Kong
      Types.ObjectId('6016f3f41372a93cdbd4827f'), // Belgium
      Types.ObjectId('6016f3f41372a93cdbd48280'), // France
      Types.ObjectId('6016f3f41372a93cdbd48281'), // Germany
      Types.ObjectId('6016f3f41372a93cdbd48282'), // Ireland
      Types.ObjectId('6016f3f41372a93cdbd48283'), // Italy
      Types.ObjectId('6016f3f41372a93cdbd48284'), // Netherlands
      Types.ObjectId('6016f3f41372a93cdbd48285'), // Spain
      Types.ObjectId('6016f3f41372a93cdbd48286'), // England
      Types.ObjectId('6016f3f41372a93cdbd4828a'), // South Africa
      Types.ObjectId('6016f3f41372a93cdbd48289'), // Greece
      Types.ObjectId('6016f3f41372a93cdbd4828b'), // Egypt
      Types.ObjectId('6016f3f41372a93cdbd4828c'), // Australia
      Types.ObjectId('6016f3f41372a93cdbd4828f'), // Argentina
      Types.ObjectId('6016f3f41372a93cdbd48290'), // Brazil
      Types.ObjectId('6016f3f41372a93cdbd48291'), // Chile
      Types.ObjectId('6016f3f41372a93cdbd48292'), // Colombia
      Types.ObjectId('6016f3f41372a93cdbd48294'), // Canada
      Types.ObjectId('6016f3f41372a93cdbd48296'), // Mexico
      Types.ObjectId('6016f3f41372a93cdbd48297'), // America
    ];

    // const stamps = ['https://fessport-image.s3.ap-northeast-2.amazonaws.com/batch_AFROPUNK-removebg-preview.png'];
    // //await this.festivals.create(fd);
    // let k = 0;
    // for (let i = 0; i < countryId.length; i++) {
    //   // countryId길이 : 30
    //   for (let j = k; j < k + 4; j++) {
    //     await this.festivals.findByIdAndUpdate(
    //       { _id: festivalId[j] },
    //       {
    //         country: countryId[i], // i번째 컨트리 아이디를 4번 반복
    //       },
    //     );
    //   }
    //   k += 4; // 그 다음 4개
    // }
    //await this.festivals.find({_id: id})
  }

  public async insertArtists() {
    //await this.artists.create(artistData);

    return await this.artists.find();
  }

  public async insertCountries() {
    //await this.countries.create(countryData);
    return await this.countries.find();
  }

  public async insertGenres() {
    //await this.genres.create(genreData);
    return await this.genres.find();
  }

  public async insertBoardCategories() {
    const bc = [
      {
        name: 'companion',
      },
      {
        name: 'resell',
      },
    ];
    await this.boardCategories.create(bc);
    return await this.boardCategories.find();
  }
}

export default InsertDataService;

/*
const fd = [
      {
        name: `Lollapalooza Stockholm 2021`,
        description: `Lollapalooza (Lolla) is an annual four-day music festival in Chicago, Illinois, at Grant Park, founded in 1991 and since expanded to other countries. Performances include but are not limited to alternative rock, heavy metal, punk rock, hip hop, and electronic music. Lollapalooza has also provided a platform for nonprofit and political groups and various visual artists. The four-day music festival in Chicago's Grant Park hosts an estimated 400,000 people each year`,
        startDate: `2021-07-02`,
        endDate: `2021-07-04`,
        video: [`zns830Yl1b0`, `Rttnji1yb_Q`, `MfnHlxLGpBc`, `iopk8BxSXmk`],
        thumbnail: `https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10:937/jb7production-uploads/2019/12/lollastockholm2020.jpg`,
        poster: `https://assets-global.website-files.com/5e9752f107cf66380d179659/5fdca38ef29a462f6faa9362_Lolla2021_Poster_50x70_Sthlm.png`,
        homepage: `https://www.lollastockholm.com/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), //
        country: Types.ObjectId(`6016f3f41372a93cdbd48297`), //
        artists: [],
      },
      {
        name: `Bilbao BBK Live 2021`,
        description: `Bilbao BBK Live is a rock and pop music festival that takes place annually in the city of Bilbao, Spain. Since its beginnings, the festival is held in its entirety on a special complex built specifically for the event on the slopes of Mount Cobetas, located southwest of the city.`,
        startDate: `2021-07-9`,
        endDate: `2021-07-11`,
        video: [`1AuZ963HT6Y`, `MbI4D-fgoMc`, `sPh-t9Veg74`, `8vXG2QC3Sdg`],
        thumbnail: `https://www.bilbaobbklive.com/wp-content/uploads/2019/02/BBL19_NP.jpg`,
        poster: `https://cdn.imweb.me/upload/S20200106a105fd03f4b57/9554f07bc4172.jpg`,
        homepage: `https://www.bilbaobbklive.com/en/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), //
        country: Types.ObjectId(`6016f3f41372a93cdbd48297`), //
        artists: [],
      },
      {
        name: `Rolling Loud Festival 2021`,
        description: `Algarve is Portugal's southernmost region, complete with soaring cliffs and golden sandy beaches. With 125 miles of coastline and 300 days of sun a year, it's the perfect destination to soak up the rays.`,
        startDate: `2021-02-12`,
        endDate: `2021-02-14`,
        video: [`ivDcXwlZGA0`, `Zk8EdZgK43g`, `tp3lnkNohHY`, `feXpmqzqDM`],
        thumbnail: `https://media.resources.festicket.com/www/photos/RollingLoud-Artwork_VJlP2vC.jpg`,
        poster: `https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/84321694_137694084375367_4289916229776310272_o.jpg?_nc_cat=110&ccb=2&_nc_sid=2c4854&_nc_ohc=0Sli3AY9opsAX_IJF-F&_nc_ht=scontent-ssn1-1.xx&oh=60a31edc524cd6857672e4ef5f999819&oe=603D748F`,
        homepage: `https://www.rollingloud.com/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), //
        country: Types.ObjectId(`6016f3f41372a93cdbd48297`), //
        artists: [],
      },
      {
        name: `Nova Rock Festival 2021`,
        description: ``,
        startDate: `2021-00-00`,
        endDate: `2021-00-00`,
        video: [`oDOdRCgvD0E`, `YPiuzMYFPRY`, `ZNMQaqNH96E`, `aG9v2nf_Ra8`],
        thumbnail: `https://www.carnifest.com/wp-content/uploads/2018/11/Nova_Rock_Festival-a-www.novarock.at_-1.jpg`,
        poster: `https://www.novarock.at/wp-content/uploads/sites/15/Insta-Post-1080-x-1080-All.png`,
        homepage: `https://www.novarock.at/en/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e4`), //
        country: Types.ObjectId(`6016f3f41372a93cdbd48297`), //
        artists: [],
      },
      {
        name: `NOS Alive 2021`,
        description: `NOS Alive (formerly Optimus Alive! and Optimus Alive) is an annual music and arts festival which takes place in the Algés riverside, in Oeiras, Portugal. It is organized by the Portuguese live entertainment company Everything is New and its main sponsor is telecommunications company NOS (previously named Optimus).The first edition took place in 2007.`,
        startDate: `2021-07-07`,
        endDate: `2021-07-10`,
        video: [`5fuS2g22dSM`, `l2OV8Hsvzb4`, `pdjtDY9Tug4`, `CxEiG3e3eJU`],
        thumbnail: `https://amiroad.pt/wp-content/uploads/NOS-Alive-2020.jpg`,
        poster: `https://media.resources.festicket.com/www/admin/uploads/images/107516068_10157336087686517_5434182040180256078_o.jpg`,
        homepage: `https://nosalive.com/en/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e4`), //
        country: Types.ObjectId(`6016f3f41372a93cdbd48297`), //
        artists: [],
      },
      {
        name: `Ohana festival 2021`,
        description: `When I saw the announcement for the Ohana Festival, which took place August 27-28 at Doheny State Beach in Dana Point, Calif., I was intrigued. This is because of the festival's mission to benefit a public good, in this case preservation of a state beach beloved by local surfers.`,
        startDate: `2021-09-24`,
        endDate: `2021-09-26`,
        video: [`qBL5QGRJhwQ`, `Y702_p5dk1Q`, `Yl4-74WLpco`, `W6__OEk4dDE`],
        thumbnail: `https://en.concerts-metal.com/images/flyers/202009/1599808287.png`,
        poster: `https://assets.website-files.com/5e9743ac28cb78f75f9a4bec/5e9747b2634a7a9329ace868_ohana-2020_lineup-poster-2-4f95f37c-p-1080.jpeg`,
        homepage: `https://www.ohanafest.com/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e7`), //
        country: Types.ObjectId(`6016f3f41372a93cdbd48297`), //
        artists: [],
      },
      {
        name: `Hurricane Festival 2021`,
        description: `Das Hurricane findet seit 1997 am 3. oder 4. Wochenende im Juni auf dem Eichenring und auf den umliegenden landwirtschaftlichen Flächen in Scheeßel und Westervesede statt. Der Eichenring selbst ist eine ca. 1.000m lange Sandbahn, auf welcher jährlich internationale Motorrad-Sandbahnrennen ausgetragen werden. Mit weit über 70.000 Besuchern zählt das Festival zu den größten Musikfestivals in Deutschland. Das Hurricane Festivals präsentiert mehr als 80 Bands auf 4 Bühnen mit einer Mischung aus Rock, Alternative, Pop und Electro, wobei neben etablierten Stars auch Neulinge zum Zuge kommen.`,
        startDate: `2021-06-18`,
        endDate: `2021-06-20`,
        video: [`k9cVbVVcU4o`, `AwXeH3DAgX0`, `aITlVrRFGZ8`, `CUCG-jNaAtE`],
        thumbnail: `https://www.memo-media.de/data/events/8458/hurricane-festival-2021.jpg`,
        poster: `https://en.concerts-metal.com/images/flyers/202005/1588774493.webp`,
        homepage: `https://www.hurricane.de/en/event/news/2020-2021/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e4`), //
        country: Types.ObjectId(`6016f3f41372a93cdbd48297`), //
        artists: [],
      },
      {
        name: `Open'er Festival 2021`,
        description: `The Open'er Festival is a music festival which takes place on the north coast of Poland, in Gdynia. It is one of the biggest annual music festivals in Poland. The first edition of the festival was organized in Warsaw in 2002 as Open Air Festival. Open'er Festival won the Best Major Festival prize at the European Festivals Awards ceremony in 2009, 2010 and 2019. The 2018 edition of Open'er was held from 4 to 7 July.`,
        startDate: `2021-06-30`,
        endDate: `2021-07-03`,
        video: [`gMeYkvXUSC4`, `uIV6szkOeqY`, `iYBE3Z5QYt0`, `vP_zSX8QlY4`],
        thumbnail: `https://www.alterart.pl/shop/ticketimg/ticket90.jpg`,
        poster: `https://static.opener.pl/media/attachments/Opener2021_statement_4_EN.png`,
        homepage: `https://opener.pl/en/program-2021/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e7`), //
        country: Types.ObjectId(`6016f3f41372a93cdbd48297`), //
        artists: [],
      },
      {
        name: `Felyn Stadium Festival 2021`,
        description: `Felyn Stadium Festival, at Groupama Stadium, offers a varied programme, mixing international and French artists as well as new talent. Last updated date : 11/12/2020. From Friday 18 to Saturday 19 June 2021. Groupama Stadium 10 avenue Simone Veil - 69150 Décines-Charpieu.`,
        startDate: `2021-06-18`,
        endDate: `2021-06-19`,
        video: [`lD5mfYMt0MA`, `57ksCMbWKoU`, `fEYUoBgYKzw`, `ixkoVwKQaJg`],
        thumbnail: `https://www.places-concert.com/images/visuels/festivals_felyn_stadium_festival_20112019120837.jpg`,
        poster: `https://en.concerts-metal.com/images/flyers/202004/1586896623.jpeg`,
        homepage: `https://felyn-stadium-festival.com/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e7`), //
        country: Types.ObjectId(`6016f3f41372a93cdbd48297`), //
        artists: [],
      },
      {
        name: `Main Square Festival 2021`,
        description: `The Main Square Festival is an annual international music festival organized by Live Nation which takes place in the first week-end of July in Arras, France. Created in 2004 by France Leduc Productions, the festival rose to one of the major music events of the country, attracting worldwide famous bands and stars like Coldplay, Depeche Mode, Placebo, Muse, Indochine, and Pearl Jam.`,
        startDate: `2021-07-02`,
        endDate: `2021-07-04`,
        video: [`d92TxMZZyCg`, `nqioq8wM4Pk`, `AV3Qnl2albE`, `fTStSgjVtoA`],
        thumbnail: `https://media.resources.festicket.com/image/fit-in/412x264/filters:quality(70)/www/photos/10472-card.jpg`,
        poster: `https://en.concerts-metal.com/images/flyers/202007/1593976545.jpeg`,
        homepage: `https://mainsquarefestival.fr/en/tickets`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e4`), //
        country: Types.ObjectId(`6016f3f41372a93cdbd48297`), //
        artists: [],
      },
      {
        name: `Hellfest Open Air 2021`,
        description: `Hellfest Open Air which takes place in Clisson, western France is one of the biggest rock, metal and punk festivals in Europe.`,
        startDate: `2021-06-18`,
        endDate: `2021-06-20`,
        video: [`rhNRYikLxTs`, `GDLfDP8rPTc`, `o2c4hoLT_yU`, `NVdMIJT_ae4`],
        thumbnail: `https://media.resources.festicket.com/image/262x370/center/middle/filters:quality(70)/www/photos/10037-poster.jpg`,
        poster: `http://lorezine.com/wp-content/uploads/2020/07/hellfest-2021-poster.jpg`,
        homepage: `https://www.hellfest.fr/en/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e4`), //
        country: Types.ObjectId(`6016f3f41372a93cdbd48297`), //
        artists: [],
      },
      {
        name: `La Nuit De L'erdre 2021`,
        description: `Nort-sur-Erdre est une commune de l'Ouest de la France, située dans le département de la Loire-Atlantique, en région Pays de la Loire.`,
        startDate: `2021-06-25`,
        endDate: `2021-06-27`,
        video: [`8qJito4--08`, `b9MagXOEqiQ`, `eTbAlVL-VMI`, `zUHgDPg4xz8`],
        thumbnail: `http://leguidedesfestivals.com/upload/fiche/25367-2.jpg`,
        poster: `http://bullesdeculture.org/bdc-content/uploads/2019/06/la-nuit-de-lerdre-2019-affiche-line-up.jpg`,
        homepage: `https://www.lanuitdelerdre.fr/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e7`), //
        country: Types.ObjectId(`6016f3f41372a93cdbd48297`), //
        artists: [],
      },
      {
        name: `Festival Garorock 2021`,
        description: `Garorock est un festival de musique pop, rock, electro et techno qui a lieu à Marmande. C'est en mars 1997 que le Sud-Ouest voit naître un festival à la tendance punk/rock, dans les anciens abattoirs marmandais : le Garorock, jeu de mot oscillant entre Garonne et Rock, mais aussi Gare au Rock.`,
        startDate: `2021-06-23`,
        endDate: `2021-06-27`,
        video: [`z82VMgjDRpc`, `8STtvOmVTK4`, `k3b0Od0X4Rw`, `RXpt06kGpsw`],
        thumbnail: `https://allexciting.com/wp-content/uploads/2016/12/garorock.jpg`,
        poster: `https://media.resources.festicket.com/www/photos/GarorockArtwork_Spwe0CE.jpg`,
        homepage: `https://www.garorock.com/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e4`), //
        country: Types.ObjectId(`6016f3f41372a93cdbd48297`), //
        artists: [],
      },
      {
        name: `Summerburst Festival 2021`,
        description: `Summerburst is a electronic festival, known as Sweden's largest event for the electronics genre. The festival is citybased and draws crowds and artists on an international level`,
        startDate: `2021-06-04`,
        endDate: `2021-06-05`,
        video: [`GgmLk1uY8w0`, `sWCF4R_67Ro`, `gLjL5P7xT6M`, `qxLn_9m7YOk`],
        thumbnail: `https://summerburst.se/wp-content/uploads/elementor/thumbs/SB21_Mainstage_EN_Holographic_RGB-opic0e3qh22t6bdg2szrw09qpi41zz0x2pwmvlthg2.png`,
        poster: `https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/97133971_2979693942096474_6053917778518212608_o.jpg?_nc_cat=100&ccb=2&_nc_sid=6e5ad9&_nc_ohc=Y-SRbn_f958AX9w8ZB0&_nc_ht=scontent-ssn1-1.xx&oh=5f3efc412e158bbe2c1f26cf9f0a2606&oe=603CCED4`,
        homepage: `https://summerburst.se/en-summerburst-10/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e4`), //
        country: Types.ObjectId(`6016f3f41372a93cdbd48297`), //
        artists: [],
      },
      {
        name: `Amsterdam Dance Event`,
        description: `The Amsterdam Dance Event (ADE) is a five-day electronic music conference and festival held annually in mid-October. The event is organized by The Amsterdam Dance Event Foundation and offers a full program of daytime conferences at ADE Pro, ADE Tech, ADE University, ADE Beamlab, ADE Green, ADE Sound Lab and ADE Beats alongside the ADE By Day festival program and the nighttime ADE Festival, which features over 1,000 events and 2,500 artists over five days in 200 clubs and venues.`,
        startDate: `2021-10-21`,
        endDate: `2021-10-25`,
        video: [`MTnAWEaYRVc`, `Yikc-gyTukA`, `nHZ9--eN4S0`, `SN61VBillv8`],
        thumbnail: `https://www.ibizabynight.net/wp-content/uploads/2020/09/ade-amsterdam-2021-1024x1024.png`,
        poster: `https://www.ibizabynight.net/wp-content/uploads/2020/09/ade-amsterdam-2021-1024x1024.png`,
        homepage: `https://www.amsterdam-dance-event.nl/en/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), // 일렉
        country: Types.ObjectId(`6016f3f41372a93cdbd48274`),
        artists: [],
      },
      {
        name: `AFROPUNK`,
        description: `Afro-punk (sometimes spelled Afro-Punk, Afropunk or AfroPunk) refers to the participation of African Americans and other black people in punk and alternative subcultures, especially in the United States where this scene had been overwhelmingly white.`,
        startDate: `2021-07-07`,
        endDate: `2021-07-10`,
        video: [`SLzMI0NK9_o`, `pNfrh8JLDn4`, `xZMMYFCdsf0`, `4IAdQHHNR7I`],
        thumbnail: `https://i.pinimg.com/originals/99/bf/c8/99bfc85a698015ef8ad543f762dae627.jpg`,
        poster: `https://i.pinimg.com/originals/99/bf/c8/99bfc85a698015ef8ad543f762dae627.jpg`,
        homepage: `https://afropunk.com/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), // 일렉
        country: Types.ObjectId(`6016f3f41372a93cdbd48274`),
        artists: [],
      },
      {
        name: `The Governors Ball`,
        description: `The Governors Ball Music Festival (commonly known as Governors Ball or Gov Ball) is a multi-day music festival held on Randalls Island in New York City. Launched in 2011, the festival features an array of genres and styles of music, including rock, electronic, hip-hop, indie, Americana, pop, folk, and more. It is produced by Founders Entertainment, a festival promotion company based in New York City, which also produces The Meadows Music & Arts Festival. Aside from the wide variety of music, the festival features a multitude of popular New York restaurants and food trucks, as well as activities and games.`,
        startDate: `2021-09-24`,
        endDate: `2021-09-26`,
        video: [`N9oL0nikyZk`, `cw9CbcyY0wM`, `IH-VqDQYi1A`, `3G0Rpm7K-dU`],
        thumbnail: `https://spillmagazine.com/wp-content/uploads/2017/01/The-Governers-Ball-790x1054.jpg`,
        poster: `https://spillmagazine.com/wp-content/uploads/2017/01/The-Governers-Ball-790x1054.jpg`,
        homepage: `https://www.governorsballmusicfestival.com/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), // 일렉
        country: Types.ObjectId(`6016f3f41372a93cdbd48274`),
        artists: [],
      },
      {
        name: `Les Eurockéennes`,
        description: `Les Eurockéennes de Belfort (French pronunciation: ​[lez‿øʁɔkeɛn də bɛlfɔʁ], English: The Eurockeans from Belfort) is one of France's largest rock music festivals. The Eurockéennes, a play on words involving rock and européennes (Europeans), is a festival based in a nature reserve beside Lac de Malsaucy Belfort.`,
        startDate: `2021-07-04`,
        endDate: `2021-07-07`,
        video: [`Ts94kjvYZho`, `sdqzRtZV3VI`, `CBUicuBd8ow`, `2rFPYQfgESM`],
        thumbnail: `https://www.rocknfolk.com/wp-content/uploads/2020/12/EUROCKEENNES-2021_visuel-scaled.jpg`,
        poster: `https://www.rocknfolk.com/wp-content/uploads/2020/12/EUROCKEENNES-2021_visuel-scaled.jpg`,
        homepage: `https://www.eurockeennes.fr/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e4`), // 록
        country: Types.ObjectId(`6016f3f41372a93cdbd48274`),
        artists: [],
      },
      {
        name: `Splendour in the Grass`,
        description: `Splendour in the Grass (commonly referred to as Splendour) is an annual Australian music festival held at the North Byron Parklands in Yelgun, New South Wales. Since its inauguration, the festival has also been held in various locations near Byron Bay, New South Wales, and Woodford, Queensland.`,
        startDate: `2021-07-23`,
        endDate: `2021-07-25`,
        video: [`XifqWdqTosI`, `v62xb4Gu3kU`, `crgFPl2eaPE`, `vSflkZTsAxU`],
        thumbnail: `https://www.nme.com/wp-content/uploads/2020/02/poster-sitg-2020@2000x2000.jpg`,
        poster: `https://www.nme.com/wp-content/uploads/2020/02/poster-sitg-2020@2000x2000.jpg`,
        homepage: `https://splendourinthegrass.com/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e4`), // 록
        country: Types.ObjectId(`6016f3f41372a93cdbd48274`),
        artists: [],
      },
      {
        name: `Defqon.1 Weekend`,
        description: `Defqon.1 Weekend Festival is an annual music festival held in the Netherlands, Chile and Australia. It was founded in 2003 by festival organizer Q-dance. The festival plays mostly hardstyle and related genres such as hardcore techno, hard house and hard trance.`,
        startDate: `2021-06-24`,
        endDate: `2021-06-26`,
        video: [`vJ2eHsQv7Ac`, `mw9WcQo6aIY`, `DpxyDPzQZ7E`, `3skZxOjrJ9c`],
        thumbnail: `https://image.winudf.com/v2/image/Y29tLnBpa3plbHoucWRhbmNlLkRlZnFvbl9zY3JlZW5zaG90c18wX2Q3MmM4NzZm/screen-0.jpg?fakeurl=1&type=.jpg`,
        poster: `https://image.winudf.com/v2/image/Y29tLnBpa3plbHoucWRhbmNlLkRlZnFvbl9zY3JlZW5zaG90c18wX2Q3MmM4NzZm/screen-0.jpg?fakeurl=1&type=.jpg`,
        homepage: `https://www.q-dance.com/en/events/defqon-1/defqon-1-weekend-festival-2021`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), // 일렉
        country: Types.ObjectId(`6016f3f41372a93cdbd48274`),
        artists: [],
      },
      {
        name: `Mysteryland`,
        description: `Mysteryland is the leading electronic dance music festival in the Netherlands, organized by the Netherlands-based promoter ID&T. Being the first of its kind in the country when it was established, its organizers have billed the event as the oldest dance music festival in the Netherlands. It has most recently been held at Haarlemmermeerse Bos in Haarlemmermeer; an exhibition ground that hosted the 2002 edition of the Dutch gardening festival Floriade. It is traditionally held on the final weekend of August; the next date is August 28-30, 2020. Since 2015, the festival has changed from a one-day to a three-day event with camping. Each year, more than 100.000 visitors from over 100 nationalities are welcomed at Mysteryland.`,
        startDate: `2021-08-27`,
        endDate: `2021-08-29`,
        video: [`oAnzeENTzkA`, `Ivd3e1uUFg4`, `_nfqu72N-wM`, `B9SAuKlVsow`],
        thumbnail: `https://pbs.twimg.com/media/EOPC2mrXsAEKdn0.jpg`,
        poster: `https://pbs.twimg.com/media/EOPC2mrXsAEKdn0.jpg`,
        homepage: `https://www.mysteryland.nl/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e6`), // etc
        country: Types.ObjectId(`6016f3f41372a93cdbd48274`),
        artists: [],
      },
      {
        name: `Hot 97 Summer Jam`,
        description: `Summer Jam is the annual hip-hop fest held in East Rutherford, New Jersey and sponsored by New York-based radio station Hot 97FM. Normally held in June, the concert features the most popular acts that hip hop and R&B have to offer in a particular year. The hip-hop summer festival format was originally pioneered and popularized by San Francisco radio station KMEL with their large-scale Summer Jam concerts from 1987 through the 1990s and present day.`,
        startDate: `2021-06-02`,
        endDate: `2021-06-03`,
        video: [`j1jLQtJ0_6o`, `9waimO8gVlQ`, `m4BmKyiqSUM`, `bZ8uBi4oRvc`],
        thumbnail: `https://media.pitchfork.com/photos/5ca3a1ca5885511ab3235ce0/master/pass/Summer-Jam.jpg`,
        poster: `https://media.pitchfork.com/photos/5ca3a1ca5885511ab3235ce0/master/pass/Summer-Jam.jpg`,
        homepage: `https://www.hot97.com/summer-jam/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), // 일렉
        country: Types.ObjectId(`6016f3f41372a93cdbd48274`),
        artists: [],
      },
      {
        name: `Best Kept Secret`,
        description: `The Best Kept Secret festival is a three-day music festival held inside the Safaripark Beekse Bergen, within the village of Hilvarenbeek in the south of the Netherlands, since 2013. Best Kept Secret is a music festival with a line-up in which big names are alternated with new discoveries from indie, folk, hip-hop, rock, electronics or a mixture of styles. The festival's centerpiece is a lake at the back of Beekse Bergen safari park. The festival's founder described his vision as aiming to create "something that we’d like to go to ourselves".`,
        startDate: `2021-06-11`,
        endDate: `2021-06-13`,
        video: [`scQSqkYiV3s`, `dabeorqOnSU`, `cPJDBFBhAbo`, `cL7QZv9wCZ8`],
        thumbnail: `https://en.concerts-metal.com/images/flyers/202009/1599310596.webp`,
        poster: `https://en.concerts-metal.com/images/flyers/202009/1599310596.webp`,
        homepage: `https://www.bestkeptsecret.nl/en/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e6`), // etc
        country: Types.ObjectId(`6016f3f41372a93cdbd48274`),
        artists: [],
      },
      {
        name: `Distortion`,
        description: `'Controlled chaos' is the only way to describe Distortion. The festival is a celebration of street life and new dance music, so what else could it be other than a massive, 100,000 person strong street party? Split into three parts – Distortion Club, Distortion Ø and Street Parties – Distortion is a multi-facetted experience with varying degrees of premeditation. It's kind of like that movie The Purge, but instead of legal murder, it's all about legal partying. `,
        startDate: `2021-06-03`,
        endDate: `2021-06-07`,
        video: [`27xa11WYzGU`, `KWi7ZfiaV6w`, `uPHQhzbnJ0U`, `dVrTRbA5fH4`],
        thumbnail: `https://img.redbull.com/images/w_830/q_auto,f_auto/redbullcom/2020/5/15/vmqfns2uuarrhewrnuzu/nova-rock-2021-supporting-local-artists`,
        poster: `https://img.redbull.com/images/w_830/q_auto,f_auto/redbullcom/2020/5/15/vmqfns2uuarrhewrnuzu/nova-rock-2021-supporting-local-artists`,
        homepage: `https://www.cphdistortion.dk/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e6`), // etc
        country: Types.ObjectId(`6016f3f41372a93cdbd48274`),
        artists: [],
      },
      {
        name: `Electric Daisy Carnival`,
        description: `Electric Daisy Carnival, commonly known as EDC, is the largest electronic dance music festival in North America. The annual flagship event is now held in May, at the Las Vegas Motor Speedway and Orlando. The event primarily features electronic dance producers and DJs, such as Armin van Buuren, Calvin Harris, Diplo, Alesso, Dillon Francis, Martin Garrix, Zedd, Afrojack, Seven Lions, NGHTMRE, Yellow Claw, and Tiësto. The festival incorporates a variety of electronic music, including house, techno, drum and bass, and dubstep.`,
        startDate: `2021-05-21`,
        endDate: `2021-05-23`,
        video: [`Fu6aNpGxaVk`, `wv2SDDcptfU`, `EChd8F4mw_g`, `Zo47D-ZeMmI`],
        thumbnail: `https://cdn.imweb.me/upload/S20200106a105fd03f4b57/fcf9a3f384496.png`,
        poster: `https://cdn.imweb.me/upload/S20200106a105fd03f4b57/fcf9a3f384496.png`,
        homepage: `https://lasvegas.electricdaisycarnival.com/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), // 일렉
        country: Types.ObjectId(`6016f3f41372a93cdbd48274`),
        artists: [],
      },
      {
        name: `Dimensions Festival`,
        description: `One of our favourite Croatian music festivals, Dimensions steers clear of the crowded Zrće beach, instead taking itself north to the unique and secluded Fort Punta Christo in Pula. Here it showcases an underground electronic and urban lineup inside the fort's most intimate spaces, including its moat, as well as daytime sessions of the area's stunning beaches.`,
        startDate: `2021-08-13`,
        endDate: `2021-08-18`,
        video: [`y8gJaMOHgSQ`, `r7k5kgbu9zY`, `H_t8PR9qcak`, `3fwdx2V87cY`],
        thumbnail: `https://thegarden.hr/app/uploads/2020/10/dim21-line-up_a3_01-10-600x848.png`,
        poster: `https://thegarden.hr/app/uploads/2020/10/dim21-line-up_a3_01-10-600x848.png`,
        homepage: `https://www.dimensionsfestival.com/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e5`), // 힙합
        country: Types.ObjectId(`6016f3f41372a93cdbd48274`),
        artists: [],
      },
      {
        name: `Outlook Festival`,
        description: `Dimensions' sibling festival shares the same stunning location and passion for the electronic underground, but where it deviates is its full-blown commitment to celebrating soundsystem culture. That means reggae, dubstep, drum & bass, jungle, grime and garage are served up on a scale unrivalled anywhere in Europe.`,
        startDate: `2021-07-29`,
        endDate: `2021-08-02`,
        video: [`PWSYi6vQRxg`, `PQ2jJc3DuGo`, `h9hAGm9hEbQ`, `__JiY4WCmno`],
        thumbnail: `https://im.ra.co/images/events/flyer/2019/9/hr-0904-1213209-1261973-front.jpg`,
        poster: `https://im.ra.co/images/events/flyer/2019/9/hr-0904-1213209-1261973-front.jpg`,
        homepage: `https://outlookfestival.com/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), // 일렉
        country: Types.ObjectId(`6016f3f41372a93cdbd48274`),
        artists: [],
      },
      {
        name: `Way Out West`,
        description: `Some festivals have a great lineup, others have a great setting. When you combine the two, you're onto something. That's Way Out West in a nut shell. Add in the Stay Out West concept, which keeps the party going well into the wee hours of the night throughout the clubs of Gothenburg, and you have a reliably great festival. It may not have all the bells and whistles of some of the bigger budget festivals, bit it's always a great time. `,
        startDate: `2021-08-12`,
        endDate: `2021-08-14`,
        video: [`zDlKOPC3nxQ`, `P7ODvKN_82c`, `VhwegDuRdTI`, `ReY32F30B-U`],
        thumbnail: `https://www.sonicsherpa.com.au/wp-content/uploads/2019/05/WoW2019.jpg`,
        poster: `https://www.sonicsherpa.com.au/wp-content/uploads/2019/05/WoW2019.jpg`,
        homepage: `https://www.wayoutwest.se/nyheter/way-out-west-will-be-back-2021/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e6`), // etc
        country: Types.ObjectId(`6016f3f41372a93cdbd48274`),
        artists: [],
      },
      {
        name: `DGTL Amsterdam`,
        description: `At the forefront of the underground, DGTL balances its uncompromising passion for cutting edge sounds and visual arts with its equally impassioned green initiatives. The concept has clearly worked as the festival has struck a chord with the dance community, resulting in added editions in São Paulo, Barcelona and Tel Aviv. `,
        startDate: `2021-04-10`,
        endDate: `2021-04-12`,
        video: [`ElQZxAORiI4`, `NrQ79UKGcAI`, `Xk2Qi5Old6M`, `IwzOi1q3S3U`],
        thumbnail: `https://dgtl.nl/media/deze.png`,
        poster: `https://dgtl.nl/media/deze.png`,
        homepage: `https://dgtl.nl/?skip_portal=1`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), // 일렉
        country: Types.ObjectId(`6016f3f41372a93cdbd48274`),
        artists: [],
      },
      {
        name: `Boardmasters`,
        description: `Boardmasters Festival is an annual event held in Cornwall, United Kingdom, usually held over five days on the second weekend of August. The event is a combination of live music and surfing/skateboarding competitions in and around the town of Newquay. The festival was founded in 1981 through the surfing competition, although in 2005 the music side of the festival was created, taking place at Watergate Bay. The current capacity is 53,000.`,
        startDate: `2021-08-11`,
        endDate: `2021-08-15`,
        video: [`1gDujVd9sfM`, `gu_2ADAUOL4`, `lrghaiDh_wg`, `FAFSrq3zy4U`],
        thumbnail: `https://www.boardmasters.com/images/uploads/BM19_Lineup_4th_Announcement_1080x1350.jpg`,
        poster: `https://www.boardmasters.com/images/uploads/BM19_Lineup_4th_Announcement_1080x1350.jpg`,
        homepage: `https://www.boardmasters.com/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), // 일렉
        country: Types.ObjectId(`6016f3f41372a93cdbd48274`),
        artists: [],
      },
      {
        name: `BST Hyde Park`,
        description: `British Summer Time Hyde Park (BST Hyde Park) is a music festival held over two weekends once a year in London's Hyde Park. It was the first event AEG Presents held in Hyde Park since they acquired the rights to host concerts there, and features a wide range of musical genres. Since 2013, BST Hyde Park has seen headliners such as Celine Dion, The Rolling Stones, Bon Jovi, Barbra Streisand, Lionel Richie, Kylie Minogue, Black Sabbath, Neil Young, Tom Petty & The Heartbreakers, Arcade Fire, The Who, Blur, The Strokes and Taylor Swift.[1] In 2019 the capacity was 65,000.`,
        startDate: `2021-07-09`,
        endDate: `2021-07-10`,
        video: [`kUryXcq90GA`, `MVQBCZUufLA`, `LddNHrsGnCY`, `7gmCx59jm18`],
        thumbnail: `https://media.resources.festicket.com/www/admin/uploads/images/DD_Socials_NoTicketBox_LN2.jpg`,
        poster: `https://media.resources.festicket.com/www/admin/uploads/images/DD_Socials_NoTicketBox_LN2.jpg`,
        homepage: `https://www.bst-hydepark.com/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`), // 일렉
        country: Types.ObjectId(`6016f3f41372a93cdbd48274`),
        artists: [],
      },
      {
        name: `Kendal Calling`,
        description: `Each summer Kendal Calling curates a diverse lineup that spans across the genres, taking in rock, indie and dance music, while also laying on a wide range of food and drink, as well as quirky art installations, pop-up bars, a market, and a cinema. All in the beautiful surroundings of Cumbria's Lake District. What's more, Kendal Calling is also a perfect festival to take the family to, thanks to its dedicated kid's area that'll be showcasing all kinds of entertainment throughout the weekend.`,
        startDate: `2021-07-29`,
        endDate: `2021-08-01`,
        video: [`s20mY4r97g8`, `eRJRbmvj_q4`, `_us0c_F-ZHQ`, `fw_k-RGk0zw`],
        thumbnail: `https://bedferret.com/wp-content/uploads/2020/06/2020-Poster.jpg`,
        poster: `https://bedferret.com/wp-content/uploads/2020/06/2020-Poster.jpg`,
        homepage: `https://www.kendalcalling.co.uk/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e4`), // 록
        country: Types.ObjectId(`6016f3f41372a93cdbd48274`),
        artists: [],
      },
      {
        name: `Primavera Sound`,
        description: `The eclectic giant has been going consistently for over 15 years and has racked up a hall of fame that includes Radiohead, Public Enemy, PJ Harvey, Iggy Pop and Arcade Fire to name just a few. Primavera Sound sets up at Barcelona's Parc del Forum on the glorious Spanish coast, where over 100,000 people every year are treated to a near-peerless lineup.`,
        startDate: `2021-02-09`,
        endDate: `2021-02-12`,
        video: [`sY7-rFElTz0`, `7N89-pSVfh0`, `1-HWXiSRD9c`, `wCPrjEgS0pI`],
        thumbnail: `https://i.pinimg.com/originals/7c/24/23/7c2423980fb01d94bcd9e0bece23f11f.jpg`,
        poster: `https://preview.redd.it/ket1x0r3ba151.png?width=640&crop=smart&auto=webp&s=0c34a20a0c8ecffc98a9ecb1c694d5babadfc5d2`,
        homepage: `https://www.primaverasound.com/en`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`),
        country: Types.ObjectId(`6015193ad31d3859d7aeadfd`),
        artists: [],
      },
      {
        name: `Mad Cool`,
        description: `After a spectacular debut in 2016, and three incredible follow-ups that built upon the strong foundations, Mad Cool brings those at the top of the rock game to heart of Madrid once more, further cementing itself as one of the country's most esteemed festivals.`,
        startDate: `2021-04-21`,
        endDate: `2021-04-23`,
        video: [`cZOQzGmhNZ8`, `sYdPl6FSXP8`, `zEs6zX6UmW0`, `5ksBIACTwGw`],
        thumbnail: `https://europebookings.com/wp-content/uploads/mad-cool-festival-main-stage-lights.jpg`,
        poster: `https://i.pinimg.com/originals/fd/cb/e6/fdcbe612b3a61afc06e151ba14d93477.jpg?epik=dj0yJnU9bTM1V3pEazQzOVYwbkk2VlMwTlRKNExqQ09sZEJmX2omcD0wJm49QXIzMXg2SkpjdGgySmNCNThteXdCZyZ0PUFBQUFBR0FYQlI0`,
        homepage: `https://madcoolfestival.es/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e6`),
        country: Types.ObjectId(`6015193ad31d3859d7aeadfd`),
        artists: [],
      },
      {
        name: `Azkena`,
        description: `Representing the sharper edge of rock in our list is Azkena Rock. The riff-tastic two day rock exploration compliments a lineup that rips from punk to classic rock, from legends to cult favourites, all with an uncommercial feel that solidifies its 15+ year history upon a foundation of unadorned rock love. `,
        startDate: `2021-05-11`,
        endDate: `2021-05-13`,
        video: [`1f2DXKOrGy8`, `o8KkJtirkb4`, `LJh_86jJaJk`, `23YiXN7WQms`],
        thumbnail: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4XhtzrGuXr7RAuGINfK7WvAd22MVK9zxxuw&usqp=CAU`,
        poster: `https://i.pinimg.com/originals/22/ba/3d/22ba3d3e45c82e4c573d8f9276a1503f.jpg`,
        homepage: `https://www.azkenarockfestival.com/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e4`),
        country: Types.ObjectId(`6015193ad31d3859d7aeadfd`),
        artists: [],
      },
      {
        name: `Bilbao BBK Live`,
        description: `Bilbao BBK Live ticks all the location boxes with its mountainous backdrop. Nestled on the slopes of the Arriaz Mountains with an intimate atmosphere away from the city itself, the festival provides some fantastic views over Bilbao. Oh, and the lineups are pretty darn great too.`,
        startDate: `2021-06-01`,
        endDate: `2021-06-03`,
        video: [`MbI4D-fgoMc`, `9BLQAawh6RE`, `gGh5q58oqKY`, `hfv2jsgkAWw`],
        thumbnail: `https://news.djcity.com/wp-content/uploads/2015/03/umf-600.jpg`,
        poster: `https://www.bilbaobbklive.com/wp-content/uploads/2020/06/BBL20-web_848x1200-630x885.jpg`,
        homepage: `https://www.bilbaobbklive.com/en/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e6`),
        country: Types.ObjectId(`6015193ad31d3859d7aeadfd`),
        artists: [],
      },
      {
        name: `BBF`,
        description: `Barcelona Beach Festival With its huge lineups and even bigger production, BBF is a mecca for dance music lovers. Barcelona's Platja del Forùm sets the scene, with the Mediterranean as a beautiful backdrop to some of the biggest DJs and producers in the world.`,
        startDate: `2021-08-23`,
        endDate: `2021-08-25`,
        video: [`lNfQyiXVEKQ`, `I0DeTBNzk_Y`, `CapeoOVZQfY`, `Ff0Hiz1f93g`],
        thumbnail: `https://fstvls.s3.amazonaws.com/81/81217.jpg`,
        poster: `https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/106908653_101225931672504_1948103594591019484_n.jpg?_nc_cat=100&ccb=2&_nc_sid=e3f864&_nc_ohc=25qFC4wVLRQAX-3oObn&_nc_ht=scontent-ssn1-1.xx&oh=3db946eba14e39cc49c5334e18efe5cd&oe=603C9805`,
        homepage: `https://festime.net/bbf-barcelona-beach-festival-2020/lineup`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`),
        country: Types.ObjectId(`6015193ad31d3859d7aeadfd`),
        artists: [],
      },
      {
        name: `Rototom Sunsplash`,
        description: `One of the biggest reggae music festivals in Europe, Rototom Sunsplash is heavily inspired by the iconic Jamaican festival Reggae Sunsplash. Each summer the festival brings an array of the scene's biggest names, from genre pioneers to exciting new acts, to the Spanish coast for a week-long celebration of the music and the culture.`,
        startDate: `2021-05-17`,
        endDate: `2021-05-19`,
        video: [`y4xdMHEMhu4`, `ZKCc8n5IXgw`, `OXM2r2AEp2I`, `vfdoXR70V08`],
        thumbnail: `https://assets.rototomsunsplash.com/wp-content/uploads/2018/05/SUN14_2308_MAINSTAGE_077_LDA.jpg?_ga=2.150416374.1346124855.1612122217-1036389477.1612122217`,
        poster: `https://assets.rototomsunsplash.com/wp-content/uploads/2019/08/SUN19_allstages.jpg?_ga=2.112181828.1346124855.1612122217-1036389477.1612122217`,
        homepage: `https://rototomsunsplash.com/en`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e6`),
        country: Types.ObjectId(`6015193ad31d3859d7aeadfd`),
        artists: [],
      },
      {
        name: `A Summer Story`,
        description: `Dedicating half of its lineup to the 'mainstream' and half to the 'underground', A Summer Story manages to cover a sizeable chunk of the broad dance music spectrum, with headliners that range from bombastic EDM to minimal techno.`,
        startDate: `2021-07-08`,
        endDate: `2021-07-14`,
        video: [`W_BKfb9MsF4`, `vcyNMn6j_gI`, `pBLz5jMJXAo`, `hpZ8X2Fgpu4`],
        thumbnail: `https://xceed.me/blog/wp-content/uploads/2018/05/feat-1.jpg`,
        poster: `https://i.pinimg.com/564x/94/8e/24/948e24270b173b8d3d9a1b3570f2c2ee.jpg`,
        homepage: `https://www.electronic-festivals.com/event/a-summer-story`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e7`),
        country: Types.ObjectId(`6015193ad31d3859d7aeadfd`),
        artists: [],
      },
      {
        name: `de Benicàssim`,
        description: `Renowned for its lazy beach days and hectic nights, FIB has become one of the most globally recognised names in the Spanish festival scene. Hosting unforgettable summer weekends on the Spanish coast for more than two decades, every year its showcase of rock, indie, alternative and electro basks in beautiful sunshine. `,
        startDate: `2021-06-28`,
        endDate: `2021-06-30`,
        video: [`BJ9s-J8d-i0`, `9wRKIybGLdY`, `sCetXR0tVwc`, `at7gAnSpQhA`],
        thumbnail: `https://www.hlimg.com/images/events/738X538/x_1543383162e.jpeg?w=576&dpr=2.0`,
        poster: `https://amf.cool/_applications/app_amfcool/_assets/images/festivais/europe/Spain/2019/fib-2019c.jpg`,
        homepage: `https://fiberfib.com/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e6`),
        country: Types.ObjectId(`6015193ad31d3859d7aeadfd`),
        artists: [],
      },
      {
        name: `DGTL`,
        description: `Picture this: the finest DJs weaving their sounds between futuristic site design, sculptures and interactive performance art. If you know anything about DGTL's Dutch origins, or their now global festival network, you know this one is pretty special. `,
        startDate: `2021-08-18`,
        endDate: `2021-08-20`,
        video: [`OiNFTyU2CWs`, `2pWMsuFHJXU`, `EGZi3eLgtRc`, `3w4dLvU1yH4`],
        thumbnail: `https://xceed.me/blog/wp-content/uploads/2019/08/review-cronica-dgtl-barcelona-2019-xceed-1.jpg`,
        poster: `https://i.pinimg.com/736x/30/ce/e7/30cee7951b8f20f10f568d8e7606a1e4.jpg`,
        homepage: `https://bcn.dgtl.nl/en/?skip_portal=1`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e7`),
        country: Types.ObjectId(`6015193ad31d3859d7aeadfd`),
        artists: [],
      },
      {
        name: `Sónar`,
        description: `The Barcelona electronic mecca that has become a global pioneer in the scene, pulling in the finest names on the block but also those emerging from the underground, with a track record of spotting what's hot that's second to none. There's also some time to explore the electronic genre further, with conferences and talks by leading industry professionals and creatives.`,
        startDate: `2021-09-08`,
        endDate: `2021-09-10`,
        video: [`kWiLYnPZISg`, `aMhghw_ZXFU`, `t92H6PY66Bk`, `3FiA0XKKMKk`],
        thumbnail: `https://scontent-ssn1-1.xx.fbcdn.net/v/t31.0-8/19222583_10156172734259045_6707847881002623217_o.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=4TPeQRJGK8AAX8TUkXZ&_nc_ht=scontent-ssn1-1.xx&oh=fb9cf5fd1f9cbb2f055984e23a75aa24&oe=603E61E6`,
        poster: `https://i.pinimg.com/originals/33/08/8f/33088fd7f6b4057c34df5bccf0d40cc4.jpg`,
        homepage: `https://bcn.dgtl.nl/en/?skip_portal=1`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e7`),
        country: Types.ObjectId(`6015193ad31d3859d7aeadfd`),
        artists: [],
      },
      {
        name: `Miami Music Week`,
        description: `Think of Miami Music Week as South by Southwest purely for electronic music. Started in 2011, the festival has grown exponentially to transform the city into a giant electronic music festival, welcoming almost 200,000 electronic music fans to witness 1,200 artists take the decks in 85 venues across six days. `,
        startDate: `2021-07-08`,
        endDate: `2021-07-10`,
        video: [`OA9QKYUqyrs`, `hEfQ3ERwVH8`, `xil1jOjAXr4`, `RjHTNvcRpxA`],
        thumbnail: `https://media.timeout.com/images/105619411/1372/772/image.jpg`,
        poster: `https://media.resources.festicket.com/image/404x570/center/middle/filaters:quality(70)/www/photos/MMW2020_P.jpg`,
        homepage: `https://miamimusicweek.com/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`),
        country: Types.ObjectId(`6015193ad31d3859d7aeadfd`),
        artists: [],
      },
      {
        name: `Electric Zoo`,
        description: `Randall's Island in East Manhattan hosts a full-scale electronic festival right in the heart of New York City. Stadium EDM, proper techno and avant-garde house all stand side-by-side, somehow keeping Electric Zoo an intimate, almost personal affair.`,
        startDate: `2021-05-08`,
        endDate: `2021-06-10`,
        video: [`Di8XHLGCB8k`, `6YvNrEZ43HU`, `B6k6jjamUkc`, `tgFuRx27R1E`],
        thumbnail: `https://freshmusicfreaks.com/wp-content/uploads/2018/06/EZ6B-WebGallerySlider-6.jpg`,
        poster: `https://freshmusicfreaks.com/wp-content/uploads/2018/06/electric-zoo-2018-phase-two.jpg`,
        homepage: `https://electriczoo.com/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`),
        country: Types.ObjectId(`6015193ad31d3859d7aeadfd`),
        artists: [],
      },
      {
        name: `Mutek`,
        description: `A little left field of the other festivals on this list, you're not going to find the likes of Martin Garrix or Steve Aoki at Mutek San Fransisco. What you will find, though, is a reliably progressive stable of underground electronic artists who are pushing the genre forward. If you want to delve deeper into what DJ and digital cultures have to offer, this is the festival for you.`,
        startDate: `2020-03-04`,
        endDate: `2020-03-06`,
        video: [`CVaEYb-vVtE`, `n82Y67goc-w`, `idbBsDHv3Dc`, `2JJrzJztS6U`],
        thumbnail: `http://www.trialanderrorcollective.com/uploads/5/6/3/5/56354473/main2-aleksi-per-l_orig.jpg`,
        poster: `https://res-4.cloudinary.com/dostuff-media/image/upload//c_fill,g_faces,f_auto,w_800/v1523509343/event-poster-9291110.jpg`,
        homepage: `https://ra.co/promoters/76249`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e6`),
        country: Types.ObjectId(`6015193ad31d3859d7aeadfd`),
        artists: [],
      },
      {
        name: `Electric Forest`,
        description: `Absorbed in a thousand twinkling lights and transformed into a spectacular fantasy by countless art installations and travelling performance troupes, Electric Forest's woodland home takes the color-explosion of the festival's visual shows and spreads it across the whole site. Electric Forest is firmly established as North America's alternative electronic superpower.`,
        startDate: `2020-05-04`,
        endDate: `2020-05-06`,
        video: [`V2eXsGBgp20`, `0CCztM6u07k`, `jSM4Dd806f8`, `MXy8Lu47f2s`],
        thumbnail: `https://i.pinimg.com/564x/05/6b/5c/056b5c5b65126e98c7963009f5356058.jpg`,
        poster: `https://cdn.imweb.me/upload/S20200106a105fd03f4b57/cd15455f70ca9.jpg`,
        homepage: `https://electricforestfestival.com/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e3`),
        country: Types.ObjectId(`6015193ad31d3859d7aeadfd`),
        artists: [],
      },
      {
        name: `Exodus Las Vegas`,
        description: `We're going to end this list where we began: in the country's party capital. Exodus is not your typical festival in that it is spread across four weekends throughout the summer, starting on Memorial Day and ending on Labor Day, and doesn't have a central location, instead taking over five of Vegas' top clubs. The lineup is smaller than other entries on this list, but what it lacks in numbers it makes up for in sheer star power, hosting sets from the biggest DJs in the world.`,
        startDate: `2020-07-24`,
        endDate: `2020-07-31`,
        video: [`xsUanGONTTM`, `STzOJIdD6M4`, `pv21rWa0100`, `1NWlCALhr4I`],
        thumbnail: `https://www.gowherewhen.com/storage/1369/Vegas-Pool-Party-Header-696x446-2.jpg`,
        poster: `https://media.resources.festicket.com/image/404x570/center/middle/filters:quality(70)/www/photos/11075-poster.jpg`,
        homepage: `https://exoduslasvegas.com/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e6`),
        country: Types.ObjectId(`6015193ad31d3859d7aeadfd`),
        artists: [],
      },
      {
        name: `Full Moon Party`,
        description: `The Full Moon Party is an all-night beach party that originated in Hat Rin on the island of Ko Pha-ngan, Thailand in 1985. The party takes place on the night of, before, or after every full moon. It is mostly attended by tourists. As of 8 March 2020, it is cancelled until further notice due to the COVID-19 pandemic.[1]`,
        startDate: `2021-08-15`,
        endDate: `2021-08-16`,
        video: [`hqfQR8Rijzw`, `P-rdOPlsBkI`, `Hj8lLh7c-sw`, `-UVIuETckH8`],
        thumbnail: `https://www.wildandaway.com/wp-content/uploads/2018/09/thailand-full-moon-party-dates-tall.jpg`,
        poster: `https://www.wildandaway.com/wp-content/uploads/2018/09/thailand-full-moon-party-dates-tall.jpg`,
        homepage: `http://www.fullmoonparty-thailand.com/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e7`), //
        country: Types.ObjectId(`6015193ad31d3859d7aeadfd`), //
        artists: [],
      },
      {
        name: `Bonnaroo`,
        description: `The Bonnaroo Music and Arts Festival is an American annual four-day music festival developed and produced by Superfly Presents and AC Entertainment. Since its first year in 2002, it has been held at what is now Great Stage Park on a 700-acre (280 ha) farm in Manchester, Tennessee. The festival typically starts on the second Thursday in June and lasts four days. Due to the COVID-19 pandemic, the 2020 festival was initially postponed to September 24–27, but was ultimately canceled altogether.`,
        startDate: `2021-09-02`,
        endDate: `2021-09-05`,
        video: [`z1gDUTvCVjo`, `9AEVyqYO-us`, `mVk8TA2M_E4`, `EY3sfRC0RCw`],
        thumbnail: `https://www.gratefulweb.com/sites/default/files/images/articles/unnamed%284%29_4.png`,
        poster: `https://www.gratefulweb.com/sites/default/files/images/articles/unnamed%284%29_4.png`,
        homepage: `https://www.bonnaroo.com/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e7`), //
        country: Types.ObjectId(`6015193ad31d3859d7aeadfd`), //
        artists: [],
      },
      {
        name: `Roskilde Festival`,
        description: `The Roskilde Festival is a Danish music festival held annually south of Roskilde. It is one of the largest music festivals in Europe and the largest in Northern Europe. It was created in 1971 by two high school students, Mogens Sandfær and Jesper Switzer Møller, and promoter Carl Fischer.[1] In 1972, the festival was taken over by the Roskilde Foundation, which has since run the festival as a non-profit organization for development and support of music, culture and humanism. In 2014, the Roskilde Foundation provided festival participants with the opportunity to nominate and vote upon which organizations should receive funds raised by the festival.`,
        startDate: `2021-06-26`,
        endDate: `2021-07-03`,
        video: [`zclnyXP0_MM`, `WZ9L5k5ZGh0`, `0445tzpY7pI`, `DmSZElYtAHo`],
        thumbnail: `https://www.rockfreaks.net/files/RoskildeFestival-2019-poster.jpg`,
        poster: `https://www.rockfreaks.net/files/RoskildeFestival-2019-poster.jpg`,
        homepage: `https://www.roskilde-festival.dk/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e7`), //
        country: Types.ObjectId(`6015193ad31d3859d7aeadfd`), //
        artists: [],
      },
      {
        name: `Aftershock Festival`,
        description: `Aftershock Festival is an annual rock festival produced by Danny Wimmer Presents held in Sacramento, California that features several rock and metal acts.[2] Beginning in 2012, the festival expanded from a one-day concert to a two-day festival. In 2019, the festival expanded to three days.`,
        startDate: `2021-10-07`,
        endDate: `2021-10-09`,
        video: [`KbQFrrhgMf8`, `3rn4GmRLrkw`, `LJFXFa0iAIo`, `EZg-cKdafys`],
        thumbnail: `https://2oiknppttjj12x8fj17barz1-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/AS21-Official-Admat_brx28uoqfz17ywg0kchp.jpg`,
        poster: `https://2oiknppttjj12x8fj17barz1-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/AS21-Official-Admat_brx28uoqfz17ywg0kchp.jpg`,
        homepage: `https://aftershockfestival.com/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e4`), //
        country: Types.ObjectId(`6015193ad31d3859d7aeadfd`), //
        artists: [],
      },
      {
        name: `Arrow Rock Festival`,
        description: `Arrow Rock Festival is a rock festival that takes place on a yearly basis since 2003 in the Netherlands. This festival presents mostly classic rock bands. The original location for the festival was Lichtenvoorde; until 2007 when the venue changed to Biddinghuizen. 2008 saw another location change, this time to Goffertpark, Nijmegen 51°49′26″N 5°50′3″E. In 2009 the festival was cancelled, because of difficulties with the line-up. In 2010 the festival was cancelled because Aerosmith organised their own event in Goffertpark.`,
        startDate: `2021-07-25`,
        endDate: `2021-07-29`,
        video: [`Pv2ogz40Qfk`, `454S-D0DQ4k`, `ISHtrUGkL9A`, `sQFNSLWtxFw`],
        thumbnail: `https://pbs.twimg.com/media/D0hExyOWwAUanNI.jpg`,
        poster: `https://pbs.twimg.com/media/D0hExyOWwAUanNI.jpg`,
        homepage: `https://arrowrockfestival.com/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e4`), //
        country: Types.ObjectId(`6015193ad31d3859d7aeadfd`), //
        artists: [],
      },
      {
        name: `Boston Calling Music Festival`,
        description: `Boston Calling Music Festival is a Boston-based music festival. The festival debuted in May 2013 and previously took place twice a year, May and September, at City Hall Plaza. The festival reportedly attracted 20–22,000 fans with its earlier editions, eventually drawing roughly 40,000 festival goers in 2017.[1][2] In May 2016, Boston Calling announced it would move to the Harvard Athletic Complex in Allston in May 2017 and transition to one festival per year, with the new space allowing the addition of more music stages and the inclusion of stand-up comedy performers.`,
        startDate: `2021-05-28`,
        endDate: `2021-05-31`,
        video: [`_cz-wwxmmto`, `eL0b6iHcYKY`, `0fFOVcmydwI`, `qgQvz2RZb6s`],
        thumbnail: `https://www.thebostoncalendar.com/system/events/photos/000/161/018/large/DSs40VWVoAAOQBB.jpg?1515060655`,
        poster: `https://www.thebostoncalendar.com/system/events/photos/000/161/018/large/DSs40VWVoAAOQBB.jpg?1515060655`,
        homepage: `https://bostoncalling.com/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e7`), //
        country: Types.ObjectId(`6015193ad31d3859d7aeadfd`), //
        artists: [],
      },
      {
        name: `Edgefest`,
        description: `Edgefest was an annual outdoor rock festival in Canada. It was founded by staff members of Toronto radio station CFNY-FM. From 1987 to 2015, the festival was held every year in the summer (except for 2007). The festival was most frequently held on Canada Day at Molson Park in Barrie, Ontario or a venue in Toronto. The festival featured predominantly Canadian rock bands. During its 29-year operation, the festival featured more than 300 performers. As of 2015, it was the longest running rock festival in Canada.`,
        startDate: `2021-07-01`,
        endDate: `2021-07-03`,
        video: [`GMnudu57yUk`, `RSUOPCboy6g`, `8aR-smMpZ-0`, `EEDIvG71ViQ`],
        thumbnail: `https://i.pinimg.com/originals/24/70/34/2470347f86f4032b9cbfa48fc5f3dd61.jpg`,
        poster: `https://i.pinimg.com/originals/24/70/34/2470347f86f4032b9cbfa48fc5f3dd61.jpg`,
        homepage: `https://edge.ca/edgefest/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e4`), //
        country: Types.ObjectId(`6015193ad31d3859d7aeadfd`), //
        artists: [],
      },
      {
        name: `NOS Alive!`,
        description: `NOS Alive (formerly Optimus Alive! and Optimus Alive) is an annual music and arts festival which takes place in the Algés riverside, in Oeiras, Portugal. It is organized by the Portuguese live entertainment company Everything is New and its main sponsor is telecommunications company NOS (previously named Optimus).The first edition took place in 2007.`,
        startDate: `2021-07-07`,
        endDate: `2021-07-10`,
        video: [`CxEiG3e3eJU`, `W7ObHhN2EHQ`, `5fuS2g22dSM`, `XRZQIy1M1fw`],
        thumbnail: `https://pbs.twimg.com/ext_tw_video_thumb/1202694544678146058/pu/img/U8uiHsNH88x82uMH.jpg`,
        poster: `https://pbs.twimg.com/ext_tw_video_thumb/1202694544678146058/pu/img/U8uiHsNH88x82uMH.jpg`,
        homepage: `https://nosalive.com/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e7`), //
        country: Types.ObjectId(`6015193ad31d3859d7aeadfd`), //
        artists: [],
      },
      {
        name: `Nova Rock`,
        description: `The Nova Rock Festival, also just Nova Rock, is an Austrian music festival that has existed since 2005 and takes place each year in June. It is located in Burgenland, the easternmost federal state of Austria, near Nickelsdorf and the Hungarian and Slovak borders. It is organized by Nova Music Entertainment, a cooperation between Musicnet, FKP Scorpio and several former employees/bookers of Wiesen, who left Wiesen in 2004.`,
        startDate: `2021-06-02`,
        endDate: `2021-06-05`,
        video: [`oDOdRCgvD0E`, `oDOdRCgvD0E`, `_JcbIQNs3HQ`, `YPiuzMYFPRY`],
        thumbnail: `https://rockersden.com/images/12/1.jpg`,
        poster: `https://rockersden.com/images/12/1.jpg`,
        homepage: `https://www.novarock.at/`,
        stamp: ``,
        genre: Types.ObjectId(`6016f660f4857b3e8ca586e4`), //
        country: Types.ObjectId(`6015193ad31d3859d7aeadfd`), //
        artists: [],
      },
    ];
    */
