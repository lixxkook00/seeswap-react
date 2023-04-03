export const showSideBar = () => {
    return {
        type: 'ACTVE',
        payload: true,
    }
}

export const hiddenSideBar = () => {
    return {
        type: 'HIDDEN',
        payload: true,
    }
}