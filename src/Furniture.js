import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Furniture.css'
import { Link } from 'react-router-dom';
 import {getFurnitures}  from './actions/furnActions';
 import {useDispatch, useSelector} from 'react-redux';
 

function Furniture() {

    const dispatch= useDispatch()

  useEffect(() => {
    dispatch(getFurnitures)
  }, [])

  const {restList}=useSelector(state=>state.reducer1)
  console.log(restList);

     
  return (
    <Row className='ms-5 mb-5 p-2'>
    {
        restList.map(rest=>(
            <Col  className='p-2' lg={4} md={6}>
               <Link id='l1' to={`/viewFurniture/${rest.id}`}> 

           <Card  id="c1" className='mt-5 ms-5' style={{ width: '18rem' ,height:'450px'}}>
            <Card.Img variant="top" style={{height:'300px'}}  src={rest.photograph} />
            <Card.Body>
              <Card.Title>{rest.name}</Card.Title>
              <Card.Text style={{color:'Black'}}>
                {rest.Price}
              </Card.Text >
            </Card.Body>
            
          </Card>
          </Link>
          </Col>
            
        )
        )
    }
</Row>
  )
}

export default Furniture;