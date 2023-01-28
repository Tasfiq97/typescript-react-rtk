import React from 'react'
import { useParams } from 'react-router-dom';
import {useState,useEffect} from 'react'
import { Layout, Space ,Typography} from 'antd';
import { useLaunchesQuery } from '../../../app/api/api';
import { Launch } from '../../../app/models/models';

const {  Content } = Layout;
const { Text, Link } = Typography;

export default function DetailPage() {

  const { launchId } = useParams();

  const {data,error,isLoading,isFetching,isSuccess}=useLaunchesQuery();

  const filteredData=data?.filter(data=>data.flight_number.toString()===launchId);

  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '20px',
    color: 'black',
    backgroundColor: '#fff',
  };
  return (
    <Space direction="vertical" style={{ width: '80%' }} size={[0, 48]}>
    <Layout>
  
      <Content style={contentStyle}>
      {
        filteredData?.map((data)=>{
            return <div key={data.flight_number}>
              <img src={data.links.mission_patch_small} alt="" />
              <h1 >{data.mission_name}</h1>
                <p>launch year: <Text type="success">{data.launch_year}</Text></p>
                <p>rocket name:  <Text type="success">{data.rocket.rocket_name}</Text></p>
                <p>rocket type:  <Text type="success">{data.rocket.rocket_type}</Text></p>
                <p>Nationality:  <Text type="success">{data.rocket.second_stage.payloads[0].nationality}</Text></p>
                <p> <Text type="danger">{data.details}</Text></p>
                <p> window: <Text type="danger">{data.launch_window}</Text></p>
                <p> cores flight: <Text type="danger">{data.rocket.first_stage.cores[0].flight}</Text></p>
                <p> cores serial: <Text type="danger">{data.rocket.first_stage.cores[0].core_serial}</Text></p>
            </div>
        })
      }
      </Content>
    </Layout>
   
  </Space>
  )
}