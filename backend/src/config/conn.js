// config/conn.js
const Connection = async () => {
    // Check if the URL is defined
    if (!process.env.MONGODB_URl) {
        console.error("Error: MONGODB_URL is not defined in environment variables.");
        process.exit(1);
    }
    
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Database connected successfully at ${conn.connection.host}`);
    } 
    catch(err) {
        console.log("Error while connecting with the database", err.message);
        process.exit(1);
    }
}
export default Connection;
