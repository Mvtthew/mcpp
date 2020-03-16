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
	"brands": [],
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
	"brands": [
		"brand1",
		"brand2"
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
	"brands": [
		"brand1",
		"brand2"
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
	"brands": [
		"brand1",
		"brand2"
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



# Products


## Get authorized user products
>Requert [GET]
```
/products

Headers:
{
	Authorization: Bearer eyJhbGciOiJ
}
```
>Example response
```
[
	{
		"category": "Lipsticks",
		"products": [
		{
			"description": "",
			"rating": 0,
			"pans": {
			"all": 0,
			"used": 0
			},
			"uses": 0,
			"_id": "5e6fddc4b8dbd60ff8a39eb3",
			"_uid": "5e6fdd77e0d80e213046d7ff",
			"name": "Wolf",
			"category": "Lipsticks",
			"brand": "CatD",
			"attributes": [],
			"__v": 0
		},
		{
			"description": "",
			"rating": 0,
			"pans": {
			"all": 0,
			"used": 0
			},
			"uses": 0,
			"_id": "5e6fddcfb24c6d0384a80b97",
			"_uid": "5e6fdd77e0d80e213046d7ff",
			"name": "Wolf",
			"category": "Lipsticks",
			"brand": "CatD",
			"attributes": [],
			"__v": 0
		}
		]
	},
	{
		"category": "cat2",
		"products": []
	}
]
```


## Create product
>Request [POST]
```
/products

Headers:
{
	Authorization: Bearer eyJhbGciOiJ,
	Content-Type: application/json
}
Body (example1): (you can update all or only required fields at once)
{
	"name": "Wolf",
	"category": "Lipsticks",
	"brand": "CatD"
}
Body (example2):
{
	"name": "Wolf",
	"category": "Lipsticks",
	"brand": "CatD",
	"description": "Not very good product",
	"rating": 8,
	"pans": {
		"all": 5,
		"used": 1
	},
	"uses": 15,
	"attributes": [
		"Expires in": "5 months",
		"Given to": "Laura"
	]
}
```
>Example response
```
{
	"description": "",
	"rating": 0,
	"pans": {
		"all": 0,
		"used": 0
	},
	"uses": 0,
	"_id": "5e6fddcfb24c6d0384a80b97",
	"_uid": "5e6fdd77e0d80e213046d7ff",
	"name": "Wolf",
	"category": "Lipsticks",
	"brand": "CatD",
	"attributes": [],
	"__v": 0
}
```