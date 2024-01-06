
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';


const Home = () => {
    const coffees = useLoaderData();

    return (
        <div className='text-center md:m-24 p-4'>
            <div  className='mb-16'>
                <p>--- Sip & Savor ---</p>
                <h2 className='font-serif font-semibold text-3xl'>Our Popular Products </h2>
            </div>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    coffees.map(coffee => <CoffeeCard
                        key={coffee._id}
                        coffee={coffee}
                    ></CoffeeCard>)
                }
            </div>

        </div>
    );
};

export default Home;