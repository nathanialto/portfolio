function myFunction(elem) {
    var x = document.getElementById(elem);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function maxwindow(elem) {
  var el = document.getElementById(elem);
    if (el.style.width < "35vw"){
      el.style.width = "35vw"}

    else if (el.className == "column_3") {
        el.style.width = "25vw";
      } 
    else if (el.className == "column_2") {
        el.style.width = "22.5vw";
      }
    else if (el.className == "column_1") {
        el.style.width = "25vw";
      }

  }

var i;
i = 0;

const getIllustrations = (term) => {
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'illustration';
  elem.innerHTML = "";
  for (i=0; i < 22; i++){
    elem.innerHTML += createIllustrations(illustrations[i]);
  }
}



const getPee = (term) => {
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'safe2pee';
  elem.innerHTML = "";
  elem.innerHTML = createImage(safe2pee[0]);
}

const getFrijoles = (term) => {
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'Forking Frijoles';
  elem.innerHTML = "";
  elem.innerHTML = createImage(forking_frijoles[0]);
}

const getSheridan = (term) => {
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'Sheridan Rd';
  elem.innerHTML = "";
  elem.innerHTML = createImage(sheridan_rd[0]);
}

const getHousing = (term) => {
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'Housing Guide';
  elem.innerHTML = "";
  elem.innerHTML = createImage(housing_guide[0]);
}

const getGeese = (term) => {
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'Animals Spottings at Northwestern';
  elem.innerHTML = "";
  elem.innerHTML = createImage(wild_geese[0]);
}

const getEichler = (term) => {
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'The Eichler Homepage';
  elem.innerHTML = "";
  elem.innerHTML = createImage(eichler[0]);
}

const getZine = (term) => {
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'zine';
  elem.innerHTML = "";
  for (i=0; i < 7; i++){
    elem.innerHTML += createZine(zine[i]);
  }
}

const getSticker = (term) => {
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'sticker shop';
  elem.innerHTML = "";
  for (i=0; i < stickers.length; i++){
    elem.innerHTML += createSticker(stickers[i]);
  }
}

const getMantel = (term) => {
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'the mantel';
  elem.innerHTML = "";
  for (i=0; i < mantel.length; i++){
    elem.innerHTML += createMantel(mantel[i]);
  }
}

const getInteractives = (term) => {
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'interactives';
  elem.innerHTML = "";
  for (i=0; i < 6; i++){
    elem.innerHTML += createInteractives(interactives[i]);
  }
}

const getDios = (term) => {
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'dios bendiga este hogar';
  elem.innerHTML = "";
  for (i=0; i < dios.length; i++){
    elem.innerHTML += createDios(dios[i]);
  }
}

const getFeatured = (term) => {
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'featured';

  elem.innerHTML = "";
  for (i=0; i < featured.length; i++){
    elem.innerHTML += createFeatured(featured[i]);
  }
}

const getAbout = (term) => {
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = "about";
  elem.innerHTML = "";
  elem.innerHTML += createAbout(about[0]);

}

const createIllustrations = (data) => {

  const piece_title = document.querySelector("#piece");
  piece_title.innerHTML = "click to explore";

  return`<section class="card" onclick="nameIllustrations('${data.piece}')">
    <div>
      <a>
        <img class="img-div ${data.class}" src="${data.image}">
      </a>
    </div>
  </section>`
};

const createZine = (data) => {

  const piece_title = document.querySelector("#piece");
  piece_title.innerHTML = "personal project";

  return`<section class="card">
    <div>
       <img class="img-div zine" src="${data.image}">
    </div>
  </section>`
};

const createSticker = (data) => {

  const piece_title = document.querySelector("#piece");
  piece_title.innerHTML = "click any for link";

  return`<section class="card">
    <div>
      <a href="https://pomplace.bigcartel.com/">
        <img class="img-div" src="${data.image}">
      </a>
    </div>
  </section>`
};

const createInteractives = (data) => {

  const piece_title = document.querySelector("#piece");
  piece_title.innerHTML = "click to explore";

  return`<section class="card">
    <div>
      <a target="blank" href="${data.link}">
        <img class="img-div interactives" src="${data.image}";">
      </a>
    </div>
  </section>`
};

const createDios = (data) => {

  const piece_title = document.querySelector("#piece");
  piece_title.innerHTML = "click to explore";

  return`<section class="card" onclick="${data.function}">
    <div>
      <a>
        <img class="img-div dios" src="${data.image}";">
      </a>
    </div>
  </section>`
};

const createMantel = (data) => {

  const piece_title = document.querySelector("#piece");
  piece_title.innerHTML = "click to explore";

  return`<section class="card" onclick="nameIllustrations('${data.piece}')">
    <div>
        <img class="img-div" src="${data.image}";">
    </div>
  </section>`
};

const createImage = (data) => {

  const piece_title = document.querySelector("#piece");
  piece_title.innerHTML = "click image for link";

  return`<section class="card">
    <div>
      <a href="${data.link}">
        <img class="img-div" src="${data.image}";">
      </a>
    </div>
  </section>
  
  <div ><br>${data.text}</div>
  `
};

const createPage = (data) => {

  const piece_title = document.querySelector("#piece");
  piece_title.innerHTML = data.title;

  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = data.piece;
  elem.innerHTML = "";
  elem.innerHTML = `<section class="card">
    <div>
        <img class="img-div" src="${data.image}";">
    </div>
  </section>
  
  <div ><br>${data.text}</div>
  `
};
const createAbout = (data) => {
  const piece_title = document.querySelector("#piece");
  piece_title.innerHTML = "hi, i'm nathanial";

  return`
    <div>
        <div>${data.text}</div>
    </div>`
};

const createFeatured = (data) => {
  const piece_title = document.querySelector("#piece");
  piece_title.innerHTML = "click to explore";

  return`<section class="card featured-card">
    <div onclick="${data.function}">
      <a ${data.link}>
        <img class="img-div featured" src="${data.image}";">
      </a>
    </div>
  </section>`
};

const nameIllustrations = (x) => {

  const piece_title = document.querySelector("#piece");
  piece_title.innerHTML = "";
  piece_title.innerHTML = x;
};


const illustrations = [
  {'image': 'img/illustration/compressed/bread.PNG', 'piece': 'bread and butter, personal illustration'},
  {'image': 'img/illustration/compressed/mango_big.PNG', 'piece': 'mango, personal illustration'},
  {'image': 'img/illustration/compressed/asg.JPG', 'piece': 'asg, daily northwestern'},

  {'image': 'img/illustration/compressed/sauce.PNG', 'piece': 'hot sauce, personal illustration'},
  {'image': 'img/illustration/compressed/daily evicted.PNG', 'piece': 'evicted, daily northwestern'},
  {'image': 'img/illustration/spencer.PNG', 'piece': 'spencer, personal illustration'},

  {'image': 'img/illustration/compressed/admit_rate.PNG', 'piece': 'admit rate, daily northwestern'},
  {'image': 'img/illustration/flan.GIF', 'piece': 'flan, personal illustration'},
  {'image': 'img/illustration/compressed/bart.GIF', 'piece': 'bart, personal illustration'},

  {'image': 'img/illustration/compressed/eichler.PNG', 'piece': 'working eichler, forking frijoles'},
  {'image': 'img/illustration/compressed/music_major.PNG', 'piece': 'music major, daily northwestern'},
  {'image': 'img/illustration/compressed/the_hudson_com.png', 'piece': 'the hudson, personal illustration'},

  {'image': 'img/illustration/compressed/valentines.PNG', 'piece': 'valentines, daily northwestern'},
  {'image': 'img/illustration/lunch_at_janets.GIF', 'piece': "lunch at janet's, personal illustration"},
  {'image': 'img/illustration/compressed/dylan.PNG', 'piece': 'dylan, personal illustration'},

  {'image': 'img/illustration/compressed/pomegranate_gif-min.gif', 'piece': 'pomegranate, personal illustration'},
  {'image': 'img/illustration/compressed/wild_geese.PNG', 'piece': 'wild geese, north by northwestern'},
  // {'image': 'img/illustration/compressed/daily_coalitionnu.PNG', 'piece': 'nu coalition, daily northwestern'},

  // {'image': 'img/illustration/compressed/chloe_2@10x.png', 'piece': 'chloe, personal illustration', 'class': 'full'},
  // {'image': 'img/illustration/compressed/new_reality.PNG', 'piece': 'new_reality, personal illustration', 'class': 'half'},
  // {'image': 'img/illustration/compressed/Janet-poster-final.png', 'piece': 'janet, personal illustration', 'class': 'half'},

  // {'image': 'img/illustration/compressed/pupusas-min.gif', 'piece': 'pupusas, personal illustration', 'class': 'full'},
 
]

const interactives = [
  {'image': 'img/projects/safe2pee.png','link': 'https://northbynorthwestern.com/safe2pee/'},
  {'image': 'img/projects/forking_frijoles.GIF','link': 'https://natanyel.com/forking_frijoles/'},
  {'image': 'img/projects/sheridan_rd.PNG','link': 'https://nathanialto.github.io/sheridan_rd/',},
  {'image': 'img/projects/housing_guide.PNG','link': 'https://northbynorthwestern.com/housing-guide-2021/',},
  {'image': 'img/illustration/compressed/wild_geese.PNG','link': 'https://northbynorthwestern.com/animals-of-northwestern/',},
  // {'image': 'img/projects/cloud_cat.gif','link': 'https://nathanialto.github.io/cloud_cat/',},
  {'image': 'img/projects/eichler.png','link': 'https://nathanialto.github.io/the_eichler_homepage/',},
   
]

const dios = [
  {'image': 'img/dios/pupusa_print.jpg','title': 'mama chita`s', 'function': 'createPage(dios[0])', 'piece': 'dios bendiga este hogar', 'text': `<p>linoleum print on paper</p>`},
  {'image': 'img/dios/NathanialOrtiz_Tamales.jpg','title': 'a collage for tamales 1/2', 'function': 'createPage(dios[1])', 'piece': 'dios bendiga este hogar', 'text': `<p>acrylic paint, paper, printed images and text on cardboard</p>`},
  {'image': 'img/dios/tamales2.jpg','title': 'a collage for tamales 2/2', 'function': 'createPage(dios[2])', 'piece': 'dios bendiga este hogar', 'text': `<p>acrylic paint, paper, printed images and text on paper</p>`},
  {'image': 'img/dios/nathanialortiz_a3.gif','link': '#', 'title': 'nathanial pix', 'function': 'createPage(dios[3])', 'piece': 'dios bendiga este hogar', 'text': `<p>drawing tool created in cs396: generative methods with dr. kate compton, using P5.JS.</p>`},
  {'image': 'img/dios/pupuseriabot.gif','link': '#', 'title': 'pupuseriabot', 'function': 'createPage(dios[4])', 'piece': 'dios bendiga este hogar', 'text': `<p>Chat bot created in cs396: generative methods with dr. kate compton, Tracery.</p>`},
  {'image': 'img/dios/mantel.jpg','piece': 'the mantel', 'function': 'getMantel()',},
  {'image': 'img/dios/la_virgen_with_pupusas.jpg','title': 'la virgen with pupusas', 'function': 'createPage(dios[6])', 'piece': 'dios bendiga este hogar', 'text': `<p>inkjet printed image, acrylic paint, and paper on cardboard.</p>`},
   
]

const zine = [
  {'image': 'img/zine/cover.png',},
  {'image': 'img/zine/page1.png',},
  {'image': 'img/zine/page2.png',},
  {'image': 'img/zine/page3.png',},
  {'image': 'img/zine/page4.png',},
  {'image': 'img/zine/page5.png',},
  {'image': 'img/zine/page6.png',},
]

const mantel = [
  {'image': 'img/mantel/mamita.jpg',},
  {'image': 'img/mantel/dios_house.png',},
  {'image': 'img/mantel/redwood.png',},
  {'image': 'img/mantel/freeway.png',},
  {'image': 'img/mantel/mantel_poster.png',},
  {'image': 'img/mantel/pupusas.png',},
]
const stickers = [
  {'image': 'img/stickers/space_eggs_sticker_sheet.png',},
  {'image': 'img/stickers/egg.png',},
  {'image': 'img/stickers/orange.png',},
  {'image': 'img/stickers/mango.png',},
  {'image': 'img/stickers/bread.png',},
  {'image': 'img/stickers/hotsauce.png',},
  {'image': 'img/stickers/leche_flan_sticker_sheet.png',},
  {'image': 'img/stickers/flan.png',},
  {'image': 'img/stickers/milk.png',},
  {'image': 'img/stickers/caramel.png',},
  {'image': 'img/stickers/flan_slice.png',},
  {'image': 'img/stickers/frijoles_sticker_sheet.png',},
  {'image': 'img/stickers/onion.png',},
  {'image': 'img/stickers/garlic.png',},
  {'image': 'img/stickers/pot.png',},
  {'image': 'img/stickers/mash.png',},
  {'image': 'img/stickers/pan.png',},

]

const safe2pee = [
  {'image': 'img/safe2pee.gif', 'link': 'https://northbynorthwestern.com/safe2pee/', 'text': `
  <p>With the digital publication North By Northwestern, I created Safe2Pee as a tool to enable the Northwestern community to find gender neutral and accesible restrooms</p>`}
]

const forking_frijoles = [
  {'image': 'img/forking_frijoles.gif', 'link': 'https://natanyel.com/forking_frijoles/', 'text': `
  <p>Forking Frijoles is a project I created that synthesized months of work I put into learning how to make beans like my grandma. I wanted to recreate this experience and share cultural knowledge in a playful yet generative way. </p>`}
]

const sheridan_rd = [
  {'image': 'img/sheridan_rd.gif', 'link': 'https://nathanialto.github.io/sheridan_rd/', 'text': `
  <p>Sheridan Rd is my first attempt at a 2d top down game. It displays enemies common to any Northwestern student who walks down Sheridan Road on the regular. The player is able to battle each opponent when contact is made. (Desktop only)</p>`}
]

const housing_guide = [
  {'image': 'img/housing_guide.png', 'link': 'https://northbynorthwestern.com/housing-guide-2021/', 'text': `
  <p>North By Northwestern's Housing Guide is a highly used tool by incoming students to Northwestern. I created the design for the 2021 version, and am currently designing and developing the 2022 version.</p>`}
]

const wild_geese = [
  {'image': 'img/animals_at_nu.png', 'link': 'https://northbynorthwestern.com/animals-of-northwestern/', 'text': `
  <p>I contributed the design, illustrations, and writing for this interactive collaboration with Amy Guo on North By Northwestern.</p>`}
]

const eichler = [
  {'image': 'img/eichler.gif', 'link': 'https://nathanialto.github.io/the_eichler_homepage/', 'text': `
  <p>Eichlers are a common sight in the neighborhood I grew up in. I made this interactive as an exploration of this common home type and the socio-politicial implications these developments have on their communities.</p>`}
]

const about = [
  {'text': `
    <p>I am Nathanial Ortiz, a third year Art Theory and Practice student at Northwestern University, graduating in December 2022. Right now, my art spans multiple mediums but is tethered around the digital. My visual style is a product of my playful interactions with the world and is heavily influenced by my nostalgia of home. 
    </p>
    <p>Since I can remember, every summer, Sunday night dinner, week-off from school, and a three-day weekend, I have spent at my grandmother's house. Unlike my own home, my grandmother's house was always organized and included breakfast, lunch, dinner, and afternoon cut fruit service. The extensive time I spent in the garden, taking walks to the grocery store, and learning how to take public transit up and down the East Bay Area with a 70-year-old 4'9" woman has made me appreciate the simple joys in life.
    </p>
    <p>My goal as an artist is to not only appreciate my family and culture, but to depict, understand, and take part in the physical and metaphysical consumption and reproduction of culture mainly through the lens of food. 
    </p>`,
  }
]

const featured = [
  {'image': 'img/thumbnail/dios_bendiga.png', 'function': 'getDios()'},
  {'image': 'img/thumbnail/safe2pee.png', 'function': 'getPee()'},
  {'image': 'img/thumbnail/page1.png', 'function': 'getZine()'},
  {'image': 'img/thumbnail/space_eggs_sticker_sheet.png', 'function': 'getSticker()'},
  {'image': 'img/thumbnail/forking_frijoles.gif', 'function': 'getFrijoles()'},
  {'image': 'img/thumbnail/sheridan_rd.png', 'function': 'getSheridan()'},
  {'image': 'img/thumbnail/asg.jpg', 'function': 'createPage(featured[6])', 'piece': 'The Daily Northwestern', 'title': 'ASG'},
  {'image': 'img/thumbnail/housing_guide.png', 'function': 'getHousing()'},
  {'image': 'img/thumbnail/daily_coalitionnu.png', 'function': 'createPage(featured[8])', 'piece': 'The Daily Northwestern', 'title': 'CoalitionNU'},
  {'image': 'img/thumbnail/dylan.png', 'function': 'createPage(featured[9])', 'piece': 'personal illustration', 'title': 'dylan'},
  {'image': 'img/thumbnail/wild_geese.png', 'function': 'getGeese()'},
  {'image': 'img/thumbnail/the_hudson.png', 'function': 'createPage(featured[11])', 'piece': 'personal illustration', 'title': 'the hudson'},
  {'image': 'img/thumbnail/valentines.png', 'function': 'createPage(featured[12])', 'piece': 'The Daily Northwestern', 'title': 'Valentines During Covid'},

  {'image': 'img/thumbnail/new_reality.png', 'function': 'createPage(featured[13])', 'piece': 'personal illustration', 'title': 'New Reality'},

  {'image': 'img/thumbnail/eichler.png', 'function': 'getEichler()'},
  {'image': 'img/thumbnail/lunch_at_janets.gif', 'function': 'createPage(featured[15])', 'piece': 'personal illustration', 'title': 'lunch at janets'},
   
]

