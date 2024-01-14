let heroName = "herminions"
let heroXP = 0
let levels = ["ferro" , "bronze" , "prata" , "ouro" , "platina" , "ascendente" , "imortal" , "radiante"]

for(heroXP = 0 ; heroXP < 11000; heroXP += 1001){
if(heroXP <= 1000){
    console.log("O herói de nome " + heroName + " está no nível " + levels[0] )
} else if(heroXP <= 2000){
    console.log("O herói de nome " + heroName + " está no nível " + levels[1] )
} else if(heroXP <= 5000){
    console.log("O herói de nome " + heroName + " está no nível " + levels[2] )
} else if(heroXP <= 7000){
    console.log("O herói de nome " + heroName + " está no nível " + levels[3] )
} else if(heroXP <= 8000){
    console.log("O herói de nome " + heroName + " está no nível " + levels[4] )
} else if(heroXP <= 9000){
    console.log("O herói de nome " + heroName + " está no nível " + levels[5] )
} else if(heroXP <= 10000){
    console.log("O herói de nome " + heroName + " está no nível " + levels[6] )
} else if(heroXP > 10000){
    console.log("O herói de nome " + heroName + " está no nível " + levels[7] )
}
}
