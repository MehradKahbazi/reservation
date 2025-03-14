import db from "./initdb";

export const createUser = (email, password, role) => {
    try{
      const result = db
      .prepare(
        `
      INSERT INTO users (username, password, role) VALUES (?, ?, ?)
      `
      )
      .run(email, password, role);
  
    return { status: "success", message: "User Created Successfully" }
    } catch(err){
      throw new Error(err)
    }
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

  export const resetPassword = (user, pass) => {
    try{
      const {username} = user;

    db
      .prepare(
        `
          UPDATE users SET password = ? WHERE username = ?
          `
      )
      .run(pass, username);
      return{ status: "success", message: "Password Changed" }
    } catch(err){
      throw new Error(err)
    }
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