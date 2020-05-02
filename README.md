# DWH_E1

---
### Local environment

##### Installing dependecies:

```cmd
$ npm install
```
##### Run MySQL container:

```cmd
$ npm run docker-db
```

It will initiate a MySQL server listening on port `44306`

##### Run app:

```cmd
$ npm start
```

App will be listening on port `4000`

---
### Dev environment

```cmd
$ npm run docker-app
```
App will be listening on port `4000` and MySQL server on port `43306`
