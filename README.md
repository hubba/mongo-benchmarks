Mongo Benchmarks
==========

# Setup

1. setup an atlas cloud replica set
2. add mongo uri to `mongoose.connect` in `mongo-benchmarks.js` `run()`
3. `npm i`
4. `node mongo-benchmarks.js`
5. npm i mongoose@4
6. `node mongo-benchnarks.js`
7. observe the difference between mongoose@4 & mongoose@5

## Sample results

### `mongoose@4`

```
5a982fec32c0acad92e0abb5 [ { diff: 38, times: 1, adv: 38 } ]
5a982fec32c0acad92e0abb6 [ { diff: 71, times: 2, adv: 35.5 } ]
5a982fec32c0acad92e0abb7 [ { diff: 103, times: 3, adv: 34.333333333333336 } ]
5a982fec32c0acad92e0abb8 [ { diff: 134, times: 4, adv: 33.5 } ]
5a982fec32c0acad92e0abb9 [ { diff: 172, times: 5, adv: 34.4 } ]
5a982fec32c0acad92e0abba [ { diff: 204, times: 6, adv: 34 } ]
5a982fec32c0acad92e0abbb [ { diff: 232, times: 7, adv: 33.142857142857146 } ]
5a982fec32c0acad92e0abbc [ { diff: 260, times: 8, adv: 32.5 } ]
5a982fec32c0acad92e0abbd [ { diff: 288, times: 9, adv: 32 } ]
5a982fec32c0acad92e0abbe [ { diff: 318, times: 10, adv: 31.8 } ]
[ { diff: 346, times: 11, adv: 31.454545454545453 } ]
```

### `mongoose@5`
```
5a983002d8eac1ada458e0f4 [ { diff: 108, times: 1, adv: 108 } ]
5a983002d8eac1ada458e0f5 [ { diff: 222, times: 2, adv: 111 } ]
5a983002d8eac1ada458e0f6 [ { diff: 318, times: 3, adv: 106 } ]
5a983002d8eac1ada458e0f7 [ { diff: 420, times: 4, adv: 105 } ]
5a983003d8eac1ada458e0f8 [ { diff: 518, times: 5, adv: 103.6 } ]
5a983003d8eac1ada458e0f9 [ { diff: 620, times: 6, adv: 103.33333333333333 } ]
5a983003d8eac1ada458e0fa [ { diff: 765, times: 7, adv: 109.28571428571429 } ]
5a983003d8eac1ada458e0fb [ { diff: 861, times: 8, adv: 107.625 } ]
5a983003d8eac1ada458e0fc [ { diff: 961, times: 9, adv: 106.77777777777777 } ]
5a983003d8eac1ada458e0fd [ { diff: 1055, times: 10, adv: 105.5 } ]
[ { diff: 1158, times: 11, adv: 105.27272727272727 } ]
```

😮




