
export const ContactForm = () => {
  return (
    <div className="form-box">
      <h1>Add Detalis</h1>
      <form action="" className="form">
        <div className="form-item">
          <label htmlFor="" className="from-label">
            Name*
          </label>
          <input type="text" placeholder="Name" className="form-input" />
        </div>
        <div className="form-item">
          <label htmlFor="" className="from-label">
            Email Adders*
          </label>
          <input type="text" placeholder="Email" />
        </div>
        <div className="form-item">
          <label htmlFor="" className="from-label">
            Phone Number*
          </label>
          <input type="text" placeholder="Phone" />
        </div>
        <div className="form-item">
          <label htmlFor="" className="from-label">
            Enter Comment*
          </label>
          <textarea
            rows="8"
            type="textarea"
            placeholder="What would You Like To Discuss?"
          />
        </div>
        <button className="button">Submit</button>
      </form>
    </div>
  );
};
