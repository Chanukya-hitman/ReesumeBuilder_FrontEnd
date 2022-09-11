import React from 'react'
import DefaultLayout from '../components/DefaultLayout'

import { Link } from 'react-router-dom';
import '../resources/templates.css'

import { Button } from "rsuite";


function Home() {


  return (
    <DefaultLayout >
      <div class="row" >
        <div class="col hometext" >

          <h1> The Resume that gets the job (done)</h1>
          <ul>
            <li> Standing out.</li>
            <li> Professional.</li>
            <li> Ready in minutes with our step-by-step builder.</li>
          </ul>
          <hr></hr>
          <h1>Instructions</h1>
          <ul>
            <li> Go to your Account</li>
            <li> Click on Profile Button </li>
            <li> Fill your details and click on Update</li>
            <li> Now click on Templates button in Home Page and choose your Template </li>
            <li> Hence your Resume is ready</li>
          </ul>

        </div>
        <div class="col">
          <img src="Profiling-rafiki.png" height={"90%"} width={"90%"}></img>
          <div className='buttonDiv' >

            <Link to='/home/templates-page'><Button className='buttonn'> See Templates </Button></Link>


          </div>
        </div>
      </div>

    </DefaultLayout>
  )
}

export default Home