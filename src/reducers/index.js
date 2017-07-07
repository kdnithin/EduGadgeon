/*import { combineReducers } from 'redux'

const events=[
{id:1,registered:true,description:'Azure',topic:'Azure',presenterName:'jis',eventDate:'12/01/2017',topicImagePath:'http://lorempixel.com/400/200/'},
{id:2,registered:false,description:'React',topic:'react',presenterName:'nav',eventDate:'12/01/2017',topicImagePath:'http://lorempixel.com/400/200/'},
{id:3,registered:false,description:'REST',topic:'rest',presenterName:'sax',eventDate:'12/01/2017',topicImagePath:'http://lorempixel.com/400/200/'}]

const evenLists = (state = events, action) => {
   switch(action.type)
 {
     case 'REGISTER_COURSE':
          const updatedState = state.map(item=>{if(item.id===action.Id)
          {
              return { ...item, registered : action.registered }
          } 
          return item;
          })
          return updatedState;
     

    default :
      return state;
 }
}*/
//export default evenLists;

const defaultState = {
    isLoading: false,
    events : []
};


const evenLists = (state = defaultState, action) => {
   switch(action.type)
 {
     case 'REQUEST_COURSE_LIST':
            return { ...state, isLoading: true }
     
     case  'RECEIVE_COURSE_LIST' :

            return { ...state, 
                events : action.courses , isLoading : false }

     default :
      return state;
 }
}

export default evenLists;


