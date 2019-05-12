import { FETCH_PHARMACIES_FROM_DB } from '../actions/types';
import { db } from '../config';
import { fetchPharmacies } from '../actions/fetchDataActions';


const INITIAL_STATE = {
    pharmacies: [],
};
export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PHARMACIES_FROM_DB:
            return { ...state, pharmacies: action.payload };

        default:
            return state;
    }
};
export const fetchPharsData = () => {
    return function (dispatch) {
        const pharsArray = [];
        db.ref('pharmacies/').once('value', (snapshot) => {
            snapshot.forEach(phar => {
                const canDeliver = phar.child('canDeliver').val();
                const lang = phar.child('lang').val();
                const lat = phar.child('lat').val();
                const name = phar.child('name').val();
                const meds = phar.child('meds').val();

                pharsArray.push({
                    name: name,
                    canDeliver: canDeliver,
                    lang: lang,
                    lat: lat,
                    meds: meds
                });
            });
        }).then(() => {
            dispatch(fetchPharmacies(pharsArray));
        }).catch(() => {
            console.log('ERROR PHARS');
        });
    };
};
