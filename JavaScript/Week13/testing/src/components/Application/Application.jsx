const Application = () => {
  return (
    <>
      <h1>Job Application Form</h1>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name here" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio"></textarea>
        </div>
        <div>
          <label htmlFor="job-location">Job Location</label>
          <select id="job-location">
            <option value="">Select a Country</option>
            <option value="CA">Canada</option>
            <option value="AU">Australi</option>
            <option value="GB">United Kingdom</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I agreen to the conditions
          </label>
        </div>
      </form>
    </>
  );
};
export default Application;
