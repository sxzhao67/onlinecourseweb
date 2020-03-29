import {request} from "./request";

  export function getHomeMuItidata() {
    return request({
      url:'/TUserController/selectAll'
    })



}
