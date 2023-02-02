const orders = [
  {
    address: "6, Shakambari Nagar, 1st stage, JP Nagar, Bangalore",
    location: {
      lat: 12.9120799,
      lng: 77.5745235,
    },
    AWB: 62201852038,
    names: "Vickie Ramos",
    product_id: "SKU_144",
  },
  {
    address:
      "1, 24th Main Rd, 1st Phase, Girinagar, KR Layout, Muneshwara T-Block, JP Nagar, Bangalore",
    location: {
      lat: 12.904529,
      lng: 77.5855601,
    },
    AWB: 73350066683,
    names: "Jon Hall",
    product_id: "SKU_31",
  },
  {
    address:
      "954, 2nd Floor, 24th Main, 2nd Phase, Opposite LIC Building, JP Nagar, Bangalore",
    location: {
      lat: 12.9115788,
      lng: 77.5857133,
    },
    AWB: 60104333056,
    names: "Linda Kurland",
    product_id: "SKU_113",
  },
  {
    address:
      "1, 24th Main Rd, 1st Phase, Girinagar, KR Layout, Muneshwara T-Block, JP Nagar, Bangalore",
    location: {
      lat: 12.904529,
      lng: 77.5855601,
    },
    AWB: 49726345575,
    names: "Cora Massart",
    product_id: "SKU_23",
  },
  {
    address: "67, 15th Cross, 6th B Main, JP Nagar, Bangalore",
    location: {
      lat: 12.906383,
      lng: 77.596713,
    },
    AWB: 33178947349,
    names: "George Rivas",
    product_id: "SKU_144",
  },
  {
    address: "281, 2nd Floor, 15th Cross, 5th Phase, JP Nagar, Bangalore",
    location: {
      lat: 12.9063958,
      lng: 77.5886106,
    },
    AWB: 76031744666,
    names: "Anna Kelly",
    product_id: "SKU_38",
  },
  {
    address:
      "Cross Roads Inn, 827, Near RV Dental College Compound, 24th Main, 12th Cross, JP Nagar, Bangalore",
    location: {
      lat: 12.9085621,
      lng: 77.5859526,
    },
    AWB: 81926175607,
    names: "Virginia Sauer",
    product_id: "SKU_109",
  },
  {
    address: "21, 24th Main Road, 6th Phase, JP Nagar, Bangalore",
    location: {
      lat: 12.9029512,
      lng: 77.58562049999999,
    },
    AWB: 27632908686,
    names: "Jesse Chan",
    product_id: "SKU_141",
  },
  {
    address: "99/4, Nataraja Layout, 7th Phase, JP Nagar, Bangalore",
    location: {
      lat: 12.8897963,
      lng: 77.58558289999999,
    },
    AWB: 66314622688,
    names: "Johnny Runyan",
    product_id: "SKU_134",
  },
  {
    address:
      "72, 2nd Floor, Next to Max & Crossword, 3rd Phase, Inner Ring Road, JP Nagar, Bangalore",
    location: {
      lat: 12.9506526,
      lng: 77.6392151,
    },
    AWB: 83288941747,
    names: "Yvonne Haddad",
    product_id: "SKU_58",
  },
  {
    address:
      "Eden Park7, 8 Doresani Palya, Near Kalyani Magnum, Opposite Oracle, 5th Phase, JP Nagar, Bangalore",
    location: {
      lat: 12.901773,
      lng: 77.594978,
    },
    AWB: 36774055970,
    names: "Frank Garcia",
    product_id: "SKU_16",
  },
  {
    address: "Amoolya, 1st Floor, 24th Main, 6th Phase, JP Nagar, Bangalore",
    location: {
      lat: 12.9088826,
      lng: 77.5857567,
    },
    AWB: 49180403091,
    names: "Ronnie Cameron",
    product_id: "SKU_9",
  },
  {
    address:
      "47/1, 9th Main,1st Cross, Miniforest, Phase 3, JP Nagar, Bangalore",
    location: {
      lat: 12.916563,
      lng: 77.583568,
    },
    AWB: 65307617155,
    names: "Teresa Ford",
    product_id: "SKU_59",
  },
  // {
  //   address:
  //     "The HHI Select Bengaluru Hotel, 686, 15th Cross, Ring Road, 2nd Phase, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.9065794,
  //     lng: 77.5929269,
  //   },
  //   AWB: 32162999926,
  //   names: "Miguel Evanoff",
  //   product_id: "SKU_44",
  // },
  // {
  //   address:
  //     "Quality Inn - Shravanthi, 60, 13th Cross, 2nd Main, 3rd Phase, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.907355,
  //     lng: 77.5985151,
  //   },
  //   AWB: 67841310375,
  //   names: "Brenda Berry",
  //   product_id: "SKU_103",
  // },
  // {
  //   address: "5th Cross Road, Dollar Layout, 3rd Phase, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.9066907,
  //     lng: 77.602318,
  //   },
  //   AWB: 98072567575,
  //   names: "Brian Glass",
  //   product_id: "SKU_45",
  // },
  // {
  //   address:
  //     "57, 15th Cross Road, Outer Ring Road, Phase 6, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.9070991,
  //     lng: 77.5996462,
  //   },
  //   AWB: 81028594970,
  //   names: "Daniel Moore",
  //   product_id: "SKU_92",
  // },
  // {
  //   address:
  //     "97, Wilson Garden Housing Society, 7th Phase, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.8978624,
  //     lng: 77.58450839999999,
  //   },
  //   AWB: 72346908029,
  //   names: "James Rego",
  //   product_id: "SKU_13",
  // },
  // {
  //   address:
  //     "44-45, Terrace Floor, 24th Main Road, 7th phase, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.8982804,
  //     lng: 77.5858544,
  //   },
  //   AWB: 73908465584,
  //   names: "Mildred Richards",
  //   product_id: "SKU_98",
  // },
  // {
  //   address: "Amoolya, 1st Floor, 24th Main, 6th Phase, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.9088826,
  //     lng: 77.5857567,
  //   },
  //   AWB: 82980897770,
  //   names: "Daren Devit",
  //   product_id: "SKU_74",
  // },
  // {
  //   address: "8, 15th Main, 5th Phase, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.9033045,
  //     lng: 77.59173849999999,
  //   },
  //   AWB: 72031214940,
  //   names: "Sarah Kardashian",
  //   product_id: "SKU_138",
  // },
  // {
  //   address:
  //     "114, Kothanur Main Road, Santrupthi Nagar, 7th Phase, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.8919779,
  //     lng: 77.5817794,
  //   },
  //   AWB: 13346207178,
  //   names: "Ryan Orlando",
  //   product_id: "SKU_29",
  // },
  // {
  //   address:
  //     "Site 15, 15th Cross, 100 Feet Road, 4th Phase, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.9061345,
  //     lng: 77.5968288,
  //   },
  //   AWB: 66193906105,
  //   names: "Gerard Cardin",
  //   product_id: "SKU_96",
  // },
  // {
  //   address: "204, 4th Cross, KSRTC Layout, 2nd Phase, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.9127245,
  //     lng: 77.5958453,
  //   },
  //   AWB: 18834198685,
  //   names: "Rebecca Vanos",
  //   product_id: "SKU_56",
  // },
  // {
  //   address: "18, K.R Layout, Dollar Colony, 4th Phase, JP Nagar",
  //   location: {
  //     lat: 12.9052573,
  //     lng: 77.5841502,
  //   },
  //   AWB: 77357637627,
  //   names: "Willie Matson",
  //   product_id: "SKU_100",
  // },
  // {
  //   address:
  //     "Someshwara Bhavan, RBI Layout, 7th Phase, Kothnur Main Road, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.8838109,
  //     lng: 77.5829501,
  //   },
  //   AWB: 50570222462,
  //   names: "Jason Taylor",
  //   product_id: "SKU_95",
  // },
  // {
  //   address:
  //     "10/3, Shamanna Garden, 22nd Main Rd, Phase 5, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.9037401,
  //     lng: 77.5870418,
  //   },
  //   AWB: 86868052143,
  //   names: "Mabel Covell",
  //   product_id: "SKU_29",
  // },
  // {
  //   address:
  //     "296, Ground Floor, 5th Phase, 100 ft Outer Ring Road, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.906285,
  //     lng: 77.5874455,
  //   },
  //   AWB: 60270106051,
  //   names: "Martha Braun",
  //   product_id: "SKU_103",
  // },
  // {
  //   address: "46/A, 1st Main, 3rd Phase, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.9112119,
  //     lng: 77.599166,
  //   },
  //   AWB: 61686659900,
  //   names: "James Riley",
  //   product_id: "SKU_22",
  // },
  // {
  //   address:
  //     "Brigade Millenium Inside Indian Music Experience Museum, JP Nagar, Bangalore, Bengaluru",
  //   location: {
  //     lat: 12.8917987,
  //     lng: 77.58368610000001,
  //   },
  //   AWB: 69289578038,
  //   names: "Elijah Reno",
  //   product_id: "SKU_51",
  // },
  // {
  //   address:
  //     "81, 7th Main, 5th Cross, Bank of Baroda Colony, 7th Phase, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.9059478,
  //     lng: 77.6058923,
  //   },
  //   AWB: 71217404672,
  //   names: "Lidia Wickham",
  //   product_id: "SKU_58",
  // },
  // {
  //   address: "JP Nagar, Phase 7, Bangalore",
  //   location: {
  //     lat: 12.8890015,
  //     lng: 77.573385,
  //   },
  //   AWB: 24549099395,
  //   names: "Freda Beauchamp",
  //   product_id: "SKU_40",
  // },
  // {
  //   address:
  //     "724, 3rd Floor, RBI Layout, Rini Pearl, Opposite E.K. Retail, 7th Phase, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.8917914,
  //     lng: 77.577754,
  //   },
  //   AWB: 50581824353,
  //   names: "Tim Sokol",
  //   product_id: "SKU_125",
  // },
  // {
  //   address:
  //     "305, Anand NR Onyx, 15th Cross, 100 Feet Ring Road, 5th Phase Extension, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.906285,
  //     lng: 77.5874455,
  //   },
  //   AWB: 52273090335,
  //   names: "Antonio Oliver",
  //   product_id: "SKU_7",
  // },
  // {
  //   address:
  //     "104/1, 21st Main Road, 6th Cross Road, R K Colony, JP Nagar 2nd Phase, Bangalore",
  //   location: {
  //     lat: 12.9123174,
  //     lng: 77.58784109999999,
  //   },
  //   AWB: 60730226124,
  //   names: "Richard Book",
  //   product_id: "SKU_147",
  // },
  // {
  //   address:
  //     "1260 SY 35/4 SJR Tower's, 24th Main Puttanhalli, 7th Phase, JP Nagar Bangalore",
  //   location: {
  //     lat: 12.9003937,
  //     lng: 77.5858415,
  //   },
  //   AWB: 38777880457,
  //   names: "Karen Yuen",
  //   product_id: "SKU_137",
  // },
  // {
  //   address:
  //     "1260 SY 35/4 SJR Tower's, 24th Main Puttanhalli, JP Nagar 7th Phase, Bangalore",
  //   location: {
  //     lat: 12.9003937,
  //     lng: 77.5858415,
  //   },
  //   AWB: 14876577908,
  //   names: "John Fridley",
  //   product_id: "SKU_21",
  // },
  // {
  //   address:
  //     "1260, SY 35/4, SJR Towers, 24th Main Puttanhalli, 7th Phase, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.9156577,
  //     lng: 77.5994159,
  //   },
  //   AWB: 15743308603,
  //   names: "Louise Lynch",
  //   product_id: "SKU_15",
  // },
  // {
  //   address:
  //     "1260 SY 35/4 SJR Tower's, JP Nagar 7th Phase, 24th Main Puttanhalli, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.9003937,
  //     lng: 77.5858415,
  //   },
  //   AWB: 96594637899,
  //   names: "Sam Vest",
  //   product_id: "SKU_83",
  // },
  // {
  //   address:
  //     "1260, SY 35/4, SJR Towers, 24th Main Puttanhalli, 7th Phase, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.9156577,
  //     lng: 77.5994159,
  //   },
  //   AWB: 75423501902,
  //   names: "Doris Floyd",
  //   product_id: "SKU_143",
  // },
  // {
  //   address:
  //     "5th A Cross, Lakshmi Complex, Manjunatha Colony, Near RV Dental College, 2nd phase, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.9113897,
  //     lng: 77.584992,
  //   },
  //   AWB: 13385067871,
  //   names: "Leticia Coleman",
  //   product_id: "SKU_28",
  // },
  // {
  //   address:
  //     "#35/4, 24th main JP Nagar 7th phase, Puttenahalli, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.901013,
  //     lng: 77.586034,
  //   },
  //   AWB: 25281194232,
  //   names: "Christine Pfeiff",
  //   product_id: "SKU_117",
  // },
  // {
  //   address:
  //     "99/2A, Kothnoor Main Road, Opposite RBI Layout Bus Stop, 7th Phase, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.8902416,
  //     lng: 77.58212879999999,
  //   },
  //   AWB: 60615787248,
  //   names: "William Rivera",
  //   product_id: "SKU_77",
  // },
  // {
  //   address: "77/1, 24th Main, 2nd Phase, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.9158698,
  //     lng: 77.5860082,
  //   },
  //   AWB: 85830764356,
  //   names: "John Dutton",
  //   product_id: "SKU_144",
  // },
  // {
  //   address: "18th Cross road, 5th Phase, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.9032116,
  //     lng: 77.5877971,
  //   },
  //   AWB: 87207515803,
  //   names: "Angela Cowman",
  //   product_id: "SKU_59",
  // },
  // {
  //   address:
  //     "1260, SY 35/4, SJR Tower's, 7th Phase, 24th Main Puttanhalli, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.9156577,
  //     lng: 77.5994159,
  //   },
  //   AWB: 62376246282,
  //   names: "Edward Leon",
  //   product_id: "SKU_123",
  // },
  // {
  //   address:
  //     "1260 SY 35/4 SJR Tower's, JP Nagar 7th Phase, 24th Main Puttanhalli, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.9003937,
  //     lng: 77.5858415,
  //   },
  //   AWB: 34763837898,
  //   names: "Michael Parenteau",
  //   product_id: "SKU_141",
  // },
  // {
  //   address: "Shop 1, 129, 24th Main, 5th Phase, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.9038753,
  //     lng: 77.58590679999999,
  //   },
  //   AWB: 95782788535,
  //   names: "Daniel Tremper",
  //   product_id: "SKU_91",
  // },
  // {
  //   address: "311, 15th Cross, 5th Phase, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.9061386,
  //     lng: 77.5929986,
  //   },
  //   AWB: 92874070081,
  //   names: "Thomas Lyons",
  //   product_id: "SKU_18",
  // },
  // {
  //   address: "Big Bazzar Building, JP Nagar, Bangalore",
  //   location: {
  //     lat: 12.8872242,
  //     lng: 77.58182599999999,
  //   },
  //   AWB: 28090773455,
  //   names: "Antoine Robertson",
  //   product_id: "SKU_130",
  // },
  // {
  //   address:
  //     "15, 7th Cross, Near Mother Teresa School, ITI Layout, Hosapalya Main Road, HSR, Bangalore",
  //   location: {
  //     lat: 12.8921504,
  //     lng: 77.6282442,
  //   },
  //   AWB: 65216540873,
  //   names: "Nathan Merkel",
  //   product_id: "SKU_65",
  // },
  // {
  //   address:
  //     "119/19, Ground Floor, 10th Cross, Venkateshwara Layout, SG Palya, HSR, Bangalore",
  //   location: {
  //     lat: 12.9481544,
  //     lng: 77.5971734,
  //   },
  //   AWB: 30262250302,
  //   names: "Jenna Reed",
  //   product_id: "SKU_136",
  // },
  // {
  //   address: "1554, Ground Floor, 19th Main, Sector 1, HSR, Bangalore",
  //   location: {
  //     lat: 12.9175337,
  //     lng: 77.65045719999999,
  //   },
  //   AWB: 95752660397,
  //   names: "William Wilson",
  //   product_id: "SKU_9",
  // },
  // {
  //   address: "7th Cross, Sector 1, HSR, Bangalore",
  //   location: {
  //     lat: 12.9194511,
  //     lng: 77.6487443,
  //   },
  //   AWB: 30449400919,
  //   names: "Bonnie Heath",
  //   product_id: "SKU_91",
  // },
  // {
  //   address:
  //     "27th Main road, Sriven Teesta, Near Raymond?s Showroom HSR, Bangalore",
  //   location: {
  //     lat: 12.910037,
  //     lng: 77.6516807,
  //   },
  //   AWB: 52917061849,
  //   names: "Katrina Hilderbrandt",
  //   product_id: "SKU_8",
  // },
  // {
  //   address: "2331, 17th Cross, 24th Main, HSR, Bangalore",
  //   location: {
  //     lat: 12.9120766,
  //     lng: 77.6494981,
  //   },
  //   AWB: 41474085570,
  //   names: "Terresa Breau",
  //   product_id: "SKU_70",
  // },
  // {
  //   address: "Shop 5, LNR Building, Harlur Road, HSR, Bangalore",
  //   location: {
  //     lat: 12.9069779,
  //     lng: 77.6634925,
  //   },
  //   AWB: 74962568491,
  //   names: "Carol Pettway",
  //   product_id: "SKU_93",
  // },
  // {
  //   address: "64&65, 27th Main Road, Sector 1, HSR Layout",
  //   location: {
  //     lat: 12.9204264,
  //     lng: 77.6515996,
  //   },
  //   AWB: 33783112676,
  //   names: "Glennie Delacruz",
  //   product_id: "SKU_106",
  // },
  // {
  //   address: "2318, 27th Main Road, 1st Sector, HSR, Bangalore",
  //   location: {
  //     lat: 12.9121594,
  //     lng: 77.6516733,
  //   },
  //   AWB: 42498449819,
  //   names: "Kenneth Baker",
  //   product_id: "SKU_82",
  // },
  // {
  //   address: "569/4, Sector 1, HSR, Bangalore",
  //   location: {
  //     lat: 12.9257303,
  //     lng: 77.6651649,
  //   },
  //   AWB: 14699928469,
  //   names: "Lucille Keirstead",
  //   product_id: "SKU_123",
  // },
  // {
  //   address: "1554, Ground Floor, 19th Main, Sector - 1, HSR, Bangalore",
  //   location: {
  //     lat: 12.9175337,
  //     lng: 77.65045719999999,
  //   },
  //   AWB: 54163870135,
  //   names: "Tara Allen",
  //   product_id: "SKU_47",
  // },
  // {
  //   address:
  //     "2733, 16th Cross, 27th Main, Opposite NIFT, Sector 1, HSR Layout, Bangalore, HSR, Bangalore",
  //   location: {
  //     lat: 12.912702,
  //     lng: 77.652479,
  //   },
  //   AWB: 98967476662,
  //   names: "Marshall Quinton",
  //   product_id: "SKU_142",
  // },
  // {
  //   address:
  //     "543, 7th Cross, 24th Main, Opposite Nous Info Systems, Sector 1, HSR, Bangalore",
  //   location: {
  //     lat: 12.9196367,
  //     lng: 77.64947529999999,
  //   },
  //   AWB: 94332983235,
  //   names: "Gustavo Bailey",
  //   product_id: "SKU_117",
  // },
  // {
  //   address:
  //     "13th Cross, 24th Main, Opposite Assetz Apartment, 1st Sector, HSR, Bangalore",
  //   location: {
  //     lat: 12.91615,
  //     lng: 77.6488823,
  //   },
  //   AWB: 21104565365,
  //   names: "Kathleen Cantrell",
  //   product_id: "SKU_76",
  // },
  // {
  //   address: "7th Cross Road, Agara Village, 1st Sector, HSR, Bangalore",
  //   location: {
  //     lat: 12.9194418,
  //     lng: 77.647291,
  //   },
  //   AWB: 78472305957,
  //   names: "Donald Allen",
  //   product_id: "SKU_139",
  // },
  // {
  //   address:
  //     "680-669, 13th Cross Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka",
  //   location: {
  //     lat: 12.9159261,
  //     lng: 77.6497332,
  //   },
  //   AWB: 11910424508,
  //   names: "Nanette Mcbride",
  //   product_id: "SKU_89",
  // },
];

export default orders;
