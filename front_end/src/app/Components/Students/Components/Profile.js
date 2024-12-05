import axios from 'axios';

export const Profile = () => {


    let studentdata;
    const response = axios.get('http://localhost:8080/Dashboard/student/1001');
    response.then(function(result) {
      studentdata = result.data
    });
    
    setTimeout(()=>{
      console.log(studentdata);
    },1000);
   

  return (
    <div className="body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-8">
            {/* section 1 */}
            <h3 className='text-light'>Student Details</h3>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-12">
                {/* section 2 */}
                <h3 className='text-light'>Guardian’s details</h3>
              </div>
              <div className="col-12">
                {/* section 3 */}
                <h3 className='text-light'>Hostel and Transpotation Details</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
