
const Utils = {
  setActiveUser:(handle)=>{
    localStorage.setItem('activeUser', handle);
  },
  getActiveUser:()=>{
    let user = localStorage.getItem('activeUser');
    console.log(user);
    return user;

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
