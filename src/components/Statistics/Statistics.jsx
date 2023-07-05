import PropTypes from 'prop-types';
import StatItem from './StatItem';
import {Container, Title, Stats, StatPoint} from './Statistics.styled'


const Statistics = ({data}) => (    
    <Container>
        <Title className="title">Upload stats</Title>
        <Stats>
        {data.map(item=> (   
            <StatPoint key={item.id}>  
            <StatItem label={item.label} percentage={item.percentage}></StatItem>
            </StatPoint>  
        ))}
        </Stats>
    </Container>);


export default Statistics;

Statistics.propTypes = {
    data:PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.string.isRequired
    }))
}