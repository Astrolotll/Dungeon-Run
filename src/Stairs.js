import Entity from './Entity';
import Spawner from './Spawner';

class Stairs extends Entity {
    attributes = {
        name: 'Stairs', 
        colour: 'ivory', 
        ascii: '=', 
        offset: {x:2, y:2}
    }


Action(verb, world) {
    if(verb === 'bash') {
        world.addToHistory('You move down stairs to another floor...');
        world.createCellularMap();
        world.player.x = 0;
        world.player.y = 0;
        world.moveToSpace(world.player);
        world.entities = world.entities.filter(e => e === world.player);
        let spawner = new Spawner(world);
        spawner.spawnLoot(5);
        spawner.spawnMonster(6);
        spawner.spawnStairs(0.5);
        
        }
    }
}

export default Stairs;