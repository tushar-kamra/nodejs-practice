const { MongoClient } = require("mongodb");

const URI =
    "mongodb+srv://tusharkamra:Mongodb123@node-mongo-practice.gjwzk.mongodb.net/";

const client = new MongoClient(URI);

const dbName = "node-mongo-test";

async function main() {
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);

    const collection = db.collection("user");

    const data = {
        _id: 1,
        firstname: "Shivam",
        lastName: "Kamra",
        city: "Delhi",
        age: 26,
        country: "India",
    };

    const insertResult = await collection.insertOne(data);
    console.log("Inserted documents =>", insertResult);

    const findResult = await collection.find({}).toArray();
    console.log("Found documents =>", findResult);

    return "done.";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
