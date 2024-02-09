import mssql from 'mssql';


export const sqlConfig={
    user: 'sa',
    password: '1234',
    database : 'rhyde',
    server: 'localhost',

    Pool: {
        max:10,
        min:0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false, 
        trustServerCertificate: false // change to true for local dev / self-signed certs
      }
}
console.log(sqlConfig);


let connect = async () => {
    try {
     
     let pool = await mssql.connect(sqlConfig)
 
     if (pool.connected) {
        console.log('connected');  
 
        let query = 'CREATE alter TABLE notebooks(title VARCHAR(100) NOT NULL, email VARCHAR(100)NOT NULL UNIQUE, content VARCHAR(15) UNIQUE )'
       
        const result = (await(await pool.connect()).query(query)).rowsAffected
 
        console.log(result);
 
        console.log('done');
       
       
 
     }else{
        console.log('not connected');
       
     }
 
    } catch (err) {
     
    }
   }
 
   connect()