import db from "./initdb";

export const storeHotels = (params) => {
  try {
    const stmt = db.prepare(
      `
                INSERT INTO hotel (hotelname)
                VALUES (?)
                `
    );
    stmt.run(params);
    return { status: "success", message: "Hotel Successfully added" };
  } catch (err) {
    throw new Error(err);
  }
};

export const getHotels = (params) => {
  try {
    const stmt = db.prepare(`
      SELECT * FROM hotel ${params && "WHERE hotelname = ?"}
      `);
    return params ? stmt.get(params) : stmt.all();
  } catch (err) {
    throw new Error(err);
  }
};

export const getTimes = () => {
  try {
    const stmt = db.prepare(`
    SELECT * FROM timetable
    `);
    return stmt.all();
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteHotel = (hotelId) => {
  try {
    const stmt = db
      .prepare(
        `
          SELECT * FROM passenger WHERE hotel_id = ?
        `
      )
      .get(hotelId);
    if (!stmt) {
      db.prepare(
        `
    DELETE FROM hotel WHERE hotel_id = ?
    `
      ).run(hotelId);
      return { status: "success", message: "Hotel Successfully removed" };
    }
    return { status: "error", message: "Hotel assigned to passengers" };
  } catch (err) {
    throw new Error(err);
  }
};

export const storeTimes = (params) => {
  try {
    const existing = getTimes();
    console.log("existing", params);
    if (existing.length === 0) {
      const stmt = db.prepare(
        `
                INSERT INTO timetable (lunchstart, lunchend, dinnerstart, dinnerend)
                VALUES (?, ?, ?, ?)
                `
      );
      stmt.run(
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
      return { status: "success", message: "TimeTbale Successfully Changed" };
    }
  } catch (err) {
    throw new Error(err);
  }
};
