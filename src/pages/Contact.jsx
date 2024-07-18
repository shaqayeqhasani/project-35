import React, { useEffect } from 'react';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import "leaflet/dist/leaflet.css";
import { Marker, Popup } from 'react-leaflet';
export default function Contact() {
  const position = [40.72512543641011, -74.16240067691241]
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return <>
 <section>
<div className='fs-1 fw-bold col-12 text-center py-5'>
Contact
</div>

</section>
  <section className='mb-4'>
<div className='container-fluid align-items-center '>
    <div className='row col-12'>
    <div className='col-12 col-lg-6'>
        <div className='col-lg-12 d-lg-flex'>
<div className='col-12 col-lg-6  m-1 fs-6  text-dark text-center p-3 phone mb-3'>
    <p className='fw-bold fs-4'>Phone</p>
    <p>+(323) 9847 3847 383</p>
    <p>+(434) 5466 5467 443</p>
    </div>
    <div className='col-12 col-lg-6  m-1 fs-6  text-dark text-center p-3 email mb-3'>
    <p className='fw-bold fs-4 '>Email</p>
    <p>Demoemail@gmail.com</p>
    <p>rafiqulislamsuvobd@gmail.com</p>
    </div>

        </div>
        <div className='col-12  address text-center'>
          <div><p className='fs-4 fw-bold'>Address</p>
            <p className='fs-6'>4517 Washington Ave. Manchester, Road 2342,
Kentucky 39495</p></div>
<div >
<MapContainer center={position} zoom={13} style={{ height: "300px" }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
</div>
        </div>
    </div>
    <div className='col-12 col-lg-6 form mt-3'>
    <form className='bg-white'>
        <div>
            <p className='text-center fs-3 fw-bold p-2'>Get In Touch</p>
        </div>
  <div className=" form-row m-4 ">
    <div className="col">
      <input type="text" className="form-control py-3 mb-3" placeholder="First Name*" />
    </div>
    <div className="col">
      <input type="text" className="form-control py-3 mb-3" placeholder="Last Name*" />
    </div>
   <div className="form-group py-3 mb-3">
    <label htmlFor="emailAddress">Email address</label>
    <input
      type="email"
      className="form-control"
      id="emailAddress"
      placeholder="Enter your email"
    />
  </div>
    <div className="col">
      <input type="text" className="form-control py-3 mb-3" placeholder="Subject*" />
    </div>
    <div className="col">
      <input type="text" className="form-control py-3 mb-3" placeholder="Message*" />
    </div>
  </div>
  

  <button type="submit" className="btn btn-dark text-white d-flex align-items-center mx-auto px-5">Send Now</button>
</form>

    </div>
    </div>
</div>
  </section>
  </>
}
