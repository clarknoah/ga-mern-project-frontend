
const Utils = {
  setActiveUser:(handle)=>{
    localStorage.setItem('activeUser', handle);
  },
  setFollowing:(following)=>{
    localStorage.setItem("following",following);
    console.log(localStorage.getItem('following'));
  },
  unsetFollowing:()=>{
    localStorage.removeItem("following")
  }
}



export default Utils;
