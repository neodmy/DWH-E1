# MySQL Metadata tracker

This app has been developed for the [ETSI Informáticos](https://fi.upm.es/) 2019/2020 **Data Warehouse** course during the **assignment E1** held by [Universidad Politécnica de Madrid](https://www.upm.es/) as a part of the Computer Science Degree.

The app aims to keep track of metadata changes when data are altered in any way on a database selected by the user (from now on, the *working database*). If this database does not previously exist, the app will create it.

In order to do the traking, the app will use a database called **register** containing a replica of the MySQL data dictionary `information_schema` tables ([check MySQL docs](https://dev.mysql.com/doc/refman/8.0/en/information-schema.html)) listed below. For each of those, it will create a pair of tables such as `<information_schema_table>_BEFORE` and `<information_schema_table>_AFTER`.

Before and after executing the *working query*, the app will perform a `SELECT` query to the following `information_schema` tables:

- VIEWS
- TRIGGERS
- TABLE_CONSTRAINTS
- TABLES
- STATISTICS
- SCHEMATA
- ROUTINES
- REFERENTIAL_CONSTRAINTS
- PARTITIONS
- PARAMETERS
- INNODB_COLUMNS
- INNODB_FIELDS
- INNODB_FOREIGN
- INNODB_FOREIGN_COLS
- INNODB_INDEXES
- INNODB_TABLES
- INNODB_TABLESPACES
- INNODB_TABLESTATS

Only after the *working query* has been succesfully performed, it will carry out `INSERT` queries with the metadata fecthed previously.

Once the process has been completed, the **register** database will contain a kind of metadata *snapshots* before and after the *working query*. 

:warning: Please note that every time the working query is executed, the **register** tables will be completely wiped out to have a cleaner image of the changes.

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

It will initiate a MySQL server listening on port `53306`

##### Run app:

```cmd
$ npm start
```

App will be listening on port `4000`

---
### Dev environment

##### Run containers
```cmd
$ npm run docker-app
```
App will be listening on port `4000` and MySQL server on port `43306`

---
### Making queries

For the app to do its job, you need to make an HTTP `POST` request to the only endpoint: `/v1/query`
with a body like the following:

```JSON
{
    "query": "SELECT * FROM <table>"
}
```

If everything went well, you will receive a `200 OK` response with a message like `Metadata for <working_database> have been succesfully updated`. Otherwise the message will be similar to `Metadata were not updated because of error: <error>`, being `<error>` the message that MySQL DBMS throws when the query is syntactically incorrect.