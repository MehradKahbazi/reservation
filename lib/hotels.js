import db from "./initdb";

export const storeHotels = (params) => {
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