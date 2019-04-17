import React from 'react';

 const Rainbow = (WrappedComponent) =>{
   let  colors= ["red","green","blue","purple","black","violett"];
     let colorname = colors[Math.floor(Math.random() * 5)];
    
     let Class = 'center ' + colorname + '-text';
     console.log(Class);

    return (props) => {
        return ( <div className={Class}>
            <div>Hello Again Home!</div>
            <WrappedComponent />
        </div>)
    }
}
export default Rainbow;