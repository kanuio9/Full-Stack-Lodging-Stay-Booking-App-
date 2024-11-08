const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listings");

const mongoUrl = process.env.ATLAS_URL;
console.log(mongoUrl);

main().then((res) => {
    console.log(mongoUrl);
    console.log("connected to DB");
}).catch((err) => {
    console.log("DB connection error");
});

async function main() {
    await mongoose.connect(mongoUrl);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "66eda51b9cefa8e714e469a9"}));
    await Listing.insertMany(initData.data)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log("Data cannont be inserted in DB");
        });
}

initDB();