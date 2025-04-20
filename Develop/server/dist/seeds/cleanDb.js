// src/seeds/cleanDb.ts
import models from '../models/index.js';
import connection from '../config/connection.js';
export default async function cleanDb(modelName, collectionName) {
    // 1️⃣ Grab & guard the model
    const model = models[modelName];
    if (!model) {
        console.warn(`⚠️  Model "${modelName}" not found — skipping clean.`);
        return;
    }
    // 2️⃣ Get the native Db from your Mongoose connection
    const db = connection.db;
    if (!db) {
        throw new Error('No database connection available');
    }
    try {
        // 3️⃣ Check if the collection exists
        const existing = await db
            .listCollections({ name: collectionName })
            .toArray();
        // 4️⃣ Drop if it does
        if (existing.length > 0) {
            console.log(`🗑  Dropping collection "${collectionName}"`);
            await db.dropCollection(collectionName);
        }
    }
    catch (err) {
        console.error('🔥 cleanDb error:', err);
        throw err;
    }
}
