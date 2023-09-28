import React from 'react'
import "./CleaningDetails.scoped.css"
import { Container,Row,Col,Form,ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import img1 from '../../src/Assets/img_Clean/33.jpg'
import img2 from '../../src/Assets/img_Clean/44.jpg'
import img3 from '../../src/Assets/img_Clean/55.jpg'

const Data =[
  {
      id:1,
      imgSrc: img1,
      destTitle: 'ทำความสะอาดซิงค์ด้วยผลไม้',
      writer: 'Pikachu',
      heart : 123,
  },

  {
      id:2,
      imgSrc: img2,
      destTitle: 'ทำความสะอาดห้องแล้วห้องน่าอยู่ขึ้น3000%',
      writer: 'PumZaZa',
      heart : 124,
  },

  {
      id:3,
      imgSrc: img3,
      destTitle: 'รีวิวอุปกรณ์ทำความสะอาด',
      writer: 'Narak',
      heart : 423,
  },

]

const CleaningDetails = () => {

  const {id} = useParams()
  const data = Data.find(data => data.id == id) 

  return (
    <div>CleaningDetails</div>
  )
}

export default CleaningDetails