import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';


// Import DB connection and routes
import connectDB from './db/database.js'; 
import apiRoutes from './routes/index.js'
// Load environment variables
dotenv.config();

// Initialize the Express app
const app = express();

// Set the port from environment variable or default to 3001
app.set('port', process.env.PORT || 3001);

// Connect to the database
connectDB();

// Use morgan for logging requests
app.use(morgan('dev'));

// Parse incoming JSON requests and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set the main route (could be a placeholder or homepage)
app.get("/", (req, res) => {
    res.json(() => {
        message: "This is a demo in the API"
    })
});

// Use the API routes for taxonomic records
app.use('/api', apiRoutes);

// Export the app for use in other files (like in your server setup)
export default app;
