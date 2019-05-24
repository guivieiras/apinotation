// Generated automatically by nearley, version 2.16.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }


const moo = require('moo')

let lexer = moo.compile({
    space: {match: /\s+/, lineBreaks: true},
    number: /-?(?:[0-9]|[1-9][0-9]+)(?:\.[0-9]+)?(?:[eE][-+]?[0-9]+)?\b/,
    string: /"(?:\\["bfnrt\/\\]|\\u[a-fA-F0-9]{4}|[^"\\])*"/,
    '{': '{',
    '}': '}',
    '[': '[',
    ']': ']',
    ',': ',',
    ':': ':',
    '@Route': '@',
    true: 'true',
    false: 'false',
    null: 'null',
})

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
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
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
    {"name": "Main", "symbols": ["Line", {"literal":"\n"}, "Main"], "postprocess": (data) => [...data[0], ...data[2]]},
    {"name": "Main", "symbols": ["Line"], "postprocess": id},
    {"name": "Line", "symbols": ["Route"]},
    {"name": "Line", "symbols": ["Params"]},
    {"name": "Line", "symbols": ["Body"]},
    {"name": "Line", "symbols": ["QueryInfos"]},
    {"name": "Line", "symbols": ["Response"]},
    {"name": "Route$string$1", "symbols": [{"literal":"@"}, {"literal":"R"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Route$ebnf$1$subexpression$1", "symbols": [{"literal":" "}, "Description"], "postprocess": (d) => d[1].join("")},
    {"name": "Route$ebnf$1", "symbols": ["Route$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Route$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Route", "symbols": ["Route$string$1", "_", "Method", "_", "Url", "Route$ebnf$1"], "postprocess":  
        (data) => 
        	({
              type: data[0], 
              method: data[2], 
              description: data[5], 
              url: group(data[4], 'url', 'rest').join("/"), 
              params: groupObj(data[4], 'params', 'rest'), 
              query: getFirstObj(data[4], 'query','rest') 
           }) },
    {"name": "Method$subexpression$1", "symbols": [/[pP]/, /[oO]/, /[sS]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "Method", "symbols": ["Method$subexpression$1"], "postprocess": idLower},
    {"name": "Method$subexpression$2", "symbols": [/[gG]/, /[eE]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "Method", "symbols": ["Method$subexpression$2"], "postprocess": idLower},
    {"name": "Url$ebnf$1", "symbols": [/[\/]/], "postprocess": id},
    {"name": "Url$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Url", "symbols": [{"literal":"/"}, "word", "Url$ebnf$1", "Url"], "postprocess":  (data) => 
        ({
           url: data[1].join(""), 
           rest: data[3] 
        }) },
    {"name": "Url", "symbols": [{"literal":"/"}, {"literal":":"}, "word", "Url"], "postprocess":  (data)  => 
        ({
           params: data[2].join(""), 
           url: ":" + data[2].join(""),  
           rest: data[3] 
        }) },
    {"name": "Url", "symbols": [{"literal":"?"}, "QueryRep"], "postprocess": (data)  => ({query: data[1]})},
    {"name": "Url", "symbols": []},
    {"name": "QueryRep", "symbols": ["Query", {"literal":","}, "QueryRep"], "postprocess": (data) => [...[data[0]], ...data[2]]},
    {"name": "QueryRep", "symbols": ["Query"]},
    {"name": "Query", "symbols": ["word"], "postprocess": idJoin},
    {"name": "word$ebnf$1", "symbols": [/[a-zA-Z]/]},
    {"name": "word$ebnf$1", "symbols": ["word$ebnf$1", /[a-zA-Z]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "word", "symbols": ["word$ebnf$1"], "postprocess": id},
    {"name": "Description$ebnf$1", "symbols": [/[a-z A-Z\-]/]},
    {"name": "Description$ebnf$1", "symbols": ["Description$ebnf$1", /[a-z A-Z\-]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Description", "symbols": ["Description$ebnf$1"], "postprocess": id},
    {"name": "Params$string$1", "symbols": [{"literal":"@"}, {"literal":"P"}, {"literal":"a"}, {"literal":"r"}, {"literal":"a"}, {"literal":"m"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Params", "symbols": ["Params$string$1", "_", "ParamRep"], "postprocess":  (data) => 
        ({
           type: data[0], 
           params: data[2] 
        }) },
    {"name": "ParamRep$string$1", "symbols": [{"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ParamRep", "symbols": ["Param", "ParamRep$string$1", "ParamRep"], "postprocess":  (data) => 
        [...[data[0]], ...data[2]] 
        },
    {"name": "ParamRep", "symbols": ["Param"]},
    {"name": "Param$ebnf$1$subexpression$1$string$1", "symbols": [{"literal":":"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Param$ebnf$1$subexpression$1", "symbols": ["Param$ebnf$1$subexpression$1$string$1", "Description"], "postprocess": (d) => d[1].join("")},
    {"name": "Param$ebnf$1", "symbols": ["Param$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Param$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Param", "symbols": ["word", "Param$ebnf$1"], "postprocess":  (data) => 
        ({
           [data[0].join("")]: data[1]
        })  
        },
    {"name": "QueryInfos$string$1", "symbols": [{"literal":"@"}, {"literal":"Q"}, {"literal":"u"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QueryInfos", "symbols": ["QueryInfos$string$1", "_", "QueryInfoRep"], "postprocess":  (data) => 
        ({
           type: data[0], 
           query: data[2] 
        }) },
    {"name": "QueryInfoRep$string$1", "symbols": [{"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QueryInfoRep", "symbols": ["QueryInfo", "QueryInfoRep$string$1", "QueryInfoRep"], "postprocess":  (data) => 
        [...[data[0]], ...data[2]] 
        },
    {"name": "QueryInfoRep", "symbols": ["QueryInfo"]},
    {"name": "QueryInfo$ebnf$1$subexpression$1$string$1", "symbols": [{"literal":":"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QueryInfo$ebnf$1$subexpression$1", "symbols": ["QueryInfo$ebnf$1$subexpression$1$string$1", "Description"], "postprocess": (d) => d[1].join("")},
    {"name": "QueryInfo$ebnf$1", "symbols": ["QueryInfo$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "QueryInfo$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "QueryInfo", "symbols": ["word", "QueryInfo$ebnf$1"], "postprocess":  (data) => 
        ({
           [data[0].join("")]: data[1]
        })  
        },
    {"name": "Body$string$1", "symbols": [{"literal":"@"}, {"literal":"B"}, {"literal":"o"}, {"literal":"d"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Body", "symbols": ["Body$string$1", "_", "BodyRest"], "postprocess": data=> ({type: data[0], ...data[2]})},
    {"name": "BodyRest$string$1", "symbols": [{"literal":"j"}, {"literal":"s"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BodyRest", "symbols": ["BodyRest$string$1", "_", "json"], "postprocess": data=> ({contentType: data[0], json: data[2]})},
    {"name": "json$string$1", "symbols": [{"literal":"{"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "json$string$2", "symbols": [{"literal":" "}, {"literal":"}"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "json", "symbols": ["json$string$1", "tagRep", "json$string$2"], "postprocess": data=> data[1]},
    {"name": "tagRep$string$1", "symbols": [{"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "tagRep", "symbols": ["tag", "tagRep$string$1", "tagRep"], "postprocess": data=> ({...data[0], ...data[2]})},
    {"name": "tagRep", "symbols": ["tag"], "postprocess": id},
    {"name": "tag", "symbols": ["word"], "postprocess": data => ({[idJoin(data)]: {}})},
    {"name": "tag$string$1", "symbols": [{"literal":":"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "tag", "symbols": ["word", "tag$string$1", "json"], "postprocess": data => ({[idJoin(data)]: data[2]})},
    {"name": "tag$string$2", "symbols": [{"literal":":"}, {"literal":" "}, {"literal":"\""}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "tag", "symbols": ["word", "tag$string$2", "Description", {"literal":"\""}], "postprocess": data => ({[idJoin(data)]: data[2].join("")})},
    {"name": "ContentType$subexpression$1", "symbols": [/[jJ]/, /[sS]/, /[oO]/, /[nN]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "ContentType", "symbols": ["ContentType$subexpression$1"], "postprocess": id},
    {"name": "ContentType$subexpression$2", "symbols": [/[tT]/, /[eE]/, /[xX]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "ContentType", "symbols": ["ContentType$subexpression$2"], "postprocess": id},
    {"name": "ContentType$subexpression$3", "symbols": [/[xX]/, /[mM]/, /[lL]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "ContentType", "symbols": ["ContentType$subexpression$3"], "postprocess": id},
    {"name": "Response$string$1", "symbols": [{"literal":"@"}, {"literal":"R"}, {"literal":"e"}, {"literal":"s"}, {"literal":"p"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Response$ebnf$1$subexpression$1", "symbols": [{"literal":"\n"}, "Headers"]},
    {"name": "Response$ebnf$1", "symbols": ["Response$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Response$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Response", "symbols": ["Response$string$1", "_", /[0-9]/, /[0-9]/, /[0-9]/, "_", "ResponseRest", "Response$ebnf$1"], "postprocess": data=> ({type: data[0], code: data[2] +data[3]+data[4] , ...data[6]})},
    {"name": "ResponseRest$string$1", "symbols": [{"literal":"j"}, {"literal":"s"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ResponseRest", "symbols": ["ResponseRest$string$1", "_", "json"], "postprocess": data=> ({contentType: data[0], json: data[2]})},
    {"name": "Headers", "symbols": ["Header", {"literal":"\n"}, "Headers"]},
    {"name": "Headers", "symbols": ["Header"]},
    {"name": "Header$string$1", "symbols": [{"literal":"@"}, {"literal":"H"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Header$subexpression$1$string$1", "symbols": [{"literal":"S"}, {"literal":"e"}, {"literal":"t"}, {"literal":"-"}, {"literal":"c"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}, {"literal":"i"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Header$subexpression$1", "symbols": ["Header$subexpression$1$string$1"]},
    {"name": "Header$subexpression$1$string$2", "symbols": [{"literal":"C"}, {"literal":"o"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"-"}, {"literal":"T"}, {"literal":"y"}, {"literal":"p"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Header$subexpression$1", "symbols": ["Header$subexpression$1$string$2"]},
    {"name": "Header", "symbols": ["Header$string$1", "_", "Header$subexpression$1", "_", "Description"]}
]
  , ParserStart: "Main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
