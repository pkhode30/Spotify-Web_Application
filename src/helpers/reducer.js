export const initialState ={
    user: null,
    //set null after debugging
    token: "BQAFgIuTU5qcJ1k_N3OiTwPa1A3QOTIi1N6v6FXFe7E77bGW66dqZzP7M5mbHfSNszioZXmmuXPpvt6tle0p6x78obzxprCHir4cQzBNBjvdJbm5i0AYu3yJSGZw2T34CDE8zbzKMSsojDSc-zMt6Otyvp9CR9U7D_0oAD48eazj2IeH9sb2",
    playlists: [],
    playying: false,
    item: null,

};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "SET_USER":
            return{
                ...state,
                user: action.user
            };
        
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            };
    
        default:
            return state;
    }
}

export default reducer;