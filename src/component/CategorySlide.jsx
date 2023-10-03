import React from 'react';
import "./CategorySlide.scoped.css"


const items = [
    {
        cover: 'https://picsum.photos/id/123/1200/400',
        id: 1,
        category: 'Cooking',
        title: 'Cooking',
    },
    {
        cover: 'https://picsum.photos/id/456/1200/400',
        id: 2,
        category: 'Cooking',
        title: 'Cooking',
    },
    {
        cover: 'https://picsum.photos/id/678/1200/400',
        id: 3,
        category: 'Cooking',
        title: 'Cooking',
    },
    {
        cover: 'https://picsum.photos/id/456/1200/400',
        id: 4,
        category: 'Cooking',
        title: 'Cooking',
    },
    {
        cover: 'https://picsum.photos/id/123/1200/400',
        id: 5,
        category: 'Cooking',
        title: 'Cooking',
    },
];

function CategorySlide() {
    return (
        <div>
            <section className='category'>
                <div className="content">
                    {
                        items.map(({ cover, id, category, title }) => {
                            return (
                                <div className="boxs" key={id}>
                                    <div className="box">
                                        <img src={cover} alt="" />
                                    </div>
                                    <div className="overlay">
                                        <h4>{category}</h4>
                                        <p>{title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default CategorySlide;