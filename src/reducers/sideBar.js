const initialState = false

const sideBar = (state = initialState , action) => {
    switch (action.type) {
        case 'ACTVE':
            console.log("sideBar status",state)
            return true

        case 'HIDDEN':
            return false

        default:
            return false;
    }
}

export { sideBar };