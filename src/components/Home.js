import React from 'react'

function Home() {
  return (
    <div className='container my-3'>

      <h3> ADD YOUR NOTE</h3>

      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>

        <button type="submit" className="btn btn-primary">ADD NOTES</button>
      </form>




      <h3 className='my-5'>YOUR NOTES IN DATA BASE</h3>

    </div>
  )
}

export default Home
