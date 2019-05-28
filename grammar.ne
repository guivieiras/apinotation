# @builtin "whitespace.ne" # _ means arbitrary amount of whitespace
@builtin "number.ne"

@{% 
   function idLower(data){
      return data[0].toUpperCase()
   }

   function idJoin(data){
      return data[0].join("")
   }
%}


# Main -> Line "\n" Main {% (data) => [...data[0], ...data[2]] %} | Line {% id %}
Groups -> Group "\n" Groups {% (data) => [data[0], ...data[2]] %}  | Group 
Group -> "@Group " word "\n" Routes {% data => ({ groupName: data[1], routes: data[3]   })  %}
Routes -> Route "\n" Routes {% (data) => [data[0], ...data[2]] %}  | Route 
Others -> Params {% id %} | Body {% id %} | QueryInfos {% id %} | Response {% id %} 
Route -> "@Route" _ Method  _ Url (" " Description {% (d) => d[1] %}):?  
("\n" Params {% data => data[1] %}):? 
("\n" QueryInfos {% data => data[1] %}):?  
("\n" Body {% data => data[1] %}):? 
("\n" Response {% data => data[1] %}):*
 {% 
(data) => {
   let toReturn = {
      type: data[0], 
      method: data[2], 
      description: data[5], 
      url: "/" + data[4].url.join("/"), 
      params: data[4].params,
      query: data[4].query,
      paramsInfo: data[6],
      queryInfos: data[7],
      body: data[8],
      responses: data[9],
   }
	return toReturn
} %}

Method -> "post"i {% idLower %} | "get"i {% idLower %} | "put"i {% idLower %} | "delete"i {% idLower %}


Url ->  "/" word (Url):? {% data => {
   if(data[2] && data[2][0].url){
      return {
         url: [ data[1],  ...data[2][0].url ], 
         params: data[2][0].params,
         query: data[2] ? data[2][0].query : null
      }
   }
   return {
      url: [ data[1]] ,
      query: data[2] ? data[2][0].query : null
   }
}
    %}
   | "/:" word (Url):?
{% data => {

   if(data[2] && data[2][0].params){
      return {
         url: [ ":" + data[1],  ...data[2][0].url ], 
         params: [data[1],  ...data[2][0].params ],
         query: data[2] ? data[2][0].query : null
      }
   }
   return {
      url: [ ":" + data[1]], 
      params:  [data[1]],
      query: data[2] ? data[2][0].query : null
   }
}
%}

   | "?" QueryRep {% data => ({query: data[1]}) %}

QueryRep -> identifier "," QueryRep {% (data) => [data[0], ...data[2]] %}  | identifier


Params -> "@Params" _ ParamRep {% (data) => 
   data[2].reduce((x,y) => ({...x, ...y}), {}) 
 %}

ParamRep -> Param ", " ParamRep {% (data) => 
   [...[data[0]], ...data[2]] 
%}  
   | Param 
Param -> word (": " Description {% (d) => d[1] %}):?  {% (data) => 
   ({
      [data[0]]: data[1]
   })  
%} 

QueryInfos -> "@Query" _ QueryInfoRep {% (data) => data[2].reduce((x,y) => ({...x, ...y}), {}) %}

QueryInfoRep -> QueryInfo ", " QueryInfoRep {% (data) => 
   [...[data[0]], ...data[2]] 
%}  
   | QueryInfo 

QueryInfo -> identifier (": " Description {% (d) => d[1] %}):?  {% (data) => 
   ({
      [data[0]]: data[1]
   })  
%} 


Body -> "@Body" _ BodyRest {% data=> ({type: data[0], ...data[2]}) %}
BodyRest -> "json" _ json {% data=> ({contentType: data[0], json: data[2]})  %} 


json -> "{ " ("...$" word ", " {% data =>  data[1]  %}):* tagRep " }" {% data=> {
   let toReturn = data[2]
   if (data[1].length > 0){
      return {...toReturn, $spread: data[1]}
   }
   return toReturn
} %}
 | "$" word {% data => '$' + data[1] %}
 | "[" json "]" {% data => [data[1]] %}
 | "[ " json " ]" {% data => [data[1]] %}

tagRep -> tag ", " tagRep {% data=> ({...data[0], ...data[2]})  %} | tag {% id %}

tag -> identifier {% data => ({[data[0]]: "String"}) %} 
      | identifier ": " json {% data => ({[data[0]]: data[2]}) %}
      | identifier ": " String  {% data => ({[data[0]]: data[2]}) %}
      


ContentType -> "json"i {% id %} | "text"i {% id %} | "xml"i {% id %} 


Response -> "@Response" _ threeNumb (_ ResponseRest):? ("\n" Headers):? {% data=> {
   let obj = {
      type: data[0], 
      code: data[2],
      headers: data[4] ? data[4][1] : null, 
   }
   if (data[3]){
      obj = {...obj, ...data[3][1]}
   }
   return obj
} %}
ResponseRest -> "json" _ json {% data=> ({contentType: data[0], json: data[2]})  %} 

Headers -> Header "\n" Headers {% data => ({...data[0], ...data[2]}) %} | Header {% id %}
Header -> "@Header" _ headerKey _ Description {% data => ({ [data[2]]: data[4] }) %}


_ -> " "
word -> [a-zA-Z]:+ {% idJoin %}
Description -> [a-zA-Z\-] [a-zA-Z0-9\- áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑẽ;\-\+]:+ {% (data) => data[0] + data[1].join("") %}
String -> "\"" StringInside "\"" {% (data) => data[1] %}
         | "'" StringInside "'" {% (data) => data[1] %}

StringInside -> [ ,a-zA-Z0-9\-áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑãẽ]:* {% (data) => data[0].join("") %}

threeNumb -> [0-9] [0-9] [0-9] {% data => data[0] + data[1] + data[2]  %}
identifier -> [a-zA-Z_] [a-zA-Z0-9_]:* {% data => data[0] + data[1].join("") %}
headerKey -> [a-zA-Z] [a-zA-Z0-9\-]:+ {% (data) => data[0] + data[1].join("") %}
