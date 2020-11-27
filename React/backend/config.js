export default {
    DB_CONNECT: process.env.DB_CONNECT || "mongodb://localhost",
    JWT_SECRET: process.env.JWT_SECRET || 'scret',
}