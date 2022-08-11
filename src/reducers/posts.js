export const posts = (posts = [], action) => {

    switch (action.type) { 
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        case 'UPDATE':
        case 'LIKE':
            const updatedData = action.payload;
            const items = posts.map((post) => {
                if(post._id === updatedData._id){
                    return updatedData
                }
                return post

            })
            return items
        case 'DELETE':
            {
            const newList = posts.filter((item) => {
                return action.payload !== item._id
                })
            return newList;
            }
        default:
            return posts;
    }
}

export const postId = (id = null, action) => {
    switch (action.type) {
        case "SET":
            return action.payload
        default:
            return id;
    }
}
