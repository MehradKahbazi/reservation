import { revalidatePath } from "next/cache";
import db from "./initdb";

export const storePassenger = (params) => {
    const checkIn = new Date(params.arrDate.replace(/-/g, "/"));
    const checkout = new Date(params.depDate.replace(/-/g, "/"));
    const timeDiff = Math.abs(checkout.getTime() - checkIn.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    const stmt = db.prepare(
      `
            INSERT INTO passenger (passenger_id, fullname, count, arrivaldate, departuredate, reservationcode, hotel_id, getlunch, usedlunch, getdinner, useddinner, alloweddays)
            VALUES (@id, @fullname, @count, @arrivaldate, @departuredate, @reservationcode, @hotel_id, @getlunch, @usedlunch, @getdinner, @useddinner, @alloweddays)
  
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
      alloweddays: diffDays,
    });
  };
  
  export const getPassengers = () => {
    const stmt = db.prepare(`
      SELECT * FROM passenger INNER JOIN hotel ON passenger.hotel_id = hotel.hotel_id
      `);
    return stmt.all();
  };
  
  export const getLogs = () => {
    const stmt = db.prepare(`
        SELECT * FROM logs
        `);
    return stmt.all();
  };
  
  
  
  export const updatePassenger = (userId, meal) => {
    const stmt = db.prepare(
      `
        SELECT * FROM passenger WHERE passenger_id = ?
        `
    );
    let today = new Date();
    const time = today.toLocaleTimeString("it-IT");
    today =
      today.getFullYear() +
      "-" +
      today.toLocaleDateString(undefined, { month: "2-digit" }) +
      "-" +
      today.toLocaleDateString(undefined, { day: "2-digit" });
  
      const item = stmt.get(userId);
      console.log(today);
      if (
      meal === "lunch" &&
        time > "14:00:00" &&
        time < "17:00:00" &&
      item.alloweddays &&
      today !== item.lastlunch &&
      today < item.departuredate
    ) {
      item.getlunch = "true";
      item.lastlunch = today;
      item.usedlunch = (+item.usedlunch + +item.count).toString();
      db.prepare(
        `
      UPDATE passenger SET lastlunch = ?, getlunch = ?, usedlunch = ? WHERE passenger_id = ?
      
    `
      ).run(item.lastlunch, item.getlunch, item.usedlunch, userId);
  
      db.prepare(
        `
          INSERT INTO logs(userid, username, total, usedlunch , date)
          VALUES (?, ?, ?, ?, ?)
          `
      ).run(userId, item.fullname, +item.count*2 ,item.usedlunch, today);
      revalidatePath("/", "layout");
      return 'success'
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
      item.useddinner = (+item.useddinner + +item.count).toString();
      const update = db
        .prepare(
          `
      UPDATE passenger SET lastdinner = ?, getdinner = ?, useddinner = ? WHERE passenger_id = ?
      
    `
        )
        .run(item.lastdinner, item.getdinner, item.useddinner, userId);
      db.prepare(
        `
          INSERT INTO logs(userid, username, total, useddinner , date)
          VALUES (?, ?, ?, ?, ?)
          `
      ).run(userId,item.fullname, +item.count*2, item.useddinner, today);
      revalidatePath("/", "layout");
      return 'success';
    } else {
      return "not allowed";
    }
    
  };