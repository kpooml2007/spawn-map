var waypoints = [
    { 
        "name": "Gerifer",
        "id": "gerifer",
        "type": "merchant"
    },
    { 
        "name": "Fisherman",
        "id": "fisherman",
        "type": "merchant"
    },
    { 
        "name": "Egap Seller",
        "id": "egapseller",
        "type": "merchant"
    },
    { 
        "name": "Quests",
        "id": "quests",
        "type": "merchant"
    },
    { 
        "name": "Stableman",
        "id": "stableman",
        "type": "merchant"
    },
    { 
        "name": "Scroll Seller",
        "id": "sseller",
        "type": "merchant"
    },
    { 
        "name": "Librarian",
        "id": "librarian",
        "type": "merchant"
    },
    { 
        "name": "Rockets",
        "id": "rman",
        "type": "merchant"
    },
    { 
        "name": "Wool",
        "id": "wool",
        "type": "merchant"
    },
    { 
        "name": "Bartender",
        "id": "bartender",
        "type": "merchant"
    },
    { 
        "name": "Witch(top fl)",
        "id": "witch",
        "type": "merchant"
    },
    { 
        "name": "Miner",
        "id": "miner",
        "type": "merchant"
    },
    { 
        "name": "Cartographer",
        "id": "maps",
        "type": "merchant"
    },
    { 
        "name": "Carrot Seller",
        "id": "carrots",
        "type": "merchant"
    },
    { 
        "name": "Acropolis",
        "id": "acropolis",
        "type": "building"
    },
    { 
        "name": "Bank",
        "id": "bank",
        "type": "building"
    },
    { 
        "name": "Castle",
        "id": "castle",
        "type": "building"
    },
    { 
        "name": "Church",
        "id": "church",
        "type": "building"
    }
];

var classes = [ "waypoint", "merchant" ]

var container = document.getElementById("img_container");
for (var i = 0; i < waypoints.length; i++) {
    var child = document.createElement("div")
    child.id = waypoints[i].id
    child.classList.add("waypoint")
    if (waypoints[i].type == "merchant") child.classList.add("merchant")
    if (waypoints[i].type == "building") child.classList.add("building")
    child.textContent = waypoints[i].name;
    container.appendChild(child)
}

console.log("Done placing waypoints");