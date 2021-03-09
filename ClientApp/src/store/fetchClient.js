"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClient = exports.add = void 0;
var axios_1 = require("axios");
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
var ini = {
    Mark: 30,
    loading: true,
    Client: {},
    error: ""
};
var Fetch_client_Request = "Fetch_Client_Request";
var Fetch_client_Success = "Fetch_client_Success";
var Fetch_client_Failure = "Fetch_client_Failure";
var fetchClientRequest = function () {
    return {
        type: Fetch_client_Request
    };
};
function add() {
    return {
        type: "Add"
    };
}
exports.add = add;
var fetchClientSuccess = function (client) {
    return {
        type: Fetch_client_Success,
        payload: client
    };
};
var fetchclientfailure = function (error) {
    return {
        type: Fetch_client_Failure,
        payload: error
    };
};
function getClient() {
    console.log("hi");
    return function (dispatch) {
        dispatch(fetchClientRequest());
        axios_1.default.get('https://localhost:44325/api/Clients/2')
            .then(function (res) { console.log(res.data); dispatch(fetchClientSuccess(res.data)); })
            .catch(function (err) { return dispatch(fetchclientfailure(err)); });
    };
}
exports.getClient = getClient;
var ClientReducer = function (state, action) {
    if (state === void 0) { state = ini; }
    switch (action.type) {
        case 'Add':
            return __assign(__assign({}, state), { Mark: state.Mark + 1, loading: false, Client: { name: "om" } });
        case Fetch_client_Request:
            return __assign(__assign({}, state), { loading: true });
        case Fetch_client_Success:
            return {
                loading: false,
                Client: action.payload,
            };
        case Fetch_client_Failure:
            return __assign(__assign({}, state), { loading: false, client: {}, error: action.payload });
        default:
            return state;
    }
};
exports.default = ClientReducer;
//# sourceMappingURL=fetchClient.js.map