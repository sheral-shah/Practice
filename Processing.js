//Java Script
//CREATING CANVAS
size(200,200);
//CREATING SHAPES
point(50,80); //50,80 are to coordinates for the canvas
line(20,30,80,30); //20,20 are the coordinates for the beggining point and 80,30 for the ending point
rect(20,30,40,60); //20,30 are the cooordinates and 40,60 are the width and height of rectangle
//Other ways of creating a rectangle are:
rectMode (CENTER);
rect(20,30,40,60) //In the first code 20,30 was the left point of the rectangle. Here the rectangles will be created around the centre point which will be at 20,30
rectMODE (CORNERS);
rect (40,40,60,60) //Specify coordinates of the upper left and lower right corners
ellipse(20,20,40,40) //20,20 are coordinates 40,40 width and height
ellipseMode (CENTRE);
ellipse(20,20,40,40) //ellipse of size 40,40 will be centred around the coordinate 20,20
ellipseMode (CORNER);
ellipse (20,20,40,40) //20,20 are the upper left cordinates
ellipseMode (CORNERS);
ellipse (20,20,40,40) //20,20 and 40,40 are the upper left and lower right cooordinates


//A DESIGN
size(300,300);
ellipse(150,150,30,30);
ellipse(130,120,40,40);
ellipse(170,120,40,40);
ellipse(185,158,40,40);
ellipse(152,185,40,40);
ellipse(115,158,40,40);
rectMode (CORNER);
rect (0,0,50,45)
rectMode (CORNER);
rect (248,253,50,45)
//

//COLORS & OVERLAPPING SHAPES// 
//Colors are given numbers in processing 0 being black and 255 being white. All in between various shades of grey
size (200,200);
fill(0);
rect(40,50,60,30);
fill(255)
ellipseMode (CENTER);
ellpise (40,50,40,40)
nofill //to un-fill

//A DESIGN//
size(200,200);
background(255,255,0); //Yellow color for the color of the background i.e. canvas
fill(200,80,0); //Brown color
rect(90,150,20,40);
fill(0,255,0); //Green color
triangle(100,50,130,150,70,150); //Each pair of points are one of the three coordinates of a triangle. 100,50 - coordinate 1; 130,150 - coordinate 2; 70, 150-coordinate 3
fill(255,0,0); //Red color
ellipse(100,50,10,10)

//Some rules for color: 
// no color=black, all colors=white, red + green=yellow, red+blue=purple, green+blue=cyan, red+green+blue=white
//In code: all color (white)=fill(255,255,255). Basically follow the simple rule i.e. fill (red,green,blue)=fill(255,255,255)=all colors=white.
//What if we want the brightest red ? - fill(255,0,0) i.e. all of the red and none of the blue and green
//All green? fill(0,255,0); All blue? fill(0,0,255)
//Yellow? fill(255,255,0)
//purple? fill(255,0,255)
//cyan? fill(0,255,255)

strokeWeight(<weight>) //thickness of shape borders
strokeCap(SQUARE)  //For the edges. they can be SQUARE, ROUND OR PROJECT (meaning extended). Default is round
noStroke()

//A DESIGN OF CONCENTRIC RECTANGLES
size(200,200);
background(180,0,255);
fill(255,255,0);
strokeWeight(8)
rectMode (CENTER);
rect(100,100,150,150)
fill(255,120,0);
strokeWeight(6)
rectMode (CENTER);
rect(100,100,120,120)
fill(0,255,220);
strokeWeight(4)
rectMode (CENTER);
rect(100,100,90,90)
fill(0,220,100);
strokeWeight(7)
rectMode (CENTER);
rect(100,100,60,60)
fill(0200,255);
strokeWeight(8)
rectMode (CENTER);
rect(100,100,20,20)
//

//A BAR GRAPH
size(400,400);
background(255,255,255);

fill(0);
strokeWeight(5);
line (50,350,350,350);
line(50,50,50,350)

fill(255,255,0);
strokeWeight(2.5);
rectMode (CORNER);
rect(80,200,40,140)

fill(255,70,0);
strokeWeight(4);
rectMode (CORNER);
rect(140,150,40,190)

fill(0,255,0);
strokeWeight(2.5);
rectMode (CORNER);
rect(205,270,40,70)

fill(255,0,155);
strokeWeight(4);
rectMode (CORNER);
rect(270.5,160,40,180)

fill(0);
text("GRAPH", 150,50)
//

//A SHORTER WAY TO CODE
size(150,200);
background(150,40,40);
int h = 10; //can set width also 
rect(10,10,100,h)
h=h*10 //Changing the value of h 
h=h*30// Changing it again
//ANOTHER EXAMPLE
size(150,200);
background(150,40,40);
int h = 10;
int w = 100;
rect(10,10,w,h)
h=h*2
rect(10,50,w,h)
h=h*2
rect(10,100,w,h)
//

//ANOTHER EXAMPLE
size(150,200);
background(150,40,40);
int h = 10;
int w = 100;
int y = 20;

int distance = 10
rect(10,y,w,h)

h=h*2
y = y + distance+h
rect(10,y,w,h)

h=h*2
y = y + distance+h
rect(10,y,w,h)
//

////////////////TYPES OF DATA/////////////////////////
//INT (INTEGER), FLOAT (DECIMAL), BOOLEAN (TRUE, FALSE), CHAR (A, B, C, +, -, ETC.; use single quote for char)
// CAN COMBINE TYPES TO CREATE COMPOSITES. such as combining characters (char) to make a word. This will be a string variable and should be used with double quotes. Number of integers
//together such as {1,2,3} is called an array. 

//A DESIGN
size(300,300);
background(250,235,2000);
int h=40;
int w=40;
int wgt=3
strokeWeight (wgt);

fill(255,100,0)
ellipse(150,150,h-10,w-10);
fill (255,0,100);
ellipse(130,120,h,w);
ellipse(170,120,h,w);
ellipse(185,158,h,w);
ellipse(152,185,h,w);
ellipse(115,158,h,w);

fill(0);
strokeWeight(wgt);
strokeCap(ROUND)
line (150,206,150,300)


noStroke ();
fill(0,150,0);
int x = 30;
int p=10;
int w = 8;
int y = 4;

triangle(p,height,p+y,height-x,p+w,height);
triangle(p+w,height,p+y*3,height-x*2,p+w*2,height);
triangle(p+w*2,height,p+y*5,height-x,p+w*3,height);
triangle(p+w*3,height,p+y*7,height-x*2,p+w*4,height);
triangle(p+w*4,height,p+y*9,height-x,p+w*5,height);
triangle(p+w*5,height,p+y*11,height-x*2,p+w*6,height);
triangle(p+w*6,height,p+y*13,height-x,p+w*7,height);
triangle(p+w*7,height,p+y*15,height-x*2,p+w*8,height);
triangle(p+w*8,height,p+y*17,height-x,p+w*9,height);
triangle(p+w*9,height,p+y*19,height-x*2,p+w*10,height);
triangle(p+w*10,height,p+y*21,height-x,p+w*11,height);
triangle(p+w*11,height,p+y*23,height-x*2,p+w*12,height);
triangle(p+w*12,height,p+y*25,height-x,p+w*13,height);
triangle(p+w*13,height,p+y*27,height-x*2,p+w*14,height);
triangle(p+w*14,height,p+y*29,height-x,p+w*15,height);
triangle(p+w*15,height,p+y*31,height-x*2,p+w*16,height);
triangle(p+w*16,height,p+y*33,height-x,p+w*17,height);
triangle(p+w*17,height,p+y*35,height-x*2,p+w*18,height);
triangle(p+w*18,height,p+y*37,height-x,p+w*19,height);
triangle(p+w*19,height,p+y*39,height-x*2,p+w*20,height);
triangle(p+w*20,height,p+y*41,height-x,p+w*21,height);
triangle(p+w*21,height,p+y*43,height-x*2,p+w*22,height);
triangle(p+w*22,height,p+y*45,height-x,p+w*23,height);
triangle(p+w*23,height,p+y*47,height-x*2,p+w*24,height);
triangle(p+w*24,height,p+y*49,height-x,p+w*25,height);
triangle(p+w*25,height,p+y*51,height-x*2,p+w*26,height);
triangle(p+w*26,height,p+y*53,height-x,p+w*27,height);
triangle(p+w*27,height,p+y*55,height-x*2,p+w*28,height);
triangle(p+w*28,height,p+y*57,height-x,p+w*29,height);
triangle(p+w*29,height,p+y*59,height-x*2,p+w*30,height);
triangle(p+w*30,height,p+y*61,height-x,p+w*31,height);
triangle(p+w*31,height,p+y*63,height-x*2,p+w*32,height);
triangle(p+w*32,height,p+y*65,height-x,p+w*33,height);
triangle(p+w*33,height,p+y*67,height-x*2,p+w*34,height);
triangle(p+w*34,height,p+y*69,height-x,p+w*35,height);
triangle(p+w*35,height,p+y*71,height-x*2,p+w*36,height);

fill(250,235,10);
arc(0,0,120,120,0,HALF_PI);
//

//GRAPH EXTENDED
size(200,150);
background(150,40,40);
int h = 10;
int w = 10;
int y = 20;
int distance = 10;
int c=80;
fill(0,c,0);


rect(10,y,w,h);

c=c+50;
w=w*2;
fill(0,c,0);
y = y + distance+h;
rect(10,y,w,h);

c=c+50
fill(0,c,0);
w=w*2
y = y + distance+h
rect(10,y,w,h)

c=c+50
fill(0,c,0);

w=w*2
y = y + distance+h
rect(10,y,w,h)

c=c+50
fill(0,c,0);

w=w*2
y = y + distance+h
rect(10,y,w,h)
//

//for loop: 
//for(<initialisation>;<test>;<update>) {<instructions>;}
int sum=0;
for (int nextNumber=1; nextNumber<6;nextNumber++) {
  sum=sum+nextNumber;
}

//A design
size(200,200);
background(255);
fill(255,0,0);

rect (20,20,50,50);


for (int i=80; i<130 ; i=i+10) {
  line(i,20,i,180);
}

rect (130,130,50,50);
//

//Another design
size(200,200);

for (int i=0; i<200 ; i=i+40) {
  fill(i);
  rect(i,0,40,200);
}

size(200,200);

int x1 = 0;
w=40; h=200;
int c=305;
for (int i=0; i<200; i=i+40) {
    c=c-50;
    fill(255,c,85)
    rect(i,x1,w,h);
}
//

//
size (200,200);

int h=60;
int c=255;
for (int i=0; i<200; i=i+40) {
    h=h+20;
    int w=200-h;
    strokeWeight(3);
    c=c-40;
    fill (c,0,c);
    rect (i,w,40,h)
}
//

// A NESTED LOOP
size(100, 100);


for (int y=10; y<100; y=y+10 ) {
for (int x=10; x<100; x=x+10) {
    point (x,y);
}
}
//

//  A DESIGN FOR NESTED LOOP
size(200,200)
strokeWeight(5);
int c=255;
for (int y=20; y<110; y=y+20){
  for (int x=20; x<110; x=x+20){ 
  fill(c);
   ellipse(x,y,20,20);
   c=c-10;
  }
}
//

//THE IF COMMAND
if (test) {
  STATEMENTS
}
//

//A DESIGN
size(300,300);
background(255,255,255);
int c=255;
int s=1;
for (int i=10; i<300; i=i+30) {
   c=c-40;
   if (c<0){
        c=255
    }
    
    s=s+1;
    strokeWeight (s);
    stroke (c,0,c);
    line (i,10,i,280);
}

int c=255;
int s=1;
for (int i=10; i<300; i=i+30) {
    c=c-40;
    if (c<0){
        c=255
    }
    s=s+1;
    strokeWeight (s);
    stroke (c,0,c);
    line (10,i,280,i);
}
//

// THE ELSE STATEMENT
if (test) {
  Statements executed if condition is true
}
else {
  Stements executed if condition is false
}
// A  design
size (300,300);

for (int i=100; i<300; i=i+50){
    if (i<150) {
        fill (255,0,255);
         ellipseMode (CENTER);
          ellipse(150,i,50,50);
    }
    
   else {
       fill (255,0,100);
       ellipseMode (CENTER);
      ellipse(150,i,50,50);
   }
 
   
}
//

//Design
size(150, 150);
int normal = 11;
if(normal < 10){
    fill(255);
}
else {
    fill(255, 0, 255);
}
ellipse(80, 80, 30, 30);
ellipse(60, 60, 30, 30);
fill(0, 0, 255);
ellipse(80, 60, 30, 30);
ellipse(60, 80, 30, 30);
fill(255, 255, 0);
ellipse(70, 70, 20, 20);
//

// A NEW CONCEPT MODULO
// %--8%2=0--0 being the remainder; 9%2=1--1 being the remainder
size (200,200);
background(255);
stroke(0,255,0);
strokeWeight(3);

for (int i=1; i<11, i+=1) {
  if (i%3==0);
  stroke (255,0,0);
}
else if (i%3==1) {
  stroke (0,255,0);
}
else  {
  stroke (0,0,255);
}
    rect (i*10, i*10,200-(i*20),200-(i*20));
}

//
size (200,200);
background(255);
int temprature=25;


 if (temprature<15) {
  fill (0,0,255);
}
else if (temprature <30) {
  fill (240,240,50);
}
else {
  fill (255,0,0);
}
ellipse (100,100,50,50);
}

//
