/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.horizonX = -9135.33170331565;
    this.vars.speed = 12.904692508594485;
    this.vars.carX = 1.949546413709248;
    this.vars.roadAng = 66;
    this.vars.carSx = 4.640047779970457;
    this.vars.mph = 90;
    this.vars.soundTick = 3990;
    this.vars.soundId = 1;
    this.vars.sound = 7;
    this.vars.isaccellerating = 1;
    this.vars.tick = 3968;
    this.vars.carSlide = 30;
    this.vars.lapTime = "00:19.80";
    this.vars.lastLap = "01:52.10";
    this.vars.grass1 = [
      -78,
      -78,
      -74,
      -74,
      -70,
      -70,
      -66,
      -66,
      -62,
      -62,
      -58,
      -58,
      -54,
      -54,
      -50,
      -50,
      -46,
      -46,
      -42,
      -42,
      -38,
      -38,
      -34,
      -34,
      -30,
      -30,
      -26,
      -26,
      -22,
      -22,
      -18,
      -18,
      -14,
      -14,
      -10,
      -10,
      22,
      22,
      26,
      26,
      30,
      30,
      42,
      42,
      46,
      46,
      54,
      54
    ];
    this.vars.grass2 = [
      -178,
      -178,
      -174,
      -174,
      -170,
      -170,
      -166,
      -166,
      -162,
      -162,
      -158,
      -158,
      -154,
      -154,
      -150,
      -150,
      -146,
      -146,
      -142,
      -142,
      -138,
      -138,
      -134,
      -134,
      -130,
      -130,
      -126,
      -126,
      -122,
      -122,
      -118,
      -118,
      -114,
      -114,
      -110,
      -110,
      -106,
      -106,
      -102,
      -102,
      -98,
      -98,
      -94,
      -94,
      -90,
      -90,
      -86,
      -86,
      -82,
      -82,
      -6,
      -6,
      -2,
      -2,
      2,
      2,
      6,
      6,
      10,
      10,
      14,
      14,
      18,
      18,
      34,
      34,
      38,
      38,
      50,
      50,
      58,
      58
    ];
    this.vars.grass1x = [
      -390.9081314349264,
      468.2918685650735,
      -384.9451586199694,
      464.65484138003063,
      -378.9243196205639,
      461.07568037943616,
      -372.8408583119607,
      457.5591416880393,
      -366.68948266803056,
      454.1105173319695,
      -360.46428709439704,
      450.735712905603,
      -354.1586608510868,
      447.44133914891313,
      -347.76517956859124,
      444.2348204314087,
      -341.27547610032127,
      441.1245238996787,
      -334.68008596898756,
      438.1199140310124,
      -327.9682613783464,
      435.2317386216536,
      -321.12774606952325,
      432.4722539304767,
      -314.1445010550802,
      429.8554989449198,
      -307.0023682551356,
      427.3976317448644,
      -299.68265498904225,
      425.1173450109577,
      -292.16361670992484,
      423.03638329007515,
      -284.4198076714399,
      421.1801923285601,
      -276.421258439005,
      419.578741560995,
      -196.93763347167553,
      422.2623665283245,
      -183.63053284118075,
      425.96946715881927,
      -168.97477320685462,
      431.0252267931454,
      -112.6566171108937,
      458.5433828891063,
      -87.34519872183765,
      474.25480127816235,
      -17.860728221410568,
      524.5392717785894
    ];
    this.vars.grass2x = [
      -529.0484343985327,
      570.1515656014674,
      -523.7675959223175,
      565.8324040776824,
      -518.4738660342731,
      561.5261339657269,
      -513.1666158850419,
      557.2333841149582,
      -507.8451750484491,
      552.9548249515509,
      -502.50882802765324,
      548.6911719723468,
      -497.1568104029514,
      544.4431895970486,
      -491.7883045776182,
      540.2116954223818,
      -486.402435071974,
      535.9975649280259,
      -480.9982633087048,
      531.8017366912952,
      -475.57478182408795,
      527.625218175912,
      -470.13090783001064,
      523.4690921699894,
      -464.66547604021804,
      519.334523959782,
      -459.17723066078474,
      515.2227693392153,
      -453.66481642896,
      511.13518357104,
      -448.12676856581095,
      507.073231434189,
      -442.56150148589495,
      503.0384985141051,
      -436.9672960807844,
      499.0327039192156,
      -431.34228536175726,
      495.05771463824277,
      -425.6844382092146,
      491.1155617907854,
      -419.9915409310092,
      487.2084590689908,
      -414.2611762770955,
      483.3388237229045,
      -408.490699491541,
      479.509300508459,
      -402.677210902179,
      475.72278909782096,
      -396.81752444946824,
      471.98247555053183,
      -268.1324238692783,
      418.26757613072164,
      -259.5108231811928,
      417.28917681880716,
      -250.50526158730858,
      416.69473841269144,
      -241.05347515695567,
      416.5465248430444,
      -231.07896820388217,
      416.92103179611786,
      -220.48670063304812,
      417.91329936695195,
      -209.15710587327393,
      419.6428941267261,
      -152.61853048074107,
      437.78146951925896,
      -134.07595235090074,
      446.72404764909925,
      -56.58486392411277,
      495.4151360758872,
      0,
      565.971099788984
    ];
    this.vars.carsx = [-109];
    this.vars.carsy = [77255.41265477998];
    this.vars.carspx = [-35.44380611683786, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.vars.carspy = [
      -999,
      -999,
      -999,
      -999,
      -999,
      -999,
      -999,
      -999,
      -999,
      -999
    ];
    this.vars.trackX = [
      -107,
      -107,
      -107,
      -107,
      -107,
      -107,
      -107,
      -107,
      -107,
      -107,
      -107,
      -106.47664043757057,
      -105.25794700351908,
      -101.51188106935996,
      -95.3552663161034,
      -86.69501227825901,
      -76.81812887230764,
      -66.91544818489194,
      -59.60191116870024,
      -53.17403507183485,
      -47.15588484031437,
      -41.137734608793885,
      -35.119584377273405,
      -28.96296962401682,
      -22.80635487076024,
      -16.649740117503654,
      -10.49312536424707,
      -4.474975132726589,
      1.543175098793892,
      7.561325330314373,
      13.579475561834856,
      19.597625793355338,
      25.615776024875817,
      31.633926256396293,
      37.65207648791677,
      43.67022671943725,
      49.68837695095773,
      55.70652718247821,
      61.29845621718568,
      65.20576750207842,
      65.90333223951967,
      64.33898758911737,
      62.08947704567872,
      58.02211061492072,
      52.43018158021325,
      45.73887551662467,
      37.16720250960354,
      27.96215397507914,
      18.30289571218846,
      8.340948731271004,
      -1.6346917713272386,
      -10.021397450781482,
      -13.767463384940603,
      -14.116458351965614,
      -13.941934287592783,
      -13.767410223219953,
      -13.592886158847122,
      -13.418362094474292,
      -13.24383803010146,
      -13.06931396572863,
      -12.8947899013558,
      -12.72026583698297,
      -12.54574177261014,
      -14.282223549279452,
      -17.86590304473246,
      -24.02251779798905,
      -32.50299875955331,
      -42.28447476689136,
      -52.27838303708232,
      -61.188448278966,
      -68.00843187959099,
      -70.93214892681836,
      -70.93214892681836,
      -70.75762486244552,
      -70.58310079807269,
      -70.40857673369986,
      -70.23405266932703,
      -70.0595286049542,
      -69.88500454058136,
      -69.71048047620853,
      -69.5359564118357,
      -69.36143234746287,
      -69.18690828309003,
      -69.0123842187172,
      -68.48902465628777,
      -66.75254287961846,
      -63.332341446361774,
      -57.59657708285131,
      -49.8251174682816,
      -40.68966289185559,
      -30.908186884517537,
      -21.03130347856616,
      -11.03130347856616,
      -1.0313034785661586,
      8.894158037847061,
      18.597115300607022,
      27.93291956557904,
      37.06837414200505,
      45.89785007059432,
      54.644047141988274,
      63.30430117983266,
      71.59467690538308,
      79.78619734827299,
      87.5576569628427,
      96.69311153926871,
      106.61857305568194,
      114.81009349857186,
      118.55615943273098,
      116.64806947896554,
      112.26435801107476,
      104.83290975630082,
      99.09714539279037,
      101.17626230096796,
      105.87097792882687,
      109.45465742427989,
      107.37554051610228,
      99.94409226132834,
      92.06398472526112,
      84.18387718919391,
      76.3037696531267,
      68.42366211705948,
      60.54355458099226,
      52.66344704492504,
      44.783339508857814,
      36.90323197279059,
      29.02312443672337,
      21.14301690065615,
      13.262909364588928,
      5.382801828521707,
      -2.4973057075455145,
      -10.377413243612736,
      -18.363768344085663,
      -27.024022381930045,
      -36.90090578788142,
      -46.60386305064139,
      -55.08434401220565,
      -58.830409946364774,
      -59.00493401073762,
      -53.558543660587354,
      -46.01144785835963,
      -38.13134032229242,
      -30.2512327862252,
      -22.371125250157988,
      -14.491017714090772,
      -6.610910178023559,
      1.2691973580436553,
      9.14930489411087,
      15.70989518401594,
      18.46626874218593,
      15.376098798436455,
      6.240644222010449,
      -3.7349962805877936,
      -13.710636783186036,
      -23.68627728578428,
      -33.661917788382524,
      -43.63755829098076,
      -53.485635821102846,
      -63.098252780486035,
      -72.30330131501044,
      -80.49482175790035,
      -87.31480535852533,
      -92.9067343932328,
      -98.05711514233336,
      -102.44082661022414,
      -104.86004556622082,
      -105.38340512865028,
      -105.73240009567527,
      -106.08139506270028,
      -106.43039002972527,
      -106.7793849967503,
      -106.95390906112314,
      -107.128433125496,
      -107.128433125496,
      -107.128433125496,
      -107.128433125496,
      -107.128433125496
    ];
    this.vars.trackY = [
      68,
      78,
      88,
      98,
      108,
      118,
      128,
      138,
      148,
      158,
      168,
      177.9862953475457,
      187.91175686395897,
      197.1835954096268,
      205.063702945694,
      210.063702945694,
      211.6280475960963,
      210.2363165864957,
      203.4163329858707,
      195.75588855468092,
      187.769533454208,
      179.78317835373505,
      171.79682325326212,
      163.9167157171949,
      156.0366081811277,
      148.15650064506048,
      140.27639310899326,
      132.29003800852033,
      124.3036829080474,
      116.31732780757446,
      108.33097270710152,
      100.3446176066286,
      92.35826250615564,
      84.37190740568272,
      76.38555230520979,
      68.39919720473685,
      60.41284210426392,
      52.42648700379099,
      44.13611127824058,
      34.931062743716176,
      24.955422241117933,
      15.078538835166556,
      5.334838187314203,
      -3.800616389111807,
      -12.090992114662226,
      -19.52244036943617,
      -24.672821118536714,
      -28.580132403429452,
      -31.168322854454654,
      -32.03988028193124,
      -31.34231554448999,
      -25.89592519433972,
      -16.62408664867185,
      -6.630178378480892,
      3.3682985730830204,
      13.366775524646933,
      23.365252476210845,
      33.36372942777476,
      43.36220637933867,
      53.36068333090259,
      63.359160282466505,
      73.35763723403042,
      83.35611418559434,
      93.20419171571642,
      102.53999598068845,
      110.42010351675565,
      115.71929615908768,
      117.79841306726529,
      117.44941810024024,
      112.90951310284478,
      105.59597608665308,
      96.03292852702272,
      86.03292852702273,
      76.03445157545882,
      66.0359746238949,
      56.037497672330986,
      46.03902072076707,
      36.040543769203154,
      26.04206681763924,
      16.04358986607533,
      6.045112914511417,
      -3.953364037052495,
      -13.951840988616407,
      -23.95031794018032,
      -33.93661328772606,
      -43.784690817848144,
      -53.181617025707226,
      -61.37313746859714,
      -67.66634137909551,
      -71.73370780985351,
      -73.81282471803111,
      -75.37716936843341,
      -75.37716936843341,
      -75.37716936843341,
      -74.15847593438194,
      -71.73925697838526,
      -68.15557748293226,
      -64.08821105217426,
      -59.39349542431535,
      -54.54539922185197,
      -49.54539922185197,
      -43.953470187144504,
      -38.21770582363404,
      -31.924501913135664,
      -27.85713548237766,
      -29.075828916429135,
      -34.81159327993959,
      -44.08343182560746,
      -53.8997036600841,
      -62.88764412307577,
      -69.57895018666436,
      -77.77047062955428,
      -87.55194663689234,
      -96.3814225654816,
      -105.71722683045364,
      -115.49870283779168,
      -122.19000890138028,
      -128.34662365463686,
      -134.50323840789343,
      -140.65985316115,
      -146.8164679144066,
      -152.97308266766316,
      -159.12969742091974,
      -165.28631217417632,
      -171.4429269274329,
      -177.59954168068947,
      -183.75615643394605,
      -189.91277118720265,
      -196.0693859404592,
      -202.22600069371575,
      -208.38261544697235,
      -214.40076567849283,
      -219.40076567849283,
      -220.96511032889515,
      -218.54589137289847,
      -213.2466987305664,
      -203.97486018489855,
      -193.97638323333464,
      -185.5896775538804,
      -179.02908726397533,
      -172.87247251071875,
      -166.71585775746215,
      -160.5592430042056,
      -154.40262825094902,
      -148.24601349769245,
      -142.08939874443587,
      -135.9327839911793,
      -128.38568818895158,
      -118.7730712295684,
      -109.26250606661684,
      -105.19513963585884,
      -104.4975748984176,
      -103.80001016097634,
      -103.10244542353507,
      -102.40488068609385,
      -101.70731594865258,
      -99.97083417198328,
      -97.21446061381327,
      -93.30714932892056,
      -87.5713849654101,
      -80.2578479492184,
      -71.96747222366798,
      -63.395799216646864,
      -54.40785875365519,
      -44.704901490895224,
      -34.71860614334949,
      -24.724697873158533,
      -14.730789602967576,
      -4.736881332776619,
      5.257026937414338,
      15.25550388897825,
      25.25398084054216,
      35.25398084054216,
      45.25398084054216,
      55.25398084054216,
      65.25398084054217
    ];
    this.vars.trackA = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      7,
      22,
      38,
      60,
      81,
      98,
      133,
      140,
      143,
      143,
      143,
      142,
      142,
      142,
      142,
      143,
      143,
      143,
      143,
      143,
      143,
      143,
      143,
      143,
      143,
      143,
      146,
      157,
      176,
      189,
      193,
      204,
      214,
      222,
      239,
      247,
      255,
      265,
      274,
      303,
      338,
      358,
      361,
      361,
      361,
      361,
      361,
      361,
      361,
      361,
      361,
      350,
      339,
      322,
      302,
      282,
      268,
      243,
      223,
      197,
      180,
      179,
      179,
      179,
      179,
      179,
      179,
      179,
      179,
      179,
      179,
      179,
      177,
      170,
      160,
      145,
      129,
      114,
      102,
      99,
      90,
      90,
      83,
      76,
      69,
      66,
      62,
      61,
      60,
      56,
      55,
      51,
      66,
      97,
      125,
      158,
      191,
      206,
      228,
      215,
      168,
      152,
      159,
      192,
      228,
      232,
      232,
      232,
      232,
      232,
      232,
      232,
      232,
      232,
      232,
      232,
      232,
      232,
      232,
      232,
      232,
      261,
      284,
      302,
      338,
      359,
      393,
      409,
      412,
      412,
      412,
      412,
      412,
      412,
      412,
      401,
      376,
      342,
      294,
      274,
      274,
      274,
      274,
      274,
      280,
      286,
      293,
      305,
      317,
      326,
      329,
      334,
      346,
      357,
      358,
      358,
      358,
      358,
      359,
      359,
      360,
      360,
      360,
      360
    ];
    this.vars.trackSx = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      15,
      15,
      15,
      22,
      22,
      22,
      23,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      10,
      15,
      15,
      15,
      10,
      10,
      10,
      10,
      8,
      8,
      8,
      15,
      30,
      35,
      15,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      -11,
      -11,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      -2,
      -7,
      -10,
      -15,
      -16,
      -15,
      -12,
      -10,
      -6,
      -6,
      -6,
      -6,
      -6,
      -6,
      -4,
      -3,
      -2,
      -2,
      -2,
      -2,
      15,
      33,
      33,
      33,
      33,
      15,
      0,
      -20,
      -45,
      -33,
      0,
      28,
      40,
      28,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      15,
      23,
      25,
      27,
      30,
      30,
      15,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      -11,
      -25,
      -34,
      -48,
      -20,
      0,
      0,
      0,
      0,
      6,
      7,
      8,
      9,
      9,
      9,
      9,
      9,
      10,
      11,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ];

    this.watchers.mph = new Watcher({
      label: "MPH",
      style: "normal",
      visible: true,
      value: () => this.vars.mph,
      x: 250,
      y: -143
    });
    this.watchers.lapTime = new Watcher({
      label: "Lap Time",
      style: "large",
      visible: true,
      value: () => this.vars.lapTime,
      x: 248,
      y: 174
    });
    this.watchers.lastLap = new Watcher({
      label: "Last Lap",
      style: "large",
      visible: true,
      value: () => this.vars.lastLap,
      x: 248,
      y: 150
    });
  }
}