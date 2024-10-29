## Meta Title bug

Client-side issue not server-side

In order to see other Title forever persisting, you must change conditions at least 3 times aka click the buttons to switch titles 3 times

When there's more than two Titles and they are conditionally rendered, one of the Titles persists forever until it is dismounted.

Originally I thought if there are more than two Titles inside JSX component and at least one of those Titles is conditionally rendered, the ancestor Title of that JSX component takes precidence. But not as simple as that.

## Relevant Files

- `routes/index.tsx`
- `app.tsx`

Also later on uncomment some the Title components, to see how differently the bug shows
