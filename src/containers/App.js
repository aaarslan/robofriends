import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

const App = () => {

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=> {setRobots(robots(users))})
    }, [])


    const onSearchChange = (event) => {
        setSearchfield(event.target.value)

    }


    const filteredRobots = robots
        .filter(robots => {
            return robots
                .name
                .toLowerCase()
                .includes(searchfield.toLowerCase());
        })
    return !robots.length
        ? <h1>Loading</h1>
        : (
            <div className='tc'>
                <h1 className='f2 light-blue code b--dashed b--light-purple br-pill'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>

        );
}

export default App;