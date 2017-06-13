var Client = require('node-rest-client').Client;
var World = require('./World');

class Account {
    constructor(apiKey) {
        this.client = new Client();
        this.apiKey = apiKey;
        this.data = {};
        this.args = {
            headers: {
                "Authorization": `Bearer ${this.apiKey}`
            }
        };
    }

    load(callback) {
        if (typeof callback !== 'function') {
            throw new Error('Callback must be a function');
        }

        this.client.get("https://api.guildwars2.com/v2/account", this.args, (data, response) => {
            this.data = data;

            if (!data.id) {
                return callback('Missing Account ID!');
            } else if (!data.name) {
                return callback('Missing Account Name!');
            } else {
                return callback();
            }
        });
    }

    getworld() {
        return new World(this.data.world)
    }
}

module.exports = Account;