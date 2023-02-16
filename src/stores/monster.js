import { defineStore } from 'pinia'

export const useMonsterStore =
    defineStore({
        id: 'monster',
        state: () => ({
            monsterFound: false,  
            monsterId: '',
            monsterName: '',
            monsterStartingHealth: null,
            monsterHealth: null,
            monsterHit: null,
            monsterMap: '',
            battleLog: [],
        }),
        actions: {
            getRandomValue(min, max) {
                return Math.floor(Math.random()*(max - min)) + min;
            },
            
            // generate 1 of 10 types of monsters for each environment, from common to rare
            generateMonster(val) {
                // val = 10;
                // val = 25;
                val = 50;
                // val = this.getRandomValue(1, 100);
                if (val <= 23 && this.monsterMap === 'Firesand Desert') {
                  return this.monsterId = 'desert_monster1'; 
                } else if (val <= 40 && this.monsterMap === 'Firesand Desert') {
                  return this.monsterId = 'desert_monster2';
                } else if (val <= 52 && this.monsterMap === 'Firesand Desert') {
                  return this.monsterId = 'desert_monster3';
                } else if (val <= 64 && this.monsterMap === 'Firesand Desert') {
                  return this.monsterId = 'desert_monster4';
                } else if (val <= 74 && this.monsterMap === 'Firesand Desert') {
                  return this.monsterId = 'desert_monster5';
                } else if (val <= 84 && this.monsterMap === 'Firesand Desert') {
                  return this.monsterId = 'desert_monster6';
                } else if (val <= 90 && this.monsterMap === 'Firesand Desert') {
                  return this.monsterId = 'desert_monster7';
                } else if (val <= 96 && this.monsterMap === 'Firesand Desert') {
                  return this.monsterId = 'desert_monster8';
                } else if (val <= 99 && this.monsterMap === 'Firesand Desert') {
                  return this.monsterId = 'desert_monster9';
                } else if (val === 100 && this.monsterMap === 'Firesand Desert') {
                  return this.monsterId = 'desert_monster10';
                } else if (val <= 23 && this.monsterMap === 'Black Forest') {
                    return this.monsterId = 'forest_monster1'; 
                  } else if (val <= 40 && this.monsterMap === 'Black Forest') {
                    return this.monsterId = 'forest_monster2';
                  } else if (val <= 52 && this.monsterMap === 'Black Forest') {
                    return this.monsterId = 'forest_monster3';
                  } else if (val <= 64 && this.monsterMap === 'Black Forest') {
                    return this.monsterId = 'forest_monster4';
                  } else if (val <= 74 && this.monsterMap === 'Black Forest') {
                    return this.monsterId = 'forest_monster5';
                  } else if (val <= 84 && this.monsterMap === 'Black Forest') {
                    return this.monsterId = 'forest_monster6';
                  } else if (val <= 90 && this.monsterMap === 'Black Forest') {
                    return this.monsterId = 'forest_monster7';
                  } else if (val <= 96 && this.monsterMap === 'Black Forest') {
                    return this.monsterId = 'forest_monster8';
                  } else if (val <= 99 && this.monsterMap === 'Black Forest') {
                    return this.monsterId = 'forest_monster9';
                  } else if (val === 100 && this.monsterMap === 'Black Forest'){
                    return this.monsterId = 'forest_monster10';
                  } else if (val <= 23 && this.monsterMap === 'The Great Grass Sea') {
                    return this.monsterId = 'grassland_monster1'; 
                  } else if (val <= 40 && this.monsterMap === 'The Great Grass Sea') {
                    return this.monsterId = 'grassland_monster2';
                  } else if (val <= 52 && this.monsterMap === 'The Great Grass Sea') {
                    return this.monsterId = 'grassland_monster3';
                  } else if (val <= 64 && this.monsterMap === 'The Great Grass Sea') {
                    return this.monsterId = 'grassland_monster4';
                  } else if (val <= 74 && this.monsterMap === 'The Great Grass Sea') {
                    return this.monsterId = 'grassland_monster5';
                  } else if (val <= 84 && this.monsterMap === 'The Great Grass Sea') {
                    return this.monsterId = 'grassland_monster6';
                  } else if (val <= 90 && this.monsterMap === 'The Great Grass Sea') {
                    return this.monsterId = 'grassland_monster7';
                  } else if (val <= 96 && this.monsterMap === 'The Great Grass Sea') {
                    return this.monsterId = 'grassland_monster8';
                  } else if (val <= 99 && this.monsterMap === 'The Great Grass Sea') {
                    return this.monsterId = 'grassland_monster9';
                  } else if (val === 100 && this.monsterMap === 'The Great Grass Sea') {
                    return this.monsterId = 'grassland_monster10';
                  } else if (val <= 23 && this.monsterMap === 'The Moving Jungle') {
                    return this.monsterId = 'jungle_monster1'; 
                  } else if (val <= 40 && this.monsterMap === 'The Moving Jungle') {
                    return this.monsterId = 'jungle_monster2';
                  } else if (val <= 52 && this.monsterMap === 'The Moving Jungle') {
                    return this.monsterId = 'jungle_monster3';
                  } else if (val <= 64 && this.monsterMap === 'The Moving Jungle') {
                    return this.monsterId = 'jungle_monster4';
                  } else if (val <= 74 && this.monsterMap === 'The Moving Jungle') {
                    return this.monsterId = 'jungle_monster5';
                  } else if (val <= 84 && this.monsterMap === 'The Moving Jungle') {
                    return this.monsterId = 'jungle_monster6';
                  } else if (val <= 90 && this.monsterMap === 'The Moving Jungle') {
                    return this.monsterId = 'jungle_monster7';
                  } else if (val <= 96 && this.monsterMap === 'The Moving Jungle') {
                    return this.monsterId = 'jungle_monster8';
                  } else if (val <= 99 && this.monsterMap === 'The Moving Jungle') {
                    return this.monsterId = 'jungle_monster9';
                  } else if (val === 100 && this.monsterMap === 'The Moving Jungle') {
                    return this.monsterId = 'jungle_monster10';
                  } else if (val <= 23 && this.monsterMap === 'Dead Marshes') {
                    return this.monsterId = 'marshes_monster1'; 
                  } else if (val <= 40 && this.monsterMap === 'Dead Marshes') {
                    return this.monsterId = 'marshes_monster2';
                  } else if (val <= 52 && this.monsterMap === 'Dead Marshes') {
                    return this.monsterId = 'marshes_monster3';
                  } else if (val <= 64 && this.monsterMap === 'Dead Marshes') {
                    return this.monsterId = 'marshes_monster4';
                  } else if (val <= 74 && this.monsterMap === 'Dead Marshes') {
                    return this.monsterId = 'marshes_monster5';
                  } else if (val <= 84 && this.monsterMap === 'Dead Marshes') {
                    return this.monsterId = 'marshes_monster6';
                  } else if (val <= 90 && this.monsterMap === 'Dead Marshes') {
                    return this.monsterId = 'marshes_monster7';
                  } else if (val <= 96 && this.monsterMap === 'Dead Marshes') {
                    return this.monsterId = 'marshes_monster8';
                  } else if (val <= 99 && this.monsterMap === 'Dead Marshes') {
                    return this.monsterId = 'marshes_monster9';
                  } else if (val === 100 && this.monsterMap === 'Dead Marshes') {
                    return this.monsterId = 'marshes_monster10';
                  } else if (val <= 23 && this.monsterMap === 'Iron Mountains') {
                    return this.monsterId = 'mountain_monster1'; 
                  } else if (val <= 40 && this.monsterMap === 'Iron Mountains') {
                    return this.monsterId = 'mountain_monster2';
                  } else if (val <= 52 && this.monsterMap === 'Iron Mountains') {
                    return this.monsterId = 'mountain_monster3';
                  } else if (val <= 64 && this.monsterMap === 'Iron Mountains') {
                    return this.monsterId = 'mountain_monster4';
                  } else if (val <= 74 && this.monsterMap === 'Iron Mountains') {
                    return this.monsterId = 'mountain_monster5';
                  } else if (val <= 84 && this.monsterMap === 'Iron Mountains') {
                    return this.monsterId = 'mountain_monster6';
                  } else if (val <= 90 && this.monsterMap === 'Iron Mountains') {
                    return this.monsterId = 'mountain_monster7';
                  } else if (val <= 96 && this.monsterMap === 'Iron Mountains') {
                    return this.monsterId = 'mountain_monster8';
                  } else if (val <= 99 && this.monsterMap === 'Iron Mountains') {
                    return this.monsterId = 'mountain_monster9';
                  } else if (val === 100 && this.monsterMap === 'Iron Mountains') {
                    return this.monsterId = 'mountain_monster10';
                  } else if (val <= 23 && this.monsterMap === 'Noxus Swamp') {
                    return this.monsterId = 'swamp_monster1'; 
                  } else if (val <= 40 && this.monsterMap === 'Noxus Swamp') {
                    return this.monsterId = 'swamp_monster2';
                  } else if (val <= 52 && this.monsterMap === 'Noxus Swamp') {
                    return this.monsterId = 'swamp_monster3';
                  } else if (val <= 64 && this.monsterMap === 'Noxus Swamp') {
                    return this.monsterId = 'swamp_monster4';
                  } else if (val <= 74 && this.monsterMap === 'Noxus Swamp') {
                    return this.monsterId = 'swamp_monster5';
                  } else if (val <= 84 && this.monsterMap === 'Noxus Swamp') {
                    return this.monsterId = 'swamp_monster6';
                  } else if (val <= 90 && this.monsterMap === 'Noxus Swamp') {
                    return this.monsterId = 'swamp_monster7';
                  } else if (val <= 96 && this.monsterMap === 'Noxus Swamp') {
                    return this.monsterId = 'swamp_monster8';
                  } else if (val <= 99 && this.monsterMap === 'Noxus Swamp') {
                    return this.monsterId = 'swamp_monster9';
                  } else if (val === 100 && this.monsterMap === 'Noxus Swamp') {
                    return this.monsterId = 'swamp_monster10';
                  } else {
                    return this.monsterId = '';
                }        
            },

            // when a monster is generated, generate a monster name, for rendering on the screen
            getMonsterName() {
                if (this.monsterId === 'desert_monster1') {
                  return this.monsterName = 'Sand Crab';
                } else if (this.monsterId === 'desert_monster2') {
                  return this.monsterName = 'Fellbeast Camel';
                } else if (this.monsterId === 'desert_monster3') {
                  return this.monsterName = 'Canyon Cat';
                } else if (this.monsterId === 'desert_monster4') {
                  return this.monsterName = 'Rock Troll';
                } else if (this.monsterId === 'desert_monster5') {
                  return this.monsterName = 'Basilisk';
                } else if (this.monsterId === 'desert_monster6') {
                  return this.monsterName = 'Djinn';
                } else if (this.monsterId === 'desert_monster7') {
                  return this.monsterName = 'Phoenix';
                } else if (this.monsterId === 'desert_monster8') {
                  return this.monsterName = 'Karkadaan';
                } else if (this.monsterId === 'desert_monster9') {
                  return this.monsterName = 'Sand Worm';
                } else if (this.monsterId === 'desert_monster10') {
                  return this.monsterName = 'Fire River Drake';
                } else if (this.monsterId === 'forest_monster1') {
                    return this.monsterName = 'Mushroom Spirit';
                  } else if (this.monsterId === 'forest_monster2') {
                    return this.monsterName = 'Moss Troll';
                  } else if (this.monsterId === 'forest_monster3') {
                    return this.monsterName = 'Satyr';
                  } else if (this.monsterId === 'forest_monster4') {
                    return this.monsterName = 'Werewolf';
                  } else if (this.monsterId === 'forest_monster5') {
                    return this.monsterName = 'Grim Owl';
                  } else if (this.monsterId === 'forest_monster6') {
                    return this.monsterName = 'Forest Guardian';
                  } else if (this.monsterId === 'forest_monster7') {
                    return this.monsterName = 'Vampire';
                  } else if (this.monsterId === 'forest_monster8') {
                    return this.monsterName = 'Kitsune';
                  } else if (this.monsterId === 'forest_monster9') {
                    return this.monsterName = 'Baba Yaga';
                  } else if (this.monsterId === 'forest_monster10') {
                    return this.monsterName = 'Forest God';
                  } else if (this.monsterId === 'grassland_monster1') {
                    return this.monsterName = 'Undead Soldier';
                  } else if (this.monsterId === 'grassland_monster2') {
                    return this.monsterName = 'Leprechan';
                  } else if (this.monsterId === 'grassland_monster3') {
                    return this.monsterName = 'Hobgoblin';
                  } else if (this.monsterId === 'grassland_monster4') {
                    return this.monsterName = 'Barrows Spider';
                  } else if (this.monsterId === 'grassland_monster5') {
                    return this.monsterName = 'Centaur';
                  } else if (this.monsterId === 'grassland_monster6') {
                    return this.monsterName = 'Banshee';
                  } else if (this.monsterId === 'grassland_monster7') {
                    return this.monsterName = 'Ghoul';
                  } else if (this.monsterId === 'grassland_monster8') {
                    return this.monsterName = 'Cockatrice';
                  } else if (this.monsterId === 'grassland_monster9') {
                    return this.monsterName = 'Unicorn';
                  } else if (this.monsterId === 'grassland_monster10') {
                    return this.monsterName = 'Chimera';
                  } else if (this.monsterId === 'jungle_monster1') {
                    return this.monsterName = 'Blight Bat';
                  } else if (this.monsterId === 'jungle_monster2') {
                    return this.monsterName = 'Meat-eater Monkey';
                  } else if (this.monsterId === 'jungle_monster3') {
                    return this.monsterName = 'Vine Clinger';
                  } else if (this.monsterId === 'jungle_monster4') {
                    return this.monsterName = 'Oliphant';
                  } else if (this.monsterId === 'jungle_monster5') {
                    return this.monsterName = 'Dire Moth';
                  } else if (this.monsterId === 'jungle_monster6') {
                    return this.monsterName = 'Bonecrusher';
                  } else if (this.monsterId === 'jungle_monster7') {
                    return this.monsterName = 'Cyclops';
                  } else if (this.monsterId === 'jungle_monster8') {
                    return this.monsterName = 'Dark Forest Elf';
                  } else if (this.monsterId === 'jungle_monster9') {
                    return this.monsterName = 'Oni';
                  } else if (this.monsterId === 'jungle_monster10') {
                    return this.monsterName = 'Golden Dragon';
                  } else if (this.monsterId === 'marshes_monster1') {
                    return this.monsterName = 'Will-O-Wisp';
                  } else if (this.monsterId === 'marshes_monster2') {
                    return this.monsterName = 'Kappa';
                  } else if (this.monsterId === 'marshes_monster3') {
                    return this.monsterName = 'Bog Zombie';
                  } else if (this.monsterId === 'marshes_monster4') {
                    return this.monsterName = 'Frogman';
                  } else if (this.monsterId === 'marshes_monster5') {
                    return this.monsterName = 'Rusalka';
                  } else if (this.monsterId === 'marshes_monster6') {
                    return this.monsterName = 'Harpie';
                  } else if (this.monsterId === 'marshes_monster7') {
                    return this.monsterName = 'Phantom';
                  } else if (this.monsterId === 'marshes_monster8') {
                    return this.monsterName = 'Kelpie';
                  } else if (this.monsterId === 'marshes_monster9') {
                    return this.monsterName = 'Water Knight';
                  } else if (this.monsterId === 'marshes_monster10') {
                    return this.monsterName = 'Heron King';
                  } else if (this.monsterId === 'mountain_monster1') {
                    return this.monsterName = 'Goblin';
                  } else if (this.monsterId === 'mountain_monster2') {
                    return this.monsterName = 'Were-goat';
                  } else if (this.monsterId === 'mountain_monster3') {
                    return this.monsterName = 'Mountain Troll';
                  } else if (this.monsterId === 'mountain_monster4') {
                    return this.monsterName = 'Gargoyle';
                  } else if (this.monsterId === 'mountain_monster5') {
                    return this.monsterName = 'Snow Cat';
                  } else if (this.monsterId === 'mountain_monster6') {
                    return this.monsterName = 'Yeti';
                  } else if (this.monsterId === 'mountain_monster7') {
                    return this.monsterName = 'Griffon';
                  } else if (this.monsterId === 'mountain_monster8') {
                    return this.monsterName = 'Dire Eagle';
                  } else if (this.monsterId === 'mountain_monster9') {
                    return this.monsterName = 'Ice Giant';
                  } else if (this.monsterId === 'mountain_monster10') {
                    return this.monsterName = 'Iron Dragon';
                  } else if (this.monsterId === 'swamp_monster1') {
                    return this.monsterName = 'Rootbeast';
                  } else if (this.monsterId === 'swamp_monster2') {
                    return this.monsterName = 'Plague Fly';
                  } else if (this.monsterId === 'swamp_monster3') {
                    return this.monsterName = 'Swamp Ape';
                  } else if (this.monsterId === 'swamp_monster4') {
                    return this.monsterName = 'Vine Creeper';
                  } else if (this.monsterId === 'swamp_monster5') {
                    return this.monsterName = 'Bunyip';
                  } else if (this.monsterId === 'swamp_monster6') {
                    return this.monsterName = 'Wood Nymph';
                  } else if (this.monsterId === 'swamp_monster7') {
                    return this.monsterName = 'Killer Croc';
                  } else if (this.monsterId === 'swamp_monster8') {
                    return this.monsterName = 'Grootslang';
                  } else if (this.monsterId === 'swamp_monster9') {
                    return this.monsterName = 'Moss Dragon';
                  } else if (this.monsterId === 'swamp_monster10') {
                    return this.monsterName = 'Hydra';
                  } else {
                    return this.monsterName = '';
                }
            },

            // when a monster is generated, generate a monster starting health value, depending on which level (1-10) they are
            getMonsterStartingHealth() {
                if (this.monsterId === 'desert_monster1') {
                return this.monsterStartingHealth = this.getRandomValue(50, 200); 
                } else if (this.monsterId === 'desert_monster2') {
                return this.monsterStartingHealth = this.getRandomValue(100, 300);
                } else if (this.monsterId === 'desert_monster3') {
                return this.monsterStartingHealth = this.getRandomValue(150, 400);
                } else if (this.monsterId === 'desert_monster4') {
                return this.monsterStartingHealth = this.getRandomValue(250, 500);
                } else if (this.monsterId === 'desert_monster5') {
                return this.monsterStartingHealth = this.getRandomValue(300, 600);
                } else if (this.monsterId === 'desert_monster6') {
                return this.monsterStartingHealth = this.getRandomValue(350, 700);
                } else if (this.monsterId === 'desert_monster7') {
                return this.monsterStartingHealth = this.getRandomValue(500, 850);
                } else if (this.monsterId === 'desert_monster8') {
                return this.monsterStartingHealth = this.getRandomValue(600, 900);
                } else if (this.monsterId === 'desert_monster9') {
                return this.monsterStartingHealth = this.getRandomValue(700, 1000);
                } else if (this.monsterId === 'desert_monster10') {
                return this.monsterStartingHealth = this.getRandomValue(1000, 3000);
                } else if (this.monsterId === 'forest_monster1') {
                    return this.monsterStartingHealth = this.getRandomValue(50, 200); 
                  } else if (this.monsterId === 'forest_monster2') {
                    return this.monsterStartingHealth = this.getRandomValue(100, 300);
                  } else if (this.monsterId === 'forest_monster3') {
                    return this.monsterStartingHealth = this.getRandomValue(150, 400);
                  } else if (this.monsterId === 'forest_monster4') {
                    return this.monsterStartingHealth = this.getRandomValue(250, 500);
                  } else if (this.monsterId === 'forest_monster5') {
                    return this.monsterStartingHealth = this.getRandomValue(300, 600);
                  } else if (this.monsterId === 'forest_monster6') {
                    return this.monsterStartingHealth = this.getRandomValue(350, 700);
                  } else if (this.monsterId === 'forest_monster7') {
                    return this.monsterStartingHealth = this.getRandomValue(500, 850);
                  } else if (this.monsterId === 'forest_monster8') {
                    return this.monsterStartingHealth = this.getRandomValue(600, 900);
                  } else if (this.monsterId === 'forest_monster9') {
                    return this.monsterStartingHealth = this.getRandomValue(700, 1000);
                  } else if (this.monsterId === 'forest_monster10') {
                    return this.monsterStartingHealth = this.getRandomValue(1000, 3000);
                  } else if (this.monsterId === 'grassland_monster1') {
                    return this.monsterStartingHealth = this.getRandomValue(50, 200); 
                  } else if (this.monsterId === 'grassland_monster2') {
                    return this.monsterStartingHealth = this.getRandomValue(100, 300);
                  } else if (this.monsterId === 'grassland_monster3') {
                    return this.monsterStartingHealth = this.getRandomValue(150, 400);
                  } else if (this.monsterId === 'grassland_monster4') {
                    return this.monsterStartingHealth = this.getRandomValue(250, 500);
                  } else if (this.monsterId === 'grassland_monster5') {
                    return this.monsterStartingHealth = this.getRandomValue(300, 600);
                  } else if (this.monsterId === 'grassland_monster6') {
                    return this.monsterStartingHealth = this.getRandomValue(350, 700);
                  } else if (this.monsterId === 'grassland_monster7') {
                    return this.monsterStartingHealth = this.getRandomValue(500, 850);
                  } else if (this.monsterId === 'grassland_monster8') {
                    return this.monsterStartingHealth = this.getRandomValue(600, 900);
                  } else if (this.monsterId === 'grassland_monster9') {
                    return this.monsterStartingHealth = this.getRandomValue(700, 1000);
                  } else if (this.monsterId === 'grassland_monster10') {
                    return this.monsterStartingHealth = this.getRandomValue(1000, 3000);
                  } else if (this.monsterId === 'jungle_monster1') {
                    return this.monsterStartingHealth = this.getRandomValue(50, 200); 
                  } else if (this.monsterId === 'jungle_monster2') {
                    return this.monsterStartingHealth = this.getRandomValue(100, 300);
                  } else if (this.monsterId === 'jungle_monster3') {
                    return this.monsterStartingHealth = this.getRandomValue(150, 400);
                  } else if (this.monsterId === 'jungle_monster4') {
                    return this.monsterStartingHealth = this.getRandomValue(250, 500);
                  } else if (this.monsterId === 'jungle_monster5') {
                    return this.monsterStartingHealth = this.getRandomValue(300, 600);
                  } else if (this.monsterId === 'jungle_monster6') {
                    return this.monsterStartingHealth = this.getRandomValue(350, 700);
                  } else if (this.monsterId === 'jungle_monster7') {
                    return this.monsterStartingHealth = this.getRandomValue(500, 850);
                  } else if (this.monsterId === 'jungle_monster8') {
                    return this.monsterStartingHealth = this.getRandomValue(600, 900);
                  } else if (this.monsterId === 'jungle_monster9') {
                    return this.monsterStartingHealth = this.getRandomValue(700, 1000);
                  } else if (this.monsterId === 'jungle_monster10') {
                    return this.monsterStartingHealth = this.getRandomValue(1000, 3000);
                  } else if (this.monsterId === 'marshes_monster1') {
                    return this.monsterStartingHealth = this.getRandomValue(50, 200); 
                  } else if (this.monsterId === 'marshes_monster2') {
                    return this.monsterStartingHealth = this.getRandomValue(100, 300);
                  } else if (this.monsterId === 'marshes_monster3') {
                    return this.monsterStartingHealth = this.getRandomValue(150, 400);
                  } else if (this.monsterId === 'marshes_monster4') {
                    return this.monsterStartingHealth = this.getRandomValue(250, 500);
                  } else if (this.monsterId === 'marshes_monster5') {
                    return this.monsterStartingHealth = this.getRandomValue(300, 600);
                  } else if (this.monsterId === 'marshes_monster6') {
                    return this.monsterStartingHealth = this.getRandomValue(350, 700);
                  } else if (this.monsterId === 'marshes_monster7') {
                    return this.monsterStartingHealth = this.getRandomValue(500, 850);
                  } else if (this.monsterId === 'marshes_monster8') {
                    return this.monsterStartingHealth = this.getRandomValue(600, 900);
                  } else if (this.monsterId === 'marshes_monster9') {
                    return this.monsterStartingHealth = this.getRandomValue(700, 1000);
                  } else if (this.monsterId === 'marshes_monster10') {
                    return this.monsterStartingHealth = this.getRandomValue(1000, 3000);
                  } else if (this.monsterId === 'mountain_monster1') {
                    return this.monsterStartingHealth = this.getRandomValue(50, 200); 
                  } else if (this.monsterId === 'mountain_monster2') {
                    return this.monsterStartingHealth = this.getRandomValue(100, 300);
                  } else if (this.monsterId === 'mountain_monster3') {
                    return this.monsterStartingHealth = this.getRandomValue(150, 400);
                  } else if (this.monsterId === 'mountain_monster4') {
                    return this.monsterStartingHealth = this.getRandomValue(250, 500);
                  } else if (this.monsterId === 'mountain_monster5') {
                    return this.monsterStartingHealth = this.getRandomValue(300, 600);
                  } else if (this.monsterId === 'mountain_monster6') {
                    return this.monsterStartingHealth = this.getRandomValue(350, 700);
                  } else if (this.monsterId === 'mountain_monster7') {
                    return this.monsterStartingHealth = this.getRandomValue(500, 850);
                  } else if (this.monsterId === 'mountain_monster8') {
                    return this.monsterStartingHealth = this.getRandomValue(600, 900);
                  } else if (this.monsterId === 'mountain_monster9') {
                    return this.monsterStartingHealth = this.getRandomValue(700, 1000);
                  } else if (this.monsterId === 'mountain_monster10') {
                    return this.monsterStartingHealth = this.getRandomValue(1000, 3000);
                  } else if (this.monsterId === 'swamp_monster1') {
                    return this.monsterStartingHealth = this.getRandomValue(50, 200); 
                  } else if (this.monsterId === 'swamp_monster2') {
                    return this.monsterStartingHealth = this.getRandomValue(100, 300);
                  } else if (this.monsterId === 'swamp_monster3') {
                    return this.monsterStartingHealth = this.getRandomValue(150, 400);
                  } else if (this.monsterId === 'swamp_monster4') {
                    return this.monsterStartingHealth = this.getRandomValue(250, 500);
                  } else if (this.monsterId === 'swamp_monster5') {
                    return this.monsterStartingHealth = this.getRandomValue(300, 600);
                  } else if (this.monsterId === 'swamp_monster6') {
                    return this.monsterStartingHealth = this.getRandomValue(350, 700);
                  } else if (this.monsterId === 'swamp_monster7') {
                    return this.monsterStartingHealth = this.getRandomValue(500, 850);
                  } else if (this.monsterId === 'swamp_monster8') {
                    return this.monsterStartingHealth = this.getRandomValue(600, 900);
                  } else if (this.monsterId === 'swamp_monster9') {
                    return this.monsterStartingHealth = this.getRandomValue(700, 1000);
                  } else if (this.monsterId === 'swamp_monster10') {
                    return this.monsterStartingHealth = this.getRandomValue(1000, 3000);
                  } else {
                    return this.monsterStartingHealth = null;
                }
            },

            // when a monster's starting health value is generated, set their initial health value to the same
            getMonsterHealth() {
                this.monsterHealth = this.monsterStartingHealth;
            },

            // when a monster is generated, determine how hard monster can hit, based on monster level            
            getMonsterHitAbility() {
                if (this.monsterId === 'desert_monster1') {
                return this.monsterHit = this.getRandomValue(5, 10); 
                } else if (this.monsterId === 'desert_monster2') {
                return this.monsterHit = this.getRandomValue(10, 15);
                } else if (this.monsterId === 'desert_monster3') {
                return this.monsterHit = this.getRandomValue(15, 20);
                } else if (this.monsterId === 'desert_monster4') {
                return this.monsterHit = this.getRandomValue(20, 25);
                } else if (this.monsterId === 'desert_monster5') {
                return this.monsterHit = this.getRandomValue(25, 30);
                } else if (this.monsterId === 'desert_monster6') {
                return this.monsterHit = this.getRandomValue(30, 35);
                } else if (this.monsterId === 'desert_monster7') {
                return this.monsterHit = this.getRandomValue(35, 40);
                } else if (this.monsterId === 'desert_monster8') {
                return this.monsterHit = this.getRandomValue(40, 45);
                } else if (this.monsterId === 'desert_monster9') {
                return this.monsterHit = this.getRandomValue(45, 50);
                } else if (this.monsterId === 'desert_monster10') {
                return this.monsterHit = this.getRandomValue(50, 60);
                } else if (this.monsterId === 'forest_monster1') {
                    return this.monsterHit = this.getRandomValue(5, 10); 
                  } else if (this.monsterId === 'forest_monster2') {
                    return this.monsterHit = this.getRandomValue(10, 15);
                  } else if (this.monsterId === 'forest_monster3') {
                    return this.monsterHit = this.getRandomValue(15, 20);
                  } else if (this.monsterId === 'forest_monster4') {
                    return this.monsterHit = this.getRandomValue(20, 25);
                  } else if (this.monsterId === 'forest_monster5') {
                    return this.monsterHit = this.getRandomValue(25, 30);
                  } else if (this.monsterId === 'forest_monster6') {
                    return this.monsterHit = this.getRandomValue(30, 35);
                  } else if (this.monsterId === 'forest_monster7') {
                    return this.monsterHit = this.getRandomValue(35, 40);
                  } else if (this.monsterId === 'forest_monster8') {
                    return this.monsterHit = this.getRandomValue(40, 45);
                  } else if (this.monsterId === 'forest_monster9') {
                    return this.monsterHit = this.getRandomValue(45, 50);
                  } else if (this.monsterId === 'forest_monster10') {
                    return this.monsterHit = this.getRandomValue(50, 60);
                  } else if (this.monsterId === 'grassland_monster1') {
                    return this.monsterHit = this.getRandomValue(5, 10); 
                  } else if (this.monsterId === 'grassland_monster2') {
                    return this.monsterHit = this.getRandomValue(10, 15);
                  } else if (this.monsterId === 'grassland_monster3') {
                    return this.monsterHit = this.getRandomValue(15, 20);
                  } else if (this.monsterId === 'grassland_monster4') {
                    return this.monsterHit = this.getRandomValue(20, 25);
                  } else if (this.monsterId === 'grassland_monster5') {
                    return this.monsterHit = this.getRandomValue(25, 30);
                  } else if (this.monsterId === 'grassland_monster6') {
                    return this.monsterHit = this.getRandomValue(30, 35);
                  } else if (this.monsterId === 'grassland_monster7') {
                    return this.monsterHit = this.getRandomValue(35, 40);
                  } else if (this.monsterId === 'grassland_monster8') {
                    return this.monsterHit = this.getRandomValue(40, 45);
                  } else if (this.monsterId === 'grassland_monster9') {
                    return this.monsterHit = this.getRandomValue(45, 50);
                  } else if (this.monsterId === 'grassland_monster10') {
                    return this.monsterHit = this.getRandomValue(50, 60);
                  } else if (this.monsterId === 'jungle_monster1') {
                    return this.monsterHit = this.getRandomValue(5, 10); 
                  } else if (this.monsterId === 'jungle_monster2') {
                    return this.monsterHit = this.getRandomValue(10, 15);
                  } else if (this.monsterId === 'jungle_monster3') {
                    return this.monsterHit = this.getRandomValue(15, 20);
                  } else if (this.monsterId === 'jungle_monster4') {
                    return this.monsterHit = this.getRandomValue(20, 25);
                  } else if (this.monsterId === 'jungle_monster5') {
                    return this.monsterHit = this.getRandomValue(25, 30);
                  } else if (this.monsterId === 'jungle_monster6') {
                    return this.monsterHit = this.getRandomValue(30, 35);
                  } else if (this.monsterId === 'jungle_monster7') {
                    return this.monsterHit = this.getRandomValue(35, 40);
                  } else if (this.monsterId === 'jungle_monster8') {
                    return this.monsterHit = this.getRandomValue(40, 45);
                  } else if (this.monsterId === 'jungle_monster9') {
                    return this.monsterHit = this.getRandomValue(45, 50);
                  } else if (this.monsterId === 'jungle_monster10') {
                    return this.monsterHit = this.getRandomValue(50, 60);
                  } else if (this.monsterId === 'marshes_monster1') {
                    return this.monsterHit = this.getRandomValue(5, 10); 
                  } else if (this.monsterId === 'marshes_monster2') {
                    return this.monsterHit = this.getRandomValue(10, 15);
                  } else if (this.monsterId === 'marshes_monster3') {
                    return this.monsterHit = this.getRandomValue(15, 20);
                  } else if (this.monsterId === 'marshes_monster4') {
                    return this.monsterHit = this.getRandomValue(20, 25);
                  } else if (this.monsterId === 'marshes_monster5') {
                    return this.monsterHit = this.getRandomValue(25, 30);
                  } else if (this.monsterId === 'marshes_monster6') {
                    return this.monsterHit = this.getRandomValue(30, 35);
                  } else if (this.monsterId === 'marshes_monster7') {
                    return this.monsterHit = this.getRandomValue(35, 40);
                  } else if (this.monsterId === 'marshes_monster8') {
                    return this.monsterHit = this.getRandomValue(40, 45);
                  } else if (this.monsterId === 'marshes_monster9') {
                    return this.monsterHit = this.getRandomValue(45, 50);
                  } else if (this.monsterId === 'marshes_monster10') {
                    return this.monsterHit = this.getRandomValue(50, 60);
                  } else if (this.monsterId === 'mountain_monster1') {
                    return this.monsterHit = this.getRandomValue(5, 10); 
                  } else if (this.monsterId === 'mountain_monster2') {
                    return this.monsterHit = this.getRandomValue(10, 15);
                  } else if (this.monsterId === 'mountain_monster3') {
                    return this.monsterHit = this.getRandomValue(15, 20);
                  } else if (this.monsterId === 'mountain_monster4') {
                    return this.monsterHit = this.getRandomValue(20, 25);
                  } else if (this.monsterId === 'mountain_monster5') {
                    return this.monsterHit = this.getRandomValue(25, 30);
                  } else if (this.monsterId === 'mountain_monster6') {
                    return this.monsterHit = this.getRandomValue(30, 35);
                  } else if (this.monsterId === 'mountain_monster7') {
                    return this.monsterHit = this.getRandomValue(35, 40);
                  } else if (this.monsterId === 'mountain_monster8') {
                    return this.monsterHit = this.getRandomValue(40, 45);
                  } else if (this.monsterId === 'mountain_monster9') {
                    return this.monsterHit = this.getRandomValue(45, 50);
                  } else if (this.monsterId === 'mountain_monster10') {
                    return this.monsterHit = this.getRandomValue(50, 60);
                  } else if (this.monsterId === 'swamp_monster1') {
                    return this.monsterHit = this.getRandomValue(5, 10); 
                  } else if (this.monsterId === 'swamp_monster2') {
                    return this.monsterHit = this.getRandomValue(10, 15);
                  } else if (this.monsterId === 'swamp_monster3') {
                    return this.monsterHit = this.getRandomValue(15, 20);
                  } else if (this.monsterId === 'swamp_monster4') {
                    return this.monsterHit = this.getRandomValue(20, 25);
                  } else if (this.monsterId === 'swamp_monster5') {
                    return this.monsterHit = this.getRandomValue(25, 30);
                  } else if (this.monsterId === 'swamp_monster6') {
                    return this.monsterHit = this.getRandomValue(30, 35);
                  } else if (this.monsterId === 'swamp_monster7') {
                    return this.monsterHit = this.getRandomValue(35, 40);
                  } else if (this.monsterId === 'swamp_monster8') {
                    return this.monsterHit = this.getRandomValue(40, 45);
                  } else if (this.monsterId === 'swamp_monster9') {
                    return this.monsterHit = this.getRandomValue(45, 50);
                  } else if (this.monsterId === 'swamp_monster10') {
                    return this.monsterHit = this.getRandomValue(50, 60);
                  } else {
                    return this.monsterHit = null;
                }
            }
        }
    })