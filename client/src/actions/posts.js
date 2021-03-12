 import * as api from '../api';

//  action creators 
export const getPost = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts(); 
        
        dispatch({type: 'FETCH_ALL', payload: data });

    } catch (error) {
        console.log(error);
    }
};


export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE' , payload: data })
    } catch (error) {
        console.log(error);
    }
};


// so we created actions which will help up in getting the data from the api that we have created. 
// actions is an object which 