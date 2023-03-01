import { InfoInterface } from "../types/types";
import { Section, Title } from "../styles/App.styles";

const InfoSection = ({info}: InfoInterface) => {
    return ( 
        <Section>
            <div><Title>Ip address</Title>{info.ip}</div>
            <div><Title>Location</Title>{info.location.city}</div>
            <div><Title>Timezone</Title>{info.location.timezone}</div>
            <div><Title>Isp</Title>{info.location.region}</div>
        </Section>
     );
}
 
export default InfoSection;