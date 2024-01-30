const Form = () => {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Please enter your details</h2>
      {/* <label htmlFor="">This is a label text</label> */}
      <p>All fields are Mandatory</p>
      <span title="close">X</span>
      <img src="https://via.placeholder.com/150" alt="logo" />
      <div data-testid="custom">After the sumbit form our exe will reach out to you</div>
      <form>
        <label htmlFor="firstname">Firstname</label>
        <input id="firstname" type="textbox" name="firstname" placeholder="Firstname"/>

        <label htmlFor="comments">Comments</label>
        <textarea id="comments" name="firstname" />

        <label htmlFor="city">City</label>
        <input id="city" name="city" value="Mexico City" onChange={() => {}} />

        <label htmlFor="country">Country</label>
        <select id="country" name="country">
          <option value="india">India</option>
          <option value="united states">US</option>
        </select>

        <label htmlFor="agree">Agree to policy</label>
        <input type="checkbox" id="agree" name="agree" />

        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default Form;
