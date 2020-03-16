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
	"categories": [],
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
	Authorization: Bearer eyJhbGciOiJ
}
```
>Example response
```
{
	"categories": [
		"cat1",
		"cat2"
	],
	"_id": "5e6e6d8c0500a60c44d60c04",
	"name": "Mateusz",
	"email": "user@gmail.com",
	"__v": 0
}
```

## Update authorized user
>Request [PUT]
```  
/user

Headers: 
{
	Authorization: Bearer eyJhbGciOiJ
	Content-Type: application/json
}
Body (example1): (you can update all or any number of fields at once)
{
	"name": "New name"
}
Body (example2):
{
	"categories": [
		"cat1",
		"cat2"
	],
	"name": "New name",
	"email": "user@gmail.com",
	"password": "newPassword"
}
```
>Example response
```
{
	"categories": [
		"cat1",
		"cat2"
	],
	"_id": "5e6faf29df6cea0bd4d1cd11",
	"name": "New name",
	"email": "u123ser@gmail.com",
	"__v": 0
}
```

## Delete authorized user
>Request [DELETE]
```  
/user

Headers: 
{
	Authorization: Bearer eyJhbGciOiJ
}
```
>Example response
```
{
  	"message": "User succesfully deleted"
}
```