import React, { useEffect, useState } from 'react'
import { Container, NavItem, Card, Button, Row, Col, link } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import apiDeputados from '../services/apiDeputados'

const Deputados = () => {

  const params = useParams()
  const [deputados, setDeputados] = useState([])
  const  [partidos, setPartidos] = useState([])

  useEffect(() => {

      apiDeputados.get('deputados').then(resultado => {
          setDeputados(resultado.data.dados)
      })

  }, [])

  useEffect(()=>{

    apiDeputados.get('/partidos?language=pt-BR').then(resultado=>{
        setPartidos(resultado.data.cast)    
    })
 
 },[])
  return (
      <div>
          <Container>
          <Row style={{width: '50%',}} className="g-1">
                <Col md={12}>
                    <Card>
                        <Card className="p-2 mx-2 my-2 btn text-dark bg-light">
                            <h1>Todos os Deputados</h1>
                        </Card>
                        <div>
                            <Row xs={0} md={1} xl={4} className="g-4">
                                {deputados.map(item => (
                                    <Col>
                                        <Container>
                                        <Card border="danger" style={{ width: '5rem' }}>
                                            <Card.Img variant="top" src={item.urlFoto}/>
                                            <Card.Text >{item.id}</Card.Text>

                                        </Card>
                                        </Container>
                                    </Col>
                                ))}
                            </Row>
                            </div>
                        </Card>
                        </Col>
                        </Row>
                        <br></br>
                        <Row style={{width: '50%'}} className="g-1">
                <Col md={12}>
                    <Card>
                        <Card className="p-2 mx-2 my-2 btn text-dark bg-light">
                            <h1>Todos os partidos</h1>
                        </Card>
                        <div>
                            <Row xs={0} md={1} xl={4} className="g-4">
                                {deputados.map(item => (
                                    <Col key={item.dados}>
                                        <Container>
                                        <Card border="danger" style={{ width: '5rem' }}>
                                            <Card.Img variant="top" src={item.urlfotos}/>
                                        </Card>
                                        </Container>
                                    </Col>
                                ))}
                            </Row>
                            </div>
                        </Card>
                        </Col>
                        </Row>
          </Container>
        </div>
)
}

export default Deputados