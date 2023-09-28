import { pool } from '../config/database.js'
import '../config/dotenv.js'
import adoptionData from '../data/adoptions.js'

const createAdoptionsTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS adoptions;

    CREATE TABLE IF NOT EXISTS adoptions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        breed VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        contact VARCHAR(255) NOT NULL
    )
    `
    try {
        await pool.query(createTableQuery)
        console.log('🎉 adoptions table created successfully')
      } catch (err) {
        console.error('⚠️ error creating adoptions table', err)
      }
}

const seedAdoptionsTable = async () => {
    await createAdoptionsTable()

    adoptionData.forEach((adoption) => {
        const insertQuery = {
            text: 'INSERT INTO adoptions (name, breed, image, location, description, contact) VALUES ($1, $2, $3, $4, $5, $6)'
        }

        const values = [
            adoption.name,
            adoption.breed,
            adoption.image,
            adoption.location,
            adoption.description,
            adoption.contact,
        ]  

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting adoption', err)
                return
            }
        
            console.log(`✅ ${adoption.name} added successfully`)
        })
    })
}

seedAdoptionsTable()
