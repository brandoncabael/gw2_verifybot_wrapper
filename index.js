var Account = require('./src').Account;

var apiKey = '94DED817-8967-6241-B66D-16A00122CC1E9DE25164-77D5-4B2D-A096-17BDDA93D2AD';

var account = new Account(apiKey);



var afterLoad = (err) => {
    if (err) {
        // oh fuck
    } else {
        console.log('in callback', account.data.guilds);
        console.log('in callback', account.data.world);
        var world = account.getworld()
        world.load((err) => {
            console.log(world.data);
        })
    }
};

account.load(afterLoad);

console.log('after load', account.data.guilds);