import react from 'react'
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';

function Graph () {

    const data = [
        {x: "1998", y: 13000},
        {x: "1999", y: 16500},
        {x: "2000", y: 17250},
        {x: "2001", y: 19000}
      ];
    return (
        <div style={{width:'50%'}}>
            <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
                <VictoryLine interpolation="natural" data={data} />
            </VictoryChart>
        </div>
    )
}
export default Graph;