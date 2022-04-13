
 
 const logger=(reducer)=>
 (preState, action)=>{
    console.group(action.type);
    console.log(preState);
    let newState= reducer(preState, action);
    console.log(newState);
    console.groupEnd();
    return newState;
    
 }


export default logger