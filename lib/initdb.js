import sql from "better-sqlite3";
const db = new sql("data.db");

const createDb = () => {
  db.exec(
    `
        CREATE TABLE IF NOT EXISTS hotel (
            hotel_id INTEGER PRIMARY KEY AUTOINCREMENT,
            hotelname TEXT NOT NULL
        )
        `
  );

  db.exec(
    `
        CREATE TABLE IF NOT EXISTS passenger(
            passenger_id text PRIMARY KEY,
            fullname TEXT NOT NULL,
            count TEXT NOT NULL,
            getlunch TEXT NOT NULL,
            usedlunch TEXT NOT NULL,
            getdinner TEXT NOT NULL,
            useddinner TEXT NOT NULL,
            arrivaldate TEXT NOT NULL,
            departuredate TEXT NOT NULL,
            reservationcode TEXT NOT NULL,
            hotel_id INTEGER
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
  console.log(params);
  const stmt = db.prepare(
    `
        INSERT INTO passenger (passenger_id, fullname, count, arrivaldate, departuredate, reservationcode, hotel_id, getlunch, usedlunch, getdinner, useddinner)
        VALUES (@id, @fullname, @count, @arrivaldate, @departuredate, @reservationcode, @hotel_id, @getlunch, @usedlunch, @getdinner, @useddinner)
            
        `
  );
  
  return stmt.run({
    id: crypto.randomUUID(),
    fullname: params.passengerName,
    count: params.count,
    arrivaldate: params.arrDate,
    departuredate: params.depDate,
    reservationcode: params.code,
    hotel_id: params.hotel,
    getlunch: "false",
    usedlunch: "0",
    getdinner: "false",
    useddinner: "0",
  });
};

export const getPassengers = () => {
  const stmt = db.prepare(`
    SELECT * FROM passenger INNER JOIN hotel ON passenger.hotel_id = hotel.hotel_id
    `);
  return stmt.all();
};

export const storeHotels = (params) => {
  console.log(params);
  const stmt = db.prepare(
    `
            INSERT INTO hotel (hotelname)
            VALUES (?)
            `
  );
  return stmt.run(params);
};

export const getHotels = (params) => {
  const stmt = db.prepare(`
    SELECT * FROM hotel ${params && "WHERE hotelname = ?"}
    `);
  return params ? stmt.get(params) : stmt.all();
};

// storeHotels('new hotel')
