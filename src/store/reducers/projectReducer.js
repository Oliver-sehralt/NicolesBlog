const initState = {
    projects: [
        {id: '1', title: 'mein erstes Bild', content: 'Mein erstes Acryl-Bild'},
        {id: '2', title: 'mein zweites Bild', content: 'Life Love Zyklus'},
        {id: '3', title: 'mein drittes Bild', content: 'Meine erste Arbeit mit dem Spachtel'}
    ]
}

const projectReducer =(state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
        console.log('created project', action.project);
        return state;
        case 'CREATE_PROJECT-ERROR':
            console.log('create project error', action.err);
            return state;
            default: 
            return state;
    }
}

export default projectReducer