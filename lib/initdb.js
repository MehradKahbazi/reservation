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
            lastLunch TEXT,
            getdinner TEXT NOT NULL,
            useddinner TEXT NOT NULL,
            lastdinner TEXT,
            arrivaldate TEXT NOT NULL,
            departuredate TEXT NOT NULL,
            alloweddays INTEGER NOT NULL,
            reservationcode TEXT NOT NULL,
            hotel_id INTEGER,
            agency TEXT,
            couponid
            )
        `
  );

  db.exec(
    `
        CREATE TABLE IF NOT EXISTS logs(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            userid TEXT NOT NULL,
            usedlunch TEXT,
            useddinner TEXT,
            date TEXT,
            time TEXT NOT NULL,
            username TEXT NOT NULL,
            meal TEXT NOT NULL
            )
        `
  );
  db.exec(
    `
    CREATE TABLE IF NOT EXISTS timetable(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        dinnerstart TEXT NOT NULL,
        dinnerend TEXT NOT NULL,
        lunchstart TEXT NOT NULL,
        lunchend TEXT NOT NULL
        )
    `
  );

  db.exec(
    `
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        role TEXT NOT NULL
        )
    `
  );
  

  db.exec(`CREATE TABLE IF NOT EXISTS sessions (
    id TEXT NOT NULL PRIMARY KEY,
    expires_at INTEGER NOT NULL,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
  )`);
};

createDb();

// storeHotels('new hotel')
export default db;
