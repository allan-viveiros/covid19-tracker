import React from 'react';

//Import files
import styles from './App.module.css';
import {Cards, Chart, CountryPicker} from './components';
import {fetchData} from './api';
import covidImage from './images/COVID19-information.png';


class App extends React.Component {
    state = {
        data: {},
        country: '',
    }
    
    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        //Fetch the data and set state
        const fetchedData = await fetchData(country);

        this.setState( {data: fetchedData, country: country} );
        

        //console.log(country);        
        //console.log(fetchedData);

    }

    render() {
        const {data, country} = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={covidImage} alt="COVID-19" />
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />                
            </div>
        )
    }
}

export default App;