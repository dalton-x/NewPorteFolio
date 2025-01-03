
export const Steps = ({ job }) => { 
  console.log(job);
  
  return(
    <div className="timeline-item text-center">
      <h5>{job.date}</h5>
      <p>{job.entreprise}</p>
      <p>{job.type}</p>
      { job.activites.map((activite, index) =>(
        <div className="row"  key={'activite_'+index} >
          <div className="col-1">
            <i className="fa-solid fa-circle text-info me-1"></i>
          </div>
          <div className="col text-start">
              <p className="activite" >
                {activite}
              </p>
          </div>
        </div>
      ))

      }
    </div>
  )
}

export default Steps