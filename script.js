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
  for (i=0; i < 19; i++){
    elem.innerHTML += createIllustrations(illustrations[i]);
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

const createAbout = (data) => {
  const piece_title = document.querySelector("#piece");
  piece_title.innerHTML = "hi, i'm nathanial";

  return`
    <div>
        <div>${data.text}</div>
    </div>`
};

const nameIllustrations = (data) => {

  const piece_title = document.querySelector("#piece");
  piece_title.innerHTML = "";
  piece_title.innerHTML = data;
};

const illustrations = [
  {'image': 'img/illustration/bread.PNG', 'piece': 'bread and butter, personal illustration'},
  {'image': 'img/illustration/daily evicted.PNG', 'piece': 'evicted, daily northwestern'},
  {'image': 'img/illustration/spencer.PNG', 'piece': 'spencer, personal illustration'},
  {'image': 'img/illustration/admit_rate.PNG', 'piece': 'admit rate, daily northwestern'},
  {'image': 'img/illustration/flan.GIF', 'piece': 'flan, personal illustration'},
  {'image': 'img/illustration/mango.PNG', 'piece': 'mango, personal illustration'},
  {'image': 'img/illustration/chicken_wing.PNG', 'piece': 'chicken wing, forking frijoles'},
  {'image': 'img/illustration/music_major.PNG', 'piece': 'music major, daily northwestern'},
  {'image': 'img/illustration/compressed/the_hudson_com.png', 'piece': 'the hudson, personal illustration'},
  {'image': 'img/illustration/compressed/valentines.PNG', 'piece': 'valentines, daily northwestern'},
  {'image': 'img/illustration/lunch_at_janets.GIF', 'piece': "lunch at janet's, personal illustration"},
  {'image': 'img/illustration/dylan.PNG', 'piece': 'dylan, personal illustration'},
  {'image': 'img/illustration/compressed/pomegranate_gif-min.gif', 'piece': 'pomegranate, personal illustration'},
  {'image': 'img/illustration/compressed/wild_geese.PNG', 'piece': 'wild geese, north by northwestern'},
  {'image': 'img/illustration/daily_coalitionnu.PNG', 'piece': 'nu coalition, daily northwestern'},
  {'image': 'img/illustration/compressed/chloe_2@10x.png', 'piece': 'chloe, personal illustration'},
  {'image': 'img/illustration/compressed/new_reality.PNG', 'piece': 'new_reality, personal illustration'},
  {'image': 'img/illustration/compressed/Janet-poster-final.png', 'piece': 'janet, personal illustration'},
  {'image': 'img/illustration/compressed/pupusas-min.gif', 'piece': 'pupusas, personal illustration'},
 
]

const interactives = [
  {'image': 'img/projects/forking_frijoles.GIF','link': 'https://natanyel.com/forking_frijoles/'},
  {'image': 'img/projects/sheridan_rd.PNG','link': 'https://nathanialto.github.io/sheridan_rd/',},
  {'image': 'img/projects/housing_guide.PNG','link': 'https://northbynorthwestern.com/housing-guide-2021/',},
  {'image': 'img/illustration/compressed/wild_geese.PNG','link': 'https://northbynorthwestern.com/animals-of-northwestern/',},
  {'image': 'img/projects/cloud_cat.gif','link': 'https://nathanialto.github.io/cloud_cat/',},
  {'image': 'img/projects/eichler.png','link': 'https://northbynorthwestern.com/animals-of-northwestern/',},
   
]

const about = [
  {'text': `
    <p>My name is Nathanial Ortiz and I am a third year student at Northwestern University majoring in Art Theory and Practice. I love creating, and art has always given me the platform to be able to convey the whimsical and complicated ideas that are shaped in my head.</p>
    <p>As I have explore creatively, my interest in the digital space has only grown. This is reflected in my practice as I have focused on illustration and web design/development. Technology not only makes art more accesible, but also allows for new levels of interactivity and contribution.</p>
    <p>I hope to continue to focus on the visual composition of my work as well as its dynamic, interactive, and animative aspects, as well.</p>`,
  }
]

