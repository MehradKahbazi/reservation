import { revalidatePath } from "next/cache";
import db from "./initdb";
import { getToday } from "./getToday";

export const storePassenger = (params) => {
  const checkIn = new Date(params.arrDate.replace(/-/g, "/"));
  const checkout = new Date(params.depDate.replace(/-/g, "/"));
  const timeDiff = Math.abs(checkout.getTime() - checkIn.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  const existing = db.prepare(`
  SELECT * FROM passenger WHERE reservationcode = ?
  `).get(params.code)
  console.log(existing);
    if(!existing){
      const stmt = db.prepare(
        `
                INSERT INTO passenger (passenger_id, fullname, count, arrivaldate, departuredate, reservationcode, hotel_id, getlunch, usedlunch, getdinner, useddinner, alloweddays, agency)
                VALUES (@id, @fullname, @count, @arrivaldate, @departuredate, @reservationcode, @hotel_id, @getlunch, @usedlunch, @getdinner, @useddinner, @alloweddays, @agency)
      
                `
      );
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
      stmt.run(newPassenger);
      return { message: 'success' , id: newPassenger.id, passengerId: "12345" };
    } else{
      return { message: 'existing', passenger: existing}
    }
};

export const getPassengers = () => {
  const stmt = db.prepare(`
      SELECT * FROM passenger INNER JOIN hotel ON passenger.hotel_id = hotel.hotel_id
      `);
  return stmt.all();
};

export const getLogs = (id) => {
  const stmt = db.prepare(`
        SELECT * FROM logs WHERE userid= ?
        `);
  return stmt.all(id);
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
  console.log(today);
  if (
    meal === "lunch" &&
    // time > "14:00:00" &&
    // time < "17:00:00" &&
    item.alloweddays &&
    today !== item.lastlunch &&
    today < item.departuredate
  ) {
    item.getlunch = "true";
    item.lastlunch = today;
    item.usedlunch = (+item.usedlunch || 0 + +count).toString();
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
    revalidatePath("/", "layout");
    return "success";
  } else if (
    meal === "dinner" &&
    time > "19:00:00" &&
    time < "22:00:00" &&
    item.alloweddays &&
    today !== item.lastdinner &&
    today < item.departuredate
  ) {
    item.lastdinner = today;
    item.getdinner = "true";
    item.useddinner = (+item.useddinner + +count).toString();
    const update = db
      .prepare(
        `
      UPDATE passenger SET lastdinner = ?, getdinner = ?, useddinner = ? WHERE passenger_id = ?
      
    `
      )
      .run(item.lastdinner, item.getdinner, item.useddinner, userId);
    db.prepare(
      `
          INSERT INTO logs(userid, username, useddinner , date, time, meal)
          VALUES (?, ?, ?, ?, ?, ?)
          `
    ).run(userId, item.fullname, count, today, time, meal);
    revalidatePath("/", "layout");
    return "success";
  } else {
    return "not allowed";
  }
};
