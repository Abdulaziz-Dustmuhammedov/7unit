// import "./index.css";
// export default function MobileHeader() {
//   return (
//     <>
//       <div className="mobile header-wrap container">
//         <div className="pages">
//           {/* <img src={logoIcon} alt="" /> */}
//           <nav className="navbar ">
//             {/* <ul className="pages-list">
//               <li>
//                 <a href="/" className="pages-link">
//                   Услуги
//                 </a>
//               </li>
//               <li>
//                 <a href="/" className="pages-link">
//                   Проекты
//                 </a>
//               </li>
//               <li>
//                 <a href="/" className="pages-link">
//                   О нас
//                 </a>
//               </li>
//               <li>
//                 <a href="/" className="pages-link">
//                   Контакты
//                 </a>
//               </li>
//             </ul> */}

//             <ul className="pages-list">
//               <li>
//                 <a href="#priorty" className="pages-link">
//                   Услуги
//                 </a>
//               </li>

//               <li>
//                 <a href="#our-service" className="pages-link">
//                   Проекты
//                 </a>
//               </li>
//               <li>
//                 <a href="#our-work" className="pages-link">
//                   О нас
//                 </a>
//               </li>
//               <li>
//                 <a href="/" className="pages-link">
//                   Контакты
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//         <button className="cost">Узнать стоимость</button>
//       </div>
//     </>
//   );
// }
//
//
//
//
//
// import { useState } from "react";
// import "./index.css";

// export default function MobileHeader() {
//   const [isFixed, setIsFixed] = useState(true);

//   const handleLinkClick = () => {
//     setIsFixed(false);
//   };
//   return (
//     <>
//       {isFixed && (
//         <div className="mobile header-wrap container">
//           <div className="pages">
//             <nav className="navbar ">
//               <ul className="pages-list">
//                 <li>
//                   <a href="#priorty" className="pages-link">
//                     Услуги
//                   </a>
//                 </li>

//                 <li>
//                   <a href="#our-service" className="pages-link">
//                     Проекты
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#our-work" className="pages-link">
//                     О нас
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/" className="pages-link">
//                     Контакты
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//           <button className="cost">Узнать стоимость</button>
//         </div>
//       )}
//     </>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
import React, { useState } from "react";
import "./index.css";

export default function MobileHeader() {
  const [isFixed, setIsFixed] = useState(true); // Holatni boshqarish uchun

  const handleLinkClick = () => {
    setIsFixed(false); // Fixed holatni o'chiradi
  };

  return (
    <>
      {isFixed && ( // Agar isFixed true bo'lsa, component ko'rinadi
        <div className="mobile header-wrap container">
          <div className="pages">
            <nav className="navbar">
              <ul className="pages-list">
                <li>
                  <a
                    href="#priorty"
                    className="pages-link"
                    onClick={handleLinkClick}
                  >
                    Услуги
                  </a>
                </li>
                <li>
                  <a href="#our-service" className="pages-link">
                    Проекты
                  </a>
                </li>
                <li>
                  <a href="#our-work" className="pages-link">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="/" className="pages-link">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <button className="cost">Узнать стоимость</button>
        </div>
      )}
    </>
  );
}
