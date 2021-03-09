import axios from 'axios'
/*



interface IAppList {
    loading: boolean,
   Client: object ,
    error:string
}

const initialState: IAppList = {
    loading: true,
   Client: {},
    error: " "
}


const Update_client_Request = "Update_Client_Request"
const Update_client_Success = "Update_client_Success"
const Update_client_Failure = "Update_client_Failure"


const updateClientRequest = () => {
    return {
        type: Update_client_Request
    }
}
const updateClientSuccess = client => {
    return {
        type: Update_client_Success,
        payload: client
    }
}
const updateclientfailure = error => {
    return {
        type: Update_client_Failure,
        payload: error
    }
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case Fetch_client_Request:
            return {
                ...state,
                loading: true
            }
        case Fetch_client_Success:
            return {
              
                loading: false,
                Client: action.payload,
            
            }
        case Fetch_client_Failure:
            return {
                ...state,
                loading: false,
                client: {},
                error: action.payload

            }
        case Update_client_Request:
            return {
                ...state,
                loading: true
            }
        case Update_client_Success:
            return {
                ...state,
                loading: false,
                Client: action.payload,
            }
        case Update_client_Failure:
            return {
                ...state,
                loading: false,
                client: {},
                error: action.payload
            }


    }
}



/*
async function myFunction() {
    var elements = document.getElementById("form1").elements;
    var obj = {};
    for (var i = 0; i < elements.length; i++) {
        var item = elements.item(i);
        obj[item.name] = item.value;
    }
    console.log(obj);

    // var id = "2";
    const res = await axios.put('https://localhost:44325/api/Clients/2', obj);

    let data = res.data;
    console.log(data);

}
export const getData = () => {
    return dispatch=> {
        dispatch(fetchClientRequest);
       /* axios.get('https://localhost:44325/api/Clients/2')
            .then(response => {
                const client = response.data
                console.log(client)
                dispatch(fetchClientSuccess(client))

            }).catch(error => {
                dispatch(fetchclientfailure(error.message))
            });
    };
};

export default Reducer;
*/
const ini = {
    Mark: 30,
    loading: true,
    Client: {},
    error:""
}

const Fetch_client_Request = "Fetch_Client_Request"
const Fetch_client_Success = "Fetch_client_Success"
const Fetch_client_Failure = "Fetch_client_Failure"

const fetchClientRequest = () => {
   
    return {
        type: Fetch_client_Request
      
    };
};
export function add() {
    return {
        type:"Add"
    }
}

const fetchClientSuccess = client => {

    return {
        type: Fetch_client_Success,
        payload: client
    }
}
const fetchclientfailure = error => {
    return {
        type: Fetch_client_Failure,
        payload: error
    }
}

export function getClient() {
    console.log("hi");
    return (dispatch) => {
        dispatch(fetchClientRequest());
       axios.get('https://localhost:44325/api/Clients/2')
            .then(res => { console.log(res.data); dispatch(fetchClientSuccess(res.data)) })
            .catch(

                err => dispatch(fetchclientfailure(err))
            );
    }
}

const ClientReducer = (state = ini, action) => {
    switch (action.type) {
        case 'Add':
            return {
                ...state,
                Mark: state.Mark + 1,
                loading: false,
                Client: {name:"om"}
            }
        case Fetch_client_Request:
            return {
                ...state,
                loading: true
            }
        case Fetch_client_Success:
            return {

                loading: false,
                Client: action.payload,

            }
        case Fetch_client_Failure:
            return {
                ...state,
                loading: false,
                client: {},
                error: action.payload

            }
        default:
            return state;
    }
}

export default ClientReducer;
