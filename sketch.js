var s1,s2,s3,s4,s5,s6,s7,s8;
var songs1 = [];
var songs2 = [];
var bg1,bg2;
var form
//var form2;
var radio;
var playb;
var title,subtitle,artist;
var a1 = ["airplane","butter","dynamite","savege love"];
var a2 = [];
var al1;

function preload(){
    // loading sound
    s1 = loadSound("songs/airplane.mp3");
    s2 = loadSound("songs/boyfriend.mp3");
    s3 = loadSound("songs/butter.mp3");
    s4 = loadSound("songs/dynamite.mp3");
    s5 = loadSound("songs/let me love u.mp3");
    s6 = loadSound("songs/love your self.mp3");
    s7 = loadSound("songs/savege love.mp3");
    s8 = loadSound("songs/sorry.mp3");
    //loading backgroung img
    bg1 = loadImage("song img/bg 9.jpg");
    bg2 = loadImage("song img/bg 5.png");
}

function setup(){

    createCanvas(windowWidth,windowHeight)
   //form=new Form();
   //form.start();
   title = createElement('h2');
   subtitle = createElement('h1');
   artist = createElement('h3');
   radio = createRadio();
    
   playb = createImg('song img/p2.png');
   playb.position(windowWidth/4-20,windowHeight-300);
   playb.size(80,40);
   playb.mouseClicked(showSongs);

   start();
   
   
}

function draw(){

    console.log(radio.value());
  
}

function start() {

    background(bg1);
  
  title.html(" welcome to " );
  title.position(windowWidth/2,windowHeight/2-300);
  
  subtitle.html(" SUTIFY" );
  subtitle.position(windowWidth/2,windowHeight/2-250);
  
  artist.html(" choose your favourite Artist" );
  artist.position(windowWidth/4-60,windowHeight-500);
  
      radio.option('BTS',1);
      radio.option('Justin Biber',2);
      radio.style('width', '70px');
      //radio.style('height','250px');
      //radio.size(400,400);
      fill("pink");
      radio.position(windowWidth/4-50,windowHeight-400);
      textAlign(CENTER);
       
    }

  
  function  hide(){
  
    title.hide();
    subtitle.hide();
    artist.hide();
    radio.hide();
    
  }

function showSongs(){
    hide();
    playb.hide();
    background(bg2);
  
    var x = 150;
    var y = 300;
  
  if(radio.value()==1){
      
    // songs2=[s1,s3,s4,s7];
   for(var k = 0 ; k<a1.length; k++){

  al1=createElement('h3');
  al1.html(a1[k]);
  al1.position(x,y+50);
 // text (a1[k],x,y+15);
  
}}
  
  /*if(radio.value()==2){
  
     console.log(2);
       songs1=[s2,s5,s6,s8];
     for(var i = 0 ; i<songs1.length; i++){
   text (songs1[i],x,y+15);
   
     }}*/
  
  }
  