const { MongoClient, ObjectId } = require("mongodb");
const url = 'mongodb://localhost:27017';
const dbName = 'College';
const client = new MongoClient(url);

async function connectDB(){
    try{
        await client.connect();
        console.log('Successfully connected to database');
    }
    catch(err)
    {
        console.log('Error in connecting to database',err);
    }
}
async function insertStudent(student)
{
    const db=client.db(dbName);
    try{
        const result= await db.collection('student').insertOne(student);
        console.log(`Student with id ${result.insertedID} inserted succesfully`);
    }
    catch(err)
    {
        console.log('Error in inserting student',err);
    }
}
async function updateStudent(){
    const db=client.db(dbName);
    try{
        const result= await db.collection('student').updateOne(
            { _id: new ObjectId('6a3213e36c146bb75aa790a1')},
            { $set: { dept : "ISE" }}
        );
        console.log(`Student data updated succesfully`);
    }
    catch(err){
        console.log('Error in updating student',err);
    }
}

async function findStudents() {
    const db=client.db(dbName);
    try{
        const students= await db.collection('student').find({}).toArray();
        console.log('Students found successfully', students);
    }
    catch(err)
    {
        console.log('Error in finding students', err);
    }
}
async function deleteStudent(Id){
    const db=client.db(dbName);
    try{
        const result = await db.collection('student').deleteOne(
            { _id: new ObjectId(Id)}
        );
        console.log(`Student with id ${Id} deleted successfully`);
    }
    catch(err){
        console.log('Error in deleting student', err)
    }
}

connectDB().then(async()=>
{
    const example={
        name:"Arjun",
        age:20,
        dept: "CSE",
        age: 19
    };
    await insertStudent(example);
    await updateStudent();
    await findStudents();
    await deleteStudent('694357471d0cc8c4a22fc838');
    client.close();
})