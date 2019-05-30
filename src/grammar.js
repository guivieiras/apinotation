// Generated automatically by nearley, version 2.16.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
 
   function idLower(data){
      return data[0].toUpperCase()
   }

   function idJoin(data){
      return data[0].join("")
   }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "unsigned_int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_int$ebnf$1", "symbols": ["unsigned_int$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_int", "symbols": ["unsigned_int$ebnf$1"], "postprocess": 
        function(d) {
            return parseInt(d[0].join(""));
        }
        },
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"+"}]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "int$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "int$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$2", "symbols": ["int$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "int", "symbols": ["int$ebnf$1", "int$ebnf$2"], "postprocess": 
        function(d) {
            if (d[0]) {
                return parseInt(d[0][0]+d[1].join(""));
            } else {
                return parseInt(d[1].join(""));
            }
        }
        },
    {"name": "unsigned_decimal$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$1", "symbols": ["unsigned_decimal$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1", "symbols": [{"literal":"."}, "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "unsigned_decimal$ebnf$2", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "unsigned_decimal$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "unsigned_decimal", "symbols": ["unsigned_decimal$ebnf$1", "unsigned_decimal$ebnf$2"], "postprocess": 
        function(d) {
            return parseFloat(
                d[0].join("") +
                (d[1] ? "."+d[1][1].join("") : "")
            );
        }
        },
    {"name": "decimal$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "decimal$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$2", "symbols": ["decimal$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": ["decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "decimal$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "decimal$ebnf$3", "symbols": ["decimal$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "decimal$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal", "symbols": ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "")
            );
        }
        },
    {"name": "percentage", "symbols": ["decimal", {"literal":"%"}], "postprocess": 
        function(d) {
            return d[0]/100;
        }
        },
    {"name": "jsonfloat$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "jsonfloat$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$2", "symbols": ["jsonfloat$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": ["jsonfloat$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "jsonfloat$ebnf$3", "symbols": ["jsonfloat$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": ["jsonfloat$ebnf$4$subexpression$1$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$4$subexpression$1", "symbols": [/[eE]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "jsonfloat$ebnf$4$subexpression$1$ebnf$2"]},
    {"name": "jsonfloat$ebnf$4", "symbols": ["jsonfloat$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat", "symbols": ["jsonfloat$ebnf$1", "jsonfloat$ebnf$2", "jsonfloat$ebnf$3", "jsonfloat$ebnf$4"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "") +
                (d[3] ? "e" + (d[3][1] || "+") + d[3][2].join("") : "")
            );
        }
        },
    {"name": "Groups", "symbols": ["Group", {"literal":"\n"}, "Groups"], "postprocess": (data) => [data[0], ...data[2]]},
    {"name": "Groups", "symbols": ["Group"]},
    {"name": "Group$string$1", "symbols": [{"literal":"@"}, {"literal":"G"}, {"literal":"r"}, {"literal":"o"}, {"literal":"u"}, {"literal":"p"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Group", "symbols": ["Group$string$1", "word", {"literal":"\n"}, "Routes"], "postprocess": data => ({ groupName: data[1], routes: data[3]   })},
    {"name": "Routes", "symbols": ["Route", {"literal":"\n"}, "Routes"], "postprocess": (data) => [data[0], ...data[2]]},
    {"name": "Routes", "symbols": ["Route"]},
    {"name": "Others", "symbols": ["Params"], "postprocess": id},
    {"name": "Others", "symbols": ["Body"], "postprocess": id},
    {"name": "Others", "symbols": ["QueryInfos"], "postprocess": id},
    {"name": "Others", "symbols": ["Response"], "postprocess": id},
    {"name": "Route$string$1", "symbols": [{"literal":"@"}, {"literal":"R"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Route$ebnf$1$subexpression$1", "symbols": [{"literal":" "}, "Description"], "postprocess": (d) => d[1]},
    {"name": "Route$ebnf$1", "symbols": ["Route$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Route$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Route$ebnf$2$subexpression$1", "symbols": [{"literal":"\n"}, "Params"], "postprocess": data => data[1]},
    {"name": "Route$ebnf$2", "symbols": ["Route$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "Route$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Route$ebnf$3$subexpression$1", "symbols": [{"literal":"\n"}, "QueryInfos"], "postprocess": data => data[1]},
    {"name": "Route$ebnf$3", "symbols": ["Route$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "Route$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Route$ebnf$4$subexpression$1", "symbols": [{"literal":"\n"}, "Body"], "postprocess": data => data[1]},
    {"name": "Route$ebnf$4", "symbols": ["Route$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "Route$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Route$ebnf$5", "symbols": []},
    {"name": "Route$ebnf$5$subexpression$1", "symbols": [{"literal":"\n"}, "Response"], "postprocess": data => data[1]},
    {"name": "Route$ebnf$5", "symbols": ["Route$ebnf$5", "Route$ebnf$5$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Route", "symbols": ["Route$string$1", "_", "Method", "_", "Url", "Route$ebnf$1", "Route$ebnf$2", "Route$ebnf$3", "Route$ebnf$4", "Route$ebnf$5"], "postprocess":  
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
        } },
    {"name": "Method$subexpression$1", "symbols": [/[pP]/, /[oO]/, /[sS]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "Method", "symbols": ["Method$subexpression$1"], "postprocess": idLower},
    {"name": "Method$subexpression$2", "symbols": [/[gG]/, /[eE]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "Method", "symbols": ["Method$subexpression$2"], "postprocess": idLower},
    {"name": "Method$subexpression$3", "symbols": [/[pP]/, /[uU]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "Method", "symbols": ["Method$subexpression$3"], "postprocess": idLower},
    {"name": "Method$subexpression$4", "symbols": [/[dD]/, /[eE]/, /[lL]/, /[eE]/, /[tT]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "Method", "symbols": ["Method$subexpression$4"], "postprocess": idLower},
    {"name": "Url$ebnf$1$subexpression$1", "symbols": ["Url"]},
    {"name": "Url$ebnf$1", "symbols": ["Url$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Url$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Url", "symbols": [{"literal":"/"}, "word", "Url$ebnf$1"], "postprocess":  data => {
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
            },
    {"name": "Url$string$1", "symbols": [{"literal":"/"}, {"literal":":"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Url$ebnf$2$subexpression$1", "symbols": ["Url"]},
    {"name": "Url$ebnf$2", "symbols": ["Url$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "Url$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Url", "symbols": ["Url$string$1", "word", "Url$ebnf$2"], "postprocess":  data => {
        
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
        },
    {"name": "Url", "symbols": [{"literal":"?"}, "QueryRep"], "postprocess": data => ({query: data[1]})},
    {"name": "QueryRep", "symbols": ["identifier", {"literal":","}, "QueryRep"], "postprocess": (data) => [data[0], ...data[2]]},
    {"name": "QueryRep", "symbols": ["identifier"]},
    {"name": "Params$string$1", "symbols": [{"literal":"@"}, {"literal":"P"}, {"literal":"a"}, {"literal":"r"}, {"literal":"a"}, {"literal":"m"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Params", "symbols": ["Params$string$1", "_", "ParamRep"], "postprocess":  (data) => 
        data[2].reduce((x,y) => ({...x, ...y}), {}) 
         },
    {"name": "ParamRep$string$1", "symbols": [{"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ParamRep", "symbols": ["Param", "ParamRep$string$1", "ParamRep"], "postprocess":  (data) => 
        [...[data[0]], ...data[2]] 
        },
    {"name": "ParamRep", "symbols": ["Param"]},
    {"name": "Param$ebnf$1$subexpression$1$string$1", "symbols": [{"literal":":"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Param$ebnf$1$subexpression$1", "symbols": ["Param$ebnf$1$subexpression$1$string$1", "Description"], "postprocess": (d) => d[1]},
    {"name": "Param$ebnf$1", "symbols": ["Param$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Param$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Param", "symbols": ["word", "Param$ebnf$1"], "postprocess":  (data) => 
        ({
           [data[0]]: data[1]
        })  
        },
    {"name": "QueryInfos$string$1", "symbols": [{"literal":"@"}, {"literal":"Q"}, {"literal":"u"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QueryInfos", "symbols": ["QueryInfos$string$1", "_", "QueryInfoRep"], "postprocess": (data) => data[2].reduce((x,y) => ({...x, ...y}), {})},
    {"name": "QueryInfoRep$string$1", "symbols": [{"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QueryInfoRep", "symbols": ["QueryInfo", "QueryInfoRep$string$1", "QueryInfoRep"], "postprocess":  (data) => 
        [...[data[0]], ...data[2]] 
        },
    {"name": "QueryInfoRep", "symbols": ["QueryInfo"]},
    {"name": "QueryInfo$ebnf$1$subexpression$1$string$1", "symbols": [{"literal":":"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QueryInfo$ebnf$1$subexpression$1", "symbols": ["QueryInfo$ebnf$1$subexpression$1$string$1", "Description"], "postprocess": (d) => d[1]},
    {"name": "QueryInfo$ebnf$1", "symbols": ["QueryInfo$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "QueryInfo$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "QueryInfo", "symbols": ["identifier", "QueryInfo$ebnf$1"], "postprocess":  (data) => 
        ({
           [data[0]]: data[1]
        })  
        },
    {"name": "Body$string$1", "symbols": [{"literal":"@"}, {"literal":"B"}, {"literal":"o"}, {"literal":"d"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Body", "symbols": ["Body$string$1", "_", "BodyRest"], "postprocess": data=> ({type: data[0], ...data[2]})},
    {"name": "BodyRest$string$1", "symbols": [{"literal":"j"}, {"literal":"s"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BodyRest", "symbols": ["BodyRest$string$1", "_", "json"], "postprocess": data=> ({contentType: data[0], json: data[2]})},
    {"name": "json$string$1", "symbols": [{"literal":"{"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "json$ebnf$1", "symbols": []},
    {"name": "json$ebnf$1$subexpression$1$string$1", "symbols": [{"literal":"."}, {"literal":"."}, {"literal":"."}, {"literal":"$"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "json$ebnf$1$subexpression$1$string$2", "symbols": [{"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "json$ebnf$1$subexpression$1", "symbols": ["json$ebnf$1$subexpression$1$string$1", "word", "json$ebnf$1$subexpression$1$string$2"], "postprocess": data =>  data[1]},
    {"name": "json$ebnf$1", "symbols": ["json$ebnf$1", "json$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "json$string$2", "symbols": [{"literal":" "}, {"literal":"}"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "json", "symbols": ["json$string$1", "json$ebnf$1", "tagRep", "json$string$2"], "postprocess":  data=> {
           let toReturn = data[2]
           if (data[1].length > 0){
              return {...toReturn, $spread: data[1]}
           }
           return toReturn
        } },
    {"name": "json", "symbols": [{"literal":"$"}, "word"], "postprocess": data => '$' + data[1]},
    {"name": "json", "symbols": [{"literal":"["}, "json", {"literal":"]"}], "postprocess": data => [data[1]]},
    {"name": "json$string$3", "symbols": [{"literal":"["}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "json$string$4", "symbols": [{"literal":" "}, {"literal":"]"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "json", "symbols": ["json$string$3", "json", "json$string$4"], "postprocess": data => [data[1]]},
    {"name": "tagRep$string$1", "symbols": [{"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "tagRep", "symbols": ["tag", "tagRep$string$1", "tagRep"], "postprocess": data=> ({...data[0], ...data[2]})},
    {"name": "tagRep", "symbols": ["tag"], "postprocess": id},
    {"name": "tag", "symbols": ["identifier"], "postprocess": data => ({[data[0]]: "String"})},
    {"name": "tag$string$1", "symbols": [{"literal":":"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "tag", "symbols": ["identifier", "tag$string$1", "json"], "postprocess": data => ({[data[0]]: data[2]})},
    {"name": "tag$string$2", "symbols": [{"literal":":"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "tag", "symbols": ["identifier", "tag$string$2", "String"], "postprocess": data => ({[data[0]]: data[2]})},
    {"name": "ContentType$subexpression$1", "symbols": [/[jJ]/, /[sS]/, /[oO]/, /[nN]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "ContentType", "symbols": ["ContentType$subexpression$1"], "postprocess": id},
    {"name": "ContentType$subexpression$2", "symbols": [/[tT]/, /[eE]/, /[xX]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "ContentType", "symbols": ["ContentType$subexpression$2"], "postprocess": id},
    {"name": "ContentType$subexpression$3", "symbols": [/[xX]/, /[mM]/, /[lL]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "ContentType", "symbols": ["ContentType$subexpression$3"], "postprocess": id},
    {"name": "Response$string$1", "symbols": [{"literal":"@"}, {"literal":"R"}, {"literal":"e"}, {"literal":"s"}, {"literal":"p"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Response$ebnf$1$subexpression$1", "symbols": ["_", "ResponseRest"]},
    {"name": "Response$ebnf$1", "symbols": ["Response$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Response$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Response$ebnf$2$subexpression$1", "symbols": [{"literal":"\n"}, "Headers"]},
    {"name": "Response$ebnf$2", "symbols": ["Response$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "Response$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Response", "symbols": ["Response$string$1", "_", "threeNumb", "Response$ebnf$1", "Response$ebnf$2"], "postprocess":  data=> {
           let obj = {
              type: data[0], 
              code: data[2],
              headers: data[4] ? data[4][1] : null, 
           }
           if (data[3]){
              obj = {...obj, ...data[3][1]}
           }
           return obj
        } },
    {"name": "ResponseRest$string$1", "symbols": [{"literal":"j"}, {"literal":"s"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ResponseRest", "symbols": ["ResponseRest$string$1", "_", "json"], "postprocess": data=> ({contentType: data[0], json: data[2]})},
    {"name": "Headers", "symbols": ["Header", {"literal":"\n"}, "Headers"], "postprocess": data => ({...data[0], ...data[2]})},
    {"name": "Headers", "symbols": ["Header"], "postprocess": id},
    {"name": "Header$string$1", "symbols": [{"literal":"@"}, {"literal":"H"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Header", "symbols": ["Header$string$1", "_", "headerKey", "_", "Description"], "postprocess": data => ({ [data[2]]: data[4] })},
    {"name": "_", "symbols": [{"literal":" "}]},
    {"name": "word$ebnf$1", "symbols": [/[a-zA-Z]/]},
    {"name": "word$ebnf$1", "symbols": ["word$ebnf$1", /[a-zA-Z]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "word", "symbols": ["word$ebnf$1"], "postprocess": idJoin},
    {"name": "Description$ebnf$1", "symbols": [/[a-zA-Z0-9\- áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑẽ;\-\+]/]},
    {"name": "Description$ebnf$1", "symbols": ["Description$ebnf$1", /[a-zA-Z0-9\- áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑẽ;\-\+]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Description", "symbols": [/[a-zA-Z\-]/, "Description$ebnf$1"], "postprocess": (data) => data[0] + data[1].join("")},
    {"name": "String", "symbols": [{"literal":"\""}, "StringInside", {"literal":"\""}], "postprocess": (data) => data[1]},
    {"name": "String", "symbols": [{"literal":"'"}, "StringInside", {"literal":"'"}], "postprocess": (data) => data[1]},
    {"name": "StringInside$ebnf$1", "symbols": []},
    {"name": "StringInside$ebnf$1", "symbols": ["StringInside$ebnf$1", /[ ,a-zA-Z0-9\-áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑãẽ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "StringInside", "symbols": ["StringInside$ebnf$1"], "postprocess": (data) => data[0].join("")},
    {"name": "threeNumb", "symbols": [/[0-9]/, /[0-9]/, /[0-9]/], "postprocess": data => data[0] + data[1] + data[2]},
    {"name": "identifier$ebnf$1", "symbols": []},
    {"name": "identifier$ebnf$1", "symbols": ["identifier$ebnf$1", /[a-zA-Z0-9_]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "identifier", "symbols": [/[a-zA-Z_]/, "identifier$ebnf$1"], "postprocess": data => data[0] + data[1].join("")},
    {"name": "headerKey$ebnf$1", "symbols": [/[a-zA-Z0-9\-]/]},
    {"name": "headerKey$ebnf$1", "symbols": ["headerKey$ebnf$1", /[a-zA-Z0-9\-]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "headerKey", "symbols": [/[a-zA-Z]/, "headerKey$ebnf$1"], "postprocess": (data) => data[0] + data[1].join("")}
]
  , ParserStart: "Groups"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
