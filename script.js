// //objeto tenemos llave=valor
// let sensei = {
//     name: 'Gaby',
//     age: '28',
//     program: 'Cinta blanca',
//     itsCool: true,
//     favoriteFood: ['Pizza', 'Pavo Pibil', 'HotCakes', 'Sandwiches'],
//     learn: function(){
//         console.log("Hoy aprendemos objetos");
//     }
// };

// console.log(sensei);
// console.log(sensei.age);
// console.log(sensei.program);
// console.log(sensei.name);

// //asi se asigna un nuevo atributo
// sensei.hungry = false;
// sensei.favoriteNumber = 7;

// //asi se llama la funcion de un objeto
// sensei.learn();

let pikachu = {
    name: 'Pikachu',
    type: 'Electric',
    height: '50 cm',
    weight: '10kg',
    level: 100,
    moves: [
        'Thunderbolt',
        'Volt Tackle',
        'Thunder',
        'Surf'
    ],
    health: 100,
    description: "Pokémon con apariencia de un pequeño ratón, su piel es de un color amarillo. Las puntas de sus orejas son de color negro, en sus mejillas hay un círculo de color rojo, lugar de donde el pokémon expulsa energía eléctrica y su cola tiene la forma de un rayo.",
    image: "https://www.pokemoncenter.com/wcsstore/MarketingContent/detective-pikachu/landing_detective-pikachu_header_mobile.jpg",
    sprite: "https://img.pokemondb.net/sprites/x-y/shiny/pikachu-f.png",
    attack: function(move) {
        alert(`Pikachu used ${move}, it's super effective.`);
        document.getElementById('alakazamHealth').value = document.getElementById('alakazamHealth').value - 20;
        if(document.getElementById('alakazamHealth').value <= 50 && document.getElementById('alakazamHealth').value > 20){
            document.getElementById('alakazamHealth').classList.remove("is-primary");
            document.getElementById('alakazamHealth').classList.add("is-warning");
        } else if (document.getElementById('alakazamHealth').value <=20) {
            document.getElementById('alakazamHealth').classList.remove("is-warning");
            document.getElementById('alakazamHealth').classList.add("is-danger");
        } if (document.getElementById('alakazamHealth').value === 0){
            alert("Alakazam has fainted");
        }
    }
    //alert ("Pikachu used"+ move + "it's super effective.") es lo mismo que lo de arriba
}

document.getElementById("pokeName").innerHTML = pikachu.name;
document.getElementById("pokeType").innerHTML = pikachu.type;
document.getElementById("pokeDescription").innerHTML = pikachu.description;
document.getElementById("pokeImage").src = pikachu.image;
document.getElementById("pokeAvatar").src = pikachu.sprite;
document.getElementById("moveOne").innerHTML = pikachu.moves[0];
document.getElementById("moveTwo").innerHTML = pikachu.moves[1];
document.getElementById("moveThree").innerHTML = pikachu.moves[2];
document.getElementById("moveFour").innerHTML = pikachu.moves[3];

let alakazam = {
    name: 'Alakazam',
    type: 'Psychic',
    height: '1.80 m',
    weight: '80kg',
    level: 80,
    gender: 'female',
    moves: [
        'Psychic',
        'Hypnosis',
        'Light Screen',
        'Shadow Ball'
    ],
    health: 100,
    description: "Pokémon de tipo psíquico introducido en la primera generación. Es la evolución de Kadabra y, a partir de la sexta generación, puede megaevolucionar en Mega-Alakazam.",
    image: "https://cdn.dribbble.com/users/1771704/screenshots/5891279/alakazam.gif",
    sprite: "https://img.pokemondb.net/sprites/x-y/normal/alakazam.png",
    attack: function(move) {
        alert(`Alakazam used ${move}, it's super effective.`);
        document.getElementById('pikachuHealth').value = document.getElementById('pikachuHealth').value - 20;
        if(document.getElementById('pikachuHealth').value <= 50 && document.getElementById('pikachuHealth').value > 20){
            document.getElementById('pikachuHealth').classList.remove("is-primary");
            document.getElementById('pikachuHealth').classList.add("is-warning");
        } else if (document.getElementById('pikachuHealth').value <=20) {
            document.getElementById('pikachuHealth').classList.remove("is-warning");
            document.getElementById('pikachuHealth').classList.add("is-danger");
        } if (document.getElementById('pikachuHealth').value === 0){
            alert("Pikachu has fainted");
        }
    }
}

document.getElementById("alakzamName").innerHTML = alakazam.name;
document.getElementById("alakzamType").innerHTML = alakazam.type;
document.getElementById("alakzamDescription").innerHTML = alakazam.description;
document.getElementById("alakzamImage").src = alakazam.image;
document.getElementById("alakzamAvatar").src = alakazam.sprite;
document.getElementById("alakazammoveOne").innerHTML = alakazam.moves[0];
document.getElementById("alakazammoveTwo").innerHTML = alakazam.moves[1];
document.getElementById("alakazammoveThree").innerHTML = alakazam.moves[2];
document.getElementById("alakazammoveFour").innerHTML = alakazam.moves[3];