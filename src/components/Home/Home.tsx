import React from 'react'
import { useLaunchesQuery } from '../../app/api/api'
import { Spin } from 'antd';
import { Card, Col, Row } from 'antd';
export default function Home() {
    const { Meta } = Card;
    const {data,error,isLoading,isFetching,isSuccess}=useLaunchesQuery();
    
  return (
    <div style={{padding:"50px"}}>
        {
            isLoading && <div className="example">
            <Spin />
          </div>
        }
        {
            isSuccess && (
                <div style={{padding:"30px"}}  className="site-card-wrapper">
                <Row  gutter={12}>
                    {
                        data?.map((launcher)=>{
                            return <Col style={{marginTop:"20px"}} span={6} key={launcher.flight_number}>
                            <Card
                            hoverable
                            style={{ width: 240 }}
                            key={launcher.flight_number}
                            cover={<img alt="example" src={launcher.links.mission_patch_small} />}
                          >
                            <Meta title={launcher.mission_name}   />
                            <p>flight no :{launcher.flight_number}</p>
                            <p>Rocket name  :{launcher.rocket.rocket_name}</p>
                            <p>Nationality :{launcher.rocket.second_stage.payloads[0].nationality}</p>
                            <p>Launch site : {launcher.launch_site.site_name_long}</p>
                          </Card>
                          </Col>
                            
                        
                        })
                    }
                </Row>
                </div>
            )
        }
    </div>
  )
}
