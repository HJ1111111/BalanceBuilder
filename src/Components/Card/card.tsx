
// const CardList = [
//     {
//     title: 'Substaion name',
//     alerttext:'Change detected - 08/06/23',
//     alerticon:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
//     <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99998 2.66667C5.05446 2.66667 2.66665 5.05448 2.66665 8C2.66665 10.9455 5.05446 13.3333 7.99998 13.3333C10.9455 13.3333 13.3333 10.9455 13.3333 8C13.3333 5.05448 10.9455 2.66667 7.99998 2.66667ZM1.33331 8C1.33331 4.3181 4.31808 1.33333 7.99998 1.33333C11.6819 1.33333 14.6666 4.3181 14.6666 8C14.6666 11.6819 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 8ZM7.99998 4.66667C8.36817 4.66667 8.66665 4.96514 8.66665 5.33333V8C8.66665 8.36819 8.36817 8.66667 7.99998 8.66667C7.63179 8.66667 7.33331 8.36819 7.33331 8V5.33333C7.33331 4.96514 7.63179 4.66667 7.99998 4.66667ZM7.33331 10.6667C7.33331 10.2985 7.63179 10 7.99998 10H8.00665C8.37484 10 8.67331 10.2985 8.67331 10.6667C8.67331 11.0349 8.37484 11.3333 8.00665 11.3333H7.99998C7.63179 11.3333 7.33331 11.0349 7.33331 10.6667Z" fill="#CC1D1D"/>
//   </svg>,
//     substationbtn: 'Go to substaion to review changes',
//     substationbtnicon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
//     <path fill-rule="evenodd" clip-rule="evenodd" d="M8.19528 3.5286C8.45563 3.26825 8.87774 3.26825 9.13809 3.5286L13.1381 7.5286C13.3984 7.78895 13.3984 8.21106 13.1381 8.47141L9.13809 12.4714C8.87774 12.7318 8.45563 12.7318 8.19528 12.4714C7.93493 12.2111 7.93493 11.7889 8.19528 11.5286L11.0572 8.66667H3.33335C2.96516 8.66667 2.66669 8.36819 2.66669 8C2.66669 7.63181 2.96516 7.33334 3.33335 7.33334H11.0572L8.19528 4.47141C7.93493 4.21106 7.93493 3.78895 8.19528 3.5286Z" fill="white"/>
//     </svg>,
//     },
// ]

import { CardList } from "./cardarray";

export const Card = () => {
return(
    <>
    {CardList.map((item, index) => (
        <div key={index}>
            <div className="SRcardframe">
              
            <div className="SRcard1">
                
            <div className="SRcardh1">{item.title}</div>
            <div className="statuslabel">
        {item.alerticon} {item.alerttext}</div>
        <div className="substationbutton">{item.substationbtn}
        {item.substationbtnicon}</div>
        <div className="card1bottom">
            <div className="regionxyz">Region XYZ</div>
        </div>
            </div>
        </div>
        </div>
    )
    
    )}
    </>
)
  };
  