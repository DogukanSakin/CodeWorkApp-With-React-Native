export default (state,action) =>{
    switch (action.type) {
        
        case "ADD_FAVORITE":
            const {favoritedJobs} = action.payload;
            return {
                ...state,
                favoritedJobs: [...state.favoritedJobs, favoritedJobs],
            };
        case "REMOVE_FAVORITE":
            return {
                favoritedJobs:[...state.favoritedJobs.filter(removedJob=>removedJob!==action.payload.removedJob)]
            };
            

        default: return state; 
    }
}