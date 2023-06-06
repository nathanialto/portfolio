function myFunction(elem) {
    var x = document.getElementById(elem);
    if (x.style.display == "none") {
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
  // document.body.scrollTop = 0; // For Safari
  // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  const elem = document.querySelector('.zine');
  
  elem.innerHTML = "";
  for (i=0; i < zine.length; i++){
    elem.innerHTML += createZine(zine[i]);
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

const getSenior = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  const elem = document.querySelector('.posters');
  // const title = document.querySelector('#name');
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
  title.innerHTML = 'art';
  const desc = document.querySelector('#desc');
  desc.innerHTML = "";

  const subheader = document.querySelector('#piece');
  subheader.innerHTML = "";
  subheader.innerHTML += `
  <button onclick="getFeatured();" class="sub-header selected">Digital</button>
  <a href="senior_show.html" class="sub-header">Senior Show</a>`; 


  elem.innerHTML = "";
  for (i=0; i < featured.length; i++){
    elem.innerHTML += createFeatured(featured[i]);
  }
}

const getCollage = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera


  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'art';
  const desc = document.querySelector('#desc');
  desc.innerHTML = "";

  const subheader = document.querySelector('#piece');
  subheader.innerHTML = "";
  subheader.innerHTML += `
  <button onclick="getFeatured();" class="sub-header">Digital</button>
  <button onclick="getSeniorShow();" class="sub-header">Senior Show</button>`; 



  elem.innerHTML = "";
  for (i=0; i < featured.length; i++){
    elem.innerHTML += createCollage(collage[i]);
  }
}

const getPrintmaking = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera


  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'art';
  const desc = document.querySelector('#desc');
  desc.innerHTML = "";

  const subheader = document.querySelector('#piece');
  subheader.innerHTML = "";
  subheader.innerHTML += `
  <button onclick="getFeatured();" class="sub-header">Digital</button>
  <button onclick="getSeniorShow();" class="sub-header">Senior Show</button>
  <button onclick="getCollage();" class="sub-header">Mixed Media</button>
  <button onclick="getPrintmaking();" class="sub-header selected">Printmaking</button>`; 



  elem.innerHTML = "";
  for (i=0; i < featured.length; i++){
    elem.innerHTML += createCollage(printmaking[i]);
  }
}

const getCode = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  const elem = document.querySelector('#cards');

  const subheader = document.querySelector('#piece');
  subheader.innerHTML = "";
  subheader.innerHTML += `
  <button onclick="select('Digital');" class="sub-header selected">HTML/CSS/JS</button>
  <button onclick="getP5();" class="sub-header">P5.JS</button>
  <button onclick="getC();" class="sub-header">C#</button> `; 


  elem.innerHTML = "";
  for (i=0; i < js.length; i++){
    elem.innerHTML += createDesign(js[i]);
  }
}

const getP5 = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera


  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'code';
  const desc = document.querySelector('#desc');
  desc.innerHTML = "";

  const subheader = document.querySelector('#piece');
  subheader.innerHTML = "";
  subheader.innerHTML += `
  <button onclick="getCode();" class="sub-header">HTML/CSS/JS</button>
  <button onclick="getP5();" class=" selected sub-header">P5.JS</button>
  <button onclick="getC();" class="sub-header">C#</button>`; 


  elem.innerHTML = "";
  for (i=0; i < p5.length; i++){
    elem.innerHTML += createDesign(p5[i]);
  }
}


const getC = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera


  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'code';
  const desc = document.querySelector('#desc');
  desc.innerHTML = "";

  const subheader = document.querySelector('#piece');
  subheader.innerHTML = "";
  subheader.innerHTML += `
  <button onclick="getCode();" class="sub-header">HTML/CSS/JS</button>
  <button onclick="getP5();" class="sub-header">P5.JS</button>
  <button onclick="getC();" class="selected sub-header">C#</button>`; 


  elem.innerHTML = "";
  for (i=0; i < C.length; i++){
    elem.innerHTML += createDesign(C[i]);
  }
}

const getPython = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera


  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'code';
  const desc = document.querySelector('#desc');
  desc.innerHTML = "";

  const subheader = document.querySelector('#piece');
  subheader.innerHTML = "";
  subheader.innerHTML += `
  <button onclick="getCode();" class="sub-header">HTML/CSS/JS</button>
  <button onclick="getP5();" class="sub-header">P5.JS</button>
  <button onclick="getC();" class="sub-header">C#</button> 
  <button onclick="getPython();" class="sub-header selected">Python</button>`; 


  elem.innerHTML = "";
  for (i=0; i < python.length; i++){
    elem.innerHTML += createDesign(python[i]);
  }
}

const getDesign = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  const elem = document.querySelector('#cards');

  const subheader = document.querySelector('#piece');
  subheader.innerHTML = "";
  subheader.innerHTML += `
  <button onclick="getDesign();" class="sub-header selected">Web</button>
  <button onclick="getGames();" id="Game" class="sub-header">Game</button>`; 

  elem.innerHTML = "";
  for (i=0; i < featured.length; i++){
    elem.innerHTML += createDesign(design[i]);
  }
}


const getGames = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'design';

  const subheader = document.querySelector('#piece');
  subheader.innerHTML = "";
  subheader.innerHTML += `
  <button onclick="getDesign();" class="sub-header">Web</button>
  <button onclick="getGames();" class="sub-header selected">Game</button>`; 

  elem.innerHTML = "";
  for (i=0; i < games.length; i++){
    elem.innerHTML += createInteractives(games[i]);
  }
}

const getPrint = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'design';

  const subheader = document.querySelector('#piece');
  subheader.innerHTML = "";
  subheader.innerHTML += `
  <button onclick="getDesign();" class="sub-header">Web</button>
  <button onclick="getGames();" class="sub-header">Game</button>
  <button onclick="getPrint();" class="sub-header selected">Print</button>`; 

  elem.innerHTML = "";
  for (i=0; i < print.length; i++){
    elem.innerHTML += createPrint(print[i]);
  }
}


const getSeniorShow = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = 'Undergraduate Senior Thesis Show';

  const subheader = document.querySelector('#piece');
  subheader.innerHTML = "";
  subheader.innerHTML += `
  <button onclick="getFeatured();" class="sub-header">Digital</button>
  <button onclick="getSeniorShow();" class="sub-header selected">Senior Show</button>`; 

  elem.innerHTML = "";
  elem.innerHTML += `
                    <br>
                    <section style="padding: 0 20%;" class="card featured-card">
                    <img class="img-div" src="img/senior/thumbnail.jpg">
                    </section>

                    <div style="text-align: left;">
                    <h3>about</h3>
                    <p>
                       As an Art Theory and Practice major at Northwestern, I completed 
                       a thesis project in Spring 2022. I created a project based on my 
                       personal, cultural, and familial experiences.                     
                    </p>
                    <p>
                      My childhood has been uniquely shaped by the care I received and the
                       home that was created by my grandmother. My relationship with my grandmother
                        was unique as it was marked by few words and many acts. She and I represent
                         two points at very different moments within the diasporic experience, yet
                          we have grown a symbiotic, transgenerational love and care for each other
                           over the years. My project reflects, not only this unique dynamic of care
                            but also how this understanding of love influences my life as a young
                             adult and the different types of relationships I encounter as I navigate new spaces.
                    </p>
                    <br>
                    <h2>"Sometimes you want to say something, and if you were a songwriter 
                      you could. But, I'm not a songwriter, so I made this."</h2>
                    <h3 style="background-color: #D4822A; font-size: 19px;">Digital Prints</h3>
                    <div id="window">
                      <div class="content">
                        <section id="cards" class="posters">

                          </section>
                      </div>
                  </div>
                  <br>
                    <p>
                      "Sometimes you want to say something, and if you were a songwriter, you could.
                       But, I am not a songwriter, so I made this." is a collection of posters, that
                        function almost as a feelings chart. The posters focus on an object or subject
                         and are accompanied by a line of text. My intention was to center the viewer
                          inside of my own mind and inner thoughts, but also emphasize the visual cues
                           that signal nostalgia, comfort, care, and the mundane. 

                    </p>
                    <br>
                    <h2>"I brought 12 frozen tamales on the plane with me from Oakland to Chicago."</h2>
                    <h3 style="background-color: #D4822A; font-size: 21px;">Installation</h3>
                    <p>"I brought 12 frozen tamales on the plane with me from Oakland to Chicago." includes 
                      objects that I have collected and brought from my own home. The objects exist to recreate
                       the site of a table in the home, as it exists as a place to eat, work, dream, and live. 
                       I wanted to use the gallery space to allow viewers to experience a physical representation
                        of home, through my understanding.</p>
                    
                      <section id="cards">
                        <section style="padding: auto 10%;" class="card featured-card">
                          <img class="img-div" src="img/senior/table.png"> 
                      </section>
                    </section>

                      <p>I also created a zine and stickers as objects that the viewer could interact with
                        and take with them. I wanted this part of my project to interact with the space and 
                        viewer physically and share with the viewer beyond the white walls of the gallery. 
                      </p>

                    <div id="window">
                      <div class="content">
                        <section id="cards" class="zine">
                          </section>
                      <div id="desc"><br><p></p></div>
                      </div>
                      </div>

                      <section id="cards">
                        <section class="card featured-card">
                          <img class="img-div" src="img/senior/orange.PNG"> 
                        </section>
                        <section class="card featured-card">
                          <img class="img-div" src="img/senior/apple.PNG"> 
                        </section>
                        <section class="card featured-card">
                          <img class="img-div" src="img/senior/melon.PNG">
                        </section>
                      </section>
                      <br>
                    <h2>"One day I was riding the train and I felt myself getting sicker 
                      and sicker and I burst out at a random station and threw up on the tracks."</h2>
                    <h3 style="background-color: #D4822A; font-size: 21px;">Video Projection</h3>
                    <section style="padding: 0 10%;" class="card featured-card">
                      <img class="img-div" src="img/senior/senior_10.GIF"> 
                    </section>
                    <br>
                    <p>"One day I was riding the train and I felt myself getting sicker and sicker and I
                       burst out at a random station and threw up on the tracks." is a projection of a 
                       drawing of the interior of a BART train. The train is only occupied by two figures:
                        my grandmother and me. The projection of my grandmother and me on the train represents
                         memory but, also the movement through time and space.
                    </p>
                  </div>
                `;
      getSenior();
      getZine();

}

const getPupuseria = (term) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = "Mama Chita's Pupuseria";

  const subheader = document.querySelector('#piece');
  subheader.innerHTML = "";
  subheader.innerHTML += `
  <button onclick="getDesign();" class="sub-header">Web</button>
  <button onclick="getGames();" class="sub-header selected">Game</button>
  <button onclick="getPrint();" class="sub-header">Print</button>`; 
  elem.innerHTML = "";
  elem.innerHTML += `
                    <section style="padding: 0 20%;" class="card featured-card"><img class="img-div" src="img/pupuseria/thumbnail.PNG"> </section>

                    <div style="text-align: left;">
                    <h3>about</h3>
                    <p>
                       For my "Coding for Games" final, I created a 3D game to simulate making pupusas. I wanted to create
                       Mama Chita's Pupuseria to share my Salvadoran heritage. I aimed to create a virtual representation of the
                       real-life experience of cultural reproduction and the power and fun that comes with it. The game
                       recreated my own very hands-on experience of learning how to pupusas with my grandma. 
                    </p>

                    <h3>gameplay</h3>
                    <p>
                      The gamplay aimed at carrying the users from step to step of pupusa-making. The first step
                      has the user cutting vegetables and collecting them in a bowl to make curtido, a most-have
                      topping for pupusas. In the second step, the user form the balls of masa into the pupusas.
                      Lastly, the users are called to cook the pupusas on the griddle and flip them, as they see them
                      cook to perfection. 
                   </p>

                      <section id="cards">
                        <section class="card featured-card">
                          <img class="img-div" src="img/pupuseria/pupuseria0.gif"> 
                        </section>
                        <section class="card featured-card">
                          <img class="img-div" src="img/pupuseria/pupuseria.gif"> 
                        </section>
                      </section>

                      <section id="cards">
                        <section class="card featured-card">
                          <img class="img-div" src="img/pupuseria/pupuseria1.gif"> 
                        </section>
                        <section class="card featured-card">
                          <img class="img-div" src="img/pupuseria/pupuseria2.gif"> 
                        </section>
                      </section>

                      <h3>code</h3>
                      <p>
                        I programmed multiple functions in the game in C#, including the counter that counts how many vegetables
                        have landed in the bowl to make the curtido, as well as a timer that displays and counts how long the user
                        has to cook their pupusas on each side. 
                     </p>
                      <section id="cards">
                        <section class="card featured-card">
                          <img class="img-div" src="img/pupuseria/curtido_tracker_code.PNG"> 
                        </section>
                        <section class="card featured-card">
                          <img class="img-div" src="img/pupuseria/pupusa_cooking_code.PNG"> 
                        </section>
                      </section>

                      

                      <h3>assets</h3>
                      <p>
                        I utilized my abilities in both the 3D and 2D space to be able to create the 
                        most visually representative and fun environment I could. I designed multiple assets for the game. These inlcuded the 3D elements included the vegetables, the kitchen itself, 
                        the pupusas with their cute design on each side that appear up when they are cooked. I also digitally drew the skins that go on
                        multiple assets in the game in Procreate.
                     </p>

                      <section id="cards">
                        <section class="card featured-card">
                          <img class="img-div" src="img/pupuseria/skin0.PNG"> 
                        </section>
                        <section class="card featured-card">
                          <img class="img-div" src="img/pupuseria/skin3.PNG"> 
                        </section>
                      </section>

                      <section id="cards">
                        <section class="card featured-card">
                          <img class="img-div" src="img/pupuseria/skin2.PNG"> 
                        </section>
                        <section class="card featured-card">
                          <img class="img-div" src="img/pupuseria/skin1.PNG"> 
                        </section>
                      </section>`;

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
  return`
  <section class="card" style="flex-basis: 49%;">
    <div>
        <img class="img-div interactives" src="${data.image}";">
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

  return`<section class="card" style="flex-basis: 49%;">
    <div>
      <a href="${data.link}">
        <img class="img-div interactives" src="${data.image}";">
      </a>
    </div>
  </section>`
};

const createPrint = (data) => {

  return`<section class="card" style="flex-basis: 49%;">
    <div>
      <button onclick="${data.function}">
        <img class="img-div interactives" src="${data.image}";">
      </button>
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
  // document.querySelector("#back").style.display = 'inline-block'; 

  // const piece_title = document.querySelector("#piece");
  // piece_title.innerHTML = `"Sometimes you want to say something, and if you were a songwriter you could. 
  // But, I'm not a songwriter, so I made this."`;
  
  // const desc = document.querySelector('#desc');
  // desc.innerHTML = "";
  // desc.innerHTML = `<br><div><p>9 printed and digital posters displayed for 
  // the Northwestern Art Theory and Practice Senior Thesis Show<p></div>`

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

  // document.querySelector("#back").style.display = 'inline-block'; 

  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  const images = data.images;
  elem.innerHTML = "";

  title.innerHTML = data.piece;
  console.log(images.length);
  for (i=0; i < images.length; i++){
    elem.innerHTML += addImage(images[i]);
  }
};

const createDesignPage = (data) => {

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  document.querySelector("#back").style.display = 'inline-block'; 


  const piece_title = document.querySelector("#piece");
  piece_title.innerHTML = data.title;

  const elem = document.querySelector('#cards');
  const title = document.querySelector('#name');
  title.innerHTML = data.piece;
  elem.innerHTML = "";
  elem.innerHTML = data.content;

  const desc = document.querySelector('#desc');
  desc.innerHTML = "";
  
  desc.innerHTML = `<br><div>${data.text}</div>`
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

  return`<section class="card featured-card" style="grid-area: ${data.grid};">
    <div onclick="${data.function}">
      <a ${data.link}>
        <img class="img-div featured" src="${data.image}";">
      </a>
    </div>
  </section>`
};

const createDesign = (data) => {
  // const piece_title = document.querySelector("#piece");
  // piece_title.innerHTML = "click to explore";

  return`<section class="card featured-card">
      <a href="${data.link}">
        <img class="img-div featured" src="${data.image}";">
      </a>
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

const createCollage = (data) => {
  // const piece_title = document.querySelector("#piece");
  // piece_title.innerHTML = "click to explore";

  return`<section class="card featured-card">
      <div>
        <img class="img-div full-page" src="${data.image}";">
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

const interactives = [
  {'image': 'img/projects/safe2pee.png','link': 'https://northbynorthwestern.com/safe2pee/'},
  {'image': 'img/projects/forking_frijoles.GIF','link': 'https://natanyel.com/forking_frijoles/'},
  {'image': 'img/projects/sheridan_rd.PNG','link': 'https://nathanialto.github.io/sheridan_rd/',},
  {'image': 'img/projects/housing_guide.PNG','link': 'https://northbynorthwestern.com/housing-guide-2021/',},
  // {'image': 'img/illustration/compressed/wild_geese.PNG','link': 'https://northbynorthwestern.com/animals-of-northwestern/',},
  // {'image': 'img/projects/cloud_cat.gif','link': 'https://nathanialto.github.io/cloud_cat/',},
  {'image': 'img/projects/eichler.png','link': 'https://nathanialto.github.io/the_eichler_homepage/',},
   
]


const zine = [
  // {'image': 'img/pupusas/pupusa_0.png',},
  {'image': 'img/print_design/zine0.jpg',},
  {'image': 'img/print_design/zine3.jpg',},
  {'image': 'img/print_design/zine2.jpg',},
  {'image': 'img/print_design/zine1.jpg',},

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
  {'image': 'img/print_design/flan.jpg',},
  {'image': 'img/print_design/frijoles.jpg',},
  {'image': 'img/print_design/space_eggs.jpg',},

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

const printmaking = [
  {'image': 'img/print/cyberspaceegg.jpg',},
  {'image': 'img/print/cotidiana.jpg',},
  {'image': 'img/print/internet_egg.jpg',},
  {'image': 'img/print/pupusa_print.jpg',},
]

const games = [
  {'image': 'img/thumbnail/pupuseria.png', 'link': 'pupuseria.html'},
  {'image': 'img/thumbnail/forking_frijoles.gif', 'link': 'frijoles.html'},
  {'image': 'img/thumbnail/sheridan_rd.png', 'link': 'sheridan_rd.html'},
  {'image': 'img/thumbnail/eichler.png', 'link': 'eichler.html'},
]

const cs150 =[
  {'image': 'img/dios/nathanialortiz_a3.gif','link': 'https://natanyel.com/nathanial_pix', 'title': 'nathanial pix', 'function': 'createLink(dios[3])', 'piece': 'dios bendiga este hogar', 'text': `<p>Drawing tool created in cs396: generative methods with dr. kate compton, using P5.JS.</p>`},
  {'image': 'img/dios/pupuseriabot.gif','link': 'https://natanyel.com/pupuseriabot', 'title': 'pupuseriabot', 'function': 'createLink(dios[4])', 'piece': 'dios bendiga este hogar', 'text': `<p>Chat bot created in cs396: generative methods with dr. kate compton, Tracery.</p>`},
]

const animation = [
  {'image' : 'img/senior/senior_10.GIF', 'title': `"One day I was riding the train and I felt myself getting sicker and sicker and I burst out at a random station and threw up on the tracks."`, 'piece': 'Undergraduate Thesis Show',
  'images': 'img/senior/senior_10.GIF', 'text': `<p>Looped video animation displayed for 
  the Northwestern Art Theory and Practice Senior Thesis Show </p>`},
]

const about = [
  {'text': `
    <p></p>
    <p></p>
    <p>EDUCATION <br>
    B.A. Art Theory and Practice | Northwestern University <br><br>
    EXPERIENCE <br>
    *Interactives Section Co-Editor | North By Northwestern (student publication) | January 2021 June 2022 <br>
    *Administrative Aide | Northwestern Religious Studies Dept. | October 2019-June 2022 <br>
    *Illustration Contributor | Daily Northwestern (student publication) | January 2021-June 2021 <br>
    *Cashier | Sea Ranch Sushi Shop | July 2021-October 2021 <br><br>
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

const collage = [
  {'image': 'img/dios/NathanialOrtiz_Tamales.jpg',  
  'function': 'createPage(collage[0])',
  'piece': 'A Collage for Banana Leaf Tamales 1/2', 
  'title': '',
   'text': `<p>acrylic paint, paper, printed images and text on cardboard</p>`},
  {'image': 'img/dios/tamales2.jpg',
  'piece': 'A Collage for Banana Leaf Tamales 2/2', 
   'function': 'createPage(collage[1])',
   'title': '', 'text': `<p>acrylic paint, paper, printed images and text on paper</p>`},
  {'image': 'img/dios/la_virgen_with_pupusas.jpg',  
  'function': 'createPage(collage[2])',
  'piece': 'La Virgen con su Pupusitas',
   'title': '',
   'text': `<p>inkjet printed image, acrylic paint, and paper on cardboard.</p>`},
]

const featured = [
  {'image': 'img/peru/cover.png', 'function': 'createPage(featured[0])', 'piece': 'sana sana', 'title': '', 'grid': 'a',
  'text': `<br><div><p><p></div>`},
  {'image': 'img/peru/rana_rana.png', 'function': 'createPage(featured[1])', 'piece': 'sana sana', 'title': '', 'grid': 'b', 'text': ''},
  {'image': 'img/peru/5.png', 'function': 'createPage(featured[2])', 'piece': 'sana sana', 'title': '', 'grid': 'c', 'text': ''},
  {'image': 'img/illustration/paloma_couple.png', 
  'function': 'createPage(featured[3])', 
  'piece': 'paloma paloma',  
  'title': ``,
  'grid': 'd',
  'text': '<br><div><p></p></div>'},
  {'image': 'img/illustration/your_mom.png', 
  'function': 'createPage(featured[4])', 
  'piece': 'paloma paloma', 
  'title': '', 
  'grid': 'e',
  'text': ``},
  {'image': 'img/illustration/toad_and_bird.png', 'function': 'createPage(featured[5])', 'piece': 'Toad and Paloma', 'title': '',  'grid': 'b', 'text': ''},
  {'image': 'img/illustration/casi.png',
  'function': 'createPage(featured[6])',
  'piece': 'Almost my size',
  'grid': 'f',},
  {'image': 'img/illustration/rana_rana.png', 'piece': 'Eres mucho mas bonito q yo', 'function': 'createPage(featured[7])', 'grid': 'g',},
  {'image': 'img/illustration/paloma_portrait.png', 'function': 'createPage(featured[8])', 'piece': 'paloma paloma', 'title': '', 'grid': 'h', 'text': ''},
  {'image': 'img/senior/senior_5.png', 'function': 'createPage(featured[9])', 'piece': 'Senior Thesis Project', 'title': "Sometimes you want to say something, and if you were a songwriter you could. But, I'm not a songwriter, so I made this.", 'grid': 'i', 'text': '',},
  {'image': 'img/peru/back.png', 'function': 'createPage(featured[10])', 'piece': 'Portales', 'title': '', 'grid': 'j', 'text': '',},
 ]

 const design = [
  {'image': 'img/housingguide_thumbnail.png', 
  'function': '', 
  'link': 'housing_guide.html',
  'name': '<h2>North By Northwestern</h2><h2>Housing Guide 2022</h2>', 
  'category': '<h1>UX</h1><h1>Web Dev</h1>', 
  'content': ``},
  {'image': 'img/safe2pee_thumbnail.png', 
  'function': '',
  'link': 'safe2pee.html', 
  'piece': 'sana sana colita de rana 3/4', 
  'title': '', 'grid': 'b', 'text': ''},
 ]

const daily = [
  {'image': 'img/illustration/compressed/asg.JPG', 'piece': 'asg, daily northwestern'},
  {'image': 'img/illustration/compressed/daily evicted.png', 'piece': 'evicted, daily northwestern'},
  {'image': 'img/illustration/compressed/admit_rate.PNG', 'piece': 'admit rate, daily northwestern'},
  {'image': 'img/illustration/compressed/music_major.PNG', 'piece': 'music major, daily northwestern'},
  {'image': 'img/illustration/compressed/valentines.PNG', 'piece': 'valentines, daily northwestern'},
  {'image': 'img/illustration/compressed/wild_geese.PNG', 'piece': 'wild geese, north by northwestern'},

]

const js = [
  {'image': 'img/thumbnail/forking_frijoles.gif', 'link': 'frijoles.html'},
  {'image': 'img/thumbnail/sheridan_rd.png', 'link': 'sheridan_rd.html'},
  {'image': 'img/thumbnail/eichler.png', 'link': 'eichler.html'},
  {'image': 'img/housingguide_thumbnail.png','link': 'housing_guide.html',},
  {'image': 'img/safe2pee_thumbnail.png','link': 'safe2pee.html',},

]

const p5 = [
  {'image': 'img/thumbnail/sheridan_rd.png', 'link': 'sheridan_rd.html'},
  {'image': 'img/code/nathanialortiz_a3.gif', 'link': ''},
]

const C = [
  {'image': 'img/pupuseria/thumbnail.png', 'link': 'pupuseria.html'},
]

const python = [
  {'image': 'img/code/cockroaches.gif', 'link': ''},
  {'image': 'img/code/pupuseriabot.gif', 'link': ''},

]

const print = [
  {'image': 'img/print_design/zine0.jpg', 'function': 'getZine()'},
  {'image': 'img/print_design/flan.jpg', 'function': ''},
  {'image': 'img/print_design/pupusa_poster.png', 'function': ''},
  {'image': 'img/print_design/mantel_poster.png', 'function': ''},

]

