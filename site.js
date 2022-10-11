const Hargow ={
    
name: "Har gow",
nameMeaning: ["wedding gown"],

isFood: true, 
isIdentifiesAsFood: true,

foodCount: 4,
shrimpCount:4, 
sugarCount:0, 
soysauceCount:1,

TheFourHeavenlykings: ["Har gow", "siu mai", "cha siu bao", "egg tarts"], 

color: ["transparent"], 
texture: ["smooth"], 

placeof0rigin: ["Guangdong, China"], 
region: ["Cantonese-speaking region"], 

ingredients: ["Wheat starch", "tonioca starch","shrimp", "cooked pork fat", "bamboo shoots", "scallions", "cornstarch", "sesame oil", "soysauce","sugar", "seasonings"],

};

ingredients: function(ingrdients){
    
    if (making){
        
        add "Wheat starch",
        add "tonioca starch",
        add "shrimp",
        add "cooked pork fat",
        add "bamboo shoots",
        add "scallions",
        add "cornstarch",
        add "sesame oil",
        add "soysauce",
        add "sugar",
        add "seasonings",
    
        console.log ("make one Hargow"),
    
    };

const filling={
    
    shrimpCount:6,
    shrimpstatus:["peeled, deveined, and finely chopped"],
    
    Unity:["teaspoon"],
    bambooShootsCount:3,
    bambooShootsstatus:["finely chopped"],
    
    greenOnionCount:1.5,
    greenOnionstatus:["finely chopped"],
    
    riceWineCount:3/4,
    sesameOilCount:1/4,
    kosherSaltCount:1/4,
    groundWhitePepper:1/8,
    
    eggWhiteCount:1,
    eggWhiteStatus:["lightly beaten"],
    
    cornstarchCount:2,
}

const dough={
    
    Unity:["teaspoon"],
    
    tapiocastarchCount:2,
    koshersaltCount:1/4,
    vegetableOilCount:2.5,
    
 
    wheatStarchCount:3/4,
    boilingWaterCount:2/3,
}

make: function(makingfilling) {
		if (filling) {
			console.log("place the shrimp, bamboo shoots, green onions, rice wine, sesame oil, salt, pepper, egg white, and cornstarch. Mix wel");
		}

		console.log("making" + filling);
	}
}

wait: function(waitfilling) {
    
		if (wait) {
		    
			console.log("Cover and refrigerate for 1 hour to give the flavors a chance to meld.");
		}

		console.log("waiting" + waitfilling);
	}
}

