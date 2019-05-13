import {
    FETCH_MEDS_FROM_DB,
} from '../actions/types';
import { db } from '../config';
import { fetchMedicines } from '../actions/fetchDataActions';

const INITIAL_STATE = {
    medicines: [],
    // loading: 'false',
};

export default (state = INITIAL_STATE, action) => {
    // console.log("ACTION: "+action.payload);
    switch (action.type) {
        case FETCH_MEDS_FROM_DB:
            // console.log('THE ACTION: '+action.payload);
            return { ...state, medicines: action.payload };
        default:
            return state;
    }
};

export const fetchMedsData = () => {
       return function (dispatch) {
           const medsArray = []; //convert the object retrieved to an array

           //retrieve the data as one object of nested objects
           db.ref('meds/').once('value', (snapshot) => {
               snapshot.forEach(med => {
                   const name = med.child('name').val();
                   const description = med.child('description').val();
                   const imgUrl = med.child('imgUrl').val();
                   const pharmacy_id = med.child('pharmacy_id').val();
                   const price = med.child('price').val();

                   medsArray.push({
                       name,
                       description,
                       imgUrl,
                       pharmacy_id,
                       price

                   });
               });
               // console.log("CURRENT DATA: "+medsArray );
           }).then(() => {
               dispatch(fetchMedicines(medsArray));
           }).catch(() => {
               console.log('ERORR');
           });
               //dispatch the action
       };
    };

// export { fetchMedsData, medReducer };
