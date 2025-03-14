'use client';
import { updateTime } from "@/actions/form-actions";
import { showToast } from "@/lib/toaster";


const UpdateTimeForm = ({times}) => {
   const handleUpdateTimes = async(formData) =>{
    const res = await updateTime(formData)
    showToast(res);
   }
    return ( <form id="survey-form" className="p-3" action={handleUpdateTimes}>
    <div className="row form-group mb-3">
      <div className="col-sm-3">
        <label id="name-label" className="control-label" htmlFor="lunchstart">
          Lunch Start Time:
        </label>
      </div>

      <div className="input-group col-sm-9">
        <div className="input-group-prepend"></div>
        <input
          id="lunchstart"
          type="time"
          className="form-control"
          placeholder="Please Enter Full Name"
          name="lunchstart"
          required
          defaultValue={times.lunchstart}
        />
      </div>
    </div>
    <div className="row form-group mb-3">
      <div className="col-sm-3">
        <label id="name-label" className="control-label" htmlFor="lunchend">
          Lunch End Time:
        </label>
      </div>

      <div className="input-group col-sm-9">
        <div className="input-group-prepend"></div>
        <input
          id="lunchend"
          type="time"
          className="form-control"
          placeholder="Please Enter Full Name"
          name="lunchend"
          required
          defaultValue={times.lunchend}
        />
      </div>
    </div>
    <div className="row form-group mb-3">
      <div className="col-sm-3">
        <label id="name-label" className="control-label" htmlFor="dinnerstart">
          Dinner Start Time:
        </label>
      </div>

      <div className="input-group col-sm-9">
        <div className="input-group-prepend"></div>
        <input
          id="dinnerstart"
          type="time"
          className="form-control"
          placeholder="Please Enter Full Name"
          name="dinnerstart"
          required
          defaultValue={times.dinnerstart}
        />
      </div>
    </div>
    <div className="row form-group mb-3">
      <div className="col-sm-3">
        <label id="name-label" className="control-label" htmlFor="dinnerend">
          Dinner End Time:
        </label>
      </div>

      <div className="input-group col-sm-9">
        <div className="input-group-prepend"></div>
        <input
          id="dinnerend"
          type="time"
          className="form-control"
          placeholder="Please Enter Full Name"
          name="dinnerend"
          required
          defaultValue={times.dinnerend}
        />
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-12 submit-button">
        <button
          type="submit"
          id="submit"
          className="btn btn-theme"
          aria-pressed="true"
        >
          Update Time Table
        </button>
      </div>
    </div>
  </form> );
}
 
export default UpdateTimeForm;