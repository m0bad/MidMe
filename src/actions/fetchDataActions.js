import {
    FETCH_MEDS_FROM_DB,
    FETCH_PHARMACIES_FROM_DB,
} from './types';

export const fetchMedicines = (meds) => {
    return {
        type: FETCH_MEDS_FROM_DB,
        payload: meds
    };
};

export const fetchPharmacies = (pharmacy) => {
    return {
        type: FETCH_PHARMACIES_FROM_DB,
        payload: pharmacy
    };
};
