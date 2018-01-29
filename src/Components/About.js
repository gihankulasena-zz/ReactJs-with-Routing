import React, { Component } from 'react';

import Button from 'material-ui/Button';
import ModeEditIcon from 'material-ui-icons/ModeEdit';

class About extends Component {
    // Constructor is responsible for setting up props and setting initial stte
    constructor(props) {
        // Pass props to the parent component
        super(props);
        // Set initial state
        this.state = {
            // State needed
            cars: []
        };
    }

    componentDidMount() {
        // Static data
        const data = [
            {
                id: 1,
                name: 'Honda Accord Crosstour',
                year: '2010',
                model: 'Accord Crosstour',
                make: 'Honda',
                media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
                price: '$16,811'

            },
            {
                id: 2,
                name: 'Mercedes-Benz AMG GT Coupe',
                year: '2016',
                model: 'AMG',
                make: 'Mercedes Benz',
                media: 'http://media.ed.edmunds-media.com/mercedes-benz/amg-gt/2016/oem/2016_mercedes-benz_amg-gt_coupe_s_fq_oem_1_717.jpg',
                price: '$138,157'

            },
            {
                id: 3,
                name: 'BMW X6 SUV',
                year: '2016',
                model: 'X6',
                make: 'BMW',
                media: 'http://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_1_717.jpg',
                price: '$68,999'
            },
            {
                id: 4,
                name: 'Ford Edge SUV',
                year: '2016',
                model: 'Edge',
                make: 'Ford',
                media: 'http://media.ed.edmunds-media.com/ford/edge/2016/oem/2016_ford_edge_4dr-suv_sport_fq_oem_6_717.jpg',
                price: '$36,275'
            },
            {
                id: 5,
                name: 'Dodge Viper Coupe',
                year: '2017',
                model: 'Viper',
                make: 'Dodge',
                media: 'http://media.ed.edmunds-media.com/dodge/viper/2017/oem/2017_dodge_viper_coupe_acr_fq_oem_3_717.jpg',
                price: '$123,890'
            }
        ];
        // Update state
        this.setState({ cars: data });
    }

    render() {
        // Map through cars and return linked cars
        const carNode = this.state.cars.map((car) => {
            return (
                <div>
                    <a
                        href="#"
                        className="list-group-item"
                        key={car.id}>
                        {car.name}
                    </a>&nbsp;&nbsp;&nbsp;
                <Button fab mini color="primary" aria-label="edit"><ModeEditIcon /></Button>
                    <br />
                </div>
            )
        });
        return (
            <div>
                <h1>About page</h1>
                <div className="list-group">
                    {carNode}
                </div>

            </div>
        );
    }
}

export default About