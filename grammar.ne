# @builtin "whitespace.ne" # _ means arbitrary amount of whitespace
@builtin "number.ne"

@{%

  function groupObj(obj, key, subKey){
       let arrays = {}
      if (!obj){
         return arrays;
      }
      if (obj[key]){
         arrays = {...arrays, [obj[key]]:{}}
      }
      if (obj[subKey]){
         return {...arrays, ...groupObj(obj[subKey], key, subKey)}
      }
      return arrays
   }

   function group(obj, key, subKey){
       let arrays = []
      if (!obj){
         return arrays;
      }
      if (obj[key]){
         arrays.push(obj[key])
      }
      if (obj[subKey]){
         return [...arrays, ... group(obj[subKey], key, subKey)]
      }
      return arrays
   }

   function getFirst(data, key, subKey){
      if (data[key]){
         return data[key]
      }if (data[subKey]){
         return getFirst(data[subKey], key, subKey)
      }
      return null;
   }

   function getFirstObj(data, key, subKey){
      if (data[key]){
         return Object.values(data[key]).map(k => ({[k]: {}}))
      }if (data[subKey]){
         return getFirstObj(data[subKey], key, subKey)
      }
      return null;
   }
  
   function idLower(data){
      return data[0].toUpperCase()
   }

   function idJoin(data){
      return data[0].join("")
   }
%}


# Main -> Line "\n" Main {% (data) => [...data[0], ...data[2]] %} | Line {% id %}
Routes -> Route "\n" Routes | Route
Others -> Params {% id %} | Body {% id %} | QueryInfos {% id %} | Response {% id %} 
Route -> "@Route" _ Method  _ Url (" " Description {% (d) => d[1] %}):?  ("\n" Others):*
 {% 
(data) => {
   let toReturn = {
      type: data[0], 
      method: data[2], 
      description: data[5], 
      url: group(data[4], 'url', 'rest').join("/"), 
      params: groupObj(data[4], 'params', 'rest'), 
      query: getFirstObj(data[4], 'query','rest'),
   }
   let stuff = data[6].map(x=>x[1]) 
   let queryInfos = stuff.find(x=> x.type == "@Query")
   let responses = stuff.filter(x=> x.type == '@Response')
   let body = stuff.find(x => x.type == "@Body")
   let paramsInfo = stuff.find(x => x.type == "@Params")

   let toMerge = {
      body,
      queryInfos,
      responses,
      paramsInfo
   }
   

	return {...toReturn, ...toMerge}
   } %}

Method -> "post"i {% idLower %} | "get"i {% idLower %}


Url ->  "/" word [/]:? Url {% (data) => 
   ({
      url: data[1], 
      rest: data[3] 
   }) %} 
   | "/" ":" word Url {% (data)  => 
   ({
      params: data[2], 
      url: ":" + data[2],  
      rest: data[3] 
   }) %}
   | "?" QueryRep {% (data)  => ({query: data[1]  })  %}
   | null

QueryRep -> word "," QueryRep {% (data) => [...[data[0]], ...data[2]] %}  | word

word -> [a-zA-Z]:+ {% idJoin %}
Description -> [a-zA-Z] [a-zA-Z0-9\- ]:+ {% (data) => data[0] + data[1].join("") %}


Params -> "@Params" _ ParamRep {% (data) => 
({
   type: data[0], 
   params: data[2] 
}) %}

ParamRep -> Param ", " ParamRep {% (data) => 
   [...[data[0]], ...data[2]] 
%}  
   | Param 
Param -> word (": " Description {% (d) => d[1] %}):?  {% (data) => 
   ({
      [data[0]]: data[1]
   })  
%} 

QueryInfos -> "@Query" _ QueryInfoRep {% (data) => 
   ({
      type: data[0], 
      query: data[2]
   }) 
%}

QueryInfoRep -> QueryInfo ", " QueryInfoRep {% (data) => 
   [...[data[0]], ...data[2]] 
%}  
   | QueryInfo 

QueryInfo -> word (": " Description {% (d) => d[1] %}):?  {% (data) => 
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

tagRep -> tag ", " tagRep {% data=> ({...data[0], ...data[2]})  %} | tag {% id %}
tag -> word {% data => ({[data[0]]: {}}) %} 
      | word ": " json {% data => ({[data[0]]: data[2]}) %}
      | word ": '" Description "'" {% data => ({[data[0]]: data[2]}) %}
      | word ": \"" Description "\"" {% data => ({[data[0]]: data[2]}) %}
      | word ": [" json "]" {% data => ({[data[0]]: [data[2]]}) %}
      | word ": [ " json " ]" {% data => ({[data[0]]: [data[2]]}) %}
      


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

threeNumb -> [0-9] [0-9] [0-9] {% data => data[0] + data[1] + data[2]  %}

Headers -> Header "\n" Headers {% data => ({...data[0], ...data[2]}) %} | Header {% id %}
Header -> "@Header" _ headerKey _ Description {% data => ({ [data[2]]: data[4] }) %}

_ -> " "

headerKey -> [a-zA-Z] [a-zA-Z0-9\-]:+ {% (data) => data[0] + data[1].join("") %}
