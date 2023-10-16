import React from 'react'
import "./Search.scoped.css"
import Navbar from '../component/Nav'
import img3 from '../../src/Assets/slide3.png'
import img4 from '../../src/Assets/slide4.png'
import { BsHeartFill } from "react-icons/bs";
import { BiSolidPencil } from "react-icons/bi";
import { Link } from 'react-router-dom'


const Data = [
    {
        id: 1,
        imgSrc: img3,
        destTitle: '10 Awesome Books',
        writer: 'Narak',
        category: 'story',
        likes : 89,
    },

    {
        id: 2,
        imgSrc: img4,
        destTitle: 'Pasta by DekHor',
        writer: 'Sleep_more',
        category: 'cooking',
        likes : 20,
    },
]

function Search() {
    return (
        <div className="search">
            <header>
                <Navbar />
            </header>
            <div className="search_wrapper">
                <div className='headResult'>
                    <h2>
                        Result for
                    </h2>
                </div>
                <div className="showResult">
                    <div className="main_content">
                        {
                            Data.map(({ id, imgSrc, destTitle, writer, category,likes }) => {
                                return (
                                    <div className="singleDest">
                                        <div className="dastImage">
                                            <img src={imgSrc} alt="" />
                                        </div>
                                        <div className="destFooter">
                                            <div className="heart">
                                                <BsHeartFill size={25} className='like-icon' /><p>{likes}</p>
                                            </div>
                                            <div className="destText">
                                                <h4>
                                                    <Link to={`/${category}/${id}`}>{destTitle}</Link>
                                                </h4>
                                                <span className="userwrite">
                                                    <span className="name"><BiSolidPencil size={20} className="icon_pencil" />
                                                        {writer}
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search