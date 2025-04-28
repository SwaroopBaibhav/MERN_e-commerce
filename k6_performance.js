import http from 'k6/http';

// stress test (gradually increase the traffic/VU)
const stressTest = [
    {duration: '2m', target: 100}, // below normal load
    {duration: '5m', target: 100},
    {duration: '2m', target: 200}, // normal load
    {duration: '5m', target: 200},
    {duration: '2m', target: 300}, // around the breaking point
    {duration: '5m', target: 300},
    {duration: '2m', target: 400}, // beyond the breaking point
    {duration: '5m', target: 400},
    {duration: '10m', target: 0}, // scale down. Recovery stage
]


// spike test
const spikeTest = [
    {duration:'10s', target: 100}, //below normal
    {duration:'1m', target: 100},
    {duration:'10s', target: 1400},//spike to 1400 VU
    {duration:'3m', target: 1400}, // stay at the same for 3 minutes.
    {duration:'10s', target: 100},// crank down to normal. Recovery stage.
    {duration:'3m', target: 100},
    {duration:'10s', target: 0},
]


// load test (assess the current performance of your system under typical and peak conditions)
const loadTest = [
    {duration:'5m', target: 100}, // simulate the ramp-up traffic from 1-100 users over 5 mins.
    {duration:'10m ', target: 100}, // stay there for 5m
    {duration:'5m', target: 0}, // ramp down to 0 users
]
const thresholds = {
    http_req_duration: ['p(99)<150'] // 99%b of request must complete under 150ms.
}


export const options = {
    // stages: [
    //     { duration: '30s', target: 20 }, // Ramp-up to 20 VUs
    //     { duration: '1m', target: 20 },  // Stay at 20 VUs for 1 minute
    //     { duration: '10s', target: 0 },  // Ramp-down to 0 VUs
    // ],
    stages: slope
};

export default () => {
    http.get('http://localhost:3000/products');
}