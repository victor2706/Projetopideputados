import React, { useEffect, useState } from 'react'
import { Container, NavItem, Card, Button, Row, Col, link } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiDeputados from '../services/apiDeputados'

const Deputados = () => {

  const [deputados, setDeputados] = useState([])

  useEffect(() => {

      apiDeputados.get('deputados').then(resultado => {
          setDeputados(resultado.data.dados)
      })

  }, [])



  return (
    <>
        <div>Todos os Deputados</div>

        <Row>
            {deputados.map(item => (
                <Col md={2} className="mb-3">
                    <Card>
                        <Card.Img variant="top" src={item.urlFoto} />
                    </Card>
                </Col>
            ))}
        </Row>
    </>

)
}

export default Deputados