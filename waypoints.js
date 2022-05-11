var waypoints = [
    { 
        "classes": [ "waypoint", "merchant", "minfo" ], 
        "name": "Gerifer",
        "id": "gerifer"
    },
    { 
        "classes": [ "waypoint", "merchant", "minfo" ],
        "name": "Fisherman",
        "id": "fisherman"
    },
    { 
        "classes": [ "waypoint", "merchant", "minfo" ],
        "name": "Egap Seller",
        "id": "egapseller"
    },
    { 
        "classes": [ "waypoint", "merchant", "minfo" ],
        "name": "Quests",
        "id": "quests"
    },
    { 
        "classes": [ "waypoint", "merchant", "minfo" ],
        "name": "Stableman",
        "id": "stableman"
    },
    { 
        "classes": [ "waypoint", "merchant", "minfo" ],
        "name": "Scroll Seller",
        "id": "sseller"
    },
    { 
        "classes": [ "waypoint", "merchant", "minfo" ],
        "name": "Librarian",
        "id": "librarian"
    },
    { 
        "classes": [ "waypoint", "merchant", "minfo" ],
        "name": "Rockets",
        "id": "rman"
    },
    { 
        "classes": [ "waypoint", "merchant", "minfo" ],
        "name": "Wool",
        "id": "wool"
    },
    { 
        "classes": [ "waypoint", "merchant", "minfo" ],
        "name": "Bartender",
        "id": "bartender"
    },
    { 
        "classes": [ "waypoint", "merchant", "minfo" ],
        "name": "Witch(top fl)",
        "id": "witch"
    },
    { 
        "classes": [ "waypoint", "merchant", "minfo" ],
        "name": "Miner",
        "id": "miner"
    },
    { 
        "classes": [ "waypoint", "merchant", "minfo" ],
        "name": "Cartographer",
        "id": "maps"
    },
    { 
        "classes": [ "waypoint", "merchant", "minfo" ],
        "name": "Carrot Seller",
        "id": "carrots"
    }
];

var container = document.getElementById("img_container");
for (var i = 0; i < waypoints.length; i++) {
    var child = document.createElement("div")
    child.id = waypoints[i].id
    for (var l = 0; l < waypoints[i].classes.length; l++) {
        child.classList.add(waypoints[i].classes[l])
    }
    child.textContent = waypoints[i].name;
    container.appendChild(child)
}

console.log("Done placing waypoints");