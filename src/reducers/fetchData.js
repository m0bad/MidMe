// import React, { Component } from 'react';
// import { db } from '../config';
// import { fetchMedicines } from '../actions/types';
//
// class fetchData {
//      fetchMedsData() {
//        return function (dispatch) {
//            //retrieve the data as one object of nested objects
//            db.ref('meds/').once('value', (snapshot) => {
//                const medsArray = []; //convert the object retrieved to an array
//                snapshot.forEach(med => {
//                    const name = med.child('name').val();
//                    const description = med.child('description').val();
//                    const imgUrl = med.child('imgUrl').val();
//                    const pharmacy_id = med.child('pharmacy_id').val();
//                    const price = med.child('price').val();
//
//                    medsArray.push({
//                        name: name,
//                        description: description,
//                        imgUrl: imgUrl,
//                        pharmacy_id: pharmacy_id,
//                        price: price
//
//                    });
//                    const fetchMedsAction = fetchMedicines(medsArray);
//                    //dispatch the action
//                    dispatch(fetchMedsAction);
//                });
//                console.log("CURRENT DATA: "+medsArray );
//            });
//        };
//     };
// }
// const fetchdata = new fetchData();
// export default fetchdata;
