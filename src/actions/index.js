
/*export const RegisterCourse = (Id) => {
  return {
    type: 'REGISTER_COURSE',
    registered : true,
    Id
  };
};*/


export const RequestCourseList = ()=> {
  
  return {
    type: 'REQUEST_COURSE_LIST',
  };
};


export const RecieveCourseList = (json)=> {
  
  return {
    type: 'RECEIVE_COURSE_LIST',
    courses: json.data.children.map(child => child.data),
  };
};

let header = new Headers({
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'multipart/form-data'
});

let sentData={
    method:'GET',
    mode: 'cors',
    header: {'Access-Control-Allow-Origin':'*' ,'Content-Type': 'multipart/form-data' }
};
export const FetchCourseList = () => {

  return dispatch => {
    dispatch(RequestCourseList())
    return fetch(`https://www.reddit.com/r/reactjs.json`)
    .then(response => response.json())
    .then(json => dispatch(RecieveCourseList(json)))

  };

};


