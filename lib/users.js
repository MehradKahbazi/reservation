import db from "./initdb";

export const createUser = (email, password, role) => {
    console.log(email);
    const result = db
      .prepare(
        `
      INSERT INTO users (username, password, role) VALUES (?, ?, ?)
      `
      )
      .run(email, password, role);
  
    return result.lastInsertRowid;
  };
  export const getUsers = () =>{
    return db.prepare(
      `
        SELECT * FROM users 
        `
    ).all();
  }
  
  export const getUserByEmail = (email) => {
    return db
      .prepare(
        `
          SELECT * FROM users WHERE username = ?
          `
      )
      .get(email);
  };

  export const getAllUsers = () => {
    return db
      .prepare(
        `
          SELECT * FROM users
          `
      )
      .all();
  };