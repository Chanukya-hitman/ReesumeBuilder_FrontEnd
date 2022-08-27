import React from 'react'
import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { useNavigate, useParams } from 'react-router-dom'
import DefaultLayout from '../../components/DefaultLayout'
import Template1 from './Template1'
import Template2 from './Template2'
import Template3 from './Template3'
import { Button } from 'antd'
import Template4 from './Template4'
import Template5 from './Template5'

function Templates() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const params = useParams()
  const navigate = useNavigate();
  const gettemplate = () => {

    switch (params.id) {
      case '1': {
        return <Template1 />;
      }
      case '2': {
        return <Template2 />;
      }
      case '3': {
        return <Template3 />;
      }
      case '4': {
        return <Template4 />;
      }
      case '5': {
        return <Template5 />;
      }


    }
  }
  return (
    <DefaultLayout>
      <div ref={componentRef}>{gettemplate()}
      </div>
      <div className='d-flex justify-content-end mx-5'>
        <Button className='back-btn' onClick={() => navigate('/home')}>Back</Button>
        <Button className='mx-5' onClick={handlePrint}>Download</Button>
      </div>

    </DefaultLayout>
  )
}

export default Templates