# Sanity Clean Content Studio

How to do get new schemas to show up on gatsby/___graphql
1.) `npm install -g @sanity/cli@2.33.2`
2.) cd to folder with sanity.json in it (Sanity)
3.) `sanity login`
4.) then login using the options
5.) `sanity graphql deploy`
6.) run `yarn run dev` to boot up sanity and gatsby local

How to kill ports if Ctrl + C
- `npx kill-port [port number]` 
- Ex: `npx kill-port 8000`

Use  `sanity graphql deploy` to update the schema
'yarn dev' will run sanity locally