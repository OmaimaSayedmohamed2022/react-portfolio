import React from 'react';
import img from "../images/contact-img.svg";

import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Forms() {
  return (
    <form className='form'>
    
          <div className='form-con'>
            <h2 className='f-h2'>Get In Touch</h2>
            <MDBRow className='mb-4'>
              <MDBCol>
                <MDBInput className='bg-light' placeholder='First Name'/>
              </MDBCol>
              <MDBCol>
                <MDBInput placeholder='Last Name'/>
              </MDBCol>
            </MDBRow>
            <MDBRow className='mb-4'>
              <MDBCol>
                <MDBInput className='inp1' placeholder='Email Address'/>
              </MDBCol>
              <MDBCol>
                <MDBInput className='' placeholder='Phone Number'/>
              </MDBCol>
            </MDBRow>
            <MDBInput wrapperClass='mb-4'  rows={4} placeholder="Message" />
            <MDBBtn type='submit' className='btn btn-light mb-4' block > Sign in  </MDBBtn>
          </div>
       
  
          <img src={img} className='f-img' alt="Contact Image"/>
    
    
    </form>
  );
}


// import React from 'react';
// import img from '../images/contact-img.svg';
// import {
 
//   MDBInput,
//   MDBBtn
// } from 'mdb-react-ui-kit';

// export default function Forms() {
//   return (
//     <div className="container">
//       <form className='form'>
//         <div className='form-con'>
//           <h2 className='f-h2'>Get In Touch</h2>
//           <div className="row">
//             <div className="col-md-6 mb-4">
//               <MDBInput className='bg-light' placeholder='First Name' />
//             </div>
//             <div className="col-md-6 mb-4">
//               <MDBInput placeholder='Last Name' />
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-6 mb-4">
//               <MDBInput className='inp1' placeholder='Email Address' />
//             </div>
//             <div className="col-md-6 mb-4">
//               <MDBInput className='' placeholder='Phone Number' />
//             </div>
//           </div>
//           <MDBInput wrapperClass='mb-4' rows={4} placeholder="Message" />
//           <MDBBtn type='submit' className='btn btn-light mb-4' block>Sign in</MDBBtn>
//         </div>
//       </form>
//       <div className="row">
//         <div className="col-md-12">
//           <img src={img} className='f-img' alt="Contact Image" />
//         </div>
//       </div>
//     </div>
//   );
// }










