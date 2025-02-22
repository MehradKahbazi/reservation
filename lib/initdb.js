import sql from 'better-sqlite3';
const db = new sql('posts.db');

const createDb = () => {
  db.exec(
    `
        CREATE TABLE IF NOT EXISTS hotel (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            hotelname TEXT NOT NULL
        )
        `
  );

  db.exec(
    `
        CREATE TABLE IF NOT EXISTS passenger(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fullname TEXT NOT NULL,
            count TEXT NOT NULL,
            getlunch TEXT NOT NULL,
            usedlunch TEXT NOT NULL,
            getdinner TEXT NOT NULL,
            useddinner TEXT NOT NULL,
            arrivaldate TEXT NOT NULL,
            departuredate TEXT NOT NULL,
            reservationcode TEXT NOT NULL,
            hotel_id INTEGER,
            FOREIGN KEY(hotel_id)
                REFERENCES hotels (id)
            )
        `
  );

  db.exec(
    `
        CREATE TABLE IF NOT EXISTS user(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            password TEXT NOT NULL,
            role TEXT NOT NULL
            )
        `
  );
};

createDb();

export const storePassenger = (params) => {
    const hotelId = getHotels(params.id)
  const stmt = db.prepare(
    `
        INSERT INTO passenger (full_name, count, arrival_date, departuredate, reservationcode, hotel_id)
        VALUES (?,?,?,?,?,?)
            
        `
  );
  return stmt.run(...params);
};

export const getPassengers = () =>{
    const stmt = db.prepare(`
    SELECT * FROM passenger INNER JOIN hotel ON passenger.hotel_id = id
    `);
    return stmt.all()
}

export const storeHotels = (params) =>{
    console.log(params);
    const stmt = db.prepare(
        `
            INSERT INTO hotel (hotelname)
            VALUES (?)
            `
      )
      return stmt.run(params);
}

export const getHotels = (params) =>{
    const stmt = db.prepare(`
    SELECT * FROM hotel ${params && 'WHERE hotelname = ?'}
    `);
    return params ? stmt.get(params) :  stmt.all()
}


// storeHotels('new hotel')
