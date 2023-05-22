import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';




function FurnitureView() {

    // //  api to access data
    //     const getData = async () => {
    //    const result = await fetch('/furniture.json')
    //    result.json().then(data => setRest(data.furnitures))
  
     
     // object create for useParams
    const params = useParams()
    console.log(params.id);


    const {restList}=useSelector(state=>state.reducer1)

    
    //find single restaurant data

    const singleRest=restList.find(i=>i.id==params.id)
    console.log(singleRest);

      
     useEffect(() => {
       
     }, [])
  
    


  return (
    <>
    {
     singleRest?
       ( <Row>
               <Col lg={6} md={6}> 
               <img className='w-75 container p-5' style={{ height:'500px' }} 
               src={singleRest.photograph}
               /> 
               </Col>
            <Col lg={6} md={6} className='mt-5 fs-3 p-3'>

            <ListGroup>
              <ListGroup.Item> <h2 className='text-warning'> {singleRest.name}</h2> </ListGroup.Item>
              <ListGroup.Item> Price <h5 > {singleRest.Price}</h5> </ListGroup.Item>

              <ListGroup.Item> Description <h5>{singleRest.description}</h5> </ListGroup.Item>
             

            </ListGroup>

          
               </Col>
       </Row>):"" 
      }
    
        </>
  )
}

export default FurnitureView