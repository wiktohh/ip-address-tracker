import { InfoInterface } from "../types/types";
import { Section, Title, Box } from "../styles/App.styles";

const InfoSection = ({info}: InfoInterface) => {
    return ( 
        <Section>
            <Box><Title>Ip address</Title>{info.ip}</Box>
            <Box><Title>Location</Title>{info.location.city}</Box>
            <Box><Title>Timezone</Title>{`UTC ${info.location.timezone}`}</Box>
            <Box><Title>Isp</Title>{info.location.region}</Box>
        </Section>
     );
}
 
export default InfoSection;