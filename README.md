# KoinX---Assignment-Task-2
## Task 2

- Implement an API that would give the asset-wise balance of the account at any given timestamp.
- JSON Body input of the API:

```jsx
{
  "timestamp": "2022-09-28 12:00:00"
}
```

- Expected Response according to the above file:

```jsx
{
  "BTC": 15,
  "MATIC": 100
}
```

- Explanation:
    - Before time “2022-09-28 12:00:00”, there were 2 transactions for BTC, one buy trade with amount as 25 and one sell trade with amount as 10. Hence the end balance at time “2022-09-28 12:00:00” would be 25 - 10 = 15.
    - Similarly for MATIC, there was only one buy trade, hence the balance would be 100.
    - - If the `timestamp` input would be "2022-09-27 12:00:00", then the output would be:

```jsx
{
  "BTC": 15
}
```

- There wouldn’t be any entry of MATIC because there wasn’t any MATIC trade before the given timestamp.
