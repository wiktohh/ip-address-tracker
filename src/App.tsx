import React, { useState } from 'react';
import axios from 'axios'
import Map from "./Map"
import InfoSection from './components/InfoSection';

import { MapContainer} from 'react-leaflet';

import {Header, H1, Form, Input, Button} from "./styles/App.styles"
import 'leaflet/dist/leaflet.css'
import './App.css';

import { ReactComponent as ArrowIcon } from './assets/icon-arrow.svg';

function App() {

  const defaultInformation = {
    ip: '8.8.8.8',
    location: {
      country: 'US',
      region: 'California',
      city: 'Mountain View',
      lat: 37.40599,
      lng: -122.078514,
      postalCode: '94043',
      timezone: '-07:00',
      geonameId: 5375481,
    },
    domains: ['0d2.net', '003725.com', '0f6.b0094c.cn', '007515.com', '0guhi.jocose.cn'],
    as: {
      asn: 15169,
      name: 'Google LLC',
      route: '8.8.8.0/24',
      domain: 'https://about.google/intl/en/',
      type: 'Content',
    },
    isp: 'Google LLC',
  };

  const [input, setInput] = useState<string>("");
  const [info, setInfo] = useState(defaultInformation)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const DOMAIN_REGEX = /^([\S]+\.)[\S]+$/;
  const IP_REGEX = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/;


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let isDomain = null

    if (DOMAIN_REGEX.test(input)) isDomain = true;
    if (IP_REGEX.test(input)) isDomain = false;

    if(isDomain === null){
      console.log("nie dziala");
      return; 
    }

    console.log(input);
    const res = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_Te8eTEKo9BxEJzfDEbMA5uGBc50mL&${isDomain ? 'domain' : 'ipAddress'}=${input}`)
    setInfo(res.data)

  }
  

  return (
    <>
      <Header style={{width:"100vw", height:"30vh"}}>
        <H1>IP Address Tracker</H1>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder='Search for any IP address or domain' name="address" value={input} onChange={handleOnChange}/>
          <Button type="submit"><ArrowIcon/></Button>
        </Form>
        <InfoSection info={info}/>
      </Header>
      <main>
      <MapContainer zoomControl={false} style={{width:"100vw", height:"70vh"}}>
            <Map info={info} />
      </MapContainer>
      </main>
    </>
  );
}


export default App;
