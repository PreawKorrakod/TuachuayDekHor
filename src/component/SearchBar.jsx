import React,{useState} from "react";
import "./SearchBar.scoped.css";
import {Col, Form} from "reactstrap";
import {AiOutlineSearch} from 'react-icons/ai';

const names = [
    'Terrell Conn',
    'Janet Kuvalis',
    'Donald Pfeffer',
    'Natalie Walker',
    'Iris Botsford',
    'Billie Wilderman',
    'Carlton Keebler',
    'Carroll Ryan',
    'Barry Padberg',
    'Essie Adams',
]

const Searchbar = () => {

    const [searchQuery, setSearchQuery] = useState('')

    const filteredNames = names.filter((name) =>
        name.trim().toLowerCase().includes(searchQuery.trim().toLowerCase()),
    )


    return <Col lg='12'>
        <div className="search__bar">
            <Form className="d-flex align-items-center from__grop gap-2">
                <span>
                <AiOutlineSearch size={25} className="search__icon"/>
                </span>
                <input type="text" placeholder="what do you want to know?" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            </Form>
            {filteredNames.map((name) => {
                return <p className="result">{name}</p>
            })}
        </div>
    </Col>
};

export default Searchbar;