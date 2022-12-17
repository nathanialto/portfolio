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

  const backButton = (term) => {
    const button = document.querySelector("#back");
    button.onclick = "getFeatured();"
    alert('heloams');
  
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
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'safe2pee';
  elem.innerHTML = "";
  elem.innerHTML = createImage(safe2pee[0]);
}

const getFrijoles = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'Forking Frijoles';
  elem.innerHTML = "";
  elem.innerHTML = createImage(forking_frijoles[0]);
}

const getSheridan = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'Sheridan Rd';
  elem.innerHTML = "";
  elem.innerHTML = createImage(sheridan_rd[0]);
}

const getHousing = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'Housing Guide';
  elem.innerHTML = "";
  elem.innerHTML = createImage(housing_guide[0]);
}

const getGeese = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'Animals Spottings at Northwestern';
  elem.innerHTML = "";
  elem.innerHTML = createImage(wild_geese[0]);
}

const getEichler = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'The Eichler Homepage';
  elem.innerHTML = "";
  elem.innerHTML = createImage(eichler[0]);
}

const getZine = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'undergraduate thesis show';
  elem.innerHTML = "";
  for (i=0; i < 7; i++){
    elem.innerHTML += createZine(zine[i]);
  }
}

const getSticker = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');

  title.innerHTML = 'sticker shop';
  elem.innerHTML = "";
  for (i=0; i < stickers.length; i++){
    elem.innerHTML += createSticker(stickers[i]);
  }
}

const getMantel = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'the mantel';
  elem.innerHTML = "";
  for (i=0; i < mantel.length; i++){
    elem.innerHTML += createMantel(mantel[i]);
  }
}

const getInteractives = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'interactives';
  elem.innerHTML = "";
  for (i=0; i < 6; i++){
    elem.innerHTML += createInteractives(interactives[i]);
  }
}

const getDios = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'dios bendiga este hogar';
  elem.innerHTML = "";
  for (i=0; i < dios.length; i++){
    elem.innerHTML += createDios(dios[i]);
  }
}

const getSenior = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'Undergraduate Thesis Project';
  elem.innerHTML = "";
  for (i=0; i < senior.length; i++){
    elem.innerHTML += createSenior(senior[i]);
  }
}

const getArt = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  document.querySelector("#back").style.display = 'none'; 

  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  document.body.style.backgroundColor = "#2c3544";
  document.querySelector('#header').style.backgroundColor = "#9d4c3f";
  document.querySelector('#name').style.backgroundColor = "#9d4c3f";



  title.innerHTML = 'digimundo';
  elem.innerHTML = "";
  for (i=0; i < art.length; i++){
    elem.innerHTML += createArt(art[i]);
  }
}

const getWebDev = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'web development';
  elem.innerHTML = "";
  for (i=0; i < web_dev.length; i++){
    elem.innerHTML += createWebDev(web_dev[i]);
  }
}

const getMediaArt = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'media art';
  elem.innerHTML = "";
  for (i=0; i < media_art.length; i++){
    elem.innerHTML += createMediaArt(media_art[i]);
  }
}

const getFeatured = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  document.querySelector("#back").style.display = 'none'; 

  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'gallery';
  const piece_title = document.querySelector("#piece");
  piece_title.innerHTML = "";
  const desc = document.querySelector('#desc');
  desc.innerHTML = "";

  elem.innerHTML = "";
  for (i=0; i < featured.length; i++){
    elem.innerHTML += createFeatured(featured[i]);
  }
}

const getAbout = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  document.querySelector("#back").style.display = 'none'; 

  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = "cv";
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
  document.querySelector("#back").style.display = 'inline-block'; 

  const piece_title = document.querySelector("#piece");
  piece_title.innerHTML = "How To Make Pupusas";

  const desc = document.querySelector('#desc');
  desc.innerHTML = "";
  desc.innerHTML = `<br><div><p>displayed for 
  the Northwestern Art Theory and Practice Senior Thesis Show<p></div>`


  return`<section class="card">
    <div>
       <img class="img-div zine" src="${data.image}">
    </div>
  </section>`
};

const createSticker = (data) => {
  document.querySelector("#back").style.display = 'inline-block'; 

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
  document.querySelector("#back").style.display = 'inline-block'; 

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
  document.querySelector("#back").style.display = 'inline-block'; 

  const piece_title = document.querySelector("#piece");
  piece_title.innerHTML = "junior studio project";

  return`<section class="card" >
    <div>
        <img class="img-div featured" src="${data.image}";">
   </div>
  </section>`
};

const createMantel = (data) => {
  document.querySelector("#back").style.display = 'inline-block'; 

  const piece_title = document.querySelector("#piece");
  piece_title.innerHTML = "click to explore";

  return`<section class="card" onclick="nameIllustrations('${data.piece}')">
    <div>
        <img class="img-div featured" src="${data.image}";">
    </div>
  </section>`
};

const createSenior = (data) => {
  document.querySelector("#back").style.display = 'inline-block'; 

  const piece_title = document.querySelector("#piece");
  piece_title.innerHTML = `"Sometimes you want to say something, and if you were a songwriter you could. 
  But, I'm not a songwriter, so I made this."`;
  
  const desc = document.querySelector('#desc');
  desc.innerHTML = "";
  desc.innerHTML = `<br><div><p>9 printed and digital posters displayed for 
  the Northwestern Art Theory and Practice Senior Thesis Show<p></div>`

  return`<section class="card")">
    <div>
        <img class="img-div featured" src="${data.image}";">
    </div>
  </section>`

};

const createImage = (data) => {

  const piece_title = document.querySelector("#piece");
  piece_title.innerHTML = "click image for link";
  document.querySelector("#back").style.display = 'inline-block'; 


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

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  document.querySelector("#back").style.display = 'inline-block'; 


  const piece_title = document.querySelector("#piece");
  piece_title.innerHTML = data.title;

  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = data.piece;
  elem.innerHTML = "";
  elem.innerHTML = `<section class="card">
    <div>
        <img class="img-div single-page" src="${data.image}";">
    </div>
  </section>
  `
  const desc = document.querySelector('#desc');
  desc.innerHTML = "";
  desc.innerHTML = `<br><div>${data.text}</div>`
};

const createImagesPage = (data) => {

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  document.querySelector("#back").style.display = 'inline-block'; 

  const piece_title = document.querySelector("#piece");
  piece_title.innerHTML = data.title;

  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  const images = data.images;
  const desc = document.querySelector('#desc');
  elem.innerHTML = "";

  title.innerHTML = data.piece;
  console.log(images.length);
  for (i=0; i < images.length; i++){
    elem.innerHTML += addImage(images[i]);
  }

  desc.innerHTML = `
  <div ><br>${data.text}</div>
  `
};

const addImage = (data) => {
  console.log(data.image);
  return`<section class="card">
  <div>
      <img class="img-div" src="${data.image}">
  </div>
</section>
`
};

const addLargeImage = (data) => {
  console.log(data.image);
  return`<section class="card">
  <div>
      <img class="img-div single-page" src="${data.image}">
  </div>
</section>
`
};
const createLargeImagesPage = (data) => {

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  document.querySelector("#back").style.display = 'inline-block'; 

  const piece_title = document.querySelector("#piece");
  piece_title.innerHTML = data.title;

  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  const images = data.images;
  const desc = document.querySelector('#desc');
  elem.innerHTML = "";

  title.innerHTML = data.piece;
  console.log(images.length);
  for (i=0; i < images.length; i++){
    elem.innerHTML += addLargeImage(images[i]);
  }

  desc.innerHTML = `
  <div ><br>${data.text}</div>
  `
};

const createLink = (data) => {

  document.querySelector("#back").style.display = 'inline-block'; 

  const piece_title = document.querySelector("#piece");
  piece_title.innerHTML = data.title;

  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = data.piece;
  elem.innerHTML = "";
  elem.innerHTML = `<section class="card">
    <div>
      <a href="${data.link}">
        <img class="img-div" src="${data.image}";">
        </a>
    </div>
  </section>
  
  <div ><br>${data.text}</div>
  `
};
const createAbout = (data) => {
  const piece_title = document.querySelector("#piece");
  piece_title.innerHTML = "";
  const cards = document.querySelector("#cards");
  cards.tagName += "#two-cards"; 

  return`
        <img class="half-image" src="${data.image}">
        <div class="half-text">${data.text}</div>

        `
};

const createFeatured = (data) => {
  // const piece_title = document.querySelector("#piece");
  // piece_title.innerHTML = "click to explore";

  return`<section class="card featured-card">
    <div onclick="${data.function}">
      <a ${data.link}>
        <img class="img-div featured" src="${data.image}";">
      </a>
    </div>
  </section>`
};

const createArt = (data) => {
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

const createWebDev = (data) => {
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

const createMediaArt = (data) => {
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
  // {'image': 'img/illustration/compressed/wild_geese.PNG','link': 'https://northbynorthwestern.com/animals-of-northwestern/',},
  // {'image': 'img/projects/cloud_cat.gif','link': 'https://nathanialto.github.io/cloud_cat/',},
  {'image': 'img/projects/eichler.png','link': 'https://nathanialto.github.io/the_eichler_homepage/',},
   
]

const dios = [
  // {'image': 'img/dios/pupusa_print.jpg','title': 'mama chita`s', 'function': 'createPage(dios[0])', 'piece': 'dios bendiga este hogar', 'text': `<p>linoleum print on paper</p>`},
  // {'image': 'img/dios/NathanialOrtiz_Tamales.jpg','title': 'a collage for tamales 1/2', 'function': 'createPage(dios[1])', 'piece': 'dios bendiga este hogar', 'text': `<p>acrylic paint, paper, printed images and text on cardboard</p>`},
  // {'image': 'img/dios/tamales2.jpg','title': 'a collage for tamales 2/2', 'function': 'createPage(dios[2])', 'piece': 'dios bendiga este hogar', 'text': `<p>acrylic paint, paper, printed images and text on paper</p>`},
  // {'image': 'img/dios/nathanialortiz_a3.gif','link': 'https://natanyel.com/nathanial_pix', 'title': 'nathanial pix', 'function': 'createLink(dios[3])', 'piece': 'dios bendiga este hogar', 'text': `<p>drawing tool created in cs396: generative methods with dr. kate compton, using P5.JS.</p>`},
  // {'image': 'img/dios/pupuseriabot.gif','link': 'https://natanyel.com/pupuseriabot', 'title': 'pupuseriabot', 'function': 'createLink(dios[4])', 'piece': 'dios bendiga este hogar', 'text': `<p>Chat bot created in cs396: generative methods with dr. kate compton, Tracery.</p>`},
  {'image': 'img/dios/mantel.jpg','piece': 'the mantel', 'function': 'getMantel()',},
  // {'image': 'img/dios/la_virgen_with_pupusas.jpg','title': 'la virgen with pupusas', 'function': 'createPage(dios[6])', 'piece': 'dios bendiga este hogar', 'text': `<p>inkjet printed image, acrylic paint, and paper on cardboard.</p>`},
   
]

const zine = [
  // {'image': 'img/pupusas/pupusa_0.png',},
  {'image': 'img/pupusas/pupusa_1.png',},
  {'image': 'img/pupusas/pupusa_2.png',},
  {'image': 'img/pupusas/pupusa_3.png',},
  {'image': 'img/pupusas/pupusa_4.png',},
  {'image': 'img/pupusas/pupusa_5.png',},
  {'image': 'img/pupusas/pupusa_6.png',},

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
  // {'image': 'img/stickers/egg.png',},
  // {'image': 'img/stickers/orange.png',},
  // {'image': 'img/stickers/mango.png',},
  // {'image': 'img/stickers/bread.png',},
  // {'image': 'img/stickers/hotsauce.png',},
  {'image': 'img/stickers/leche_flan_sticker_sheet.png',},
  // {'image': 'img/stickers/flan.png',},
  // {'image': 'img/stickers/milk.png',},
  // {'image': 'img/stickers/caramel.png',},
  // {'image': 'img/stickers/flan_slice.png',},
  {'image': 'img/stickers/frijoles_sticker_sheet.png',},
  // {'image': 'img/stickers/onion.png',},
  // {'image': 'img/stickers/garlic.png',},
  // {'image': 'img/stickers/pot.png',},
  // {'image': 'img/stickers/mash.png',},
  // {'image': 'img/stickers/pan.png',},

]

const senior = [
  {'image': 'img/senior/senior_1.PNG',},
  {'image': 'img/senior/senior_2.PNG',},
  {'image': 'img/senior/senior_3.PNG',},
  {'image': 'img/senior/senior_4.PNG',},
  {'image': 'img/senior/senior_5.PNG',},
  {'image': 'img/senior/senior_6.PNG',},
  {'image': 'img/senior/senior_7.jpg',},
  {'image': 'img/senior/senior_8.PNG',},
  {'image': 'img/senior/senior_9.PNG',}
]

const spencer = [
  {'image': 'img/zine/cover.PNG',},
  {'image': 'img/zine/page1.png',},
  {'image': 'img/zine/page2.png',},
  {'image': 'img/zine/page3.png',},
  {'image': 'img/zine/page4.png',},
  {'image': 'img/zine/page5.png',},
  {'image': 'img/zine/page6.png',},
]


const pupuseria = [
  {'image': 'img/pupuseria/pupuseria0.gif',},
  {'image': 'img/pupuseria/pupuseria.gif',},
  {'image': 'img/pupuseria/pupuseria1.gif',},
  {'image': 'img/pupuseria/pupuseria2.gif',},

]

const print = [
  {'image': 'img/print/cyberspaceegg.jpg',},
  {'image': 'img/print/cotidiana.jpg',},
  {'image': 'img/print/internet_egg.jpg',},
  {'image': 'img/print/pupusa_print.jpg',},
]

const cs150 =[
  {'image': 'img/dios/nathanialortiz_a3.gif','link': 'https://natanyel.com/nathanial_pix', 'title': 'nathanial pix', 'function': 'createLink(dios[3])', 'piece': 'dios bendiga este hogar', 'text': `<p>Drawing tool created in cs396: generative methods with dr. kate compton, using P5.JS.</p>`},
  {'image': 'img/dios/pupuseriabot.gif','link': 'https://natanyel.com/pupuseriabot', 'title': 'pupuseriabot', 'function': 'createLink(dios[4])', 'piece': 'dios bendiga este hogar', 'text': `<p>Chat bot created in cs396: generative methods with dr. kate compton, Tracery.</p>`},
]

const housingguide22 = [
  {'image' : 'img/housingguide22/housingguide-22-cover.PNG',},
  {'image' : 'img/housingguide22/housingguide-22-page.PNG',},
  // {'image' : 'img/housingguide22/housingguide-22-mobile.png',},


]

const animation = [
  {'image' : 'img/senior/senior_10.GIF', 'title': `"One day I was riding the train and I felt myself getting sicker and sicker and I burst out at a random station and threw up on the tracks."`, 'piece': 'Undergraduate Thesis Show',
  'images': 'img/senior/senior_10.GIF', 'text': `<p>Looped video animation displayed for 
  the Northwestern Art Theory and Practice Senior Thesis Show </p>`},
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
    <p></p>
    <p></p>
    <p>EDUCATION <br>
    B.A. Art Theory and Practice | Northwestern University <br><br>
    EXPERIENCE <br>
    Interactives Section Co-Editor | North By Northwestern (student publication) | January 2021 June 2022 <br>
    Administrative Aide | Northwestern Religious Studies Dept. | October 2019-June 2022 <br>
    Illustration Contributor | Daily Northwestern (student publication) | January 2021-June 2021 <br>
    Cashier | Sea Ranch Sushi Shop | July 2021-October 2021 <br><br>
    PUBLISHED WORK <br>
    Daily Northwestern | Various Print and Digital Illustrations <br>
    North By Northwestern | Animal Sightings at Northwestern | March 2021 <br>
    North By Northwestern | Safe2Pee | February 2022 <br>
    North By Northwestern | NBN Housing Guide | May 2021, May 2022
    North By Northwestern | NBN Housing Guide | May 2021, May 2022
    </p>`,
    'image': 'img/me.jpg',
  }
]

const rana = [
  {'image': 'img/peru/1.png',},
  {'image': 'img/peru/2.png',}

]

const peru = [
  {'image': 'img/peru/back.png',},
  {'image': 'img/peru/cover.png',}
]

const pajaro = [
  {'image': 'img/peru/5.png',},
  {'image': 'img/peru/6.png',}

]

const collage = [
  {'image': 'img/dios/NathanialOrtiz_Tamales.jpg','title': 'a collage for tamales 1/2', 'piece': 'dios bendiga este hogar', 'text': `<p>acrylic paint, paper, printed images and text on cardboard</p>`},
  {'image': 'img/dios/tamales2.jpg','title': 'a collage for tamales 2/2', 'piece': 'dios bendiga este hogar', 'text': `<p>acrylic paint, paper, printed images and text on paper</p>`},
  {'image': 'img/dios/la_virgen_with_pupusas.jpg','title': 'la virgen with pupusas', 'piece': 'dios bendiga este hogar', 'text': `<p>inkjet printed image, acrylic paint, and paper on cardboard.</p>`},
]

const featured = [
  {'image': 'img/peru/2.png', 'function': 'createImagesPage(featured[0])', 'piece': 'sana sana colita de rana 2/4', 'title': '', 'images': rana, 
  'text': `<br><div><p><p></div>`},
  {'image': 'img/peru/5.png', 'function': 'createImagesPage(featured[1])', 'piece': 'sana sana colita de rana 3/4', 'title': '', 'images': pajaro, 'text': ''},
  {'image': 'img/peru/cover.png', 'function': 'createImagesPage(featured[2])', 'piece': 'sana sana colita de rana 1/4', 'title': '', 'images': peru, 'text': ''},
  {'image': 'img/senior/senior_5.PNG', 
  'function': 'createImagesPage(featured[3])', 
  'piece': 'Undergraduate Thesis Project', 
  'title': `Sometimes you want to say something, and if you were a songwriter you could. But, I'm not a songwriter, so I made this.`, 'images': senior, 
  'text': '<br><div><p>9 printed and digital posters displayed for the Northwestern Art Theory and Practice Senior Thesis Show</p></div>'},
  {'image': 'img/pupusas/thumbnail.JPG', 
  'function': 'createImagesPage(featured[4])', 
  'piece': 'undergraduate thesis show', 
  'title': 'How to Make Pupusas', 'images': zine, 
  'text': `<br><div><p>displayed for 
  the Northwestern Art Theory and Practice Senior Thesis Show<p></div>`},
  {'image': 'img/senior/thumbnail.jpg',
  'function': 'createPage(animation[0])',},
  {'image': 'img/stickers/flan.jpg',  'function': 'getSticker()'},
  {'image': 'img/illustration/toad_and_bird.PNG', 'function': 'createPage(featured[7])', 'piece': 'Personal Illustration', 'title': 'Toad and Bird', 'text': ''},
  {'image': 'img/illustration/cyber_space_egg.PNG', 'function': 'createLargeImagesPage(featured[8])', 'images': print, 'piece': 'Print Work', 'title': 'Relief Print', 'text': ''},
  {'image': 'img/thumbnail/daily_coalitionnu.png', 'function': 'createPage(featured[9])', 'piece': 'The Daily Northwestern', 'title': 'CoalitionNU', 'text': '',},
  {'image': 'img/thumbnail/asg.jpg', 'function': 'createPage(featured[10])', 'piece': 'The Daily Northwestern', 'title': 'ASG', 'text': '',},
  {'image': 'img/thumbnail/valentines.png', 'function': 'createPage(featured[11])', 'piece': 'The Daily Northwestern', 'title': 'Valentines During Covid', 'text': '',},
  {'image': 'img/thumbnail/dios_bendiga.png', 'function': 'getDios()'},

  {'image': 'img/thumbnail/the_hudson.png', 'function': 'createPage(featured[13])', 'piece': 'personal illustration', 'title': 'the hudson', 'text': '',},
  {'image': 'img/thumbnail/lunch_at_janets.gif', 'function': 'createPage(featured[14])', 'piece': 'personal illustration', 'title': 'lunch at janets', 'text': '',},

  {'image': 'img/thumbnail/new_reality.png', 'function': 'createPage(featured[15])', 'piece': 'personal illustration', 'title': 'New Reality', 'text': '',},
  {'image': 'img/mantel/pupusas.png', 'function': 'createPage(featured[16])', 'piece': 'Pupusas for Sale', 'title': 'Junior Studio Project', 'text': '<br><div><p>poster apart of my junior studio project installation</p></div>',},
  {'image': 'img/mantel/mantel_poster.png', 'function': 'createPage(featured[17])', 'piece': 'The Mantel', 'title': 'Junior Studio Project', 'text': '<br><div><p>poster apart of my junior studio project installation</p></div>',},

 
 
  // {'image': 'img/thumbnail/dios_bendiga.png', 'function': 'getDios()'},
  {'image': 'img/thumbnail/housingguide2022.jpg', 'title': "NBN Housing Guide 2022", 'function': 'createImagesPage(web_dev[0])', 'piece': "NBN Housing Guide 2022", 'images': housingguide22, 'text': `<p>I designed, coded, and helped source data for North By Northwestern's popular Housing Guide, a tool for incoming and current students to find information on dorms on campus. As co-editor of the Interactives section on North By Northwestern, I co-led a rehaul of the guide this year, adding multiple new dorms and all new photos and testimonials.</p>`},

  {'image': 'img/thumbnail/safe2pee.png', 'function': 'getPee()'},
  {'image': 'img/thumbnail/chicken_shack.jpg', 
  'function': 'createLargeImagesPage(featured[20])',
  'images': spencer,
  'piece': 'The Zine', 
  'title': 'personal project', 
  'text': '',},
  {'image': 'img/thumbnail/forking_frijoles.gif', 'function': 'getFrijoles()'},
  {'image': 'img/thumbnail/sheridan_rd.png', 'function': 'getSheridan()'},
  // {'image': 'img/thumbnail/housing_guide.png', 'function': 'getHousing()'},

  {'image': 'img/thumbnail/eichler.png', 'function': 'getEichler()'},
  {'image': 'img/thumbnail/pupuseria.PNG', 'title': "mama chita's pupuseria", 'function': 'createImagesPage(media_art[0])', 'piece': "mama chita's pupuseria", 'images': pupuseria, 'text': `<p>A Unity made game simulating making pupusas.</p>`},
  {'image': 'img/thumbnail/collage.PNG','title': 'Collages + Mixed Media', 'function': 'createLargeImagesPage(featured[25])', 'images': collage, 'piece': 'Collage for Tamales (1+2) / Dios Bendiga Este Hogar', 'text': `<p>acrylic paint, paper, printed images and text on cardboard</p>`},


]

const art = [
  // {'image': 'img/illustration/pupuseria_thumbnail.png', },
  // {'image': 'img/symbols/mandarina.png', },
  {'image': 'img/symbols/manos.PNG', },
  {'image': 'img/symbols/paloma.PNG', },
  {'image': 'img/symbols/white_edificio.PNG', },

  // {'image': 'img/peru/2.png', },
  // {'image': 'img/peru/5.png', },



  // {'image': 'img/illustration/bart_thumbnail.png', },

  // {'image': 'img/peru/cover.png',},

  // {'image': 'img/senior/senior_5.PNG', 'function': 'getSenior()'},
  // {'image': 'img/pupusas/thumbnail.jpg', 'function': 'getZine()'},
  // {'image': 'img/senior/thumbnail.jpg','function': 'createPage(animation[0])',},
  // {'image': 'img/illustration/toad_and_bird.png',},
  // {'image': 'img/stickers/flan.jpg',},
  // {'image': 'img/illustration/cyber_space_egg.png',},

  // {'image': 'img/thumbnail/dios_bendiga.png', 'function': 'getDios()'},
  // {'image': 'img/thumbnail/space_eggs_sticker_sheet.png', 'function': 'getSticker()'},
  // {'image': 'img/thumbnail/asg.jpg', 'function': 'createPage(featured[6])', 'piece': 'The Daily Northwestern', 'title': 'ASG'},
  // {'image': 'img/thumbnail/daily_coalitionnu.png', 'function': 'createPage(featured[8])', 'piece': 'The Daily Northwestern', 'title': 'CoalitionNU'},
  // {'image': 'img/thumbnail/the_hudson.png', 'function': 'createPage(featured[11])', 'piece': 'personal illustration', 'title': 'the hudson'},
  // {'image': 'img/thumbnail/valentines.png', 'function': 'createPage(featured[10])', 'piece': 'The Daily Northwestern', 'title': 'Valentines During Covid'},
  // {'image': 'img/thumbnail/new_reality.png', 'function': 'createPage(featured[13])', 'piece': 'personal illustration', 'title': 'New Reality'},
  // {'image': 'img/thumbnail/lunch_at_janets.gif', 'function': 'createPage(featured[15])', 'piece': 'personal illustration', 'title': 'lunch at janets'},
 
  // {'image': 'img/mantel/dios_house.png',},
  // {'image': 'img/mantel/freeway.png',},
  // {'image': 'img/mantel/redwood.png',},
  // {'image': 'img/mantel/mamita.jpg',},
  // {'image': 'img/mantel/pupusas.png',},
  // {'image': 'img/mantel/mantel_poster.png',},

  // {'image': 'img/dios/pupusa_print.jpg','title': 'mama chita`s', 'function': 'createPage(dios[0])', 'piece': 'dios bendiga este hogar', 'text': `<p>linoleum print on paper</p>`},
  // {'image': 'img/dios/NathanialOrtiz_Tamales.jpg','title': 'a collage for tamales 1/2', 'function': 'createPage(dios[1])', 'piece': 'dios bendiga este hogar', 'text': `<p>acrylic paint, paper, printed images and text on cardboard</p>`},
  // {'image': 'img/dios/tamales2.jpg','title': 'a collage for tamales 2/2', 'function': 'createPage(dios[2])', 'piece': 'dios bendiga este hogar', 'text': `<p>acrylic paint, paper, printed images and text on paper</p>`},
  // {'image': 'img/dios/mantel.jpg','piece': 'the mantel', 'function': 'getMantel()',},
  // {'image': 'img/dios/la_virgen_with_pupusas.jpg','title': 'la virgen with pupusas', 'function': 'createPage(dios[6])', 'piece': 'dios bendiga este hogar', 'text': `<p>inkjet printed image, acrylic paint, and paper on cardboard.</p>`},
]

const daily = [
  {'image': 'img/illustration/compressed/asg.JPG', 'piece': 'asg, daily northwestern'},

  {'image': 'img/illustration/compressed/daily evicted.PNG', 'piece': 'evicted, daily northwestern'},

  {'image': 'img/illustration/compressed/admit_rate.PNG', 'piece': 'admit rate, daily northwestern'},

  {'image': 'img/illustration/compressed/music_major.PNG', 'piece': 'music major, daily northwestern'},

  {'image': 'img/illustration/compressed/valentines.PNG', 'piece': 'valentines, daily northwestern'},

  {'image': 'img/illustration/compressed/wild_geese.PNG', 'piece': 'wild geese, north by northwestern'},

]

const web_dev = [
  {'image': 'img/thumbnail/housingguide2022.jpg', 'title': "NBN Housing Guide 2022", 'function': 'createImagesPage(web_dev[0])', 'piece': "NBN Housing Guide 2022", 'images': housingguide22, 'text': `<p>I designed, coded, and helped source data for North By Northwestern's popular Housing Guide, a tool for incoming and current students to find information on dorms on campus. As co-editor of the Interactives section on North By Northwestern, I co-led a rehaul of the guide this year, adding multiple new dorms and all new photos and testimonials.</p>`},
  {'image': 'img/thumbnail/safe2pee.png', 'function': 'getPee()'},
  {'image': 'img/thumbnail/housing_guide.png', 'function': 'getHousing()'},
  {'image': 'img/thumbnail/wild_geese.png', 'function': 'getGeese()'},
]

const media_art = [
  {'image': 'img/pupuseria/pupuseria0.gif', 'title': "mama chita's pupuseria", 'function': 'createImagesPage(media_art[0])', 'piece': "mama chita's pupuseria", 'images': pupuseria, 'text': `<p>A Unity made game simulating making pupusas.</p>`},
  {'image': 'img/dios/nathanialortiz_a3.gif','link': 'https://natanyel.com/nathanial_pix', 'title': 'nathanial pix', 'function': 'createLink(dios[3])', 'piece': 'dios bendiga este hogar', 'text': `<p>Drawing tool created in cs396: generative methods with dr. kate compton, using P5.JS.</p>`},
  {'image': 'img/dios/pupuseriabot.gif','link': 'https://natanyel.com/pupuseriabot', 'title': 'pupuseriabot', 'function': 'createLink(dios[4])', 'piece': 'dios bendiga este hogar', 'text': `<p>Chat bot created in cs396: generative methods with dr. kate compton, Tracery.</p>`},
  {'image': 'img/thumbnail/forking_frijoles.gif', 'function': 'getFrijoles()'},
  {'image': 'img/thumbnail/sheridan_rd.png', 'function': 'getSheridan()'},
  {'image': 'img/thumbnail/eichler.png', 'function': 'getEichler()'},


]





