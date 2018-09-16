conn = new Mongo();
db = conn.getDB("productServiceDB");
var p = {
      "name": "I am Groot",
      "description": "This stuffed Groot makes an excellent toy for both youngsters due to it's soft nature and adorable design, to fans and collectors of 'The Guardians of the Galaxy' franchise.",
      "keywords": [
        "stuffed", "plush", "groot", "guardians of the galaxy"
      ],
      "image": "1-groot.jpg",
      "age": [
        "0", "+"
      ],
      "price": 19.99
    };
db.products.save(p);

var p = {
      "name": "Buzz Lightyear Action Doll",
      "description": "Buzz Lightyear is a favorite of youngsters. He has a ray-gun, wings that can be retracted or extended on the push of a button, and a grin that could make any alien get a chill up their spine - should they have one.",
      "keywords": [
        "action figure", "toy story", "posable", "requires batteries"
      ],
      "image": "2-buzz.jpg",
      "age": [
        "3", "10"
      ],
      "price": 38.50
    };
db.products.save(p);

var p = {
      "name": "Minion Dave",
      "description": "Dave is a two-eyed and medium-sized minion with nice combed hair. This plush version of him is extremely huggable and makes a great best friend for your young child. He is stitched well and has no small parts to choke on.",
      "keywords": [
        "stuffed", "plush", "minions", "Despicable Me"
      ],
      "image": "3-minion-dave.jpg",
      "age": [
        "0", "10"
      ],
      "price": 12.99
    };
db.products.save(p);

var p = {
      "name": "Minion Kevin",
      "description": "Kevin is a tall, two-eyed minion with sprout cut hair and is usually seen wearing his golf apparel. This plush version of him is extremely huggable and makes a great best friend for your young child. He is stitched well and has no small parts to choke on.",
      "keywords": [
        "stuffed", "plush", "minions", "Despicable Me"
      ],
      "image": "4-minion-kevin.jpg",
      "age": [
        "0", "10"
      ],
      "price": 12.99
    };
db.products.save(p);

var p = {
      "name": "Minion Bob",
      "description": "Bob is a short and bald minion with multi-colored eyes (green and brown). He often carries around a teddy bear that he owns called Tim, which is brown with yellow buttoned eyes. This plush version of him is extremely huggable and makes a great best friend for your young child. He is stitched well and has no small parts to choke on.",
      "keywords": [
        "stuffed", "plush", "minions", "Despicable Me"
      ],
      "image": "5-minion-bob.jpg",
      "age": [
        "0", "10"
      ],
      "price": 12.99
    };
db.products.save(p);

var p = {
      "name": "Pikachu Pokémon",
      "description": "Pikachu is a short, chubby rodent Pokémon. It is covered in yellow fur with two horizontal brown stripes on its back. It has a small mouth, long, pointed ears with black tips, brown eyes, and the two red circles on its cheeks contain pouches for electricity storage.",
      "keywords": [
        "stuffed", "plush", "pokemon"
      ],
      "image": "16-pikachu.jpg",
      "age": [
        "0", "10"
      ],
      "price": 13.99
    };
db.products.save(p);

var p = {
      "name": "Super Mario",
      "description": "Mario is a fictional character in the Mario video game franchise, owned by Nintendo and created by Japanese video game designer Shigeru Miyamoto",
      "keywords": [
        "stuffed", "plush"
      ],
      "image": "17-mario-3.jpg",
      "age": [
        "0", "10"
      ],
      "price": 15.99
    };
db.products.save(p);

var p = {
      "name": "Llama",
      "description": "Cute Rainbow Alpacasso Kawaii Alpaca Llama Arpakasso Soft Plush Toy Doll",
      "keywords": [
        "stuffed", "plush"
      ],
      "image": "15-llama.jpg",
      "age": [
        "0", "10"
      ],
      "price": 19.99
    };
db.products.save(p);
