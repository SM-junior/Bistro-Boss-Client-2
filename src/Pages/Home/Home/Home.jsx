
import HandItem from '../../../Components/HandItem';
import Menu from '../../../Components/Menu/Menu';
import Slides from '../Slides';
import Category from './Category';

const Home = () => {
    return (
        <div>
            <Slides></Slides>
            <Category></Category>
            <HandItem title='Bistro Boss'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.'
            ></HandItem>
            <Menu></Menu>
        </div>
    );
};

export default Home;