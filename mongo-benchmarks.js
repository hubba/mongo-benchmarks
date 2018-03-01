const moment = require('moment');
const mongoose = require('mongoose');
const Thing = require('./thing.model');

let startTime;
let times = 0;

function timePassed() {
    const diff = moment().diff(startTime);
    return [{ diff, times: ++times, adv: diff / times }];
}

const createDocuments = async () => {

    await Thing.deleteMany({});

    for (let i = 0; i < 10; ++i) {
        const aThing = await Thing.create({ name: 'test' });
        console.log('created ' + aThing._id);
    }

};

const benchmark = async () => {
    const cursor = Thing.find({}).sort({_id: 1}).cursor();

    for (let doc = await cursor.next(); doc !== null; doc = await cursor.next()) {
        console.log(doc._id, timePassed());
        await Thing.findById(doc._id);
    }
};

const run = async () => {
    try {
        mongoose.connect( <mongo-atlas-replica-set-uri> );

        await createDocuments();

        startTime = new Date();
        await benchmark();
        console.log(timePassed());
        process.exit(0);
    } catch (err) {
        console.error('An error occurred');
        console.error(err);
        process.exit(-1);
    }

};

run().catch(error => console.error(error.stack));

