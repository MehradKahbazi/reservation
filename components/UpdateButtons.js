import { updatePassenger } from "@/lib/initdb";

const UpdateButtons = ({ item }) => {
  const update = async(id, meal) => {
    "use server";
    console.log('test');
    updatePassenger(id, meal);
  };

  return (
    <form>
      <button
        className="btn btn-warning me-2"
        disabled={item.getlunch === "true" ? true : false}
        formAction={update.bind(null, item.passenger_id, "lunch")}
      >
        Lunch
      </button>
      <button
        className="btn btn-primary"
        disabled={item.getdinner === "true" ? true : false}
        formAction={update.bind(null, item.passenger_id, "dinner")}
      >
        Dinner
      </button>
    </form>
  );
};

export default UpdateButtons;
