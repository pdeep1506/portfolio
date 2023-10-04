import inshort from '../../assets/inshort.png'
import quote from '../../assets/quote.png'
import libraryManagement from '../../assets/library_management.jpg'
import restaurent from '../../assets/restaurant.png'
import cryptohunter from '../../assets/cryptohunter.png'
import expense from '../../assets/expense.png';

const ProjectCardData = [
  {
    imgsrc: libraryManagement,
    title: "Library management",
    text: "Implemented a comprehensive Library Management system leveraging Nodejs, MongoDB, and Expressjs, enabling user roles (Admin, User, Staff, Librarian), user account creation, borrowing restrictions, penalty systems, and automated fine calculations",
   
    isLive:false,
    github:"https://github.com/pdeep1506/library_management.git"
  },
  {
    imgsrc: restaurent,
    title: "Restaurant",
    text: "I designed and developed a modern, responsive website for a  restaurant,  as part of my web development portfolio. This project showcases my skills in web design, user experience (UX) design, front-end development.",
   
    isLive:"https://restaurant-pdeep1506.netlify.app/",
    github:"https://github.com/pdeep1506/restaurant.git"
  },
  {
    imgsrc: inshort,
    title: "Inshore Clone",
    text: "Inshorts Clone is a web application that allows users to access and read news articles quickly and conveniently. Inspired by the popular Inshorts platform, this project provides a simplified and efficient way for users to stay informed about the latest news across various categories.",
   
    isLive:"https://inshortclone-pdeep1506.netlify.app/",
    github:"https://github.com/pdeep1506/inshort_clone.git"
  },
  // {
  //   imgsrc: expense,
  //   title: "Expense Tracker",
  //   text: "Thriving Facebook community and top-ranked podcast, Amy inspires a grounded, tangible and self-affirming sense of “Wow! I really can do this” for over 100,000 online entrepreneurs. Best-selling marketing courses",
  //   view: "https://www.youtube.com/watch?v=P8YuWEkTeuE",
  //   isLive:false,
  //   github:"https://github.com/pdeep1506/expenseTracker.git"
  // },
  {
    imgsrc: quote,
    title: "Quote Generator",
    text: "The Dynamic Quote Generator is a web-based application that generates inspirational and thought-provoking quotes for users. This project serves as an excellent addition to my portfolio, showcasing my skills in web development, front-end design, and API integration.",
    
    isLive:"https://randomquote-pdeep1506.netlify.app/",
    github:"https://github.com/pdeep1506/Quote-Generator-reactjs.git"
  },
  {
    imgsrc: cryptohunter,
    title: "Crypto-hunter",
    text: "Web application using ReactJS that allows users to track real-time data for 50 cryptocurrencies, including their current prices, price changes within the last 24 hours, and market cap",
  
    isLive:"https://crypto-hunter-pdeep1506.netlify.app/",
    github:"https://github.com/pdeep1506/crypto-hunter.git"
  },
];

export default ProjectCardData;
