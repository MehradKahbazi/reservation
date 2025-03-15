import db from "./initdb";
import { getToday } from "./getToday";
import { getTimes } from "./hotels";

export const storePassenger = (params, attempt) => {
  const checkIn = new Date(params.arrDate.replace(/-/g, "/"));
  const checkout = new Date(params.depDate.replace(/-/g, "/"));
  const timeDiff = Math.abs(checkout.getTime() - checkIn.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  const newPassenger = {
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
    alloweddays: diffDays,
    agency: params.agency,
  };
  newPassenger.couponid = newPassenger.id.slice(0, 6);
  console.log(newPassenger);
  const existing = db
    .prepare(
      `
  SELECT * FROM passenger WHERE reservationcode = ?
  `
    )
    .get(params.code);
  if (!existing || attempt) {
    try {
      const stmt = db.prepare(
        `
                INSERT INTO passenger (passenger_id, fullname, count, arrivaldate, departuredate, reservationcode, hotel_id, getlunch, usedlunch, getdinner, useddinner, alloweddays, agency, couponid)
                VALUES (@id, @fullname, @count, @arrivaldate, @departuredate, @reservationcode, @hotel_id, @getlunch, @usedlunch, @getdinner, @useddinner, @alloweddays, @agency, @couponid)
      
                `
      );

      stmt.run(newPassenger);
      return {
        message: "success",
        id: newPassenger.id,
        passengerId: newPassenger.couponid,
      };
    } catch (err) {
      throw new Error(err);
    }
  } else {
    return { message: "existing", passenger: existing };
  }
};

export const getPassengers = () => {
  try {
    const stmt = db.prepare(`
      SELECT * FROM passenger INNER JOIN hotel ON passenger.hotel_id = hotel.hotel_id
      `);
    return stmt.all();
  } catch (err) {
    throw new Error(err);
  }
};

export const getLogs = (id) => {
  try {
    const stmt = db.prepare(`
        SELECT * FROM logs WHERE userid= ?
        `);
    return stmt.all(id);
  } catch (err) {
    throw new Error(err);
  }
};

export const updatePassenger = (userId, meal, count) => {
    const stmt = db.prepare(
      `
          SELECT * FROM passenger WHERE passenger_id = ?
          `
    );
    const today = getToday();
    const time = new Date().toLocaleTimeString("it-IT");
    const item = stmt.get(userId);
    const [allowedTimes] = getTimes();
    Object.keys(allowedTimes).map((item) => (allowedTimes[item] += ":00"));
    if (
      meal === "lunch" &&
      time > allowedTimes.lunchstart + "00" &&
      time < allowedTimes.lunchend + "00" &&
      item.alloweddays &&
      today !== item.lastlunch &&
      today < item.departuredate
    ) {
      item.getlunch = "true";
      item.lastlunch = today;
      item.usedlunch = (+item.usedlunch || 0 + +count).toString();
      try {
        db.prepare(
          `
        UPDATE passenger SET lastlunch = ?, getlunch = ?, usedlunch = ? WHERE passenger_id = ?
        
      `
        ).run(item.lastlunch, item.getlunch, item.usedlunch, userId);

        db.prepare(
          `
            INSERT INTO logs(userid, username, usedlunch , date, time, meal)
            VALUES (?, ?, ?, ?, ?, ?)
            `
        ).run(userId, item.fullname, count, today, time, meal);

        return { status: "success", message: "Successfyly Updated" };
      } catch (err) {
        throw new Error(err);
      }
    } else if (
      meal === "dinner" &&
      time > allowedTimes.dinnerstart &&
      time < allowedTimes.dinnerend &&
      item.alloweddays &&
      today !== item.lastdinner &&
      today < item.departuredate
    ) {
      item.lastdinner = today;
      item.getdinner = "true";
      item.useddinner = (+item.useddinner + +count).toString();
      try {
        db.prepare(
          `
        UPDATE passenger SET lastdinner = ?, getdinner = ?, useddinner = ? WHERE passenger_id = ?
        
      `
        ).run(item.lastdinner, item.getdinner, item.useddinner, userId);
        db.prepare(
          `
            INSERT INTO logs(userid, username, useddinner , date, time, meal)
            VALUES (?, ?, ?, ?, ?, ?)
            `
        ).run(userId, item.fullname, count, today, time, meal);
        return { status: "success", message: "Successfyly Updated" };
      } catch (err) {
        throw new Error(err);
      }
    } else {
      return { status: "error", message: "Something went wrong" };
    }
  
};

