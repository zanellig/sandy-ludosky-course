const UploadForm = props => {
  return (
    props.isVisible && (
      <>
        <p className="display-6 text-center mb-3">Upload Stock Image</p>
        <div className="mb-5 d-flex align-items-center justify-content-center">
          <form
            className="mb-2"
            style={{ textAlign: 'left' }}
            onSubmit={props.handleSubmit}
          >
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="title"
                placeholder="title"
                aria-describedby="text"
                onChange={props.handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="file"
                className="form-control"
                name="file"
                onChange={props.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-success float-end">
              Save changes
            </button>
          </form>
        </div>
      </>
    )
  );
};
export default UploadForm;
