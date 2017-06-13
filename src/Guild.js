var Client = require('node-rest-client').Client;

class Guild {
    constructor(guildID) {
        this.client = new Client;
        this.guildID = guildID;
        this.data = {};
        this.args = {
            path: { id: this.guildID }
        }
    }

    load(callback) {
        this.client.get("https://api.guildwars2.com/v2/guild/${id}", this.args, (data, response) => {
            if (data) {
                this.data = data;
                return callback();
            }
            else {
                return callback('There must be at least guild');
            }
        })
    }
}

module.exports = Guild;