
function Filmoteka(){
    this.allMovies=[{naslov:'Fast and Furious 8',godIzdavanja:2017
    ,reziser: 'Rob Koen',zanr:'Akcija',rejting:'*****',glumci:'Vin Diesel, Dwayne Johnson, Michelle Rodriguez, Džejson Stejtam, Charlize Theron',
    slika:'https://upload.wikimedia.org/wikipedia/en/2/2d/The_Fate_of_The_Furious_Theatrical_Poster.jpg',link:'https://gledajonline.net/sa-prevodom-film/the-fate-of-the-furious-online-sa-prevodom-hd-filmovihd'},
    {naslov:'John Wick: Chapter 3-Parabellom',godIzdavanja:2019
    ,reziser: 'Chad Stahelski',zanr:'Akcija',rejting:'****',glumci:'Keanu Reeves,Halle Berry,Ian McShane,Mark Dacascos',
    slika:'https://upload.wikimedia.org/wikipedia/en/thumb/9/94/John_Wick_Chapter_3_Parabellum.png/220px-John_Wick_Chapter_3_Parabellum.png',link:'https://www.filmoviplex.com/sa-prevodom/9946-john-wick-chapter-3-parabellum.html'},
    {naslov:'Jocker',godIzdavanja:2019
    ,reziser: 'Todd Phillips',zanr:'Krimi, Drama, Triler',rejting:'****',glumci:'Joaquin Phoenix, Zazie Beetz, Robert De Niro,,Frances Conroy,Douglas Hodge',
    slika:'https://upload.wikimedia.org/wikipedia/sr/4/44/Joker_2019.jpg',link:'https://www.filmovi.me/joker-2019'},
    {naslov:'Warcraft',godIzdavanja:2016
    ,reziser: 'Duncan Zowie Haywood Jones',zanr:'Akcija',rejting:'*****',glumci:'Travis Fimmel,Ben Foster,Paula Patton,Toby Kebbell,Dominic Cooper,Daniel Wu',
    slika:'https://prod.cdn.bbaws.net/TDC_Blockbuster_-_Production/744/1004/UN-0743_po-reg-medium_orig.jpg',link:'https://gledajonline.net/sa-prevodom-film/warcraft-online-sa-prevodom-hd-filmovihd'}];

    this.addMovie=function(film){
        this.allMovies.push(film);

    }
    this.Delete=function(naslov){
        for(i=0;i<this.allMovies.length;i++){
            if(this.allMovies[i].naslov==naslov){
                this.allMovies.splice(i,1);
            }
        }
    }
    
}