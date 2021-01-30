import festivalModel from '../models/festivals.model';
import countryModel from '../models/countries.model';
import artistModel from '../models/artists.model';
import userModel from '../models/users.model';
import badgeModel from '../models/badges.model';
import boardModel from '../models/boards.model';
import { Types } from 'mongoose';
import genreModel from '../models/genres.model';

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
const genreData = [
  {
    name: 'Electronica',
  },
  {
    name: 'Rock',
  },
  {
    name: 'Jazz',
  },
  {
    name: 'Hip-Hop',
  },
  {
    name: 'EDM',
  },
  {
    name: 'Fork',
  },
  {
    name: 'Etc',
  },
];
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
    stamp: ``,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    country: Types.ObjectId(`6015193ad31d3859d7aeadfe`), // 영국
    artists: [], //`deadmau5, Carl Cox, Martin Garrix, Adam Beyer, Tiësto, Timmy Trumpet, Erix Prydz, Dimitri Vegas & Like Mike`,
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
    stamp: ``,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    country: Types.ObjectId(`6015193ad31d3859d7aeadfd`), // 스페인
    artists: [], //`The Strokes, Gorillaz, Tame Impala, FKA Twigs, Tyler, the Creator, Jorja Smith, Iggy Pop, Disclosure`
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
    stamp: ``,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    country: Types.ObjectId(`6015193ad31d3859d7aeadf9`), // 독일
    artists: [], //`A DAY TO REMEMBER, AIRBOURNE, ALAN WALKER, BLIDERBUCH, BILLY TALENT, BLACK VEIL BRIDES, BUSH, BROILERS, BOYS NOIZE, CREEPER, DAUGHTRY, DEFTONES, DIGITALISM, DONNA MISSAL, FALL OUT BOY, GOJIRA, GREEN DAY, JAN DELAY & DISKO NO.1, KODALINE, KORN, POPPY, NF, RIN, REA GARVEY, ROYAL REPUBLIC, SSIO, SPIRITBOX, SEASICK STEVE, TEMPT, THE DISTILLERS, THE OFFSPRING, WAGE WAR, VOLBEAT, TRETTMANN, YOU ME AT SIX, YUNGBLUD`,
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
    stamp: ``,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    country: Types.ObjectId(`6015193ad31d3859d7aeadfe`), // 영국
    artists: [], //`Lionel Richie, Lewis Capaldi, Snow Patrol, Duran Duran, Happy Mondays, Primal Scream, Razorlight, Jess Glynne`,
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
    stamp: ``,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    country: Types.ObjectId(`6015193ad31d3859d7aeae0f`), // 미국
    artists: [], //`Flume, Gessafelstein, Gryffin, Laserface by Gareth Emery, Madeon, Major Lazer, Sofi Tukker and Zedd, Adam Beyer | Cirez D, Amelie Lens, Armin Van Buuren, Carl Cox, DJ Snake, Eric Prydz`,
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
    stamp: ``,
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    country: Types.ObjectId(`6015193ad31d3859d7aeadff`), // 크로아티아
    artists: [], //`David Guetta, Afrojack, Pendulum – TRINITY, Armin van Buuren, DJ Snake, Marshmello, Richie Hawtin, Steve Aoki`,
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
    stamp: ``,
    genre: Types.ObjectId(`60151c4af796c35c4feac4fe`), // etc
    country: Types.ObjectId(`6015193ad31d3859d7aeae00`), // 체코
    artists: [], //`PENDULUM TRINITY, 1991, ABIS, ANNIX, BENNY L, BUUNSHIN, CHASER, DUB ELEMENTS, GYDRA, HALLUCINATOR, HEDEX, KANINE, KOVE, MIZO, NAIS, MONRROE, SHIMON, ZOMBIE CATS`,
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
    stamp: ``,
    genre: Types.ObjectId(`60155e2e646e218005e90634`), // 모든 장르 혼합
    country: Types.ObjectId(`6015193ad31d3859d7aeadfe`), // 영국
    artists: [], //`A$AP Rocky, Lil Uzi Vert, D-Block Europe, Skepta, Meek Mill, AJ Tracey, Burna Boy, Young Thug`
  },
];
const artistData = [
  {
    name: `deadmau5`,
    description: `He has worked with other DJs and producers, such as Rob Swire, Wolfgang Gartner, Sofia Toufa, and Kaskade. He has also collaborated with Steve Duda under the group name BSOD (Better Sounding On Drugs), and was part of the group named WTF? with Duda, Tommy Lee and DJ Aero.`,
    image: `https://bookingagentinfo.com/wp-content/uploads/2020/03/Deadmau5-Contact-Information.jpg`,
    video: [`dy3QONktMoY`, `ZEdnybhn7ho`, `5yvwZPyh6To`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [],
  },
  {
    name: `Martin Garrix`,
    description: `He has performed at music festivals such as Coachella, Electric Daisy Carnival, Ultra Music Festival, Tomorrowland, and Creamfields. In 2014 he headlined the 1st edition of Ultra South Africa making this his first major festival. In the same year he became the youngest DJ to headline 2014 Ultra Music Festival at the age of 17.`,
    image: `https://yt3.ggpht.com/ytc/AAUvwnhrRStY9qD7J5GPEENbaQV0y0LAC8Pn0AuCbdLTfA=s900-c-k-c0x00ffffff-no-rj`,
    video: [`jNF5KWNnbDU`, `quOxSTKB6qk`, `rp31_j9knMI`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [],
  },
  {
    name: `The Strokes`,
    description: `The Strokes are an American rock band from Manhattan, New York. Formed in 1998, the band is composed of singer Julian Casablancas, guitarists Nick Valensi and Albert Hammond Jr., bassist Nikolai Fraiture, and drummer Fabrizio Moretti. They are one of the more prominent bands of the garage rock and post-punk revivals, aiding in the resurgence of indie rock in New York City.`,
    image: `https://cdn.britannica.com/77/205077-050-358F982F/The-Strokes-Nikolai-Fraiture-Fabrizio-Moretti-Albert-2006.jpg`,
    video: [`ewOPQZZn4SY`, `BjC0KUxiMhc`, `o4qsjmLxhow`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    festivals: [],
  },
  {
    name: `Gorillaz`,
    description: `Gorillaz are a British virtual band created in 1998 by musician Damon Albarn and artist Jamie Hewlett. The band primarily consists of four animated members: 2-D, Murdoc Niccals, Noodle, and Russel Hobbs. Their fictional universe is presented in music videos, interviews and short cartoons. In reality, Albarn is the only permanent musical contributor, and Gorillaz' music often features collaborations with a wide range of featured artists.`,
    image: `https://sonar.es/system/attached_images/19685/medium/gorillaz-sonar-bcn-2018.jpg?1517486863`,
    video: [`u0RtFobm4uU`, `fUm7t_BLeME`, `8k0Gyp366Ng`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    festivals: [],
  },
  {
    name: `ALAN WALKER`,
    description: `Alan Olav Walker (born 24 August 1997) is an English-Norwegian DJ and record producer. In 2015, Walker received international acclaim after releasing the single "Faded", which received platinum certifications in 14 countries. In 2020, he was ranked 26th on DJ Mag. He released his debut studio album, Different World, in 2018.`,
    image: `https://www.thefamouspeople.com/profiles/images/og-alan-walker-42267.jpg`,
    video: [`wa6Xz6tk_XI`, `jZGWknhg8kA`, `eXzestWGq2U`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f8`), // 일렉트로닉
    festivals: [],
  },
  {
    name: `AIRBOURNE`,
    description: `Airbourne are an Australian hard rock band formed in Warrnambool, Victoria in 2003. Mainstay members are Joel O'Keeffe on lead vocals and lead guitar, and his brother Ryan O'Keeffe on drums. They were later joined by Justin Street on bass guitar and backing vocals. David Roads (rhythm guitar and backing vocals) was also a mainstay member until leaving the band in April 2017 – Harri Harrison was announced as his replacement.`,
    image: `https://townsquare.media/site/366/files/2019/08/44.png?w=980&q=75`,
    video: [`t5lan7-kUc0`, `8GVVIZw_7nE`, `Mxxk5iS9nVM`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4f9`), // 록
    festivals: [],
  },
  {
    name: `Lionel Richie`,
    description: `Lionel Brockman Richie Jr. (born June 20, 1949) is an American singer, songwriter, composer, record producer, actor, and television judge. In 1970s he recorded with funk band the Commodores, and during his solo career made him one of the most successful balladeers of the 1980s.`,
    image: `https://media.gq.com/photos/5bbfc27db194692d3d422482/4:3/w_4347,h_3260,c_limit/GQ110118GroomingAwards_01.jpg`,
    video: [`mHONNcZbwDY`, `nqAvFx3NxUM`, `s47n8E2BuWc`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fa`), // 재즈
    festivals: [],
  },
  {
    name: `Lewis Capaldi`,
    description: `Lewis Marc Capaldi (born 7 October 1996) is a Scottish singer-songwriter and musician. He was nominated for the Critics' Choice Award at the 2019 Brit Awards. In March 2019, his single "Someone You Loved" topped the UK Singles Chart where it remained for seven weeks, and in November 2019, reached number one on the US Billboard Hot 100, it was nominated at the 62nd Annual Grammy Awards for Song of the Year and won the 2020 Brit Award for Song of the Year. Capaldi also won the 2020 Brit Award for Best New Artist.`,
    image: `https://static.billboard.com/files/media/Lewis-Capaldi-bb16-2019-chartbreaker-billboard-ssmfophoi-1548-compressed.jpg`,
    video: [`zABLecsR5UE`, `Jtauh8GcxBY`, `ZHRXmYdwc1o`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fe`), // 기타
    festivals: [],
  },
  {
    name: `Flume`,
    description: `Harley Edward Streten (born 5 November 1991), known professionally as Flume, is an Australian musician, DJ and record producer. His self-titled debut studio album, Flume, was released on 9 November 2012 to positive reviews, topping the ARIA Albums Chart and reaching double-platinum accreditation in Australia. Flume is regarded as the pioneer of future bass who helped popularize the genre.`,
    image: `https://static.wikia.nocookie.net/edm/images/1/11/Flume.jpg/revision/latest?cb=20191121182517`,
    video: [`tsK0EG1vpSw`, `eM5DWw3J4BI`, `a2c0IKOS9Oo`],
    genre: Types.ObjectId(`60155e2e646e218005e90634`), // 모든 장르
    festivals: [],
  },
  {
    name: `Gessafelstein`,
    description: `Mike Lévy (French pronunciation: ​[majk levi]; born June 13, 1987), known professionally as Gesaffelstein, is a French musician, DJ, songwriter and record producer from Lyon. He has worked alongside artists as varied as The Weeknd, Daft Punk, Kanye West, A$AP Rocky, Electric Youth, Haim, Miss Kittin, The Hacker, Jean-Michel Jarre and Pharrell Williams.`,
    image: `https://djmag.com/sites/default/files/article/image/gesaffelstein-lofto-nuotr-57a8629293f98.jpg`,
    video: [`HPTBaPZz27M`, `ZGDGdRIxvd0`, `_3YPik6HTpw`],
    genre: Types.ObjectId(`60151c4af796c35c4feac4fb`), // 힙합
    festivals: [],
  },
];

class InsertDataService {
  public festivals = festivalModel;
  public countries = countryModel;
  public artists = artistModel;
  public users = userModel;
  public badges = badgeModel;
  public boards = boardModel;
  public genres = genreModel;

  // public async insertUsers() {
  //   //return await this.users.find();
  //   const usersData = [];
  //   for (let i = 1; i <= 20; i++) {
  //     usersData.push({
  //       email: `abc${i}${i}${i}@gmail.com`,
  //       password: '1234',
  //       nickname: `${i}번 사용자 닉네임`,
  //       image: `${i}번 사용자 이미지`,
  //       wishFestivals: `${festivalIdArr[i]}`,
  //       wishArtists: `${artistIdArr[i]}`,
  //       badges: `${badgeIdArr[(i - 1) % 15]}`,
  //       visits: `${festivalIdArr[i]}`,
  //       boards: `${boardIdArr[i]}`,
  //     });
  //   }
  //   await this.users.create(usersData);
  // }
  // public async insertBoards() {
  //   //return await this.boards.find();
  //   const boardsData = [];
  //   for (let i = 1; i <= 15; i++) {
  //     const index = (i - 1) % 3;
  //     switch (index) {
  //       case 0: // 리뷰(후기)
  //         boardsData.push({
  //           title: `${i + 75}번 게시물`,
  //           image: `${i + 75}번 게시물 이미지`,
  //           user: Types.ObjectId(`${userIdArr[i - 1]}`),
  //           festival: Types.ObjectId(`${festivalIdArr[i]}`),
  //           postCategory: Types.ObjectId(`${postCategoryIdArr[index]}`),
  //         });
  //         break;
  //       case 1: // 리셀
  //         boardsData.push({
  //           title: `${i + 75}번 게시물`,
  //           description: `${i + 75}번 게시물 설명~`,
  //           image: `${i + 75}번 게시물 이미지`,
  //           user: Types.ObjectId(`${userIdArr[i - 1]}`),
  //           festival: Types.ObjectId(`${festivalIdArr[i]}`),
  //           postCategory: Types.ObjectId(`${postCategoryIdArr[index]}`),
  //           comments: Types.ObjectId(`600ad030d821a35da42aceba`),
  //         });
  //         break;
  //       case 2: // 동행
  //         boardsData.push({
  //           title: `${i + 75}번 게시물`,
  //           description: `${i + 75}번 게시물 설명~`,
  //           image: `${i + 75}번 게시물 이미지`,
  //           user: Types.ObjectId(`${userIdArr[i - 1]}`),
  //           festival: Types.ObjectId(`${festivalIdArr[i]}`),
  //           postCategory: Types.ObjectId(`${postCategoryIdArr[index]}`),
  //           comments: Types.ObjectId(`600ad030d821a35da42aceba`),
  //           participants: Types.ObjectId(`${userIdArr[i + 1]}`),
  //         });
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  //   await this.boards.create(boardsData);
  // }

  public async insertBadges() {
    await this.badges.create(badgeData);
    return await this.badges.find();
  }

  public async insertFestivals() {
    //await this.festivals.create(festivalData);
    return await this.festivals.find();
  }

  public async insertArtists() {
    //await this.artists.create(artistData);
    return await this.artists.find();
  }

  public async insertCountries() {
    await this.countries.create(countryData);
    return await this.countries.find();
  }

  public async insertGenres() {
    await this.genres.create(genreData);
    return await this.genres.find();
  }
}

export default InsertDataService;
