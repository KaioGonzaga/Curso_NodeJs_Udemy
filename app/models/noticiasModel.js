module.exports = function() {

    this.getNoticias = function(connection, callback) {
        connection.query("SELECT * FROM noticias", callback)
    }

    this.getNoticia = function(connection, callback) {
        connection.query("SELECT * FROM noticias where Id = 2", callback)
    }
    return this

}
