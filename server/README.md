# MCPP WebAPI endpoints
Guide to MCPP WebAPI endpoints 



# Users


## Register
>Request [POST]
```
/user/register

Headers: 
{
	Content-Type: application/json
}
Body:
{
	"name": String,
	"email": String,
	"password": String
}
```
>Example response
```
{
  "_id": "5e6e6d8c0500a60c44d60c04",
  "name": "Mateusz",
  "email": "user@gmail.com",
  "password": null,
  "__v": 0
}
```


## Getting authorization token
>Request [POST]
```  
/user/token

Headers: 
{
	Content-Type: application/json
}
Body:
{
	"email": String,
	"password": String
}
```
>Example response
```
{
  "tokenType": "Bearer",
  "token": "eyJhbGciOiJ"
}
```


## Getting authorized user data
>Request [GET]
```  
/user

Headers: 
{
	Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJf
}
```
>Example response
```
{
  "_id": "5e6e6d8c0500a60c44d60c04",
  "name": "Mateusz",
  "email": "user@gmail.com",
  "__v": 0
}
```