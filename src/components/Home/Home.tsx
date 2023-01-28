import React from 'react';
import {useState,useEffect} from 'react'
import { useLaunchesQuery } from '../../app/api/api'
import { Spin } from 'antd';
import { Card, Col, Row } from 'antd';
import { Input, Space } from 'antd';
import { Launch } from '../../app/models/models';
import { Button } from 'antd';
import { Link } from "react-router-dom";

export default function Home() {
    const { Search } = Input;
    const { Meta } = Card;
    const [display,setDisplay]=useState<Launch[]>();
    const [lauch,setLaunch]=useState<Launch[]>();
    const {data,error,isLoading,isFetching,isSuccess}=useLaunchesQuery();
   
    useEffect(()=>{
        setLaunch(data);
           setDisplay(data);
    },[data])

     // search implementation using rocket name
    const onSearch = (e:any) => {
          const value=e.target.value;
        const searchVal=data?.filter(items=>items.rocket.rocket_name.toLowerCase().includes(value.toLowerCase()));
        setDisplay(searchVal);
    }
  
    //   rocket succes , upcoming handled by this 
    const handleFilter=(val:boolean)=>{
       const filteredVal=data?.filter(items=>items.launch_success===val);
       setDisplay(filteredVal);
    }

   
    
  return (
    
    
    <div style={{padding:"50px"}}>
       {/* search input  */}
        <div>
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onChange={onSearch}
    />
        </div>
         {/* filtering the data */}
        <div style={{marginTop:"30px"}} >
        <Space wrap>
    <Button onClick={()=>handleFilter(false)} type="primary" danger>
       failure
    </Button>
    <Button onClick={()=>handleFilter(true)}  type="primary" danger>
      Success
    </Button>
    <Button onClick={()=>handleFilter(true)}  type="primary" danger>
       Upcoming
    </Button>
  </Space>
        </div>
          {/* rendering data */}
        {
            isLoading && <div className="example">
            <Spin style={{marginTop:"40px"}} />
          </div>
        }
        {
            isSuccess && (
                <div style={{padding:"30px"}}  className="site-card-wrapper">
                <Row  gutter={12}>
                    {  
                    //  displaying data using rtk query fetch 
                        display?.map((launcher)=>{
                            return <Col style={{marginTop:"20px"}} span={6} key={launcher.flight_number}>
                            <Card
                            hoverable
                            style={{ width: 240 }}
                            key={launcher.flight_number}
                
                            cover={<img alt="example" src={launcher.links.mission_patch_small} />}
                          >
                            <Meta title={launcher.rocket.rocket_name}   />
                            <p>flight no :{launcher.flight_number}</p>
                            <p>Rocket name  :{launcher.rocket.rocket_name}</p>
                            <p>Nationality :{launcher.rocket.second_stage.payloads[0].nationality}</p>
                            <p>Launch site : {launcher.launch_site.site_name_long}</p>
                            <p>Launch success : <span>{launcher.launch_success===true?<span style={{color:"green",fontWeight:"bold"}}>true</span> : <span style={{color:"red",fontWeight:"bold"}}>false</span>}</span> </p>
                            <Space direction="vertical" style={{ width: '100%' }}>
                           <Link to={`/detail/${launcher.flight_number}`}>
                           <Button type="primary" ghost>
      Details
    </Button>
                           </Link>
    
  </Space>
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
