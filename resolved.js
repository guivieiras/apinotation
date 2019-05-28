var resolved = [
   {
     "groupName": "Auth",
     "routes": [
       {
         "type": "@Route",
         "method": "POST",
         "description": "Descrição da rota",
         "url": "/auth/signin",
         "query": null,
         "paramsInfo": null,
         "queryInfos": null,
         "body": {
           "type": "@Body",
           "contentType": "json",
           "json": {
             "email": "String",
             "password": "String",
             "casaDahora": {
               "teste": "String",
               "teste2": "String"
             }
           }
         },
         "responses": [
           {
             "type": "@Response",
             "code": "200",
             "headers": {
               "Set-cookie": "new-used-media-token and new-used-media-logged"
             },
             "contentType": "json",
             "json": {
               "email": "String",
               "name": "String",
               "avatar": "String",
               "id": "String",
               "casaDahora": {
                 "teste": "String",
                 "teste2": "String"
               }
             }
           },
           {
             "type": "@Response",
             "code": "400",
             "headers": null,
             "contentType": "json",
             "json": {
               "error": "User not foundẽ"
             }
           },
           {
             "type": "@Response",
             "code": "400",
             "headers": null,
             "contentType": "json",
             "json": {
               "error": "User e-mail not verified"
             }
           },
           {
             "type": "@Response",
             "code": "400",
             "headers": null,
             "contentType": "json",
             "json": {
               "error": "Invalid password"
             }
           }
         ]
       },
       {
         "type": "@Route",
         "method": "POST",
         "description": null,
         "url": "/auth/signup",
         "query": null,
         "paramsInfo": null,
         "queryInfos": null,
         "body": {
           "type": "@Body",
           "contentType": "json",
           "json": {
             "name": "String",
             "username": "String",
             "password": "String",
             "social": "String",
             "email": "String",
             "birthdate": "String"
           }
         },
         "responses": [
           {
             "type": "@Response",
             "code": "200",
             "headers": null
           },
           {
             "type": "@Response",
             "code": "400",
             "headers": null,
             "contentType": "json",
             "json": {
               "error": "ValidationError",
               "errors": [
                 {
                   "field": "String",
                   "message": "String"
                 }
               ]
             }
           }
         ]
       },
       {
         "type": "@Route",
         "method": "GET",
         "description": null,
         "url": "/auth/logout",
         "query": null,
         "paramsInfo": null,
         "queryInfos": null,
         "body": null,
         "responses": [
           {
             "type": "@Response",
             "code": "200",
             "headers": {
               "Clear-cookie": "new-used-media-token and new-used-media-logged"
             }
           }
         ]
       },
       {
         "type": "@Route",
         "method": "POST",
         "description": null,
         "url": "/auth/password/forgot",
         "query": null,
         "paramsInfo": null,
         "queryInfos": null,
         "body": {
           "type": "@Body",
           "contentType": "json",
           "json": {
             "email": "String"
           }
         },
         "responses": [
           {
             "type": "@Response",
             "code": "200",
             "headers": null
           },
           {
             "type": "@Response",
             "code": "400",
             "headers": null,
             "contentType": "json",
             "json": {
               "error": "User not found"
             }
           }
         ]
       },
       {
         "type": "@Route",
         "method": "POST",
         "description": null,
         "url": "/auth/password/reset",
         "query": null,
         "paramsInfo": null,
         "queryInfos": null,
         "body": {
           "type": "@Body",
           "contentType": "json",
           "json": {
             "token": "String",
             "newPassword": "String"
           }
         },
         "responses": [
           {
             "type": "@Response",
             "code": "200",
             "headers": null
           },
           {
             "type": "@Response",
             "code": "400",
             "headers": null,
             "contentType": "json",
             "json": {
               "error": "Token has already been used or no request to reset the password was made"
             }
           },
           {
             "type": "@Response",
             "code": "400",
             "headers": null,
             "contentType": "json",
             "json": {
               "error": "Invalid token"
             }
           },
           {
             "type": "@Response",
             "code": "400",
             "headers": null,
             "contentType": "json",
             "json": {
               "error": "Expired token, generate a new one"
             }
           }
         ]
       },
       {
         "type": "@Route",
         "method": "POST",
         "description": null,
         "url": "/auth/email/resend",
         "query": null,
         "paramsInfo": null,
         "queryInfos": null,
         "body": {
           "type": "@Body",
           "contentType": "json",
           "json": {
             "email": "String"
           }
         },
         "responses": [
           {
             "type": "@Response",
             "code": "200",
             "headers": null,
             "contentType": "json",
             "json": {
               "message": "Token resent with success"
             }
           },
           {
             "type": "@Response",
             "code": "400",
             "headers": null,
             "contentType": "json",
             "json": {
               "error": "Your email is already dã verified"
             }
           }
         ]
       },
       {
         "type": "@Route",
         "method": "POST",
         "description": null,
         "url": "/auth/:to/verify/:token",
         "params": [
           "to",
           "token"
         ],
         "query": [
           "teste",
           "teste2"
         ],
         "paramsInfo": {
           "token": "Token bem bacana",
           "to": "não precisa né"
         },
         "queryInfos": {
           "teste2": "SUper zika genteẽ"
         },
         "body": null,
         "responses": [
           {
             "type": "@Response",
             "code": "200",
             "headers": null,
             "contentType": "json",
             "json": {
               "error": "Invalid token"
             }
           },
           {
             "type": "@Response",
             "code": "400",
             "headers": null,
             "contentType": "json",
             "json": {
               "error": "Your email is already verified"
             }
           }
         ]
       }
     ]
   },
   {
     "groupName": "Exchange",
     "routes": [
       {
         "type": "@Route",
         "method": "POST",
         "description": null,
         "url": "/exchange",
         "query": null,
         "paramsInfo": null,
         "queryInfos": null,
         "body": {
           "type": "@Body",
           "contentType": "json",
           "json": {
             "requested": {
               "nome": "String",
               "teste": "String"
             },
             "itemsOffered": [
               {
                 "nome": "String",
                 "teste": "String"
               }
             ],
             "itemsRequested": [
               {
                 "nome": "String",
                 "teste": "String"
               }
             ]
           }
         },
         "responses": [
           {
             "type": "@Response",
             "code": "200",
             "headers": null,
             "contentType": "json",
             "json": {
               "nome": "String",
               "teste": "String"
             }
           },
           {
             "type": "@Response",
             "code": "400",
             "headers": null,
             "contentType": "json",
             "json": {
               "error": "There is already an active transaction between these two users"
             }
           },
           {
             "type": "@Response",
             "code": "400",
             "headers": null,
             "contentType": "json",
             "json": {
               "error": "You need to request at least one item"
             }
           }
         ]
       },
       {
         "type": "@Route",
         "method": "POST",
         "description": null,
         "url": "/exchange/media/request",
         "query": null,
         "paramsInfo": null,
         "queryInfos": null,
         "body": {
           "type": "@Body",
           "contentType": "json",
           "json": {
             "exchangeId": "String",
             "itemsRequested": [
               {
                 "nome": "String",
                 "teste": "String"
               }
             ]
           }
         },
         "responses": [
           {
             "type": "@Response",
             "code": "200",
             "headers": null,
             "contentType": "json",
             "json": {
               "nome": "String",
               "teste": "String"
             }
           },
           {
             "type": "@Response",
             "code": "400",
             "headers": null,
             "contentType": "json",
             "json": {
               "error": "No requests added"
             }
           }
         ]
       },
       {
         "type": "@Route",
         "method": "POST",
         "description": null,
         "url": "/exchange/media/decline",
         "query": null,
         "paramsInfo": null,
         "queryInfos": null,
         "body": {
           "type": "@Body",
           "contentType": "json",
           "json": {
             "exchangeId": "String",
             "mediaId": "String"
           }
         },
         "responses": [
           {
             "type": "@Response",
             "code": "200",
             "headers": null,
             "contentType": "json",
             "json": {
               "nome": "String",
               "teste": "String"
             }
           },
           {
             "type": "@Response",
             "code": "400",
             "headers": null,
             "contentType": "json",
             "json": {
               "error": "Media not found"
             }
           },
           {
             "type": "@Response",
             "code": "400",
             "headers": null,
             "contentType": "json",
             "json": {
               "error": "No requests declined"
             }
           }
         ]
       },
       {
         "type": "@Route",
         "method": "POST",
         "description": null,
         "url": "/exchange/media/accept",
         "query": null,
         "paramsInfo": null,
         "queryInfos": null,
         "body": {
           "type": "@Body",
           "contentType": "json",
           "json": {
             "exchangeId": "String",
             "mediaId": "String"
           }
         },
         "responses": [
           {
             "type": "@Response",
             "code": "200",
             "headers": null,
             "contentType": "json",
             "json": {
               "nome": "String",
               "teste": "String"
             }
           },
           {
             "type": "@Response",
             "code": "400",
             "headers": null,
             "contentType": "json",
             "json": {
               "error": "Media not found"
             }
           },
           {
             "type": "@Response",
             "code": "400",
             "headers": null,
             "contentType": "json",
             "json": {
               "error": "No requests accepted"
             }
           }
         ]
       },
       {
         "type": "@Route",
         "method": "POST",
         "description": null,
         "url": "/exchange/accept",
         "query": null,
         "paramsInfo": null,
         "queryInfos": null,
         "body": {
           "type": "@Body",
           "contentType": "json",
           "json": {
             "exchangeId": "String"
           }
         },
         "responses": [
           {
             "type": "@Response",
             "code": "200",
             "headers": null,
             "contentType": "json",
             "json": {
               "nome": "String",
               "teste": "String"
             }
           }
         ]
       }
     ]
   },
   {
     "groupName": "Media",
     "routes": [
       {
         "type": "@Route",
         "method": "GET",
         "description": null,
         "url": "/media",
         "query": null,
         "paramsInfo": null,
         "queryInfos": {
           "page": null,
           "limit": null,
           "sort": "-title;+description"
         },
         "body": null,
         "responses": [
           {
             "type": "@Response",
             "code": "200",
             "headers": null,
             "contentType": "json",
             "json": {
               "page": "String",
               "limit": "String",
               "doc": [
                 {
                   "nome": "String",
                   "teste": "String"
                 }
               ]
             }
           }
         ]
       },
       {
         "type": "@Route",
         "method": "GET",
         "description": null,
         "url": "/media/user/:id",
         "params": [
           "id"
         ],
         "query": [
           "page",
           "limit",
           "sort"
         ],
         "paramsInfo": {
           "id": "UserId"
         },
         "queryInfos": {
           "page": null,
           "limit": null,
           "sort": "example -title;+description"
         },
         "body": null,
         "responses": [
           {
             "type": "@Response",
             "code": "200",
             "headers": null,
             "contentType": "json",
             "json": {
               "page": "String",
               "limit": "String",
               "doc": [
                 {
                   "nome": "String",
                   "teste": "String"
                 }
               ]
             }
           }
         ]
       },
       {
         "type": "@Route",
         "method": "GET",
         "description": null,
         "url": "/media/id/:id",
         "params": [
           "id"
         ],
         "query": null,
         "paramsInfo": {
           "id": "Media Id"
         },
         "queryInfos": null,
         "body": null,
         "responses": [
           {
             "type": "@Response",
             "code": "200",
             "headers": null,
             "contentType": "json",
             "json": {
               "nome": "String",
               "teste": "String"
             }
           }
         ]
       },
       {
         "type": "@Route",
         "method": "GET",
         "description": null,
         "url": "/media/type/:type",
         "params": [
           "type"
         ],
         "query": null,
         "paramsInfo": {
           "type": "Media Type"
         },
         "queryInfos": {
           "page": null,
           "limit": null,
           "sort": "-title;+description"
         },
         "body": null,
         "responses": [
           {
             "type": "@Response",
             "code": "200",
             "headers": null,
             "contentType": "json",
             "json": {
               "page": "String",
               "limit": "String",
               "doc": [
                 {
                   "nome": "String",
                   "teste": "String"
                 }
               ]
             }
           }
         ]
       },
       {
         "type": "@Route",
         "method": "POST",
         "description": null,
         "url": "/media",
         "query": null,
         "paramsInfo": null,
         "queryInfos": null,
         "body": {
           "type": "@Body",
           "contentType": "json",
           "json": {
             "nome": "String",
             "teste": "String"
           }
         },
         "responses": [
           {
             "type": "@Response",
             "code": "200",
             "headers": null,
             "contentType": "json",
             "json": {
               "message": "Success creating media",
               "media": {
                 "nome": "String",
                 "teste": "String"
               },
               "errors": "String"
             }
           },
           {
             "type": "@Response",
             "code": "400",
             "headers": null,
             "contentType": "json",
             "json": {
               "error": "Media type has not been specified correctly"
             }
           },
           {
             "type": "@Response",
             "code": "400",
             "headers": null,
             "contentType": "json",
             "json": {
               "error": "ValidationError",
               "errors": [
                 {
                   "field": "String",
                   "message": "String"
                 }
               ]
             }
           }
         ]
       },
       {
         "type": "@Route",
         "method": "PUT",
         "description": null,
         "url": "/media/:id",
         "params": [
           "id"
         ],
         "query": null,
         "paramsInfo": {
           "id": "Media Id"
         },
         "queryInfos": null,
         "body": {
           "type": "@Body",
           "contentType": "json",
           "json": {
             "pictures": {
               "toAdd": [
                 {
                   "nome": "String",
                   "teste": "String"
                 }
               ],
               "toRemove": [
                 {
                   "nome": "String",
                   "teste": "String"
                 }
               ]
             },
             "nome": "String",
             "teste": "String"
           }
         },
         "responses": [
           {
             "type": "@Response",
             "code": "200",
             "headers": null,
             "contentType": "json",
             "json": {
               "message": "Success updating media"
             }
           },
           {
             "type": "@Response",
             "code": "400",
             "headers": null,
             "contentType": "json",
             "json": {
               "error": "Media not found"
             }
           },
           {
             "type": "@Response",
             "code": "400",
             "headers": null,
             "contentType": "json",
             "json": {
               "error": "Media is in an active exchange, cannot delete or update"
             }
           },
           {
             "type": "@Response",
             "code": "400",
             "headers": null,
             "contentType": "json",
             "json": {
               "error": "ValidationError",
               "errors": [
                 {
                   "field": "String",
                   "message": "String"
                 }
               ]
             }
           }
         ]
       },
       {
         "type": "@Route",
         "method": "DELETE",
         "description": null,
         "url": "/media/:id",
         "params": [
           "id"
         ],
         "query": null,
         "paramsInfo": {
           "id": "Media Id"
         },
         "queryInfos": null,
         "body": null,
         "responses": [
           {
             "type": "@Response",
             "code": "200",
             "headers": null,
             "contentType": "json",
             "json": {
               "message": "Success deleting media"
             }
           },
           {
             "type": "@Response",
             "code": "400",
             "headers": null,
             "contentType": "json",
             "json": {
               "error": "Media not found"
             }
           }
         ]
       },
       {
         "type": "@Route",
         "method": "GET",
         "description": null,
         "url": "/media/query/:query",
         "params": [
           "query"
         ],
         "query": null,
         "paramsInfo": {
           "query": null
         },
         "queryInfos": {
           "type": null
         },
         "body": null,
         "responses": [
           {
             "type": "@Response",
             "code": "200",
             "headers": null,
             "contentType": "json",
             "json": [
               {
                 "nome": "String",
                 "teste": "String"
               }
             ]
           }
         ]
       },
       {
         "type": "@Route",
         "method": "GET",
         "description": null,
         "url": "/media/upc/:upc",
         "params": [
           "upc"
         ],
         "query": null,
         "paramsInfo": {
           "upc": null
         },
         "queryInfos": null,
         "body": null,
         "responses": [
           {
             "type": "@Response",
             "code": "200",
             "headers": null,
             "contentType": "json",
             "json": {
               "nome": "String",
               "teste": "String"
             }
           },
           {
             "type": "@Response",
             "code": "400",
             "headers": null,
             "contentType": "json",
             "json": {
               "error": "Media not found",
               "details": "String"
             }
           }
         ]
       },
       {
         "type": "@Route",
         "method": "GET",
         "description": null,
         "url": "/media/search/:search",
         "params": [
           "search"
         ],
         "query": null,
         "paramsInfo": {
           "search": null
         },
         "queryInfos": {
           "page": null,
           "limit": null,
           "sort": "-title;+description"
         },
         "body": {
           "type": "@Body",
           "contentType": "json",
           "json": {
             "exchangeId": "String",
             "mediaId": "String"
           }
         },
         "responses": [
           {
             "type": "@Response",
             "code": "200",
             "headers": null,
             "contentType": "json",
             "json": {
               "page": "String",
               "limit": "String",
               "doc": [
                 {
                   "nome": "String",
                   "teste": "String"
                 }
               ]
             }
           }
         ]
       }
     ]
   }
 ]