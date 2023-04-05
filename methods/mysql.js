//===============MYSQL METHOD================
module.exports = {
    name: 'mysql',
    async execute(proj,user,time,sign,conf){
        var mysql = require('mysql')
        var connection = mysql.createConnection({
            host: conf.MySQL.IP,
            user: conf.MySQL.Username,
            password: conf.MySQL.Password,
            database: conf.MySQL.Database
        })
        connection.connect()
        if(conf.MySQL.SQL_Query1 !== false){
            console.log(time+" | Running SQL Query | "+conf.MySQL.SQL_Query1.replaceAll('$user',user))
            connection.query(conf.MySQL.SQL_Query1.replaceAll('$user',user), function (error, results, fields){
                if (error) throw error
                console.log(time+" | Edit DB | Success!")
            })
        }
        if(conf.MySQL.SQL_Query2 !== false){
            console.log(time+" | Running SQL Query | "+conf.MySQL.SQL_Query2.replaceAll('$user',user))
            connection.query(conf.MySQL.SQL_Query2.replaceAll('$user',user), function (error, results, fields){
                if (error) throw error
                console.log(time+" | Edit DB | Success!")
            })
        }
        if(conf.MySQL.SQL_Query3 !== false){
            console.log(time+" | Running SQL Query | "+conf.MySQL.SQL_Query3.replaceAll('$user',user))
            connection.query(conf.MySQL.SQL_Query3.replaceAll('$user',user), function (error, results, fields){
                if (error) throw error
                console.log(time+" | Edit DB | Success!")
            })
        }
        connection.end()
    }
}