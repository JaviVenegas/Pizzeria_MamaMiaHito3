import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import pizzas from './pizzas'; 

const Home = () => {
    return (
        <div className="container-fluid p-0">
            <Header />
            <div className="row">
                {pizzas.map((pizza) => (
                    <div key={pizza.id} className="col-12 col-md-4">
                        <CardPizza pizza={pizza} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
