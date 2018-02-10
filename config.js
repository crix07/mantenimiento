module.exports = {
  db: process.env.MONGODB || 'mongodb://localhost:27017/upkeep',
  port: process.env.PORT || '3000'
}
