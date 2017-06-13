var Client = require('node-rest-client').Client;

class World {
    constructor(worldID) {
        this.worldID = worldID;
        this.client = new Client();
        this.data = {};
        this.args = {
            parameters: { ids: this.worldID }

        }
    }

    load(callback) {
        this.client.get("https://api.guildwars2.com/v2/worlds", this.args, (data, response) => {
            if (data.length === 1) {
                this.data = data[0];
                return callback();
            }            
            else {
                return callback('There must be 1 world');
            }
        })
    }
}

module.exports = World;