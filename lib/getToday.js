export const getToday = () =>{
    let today = new Date();
    const time = today.toLocaleTimeString("it-IT");
    today =
      today.getFullYear() +
      "-" +
      today.toLocaleDateString(undefined, { month: "2-digit" }) +
      "-" +
      today.toLocaleDateString(undefined, { day: "2-digit" });

      return today;
}