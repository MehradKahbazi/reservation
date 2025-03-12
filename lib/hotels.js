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

export const getTimes = () => {
  const stmt = db.prepare(`
    SELECT * FROM timetable
    `);
  return stmt.all();
};

export const storeTimes = (params) => {
  const existing = getTimes();
  console.log("existing", params);
  if (existing.length === 0) {
    const stmt = db.prepare(
      `
                INSERT INTO timetable (lunchstart, lunchend, dinnerstart, dinnerend)
                VALUES (?, ?, ?, ?)
                `
    );
    return stmt.run(
      params.lunchStart,
      params.lunchEnd,
      params.dinnerStart,
      params.dinnerEnd
    );
  } else {
    db.prepare(
      `
    UPDATE timetable SET lunchstart=? , lunchend=?, dinnerstart=?, dinnerend=?
    `
    ).run(
      params.lunchStart,
      params.lunchEnd,
      params.dinnerStart,
      params.dinnerEnd
    );
  }
};
