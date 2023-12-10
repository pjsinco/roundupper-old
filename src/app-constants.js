var colorMap = require('./constants/color-map.js');

module.exports = {
  app: {
    routes: [
      {
        path: '/the-do',
        name: 'The DO'
      },
      {
        path: '/jaoa',
        name: 'JAOA'
      },
      {
        path: '/cbs',
        name: 'Certifying Board Services'
      },
      {
        path: '/aoa-general',
        name: 'AOA General'
      },
    ],
  },

  cbs: {
    boards: {
      "Emergency Medicine": {
        "name": "American Osteopathic Board of Emergency Medicine",
        "abbrev": "AOBEM",
        "friendly": "Emergency Medicine",
        "email": "aobem@osteopathic.org",
        "phone": "(800) 621-1773, ext. 8293",
        "address": "142 E. Ontario St., Chicago, IL 60611-2864",
        "boardUrl": "https://aobem.org/index.shtml",
        "logoSrc": "https://aoa-mnews.informz.net/aoa-mnews/data/images/cbs/logo-aobem.png",
        "logoW": 440,
        "logoH": 59,
        "manager": "Jennifer Hausman"
      },
      "Internal Medicine": {
        "name": "American Osteopathic Board of Internal Medicine",
        "abbrev": "AOBIM",
        "friendly": "Internal Medicine",
        "email": "aobim@osteopathic.org",
        "phone": "(800) 621-1773, ext. 8274",
        "address": "142 E. Ontario St., Chicago, IL 60611-2864",
        "boardUrl": "https://www.aobim.org/",
        "logoSrc": "https://aoa-mnews.informz.net/aoa-mnews/data/images/cbs/logo-aobim.png",
        "logoW": 451,
        "logoH": 59,
        "manager": "Danny Hart"
      },
      "Family Physicians": {
        "name": "American Osteopathic Board of Family Physicians",
        "abbrev": "AOBFP",
        "friendly": "Family Physicians",
        "email": "aobfp@osteopathic.org",
        "phone": "(847) 640-8477",
        "address": "330 E. Algonquin Road, Ste. 6, Arlington Heights, IL 60005",
        "boardUrl": "https://www.aobfp.org/",
        "logoSrc": "https://aoa-mnews.informz.net/aoa-mnews/data/images/cbs/logo-aobfp.png",
        "logoW": 446,
        "logoH": 59,
        "manager": "Carol Thoma"
      },
      "Surgery": {
        "name": "American Osteopathic Board of Surgery",
        "abbrev": "AOBS",
        "friendly": "Surgery",
        "email": "aobs@osteopathic.org",
        "phone": "(800) 621-1773, ext. 8078",
        "address": "142 E. Ontario St., Chicago, IL 60611-2864",
        "boardUrl": "https://www.aobs.org/",
        "logoSrc": "https://aoa-mnews.informz.net/aoa-mnews/data/images/cbs/logo-aobs.png",
        "logoW": 385,
        "logoH": 59,
        "manager": "Dan Mendelson"
      },
      "Sports Medicine": {
        "name": "American Osteopathic Conjoint Sports Medicine Examination Committee",
        "abbrev": "AOCSMEC",
        "friendly": "Sports Medicine",
        "email": "sportsmedicine@osteopathic.org",
        "phone": "(800) 621-1773, ext. 8082",
        "address": "142 E. Ontario St., Chicago, IL 60611-2864",
        "boardUrl": "https://www.aoesm.org/",
        "logoSrc": "https://aoa-mnews.informz.net/aoa-mnews/data/images/cbs/logo-aocsmec.png",
        "logoW": 584,
        "logoH": 59,
        "manager": "Danny Hart"
      },
      "Dermatology": {
        "name": "American Osteopathic Board of Dermatology",
        "abbrev": "AOBD",
        "friendly": "Dermatology",
        "email": "aobd@osteopathic.org",
        "phone": "(800) 621-1773, ext. 8112",
        "address": "142 E. Ontario St., Chicago, IL 60611-2864",
        "boardUrl": "https://aobd.org/",
        "logoSrc": "https://aoa-mnews.informz.net/aoa-mnews/data/images/cbs/logo-aobd.png",
        "logoW": 397,
        "logoH": 59,
        "manager": "Libby Strong"
      },
      "Neuromusculoskeletal Medicine": {
        "name": "American Osteopathic Board of Neuromusculoskeletal Medicine",
        "abbrev": "AOBNMM",
        "friendly": "Neuromusculoskeletal Medicine",
        "email": "aobnmm@osteopathic.org",
        "phone": "(800) 621-1773, ext. 8223",
        "address": "142 E. Ontario St., Chicago, IL 60611-2864",
        "boardUrl": "https://www.aobnmm.org/",
        "logoSrc": "https://aoa-mnews.informz.net/aoa-mnews/data/images/cbs/logo-aobnmm.png",
        "logoW": 457,
        "logoH": 59,
        "manager": "Angi Beranek"
      },
      "Pathology": {
        "name": "American Osteopathic Board of Pathology",
        "abbrev": "AOBPA",
        "friendly": "Pathology",
        "email": "aobpa@osteopathic.org",
        "phone": "(800) 621-1773, ext. 8227",
        "address": "142 E. Ontario St., Chicago, IL 60611-2864",
        "boardUrl": "https://www.aobpath.org/",
        "logoSrc": "https://aoa-mnews.informz.net/aoa-mnews/data/images/cbs/logo-aobpa.png",
        "logoW": 385,
        "logoH": 59,
        "manager": "Mary Cameron"
      },
      "Pediatrics": {
        "name": "American Osteopathic Board of Pediatrics",
        "abbrev": "AOBP",
        "friendly": "Pediatrics",
        "email": "aobp@osteopathic.org",
        "phone": "(800) 621-1773, ext. 8267",
        "address": "142 E. Ontario St., Chicago, IL 60611-2864",
        "boardUrl": "https://www.aobp.org/",
        "logoSrc": "https://aoa-mnews.informz.net/aoa-mnews/data/images/cbs/logo-aobp.png",
        "logoW": 385,
        "logoH": 59,
        "manager": "Angi Beranek"
      },
      "Physical Medicine and Rehabilitation": {
        "name": "American Osteopathic Board of Physical Medicine and Rehabilitation",
        "abbrev": "AOBPMR",
        "friendly": "Physical Medicine and Rehabilitation",
        "email": "aobpmr@osteopathic.org",
        "phone": "(800) 621-1773, ext. 8226",
        "address": "142 E. Ontario St., Chicago, IL 60611-2864",
        "boardUrl": "https://www.aobpmr.org/",
        "logoSrc": "https://aoa-mnews.informz.net/aoa-mnews/data/images/cbs/logo-aobpmr.png",
        "logoW": 560,
        "logoH": 59,
        "manager": "Angi Beranek"
      },
      "Proctology": {
        "name": "American Osteopathic Board of Proctology",
        "abbrev": "AOBPR",
        "friendly": "Proctology",
        "email": "proctology@osteopathic.org",
        "phone": "(800) 621-1773, ext. 8227",
        "address": "142 E. Ontario St., Chicago, IL 60611-2864",
        "boardUrl": "https://www.aobpr.org/",
        "logoSrc": "https://aoa-mnews.informz.net/aoa-mnews/data/images/cbs/logo-aobpr.png",
        "logoW": 385,
        "logoH": 59,
        "manager": "Dan Mendelson"
      },
      "Radiology": {
        "name": "American Osteopathic Board of Radiology",
        "abbrev": "AOBR",
        "friendly": "Radiology",
        "email": "aobr@osteopathic.org",
        "phone": "(800) 621-1773, ext. 8072",
        "address": "142 E. Ontario St., Chicago, IL 60611-2864",
        "boardUrl": "https://www.aobr.org/",
        "logoSrc": "https://aoa-mnews.informz.net/aoa-mnews/data/images/cbs/logo-aobr.png",
        "logoW": 385,
        "logoH": 59,
        "manager": "Karin Best"
      },
      "Obstetrics and Gynecology": {
        "name": "American Osteopathic Board of Obstetrics and Gynecology",
        "abbrev": "AOBOG",
        "friendly": "Obstetrics and Gynecology",
        "email": "aobog@osteopathic.org",
        "phone": "(800) 621-1773, ext. 8271",
        "address": "142 E. Ontario St., Chicago, IL 60611-2864",
        "boardUrl": "https://aobog.org",
        "logoSrc": "https://aoa-mnews.informz.net/aoa-mnews/data/images/cbs/logo-aobog.png",
        "logoW": 487,
        "logoH": 59,
        "manager": "Mary Cameron"
      },
      "Neurology and Psychiatry": {
        "name": "American Osteopathic Board of Neurology and Psychiatry",
        "abbrev": "AOBNP",
        "friendly": "Neurology and Psychiatry",
        "email": "aobnp@osteopathic.org",
        "phone": "(312) 202-8148",
        "address": "142 E. Ontario St., Chicago, IL 60611-2864",
        "boardUrl": "https://www.aobnp.org",
        "logoSrc": "https://aoa-mnews.informz.net/aoa-mnews/data/images/cbs/logo-aobnp.png",
        "logoW": 475,
        "logoH": 59,
        "manager": "Vivian Ross",
      },
    },
  },

  jaoa: {

    colors: [
      'Green',
      'Red',
      'Purple',
      'Blue',
    ],

    articleTypes: [
      {
        name: "Standalone",
        value: '',
      },
      {
        name: "Series: First",
        value: 'series-first',
      },
      {
        name: "Series: Middle",
        value: 'series-middle',
      },
      {
        name: "Series: Last",
        value: 'series-last',
      },
    ],

    categories: [
      "AOA Communication",
      "Book Reviews",
      "Brief Report",
      "Case Report",
      "Clinical Images",
      "Clinical Practice",
      "Clinical Review",
      "CME Quiz",
      "Editorial",
      "Empathy in Medicine",
      "Evidence-Based Clinical Reviews",
      "Health Policy",
      "In My View",
      "In Your Words",
      "Letters to the Editor",
      "Medical Education",
      "Original Contribution",
      "Review",
      "The Somatic Connection",
      "Special Communication",
      "Special Report",
      "Still Relevant?",
      "SURF",
    ],

    categoryColors: {
      "AOA Communication"               : colorMap.green,
      "Original Contribution"           : colorMap.purple,
      "Review"                          : colorMap.purple,
      "Evidence-Based Clinical Reviews" : colorMap.purple,
      "Clinical Review"                 : colorMap.purple,
      "Clinical Practice"               : colorMap.purple,
      "Brief Report"                    : colorMap.purple,
      "Medical Education"               : colorMap.purple,
      "Case Report"                     : colorMap.purple,
      "Special Communication"           : colorMap.purple,
      "Special Report"                  : colorMap.green,
      "Health Policy"                   : colorMap.green,
      "Still Relevant?"                 : colorMap.green,
      "Editorial"                       : colorMap.green,
      "In My View"                      : colorMap.green,
      "Empathy in Medicine"             : colorMap.red,
      "The Somatic Connection"          : colorMap.red,
      "Clinical Images"                 : colorMap.red,
      "In Your Words"                   : colorMap.red,
      "Letters to the Editor"           : colorMap.green,
      "SURF"                            : colorMap.red,
      "CME Quiz"                        : colorMap.blue,
      "Book Reviews"                    : colorMap.red,
   },

  },
};
