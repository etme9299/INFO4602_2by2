db = new Mongo().getDB("2by2_db");
db.createUser({user: "root", pwd: "rootpassword", roles: [{role: "readWrite", db: "2by2_db"}]});
db.createCollection("Graphs");
db.Graphs.insertOne({
    "name" : "PLC 2020",
    "code" : "QWERTY",
    "type" : "cartesian_2d",
    "axis" : ['Sweet', 'Protein', 'Spicy', 'Books'],
    "descriptions" : [
        'Kind, comforting, friendly, polite, wholesome',
        'Gung-ho, enthusiastic, sporty, gritty, intense',
        'Cool, self-confident, aloof, assertive',
        'Academic, focused, collected, quiet'
    ],
    "tags" : [
        {
            "name" : "Taylor Alton",
            "color" : "#8c32c9"
        },
        {
            'name' : 'Pax Armon',
            'color' : '#e35058'
        },
        {
            'name' : 'Jacob Baca',
            'color' : '#ceb52a'
        },
        {
            'name' : 'Shane Ball',
            'color' : '#734fee'
        },
        {
            'name' : 'Peyton Biggers',
            'color' : '#8b45e3'
        },
        {
            'name' : 'Ari Brecl',
            'color' : '#8b7102'
        },
        {
            'name' : 'Paige Burns',
            'color' : '#a2bf20'
        },
        {
            'name' : 'Jasey Chanders',
            'color' : '#f2953a'
        },
        {
            'name' : 'Cecily Coors',
            'color' : '#5390e7'
        },
        {
            'name' : 'Andersen Dodge ',
            'color' : '#4d84c1'
        },
        {
            'name' : 'John Douthit ',
            'color' : '#916c96'
        },
        {
            'name' : 'Zoe Drigot ',
            'color' : '#83c43c'
        },
        {
            'name' : 'Riley Dudley',
            'color' : '#ca6424'
        },
        {
            'name' : 'Jessica Emmons',
            'color' : '#eafb80'
        },
        {
            'name' : 'Alex Fix',
            'color' : '#dbbb9f'
        },
        {
            'name' : 'Keala Gapin',
            'color' : '#f08f2a'
        },
        {
            'name' : 'Dylan Gowins',
            'color' : '#66bd36'
        },
        {
            'name' : 'Jackson Klein',
            'color' : '#843c0b'
        },
        {
            'name' : 'Jackie Martensen ',
            'color' : '#a16d2f'
        },
        {
            'name' : 'Kate McCarthy',
            'color' : '#ef1f60'
        },
        {
            'name' : 'Holly McCollough',
            'color' : '#1f846a'
        },
        {
            'name' : 'Joelle McDonald',
            'color' : '#c3d1f1'
        },
        {
            'name' : 'Brigid McNamara',
            'color' : '#afb662'
        },
        {
            'name' : 'Ethan Meyer',
            'color' : '#b2b459'
        },
        {
            'name' : 'Joe Moser',
            'color' : '#9e9a8'
        },
        {
            'name' : 'Ornella Musinguzi',
            'color' : '#435d75'
        },
        {
            'name' : 'Sara Oza ',
            'color' : '#38d736'
        },
        {
            'name' : 'Angela Peña de Niz',
            'color' : '#5c0277'
        },
        {
            'name' : 'Benjamin Peterson ',
            'color' : '#358f0e'
        },
        {
            'name' : 'Hannah Pritchard',
            'color' : '#2e529e'
        },
        {
            'name' : 'Simon Schroeder Bermudez',
            'color' : '#73af12'
        },
        {
            'name' : 'Andrew Schwartz ',
            'color' : '#5af2bb'
        },
        {
            'name' : 'Shreya Shresta',
            'color' : '#dc43e5'
        },
        {
            'name' : 'Ryan Slocum',
            'color' : '#75c685'
        },
        {
            'name' : 'Cassie Sterns',
            'color' : '#8985cf'
        },
        {
            'name' : 'Natalia Storz',
            'color' : '#76b0c2'
        }        
    ],
    "points" : []
});


db.Graphs.insertOne({
    "name" : "PLC 2021",
    "code" : "OWFJW5",
    "type" : "cartesian_2d",
    "axis" : ['Sweet', 'Protein', 'Spicy', 'Books'],
    "descriptions" : [
        'Kind, comforting, friendly, polite, wholesome',
        'Gung-ho, enthusiastic, sporty, gritty, intense',
        'Cool, self-confident, aloof, assertive',
        'Academic, focused, collected, quiet'
    ],
    "tags" : [
        {
            "name" : "Simone Adhikari",
            "color" : "#8c32c9"
        },
        {
            'name' : 'Sloan Alber',
            'color' : '#e35058'
        },
        {
            'name' : 'Sarah Bian',
            'color' : '#ceb52a'
        },
        {
            'name' : 'Sophia Books',
            'color' : '#734fee'
        },
        {
            'name' : 'Alyssa Bullock',
            'color' : '#8b45e3'
        },
        {
            'name' : 'Luke Coffman',
            'color' : '#8b7102'
        },
        {
            'name' : 'Carson Conley',
            'color' : '#a2bf20'
        },
        {
            'name' : 'Elizabeth Craig',
            'color' : '#f2953a'
        },
        {
            'name' : 'Camden Dempsey',
            'color' : '#5390e7'
        },
        {
            'name' : 'Mitali Desai',
            'color' : '#4d84c1'
        },
        {
            'name' : 'Natalie Eid',
            'color' : '#916c96'
        },
        {
            'name' : 'Luc Filion',
            'color' : '#83c43c'
        },
        {
            'name' : 'Carter Galyardt',
            'color' : '#ca6424'
        },
        {
            'name' : 'CJ Girard',
            'color' : '#eafb80'
        },
        {
            'name' : 'Jesse Hettleman',
            'color' : '#dbbb9f'
        },
        {
            'name' : 'Riley Jones',
            'color' : '#f08f2a'
        },
        {
            'name' : 'Griffin Kiesecker',
            'color' : '#66bd36'
        },
        {
            'name' : 'Tommy Landmark',
            'color' : '#843c0b'
        },
        {
            'name' : 'Lauren Jingles',
            'color' : '#a16d2f'
        },
        {
            'name' : 'Delaney McNally',
            'color' : '#ef1f60'
        },
        {
            'name' : 'Cesar Morales',
            'color' : '#1f846a'
        },
        {
            'name' : 'Helena Neufeld',
            'color' : '#c3d1f1'
        },
        {
            'name' : 'Noga Margalit',
            'color' : '#afb662'
        },
        {
            'name' : 'Camden Opfer',
            'color' : '#b2b459'
        },
        {
            'name' : 'Aadi Pore',
            'color' : '#9e9a8'
        },
        {
            'name' : 'Eli Pouliot',
            'color' : '#435d75'
        },
        {
            'name' : 'Jack Reuter',
            'color' : '#38d736'
        },
        {
            'name' : 'Rodrigo Rios-Soto',
            'color' : '#5c0277'
        },
        {
            'name' : 'Sena Uctuk',
            'color' : '#358f0e'
        },
        {
            'name' : 'Sarah Smith',
            'color' : '#2e529e'
        },
        {
            'name' : 'Tati Streidl',
            'color' : '#73af12'
        },
        {
            'name' : 'Clark Windmueller',
            'color' : '#5af2bb'
        },
        {
            'name' : 'Weston Wolkov',
            'color' : '#dc43e5'
        },
        {
            'name' : 'Atlas Zaina',
            'color' : '#75c685'
        }     
    ],
    "points" : []
});



db.Graphs.insertOne({
    "name" : "PLC 2019",
    "code" : "9HK6KE",
    "type" : "cartesian_2d",
    "axis" : ['Sweet', 'Protein', 'Spicy', 'Books'],
    "descriptions" : [
        'Kind, comforting, friendly, polite, wholesome',
        'Gung-ho, enthusiastic, sporty, gritty, intense',
        'Cool, self-confident, aloof, assertive',
        'Academic, focused, collected, quiet'
    ],
    "tags" : [
        {
            "name" : "Chloe Applegate",
            "color" : "#8c32c9"
        },
        {
            'name' : 'Zoe Aymond',
            'color' : '#e35058'
        },
        {
            'name' : 'Conor Bates-Janigo',
            'color' : '#ceb52a'
        },
        {
            'name' : 'Sharon Battula',
            'color' : '#734fee'
        },
        {
            'name' : 'Julia Baum',
            'color' : '#8b45e3'
        },
        {
            'name' : 'Abigail Brown',
            'color' : '#8b7102'
        },
        {
            'name' : 'Max Carere',
            'color' : '#a2bf20'
        },
        {
            'name' : 'Emily Carmody',
            'color' : '#f2953a'
        },
        {
            'name' : 'Dylan Carpenter',
            'color' : '#5390e7'
        },
        {
            'name' : 'Alex Choi',
            'color' : '#4d84c1'
        },
        {
            'name' : 'Wil Craig',
            'color' : '#916c96'
        },
        {
            'name' : 'Luxien Davis',
            'color' : '#83c43c'
        },
        {
            'name' : 'Cliff Dinwiddie',
            'color' : '#ca6424'
        },
        {
            'name' : 'Abby Foster',
            'color' : '#eafb80'
        },
        {
            'name' : 'Nick Galambos',
            'color' : '#dbbb9f'
        },
        {
            'name' : 'Jamal Giornazi',
            'color' : '#f08f2a'
        },
        {
            'name' : 'Griffin Kiesecker',
            'color' : '#66bd36'
        },
        {
            'name' : 'Chase Gordanier',
            'color' : '#843c0b'
        },
        {
            'name' : 'Sam Hahn',
            'color' : '#a16d2f'
        },
        {
            'name' : 'Lauren Hanley',
            'color' : '#ef1f60'
        },
        {
            'name' : 'Krystal Horton',
            'color' : '#1f846a'
        },
        {
            'name' : 'Tristan Ikeda',
            'color' : '#c3d1f1'
        },
        {
            'name' : 'Etash Kalra',
            'color' : '#afb662'
        },
        {
            'name' : 'Anushka Kathait',
            'color' : '#b2b459'
        },
        {
            'name' : 'Johanna Landmark',
            'color' : '#9e9a8'
        },
        {
            'name' : 'Jordan Lee',
            'color' : '#435d75'
        },
        {
            'name' : 'Yifan Liu',
            'color' : '#38d736'
        },
        {
            'name' : 'Matthew McCoy',
            'color' : '#5c0277'
        },
        {
            'name' : 'Henry McKinney',
            'color' : '#358f0e'
        },
        {
            'name' : 'Caitlyn Mendik',
            'color' : '#2e529e'
        },
        {
            'name' : 'Thomas Miller',
            'color' : '#73af12'
        },
        {
            'name' : 'Paola Ortiz Venzor',
            'color' : '#5af2bb'
        },
        {
            'name' : 'Savannah Perry',
            'color' : '#dc43e5'
        },
        {
            'name' : 'John Ramsdale',
            'color' : '#1b394d'
        },
        {
            'name' : 'Mimi Riley',
            'color' : '#3f830f'
        },
        {
            'name' : 'Josie Robbins',
            'color' : '#f2e8c4'
        },
        {
            'name' : 'Katie Schutt',
            'color' : '#32056f'
        },
        {
            'name' : 'Shay Segal',
            'color' : '#1947fe'
        },
        {
            'name' : 'Makayla Sileo',
            'color' : '#028de5'
        },
        {
            'name' : 'Alden Soto',
            'color' : '#34530d'
        },
        {
            'name' : 'Sydney Stegeman',
            'color' : '#2307fd'
        },
        {
            'name' : 'Akhil Tadiparthi',
            'color' : '#93559e'
        },
        {
            'name' : 'Solana Teitler',
            'color' : '#deadbe'
        },
        {
            'name' : 'Elena Trujillo',
            'color' : '#950de8'
        },
        {
            'name' : 'Kaitlyn Waynick',
            'color' : '#a9b83e'
        },
        {
            'name' : 'June Yuan',
            'color' : '#e820bf'
        }
    ],
    "points" : []
});


db.Graphs.insertOne({
    "name" : "PLC 2018",
    "code" : "HFKDOE",
    "type" : "cartesian_2d",
    "axis" : ['Sweet', 'Protein', 'Spicy', 'Books'],
    "descriptions" : [
        'Kind, comforting, friendly, polite, wholesome',
        'Gung-ho, enthusiastic, sporty, gritty, intense',
        'Cool, self-confident, aloof, assertive',
        'Academic, focused, collected, quiet'
    ],
    "tags" : [
        {
            "name" : "Joris Alawoe",
            "color" : "#8c32c9"
        },
        {
            'name' : 'Mariah Alsubhi',
            'color' : '#e35058'
        },
        {
            'name' : 'Evan Benke',
            'color' : '#ceb52a'
        },
        {
            'name' : 'Morgan Brantmeyer',
            'color' : '#734fee'
        },
        {
            'name' : 'Colton Buckingham',
            'color' : '#8b45e3'
        },
        {
            'name' : 'Michael Classey',
            'color' : '#8b7102'
        },
        {
            'name' : 'Ellie Creasey',
            'color' : '#a2bf20'
        },
        {
            'name' : 'Lily DeMuth',
            'color' : '#f2953a'
        },
        {
            'name' : 'Taylor Dutton',
            'color' : '#5390e7'
        },
        {
            'name' : 'Sam Freed',
            'color' : '#4d84c1'
        },
        {
            'name' : 'Kimberly Fung',
            'color' : '#916c96'
        },
        {
            'name' : 'Madeline Garrett',
            'color' : '#83c43c'
        },
        {
            'name' : 'Tom Heckmaster',
            'color' : '#ca6424'
        },
        {
            'name' : 'Bella Horton',
            'color' : '#eafb80'
        },
        {
            'name' : 'Kylie Hunter',
            'color' : '#dbbb9f'
        },
        {
            'name' : 'Sama Kareem',
            'color' : '#f08f2a'
        },
        {
            'name' : 'Danny Knowles',
            'color' : '#66bd36'
        },
        {
            'name' : 'Grace Kroeger',
            'color' : '#843c0b'
        },
        {
            'name' : 'Elizabeth LaJoie',
            'color' : '#a16d2f'
        },
        {
            'name' : 'Molly Jordan Little',
            'color' : '#ef1f60'
        },
        {
            'name' : 'Grayson Lombardo',
            'color' : '#1f846a'
        },
        {
            'name' : 'Alex Martin',
            'color' : '#c3d1f1'
        },
        {
            'name' : 'Anna McTigue',
            'color' : '#afb662'
        },
        {
            'name' : 'Hannah Moser',
            'color' : '#b2b459'
        },
        {
            'name' : 'Maria Nenova',
            'color' : '#9e9a8'
        },
        {
            'name' : 'Joe Ning',
            'color' : '#435d75'
        },
        {
            'name' : 'Kevin Olivas',
            'color' : '#38d736'
        },
        {
            'name' : 'Matthew Parone',
            'color' : '#5c0277'
        },
        {
            'name' : 'Clementine Perkins',
            'color' : '#358f0e'
        },
        {
            'name' : 'Will Plantz',
            'color' : '#2e529e'
        },
        {
            'name' : 'Will Pryor',
            'color' : '#73af12'
        },
        {
            'name' : 'Kasim Rana',
            'color' : '#5af2bb'
        },
        {
            'name' : 'Parker Randolph',
            'color' : '#dc43e5'
        },
        {
            'name' : 'Allie Reuter',
            'color' : '#1b394d'
        },
        {
            'name' : 'Tess Richey',
            'color' : '#3f830f'
        },
        {
            'name' : 'Nicole Schroeter',
            'color' : '#f2e8c4'
        },
        {
            'name' : 'Kendal Sego',
            'color' : '#32056f'
        },
        {
            'name' : 'Pourna Sengupta',
            'color' : '#1947fe'
        },
        {
            'name' : 'Austin Spafford',
            'color' : '#028de5'
        },
        {
            'name' : 'Jasmine Szabo',
            'color' : '#34530d'
        },
        {
            'name' : 'Kolondja Thillot',
            'color' : '#2307fd'
        },
        {
            'name' : 'Travis Torline',
            'color' : '#93559e'
        },
        {
            'name' : 'Kaleb Verrone',
            'color' : '#deadbe'
        },
        {
            'name' : 'Connor Vogel',
            'color' : '#950de8'
        },
        {
            'name' : 'Caroline Wiygul',
            'color' : '#a9b83e'
        }
    ],
    "points" : []
});