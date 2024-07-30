import React from 'react'
import SlideCard from './SlideCard';
import Card from './Card';

const Home = () => {
    const computer$office = [
        {
          img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/1.1-Benefits-for-business-manage-more-616x498?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=808&qlt=100&fmt=png-alpha&fit=constrain",
          title: "Apple iPhone 14 Pro Max 256GB Deep Purple 5G With",
          AED: "4,740",
        },
        {
          img: "https://c8.alamy.com/comp/H9JE22/empty-office-with-desks-and-computers-H9JE22.jpg",
          title: "Apple iPhone 14 Pro Max 256GB Deep Purple 5G With",
          AED: "4,740",
        },
       
      ];
  return (
    <div>
        <section className='w-1/2'>
            <SlideCard computer$office={computer$office} />
        </section>
      
    </div>
  )
}

export default Home
