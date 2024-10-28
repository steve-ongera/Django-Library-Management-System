define("ace/mode/vbscript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,s=function(){var e=this.createKeywordMapper({"keyword.control.asp":"If|Then|Else|ElseIf|End|While|Wend|For|To|Each|Case|Select|Return|Continue|Do|Until|Loop|Next|With|Exit|Function|Property|Type|Enum|Sub|IIf|Class","storage.type.asp":"Dim|Call|Const|Redim|Set|Let|Get|New|Randomize|Option|Explicit|Preserve|Erase|Execute|ExecuteGlobal","storage.modifier.asp":"Private|Public|Default","keyword.operator.asp":"Mod|And|Not|Or|Xor|As|Eqv|Imp|Is","constant.language.asp":"Empty|False|Nothing|Null|True","variable.language.vb.asp":"Me","support.class.vb.asp":"RegExp","support.class.asp":"Application|ObjectContext|Request|Response|Server|Session","support.class.collection.asp":"Contents|StaticObjects|ClientCertificate|Cookies|Form|QueryString|ServerVariables","support.constant.asp":"TotalBytes|Buffer|CacheControl|Charset|ContentType|Expires|ExpiresAbsolute|IsClientConnected|PICS|Status|ScriptTimeout|CodePage|LCID|SessionID|Timeout","support.function.asp":"Lock|Unlock|SetAbort|SetComplete|BinaryRead|AddHeader|AppendToLog|BinaryWrite|Clear|Flush|Redirect|Write|CreateObject|HTMLEncode|MapPath|URLEncode|Abandon|Convert|Regex","support.function.event.asp":"Application_OnEnd|Application_OnStart|OnTransactionAbort|OnTransactionCommit|Session_OnEnd|Session_OnStart","support.function.vb.asp":"Array|Add|Asc|Atn|CBool|CByte|CCur|CDate|CDbl|Chr|CInt|CLng|Conversions|Cos|CreateObject|CSng|CStr|Date|DateAdd|DateDiff|DatePart|DateSerial|DateValue|Day|Derived|Math|Escape|Eval|Exists|Exp|Filter|FormatCurrency|FormatDateTime|FormatNumber|FormatPercent|GetLocale|GetObject|GetRef|Hex|Hour|InputBox|InStr|InStrRev|Int|Fix|IsArray|IsDate|IsEmpty|IsNull|IsNumeric|IsObject|Item|Items|Join|Keys|LBound|LCase|Left|Len|LoadPicture|Log|LTrim|RTrim|Trim|Maths|Mid|Minute|Month|MonthName|MsgBox|Now|Oct|Remove|RemoveAll|Replace|RGB|Right|Rnd|Round|ScriptEngine|ScriptEngineBuildVersion|ScriptEngineMajorVersion|ScriptEngineMinorVersion|Second|SetLocale|Sgn|Sin|Space|Split|Sqr|StrComp|String|StrReverse|Tan|Time|Timer|TimeSerial|TimeValue|TypeName|UBound|UCase|Unescape|VarType|Weekday|WeekdayName|Year|AscB|AscW|ChrB|ChrW|InStrB|LeftB|LenB|MidB|RightB|Abs|GetUILanguage","support.type.vb.asp":"vbTrue|vbFalse|vbCr|vbCrLf|vbFormFeed|vbLf|vbNewLine|vbNullChar|vbNullString|vbTab|vbVerticalTab|vbBinaryCompare|vbTextCompare|vbSunday|vbMonday|vbTuesday|vbWednesday|vbThursday|vbFriday|vbSaturday|vbUseSystemDayOfWeek|vbFirstJan1|vbFirstFourDays|vbFirstFullWeek|vbGeneralDate|vbLongDate|vbShortDate|vbLongTime|vbShortTime|vbObjectError|vbEmpty|vbNull|vbInteger|vbLong|vbSingle|vbDouble|vbCurrency|vbDate|vbString|vbObject|vbError|vbBoolean|vbVariant|vbDataObject|vbDecimal|vbByte|vbArray|vbOKOnly|vbOKCancel|vbAbortRetryIgnore|vbYesNoCancel|vbYesNo|vbRetryCancel|vbCritical|vbQuestion|vbExclamation|vbInformation|vbDefaultButton1|vbDefaultButton2|vbDefaultButton3|vbDefaultButton4|vbApplicationModal|vbSystemModal|vbOK|vbCancel|vbAbort|vbRetry|vbIgnore|vbYes|vbNo|vbUseDefault"},"identifier",!0);this.$rules={start:[{token:["meta.ending-space"],regex:"$"},{token:[null],regex:"^(?=\\t)",next:"state_3"},{token:[null],regex:"^(?= )",next:"state_4"},{token:["text","storage.type.function.asp","text","entity.name.function.asp","text","punctuation.definition.parameters.asp","variable.parameter.function.asp","punctuation.definition.parameters.asp"],regex:"^(\\s*)(Function|Sub)(\\s+)([a-zA-Z_]\\w*)(\\s*)(\\()([^)]*)(\\))"},{token:"punctuation.definition.comment.asp",regex:"'|REM(?=\\s|$)",next:"comment",caseInsensitive:!0},{token:"storage.type.asp",regex:"On\\s+Error\\s+(?:Resume\\s+Next|GoTo)\\b",caseInsensitive:!0},{token:"punctuation.definition.string.begin.asp",regex:'"',next:"string"},{token:["punctuation.definition.variable.asp"],regex:"(\\$)[a-zA-Z_x7f-xff][a-zA-Z0-9_x7f-xff]*?\\b\\s*"},{token:"constant.numeric.asp",regex:"-?\\b(?:(?:0(?:x|X)[0-9a-fA-F]*)|(?:(?:[0-9]+\\.?[0-9]*)|(?:\\.[0-9]+))(?:(?:e|E)(?:\\+|-)?[0-9]+)?)(?:L|l|UL|ul|u|U|F|f)?\\b"},{regex:"\\w+",token:e},{token:["entity.name.function.asp"],regex:"(?:(\\b[a-zA-Z_x7f-xff][a-zA-Z0-9_x7f-xff]*?\\b)(?=\\(\\)?))"},{token:["keyword.operator.asp"],regex:"\\-|\\+|\\*|\\/|\\>|\\<|\\=|\\&|\\\\|\\^"}],state_3:[{token:["meta.odd-tab.tabs","meta.even-tab.tabs"],regex:"(\\t)(\\t)?"},{token:"meta.leading-space",regex:"(?=[^\\t])",next:"start"},{token:"meta.leading-space",regex:".",next:"state_3"}],state_4:[{token:["meta.odd-tab.spaces","meta.even-tab.spaces"],regex:"(  )(  )?"},{token:"meta.leading-space",regex:"(?=[^ ])",next:"start"},{defaultToken:"meta.leading-space"}],comment:[{token:"comment.line.apostrophe.asp",regex:"$",next:"start"},{defaultToken:"comment.line.apostrophe.asp"}],string:[{token:"constant.character.escape.apostrophe.asp",regex:'""'},{token:"string.quoted.double.asp",regex:'"',next:"start"},{defaultToken:"string.quoted.double.asp"}]}};r.inherits(s,i),t.VBScriptHighlightRules=s}),define("ace/mode/folding/vbscript",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range","ace/token_iterator"],function(e,t,n){"use strict";var r=e("../../lib/oop"),i=e("./fold_mode").FoldMode,s=e("../../range").Range,o=e("../../token_iterator").TokenIterator,u=t.FoldMode=function(){};r.inherits(u,i),function(){this.indentKeywords={"class":1,"function":1,sub:1,"if":1,select:1,"do":1,"for":1,"while":1,"with":1,property:1,"else":1,elseif:1,end:-1,loop:-1,next:-1,wend:-1},this.foldingStartMarker=/(?:\s|^)(class|function|sub|if|select|do|for|while|with|property|else|elseif)\b/i,this.foldingStopMarker=/\b(end|loop|next|wend)\b/i,this.getFoldWidgetRange=function(e,t,n){var r=e.getLine(n),i=this.foldingStartMarker.test(r),s=this.foldingStopMarker.test(r);if(i||s){var o=s?this.foldingStopMarker.exec(r):this.foldingStartMarker.exec(r),u=o&&o[1].toLowerCase();if(u){var a=e.getTokenAt(n,o.index+2).type;if(a==="keyword.control.asp"||a==="storage.type.function.asp")return this.vbsBlock(e,n,o.index+2)}}},this.getFoldWidget=function(e,t,n){var r=e.getLine(n),i=this.foldingStartMarker.test(r),s=this.foldingStopMarker.test(r);if(i&&!s){var o=this.foldingStartMarker.exec(r),u=o&&o[1].toLowerCase();if(u){var a=e.getTokenAt(n,o.index+2).type;if(a=="keyword.control.asp"||a=="storage.type.function.asp")return u=="if"&&!/then\s*('|$)/i.test(r)?"":"start"}}return""},this.vbsBlock=function(e,t,n,r){var i=new o(e,t,n),u={"class":1,"function":1,sub:1,"if":1,select:1,"with":1,property:1,"else":1,elseif:1},a=i.getCurrentToken();if(!a||a.type!="keyword.control.asp"&&a.type!="storage.type.function.asp")return;var f=a.value.toLowerCase(),l=a.value.toLowerCase(),c=[l],h=this.indentKeywords[l];if(!h)return;var p=i.getCurrentTokenRange();switch(l){case"property":case"sub":case"function":case"if":case"select":case"do":case"for":case"class":case"while":case"with":var d=e.getLine(t),v=/^\s*If\s+.*\s+Then(?!')\s+(?!')\S/i.test(d);if(v)return;var m=new RegExp("(?:^|\\s)"+l,"i"),g=/^\s*End\s(If|Sub|Select|Function|Class|With|Property)\s*/i.test(d);if(!m.test(d)&&!g)return;if(g){var r=i.getCurrentTokenRange();i.step=i.stepBackward,i.step(),i.step(),a=i.getCurrentToken(),a&&(l=a.value.toLowerCase(),l=="end"&&(p=i.getCurrentTokenRange(),p=new s(p.start.row,p.start.column,r.start.row,r.end.column))),h=-1}break;case"end":var y=i.getCurrentTokenPosition();p=i.getCurrentTokenRange(),i.step=i.stepForward,i.step(),i.step(),a=i.getCurrentToken();if(a){l=a.value.toLowerCase();if(l in u){f=l;var b=i.getCurrentTokenPosition(),w=b.column+l.length;p=new s(y.row,y.column,b.row,w)}}i.step=i.stepBackward,i.step(),i.step()}var E=h===-1?e.getLine(t-1).length:e.getLine(t).length,S=t,x=[];x.push(p),i.step=h===-1?i.stepBackward:i.stepForward;while(a=i.step()){var T=null,N=!1;if(a.type!="keyword.control.asp"&&a.type!="storage.type.function.asp")continue;l=a.value.toLowerCase();var C=h*this.indentKeywords[l];switch(l){case"property":case"sub":case"function":case"if":case"select":case"do":case"for":case"class":case"while":case"with":var d=e.getLine(i.getCurrentTokenRow()),v=/^\s*If\s+.*\s+Then(?!')\s+(?!')\S/i.test(d);v&&(C=0,N=!0);var m=new RegExp("^\\s* end\\s+"+l,"i");m.test(d)&&(C=0,N=!0);break;case"elseif":case"else":C=0,f!="elseif"&&(N=!0)}if(C>0)c.unshift(l);else if(C<=0&&N===!1){c.shift();if(!c.length){switch(l){case"end":var y=i.getCurrentTokenPosition();T=i.getCurrentTokenRange(),i.step(),i.step(),a=i.getCurrentToken();if(a){l=a.value.toLowerCase();if(l in u){f=="else"||f=="elseif"?l!=="if"&&x.shift():l!=f&&x.shift();var b=i.getCurrentTokenPosition(),w=b.column+l.length;T=new s(y.row,y.column,b.row,w)}else x.shift()}else x.shift();i.step=i.stepBackward,i.step(),i.step(),a=i.getCurrentToken(),l=a.value.toLowerCase();break;case"select":case"sub":case"if":case"function":case"class":case"with":case"property":l!=f&&x.shift();break;case"do":f!="loop"&&x.shift();break;case"loop":f!="do"&&x.shift();break;case"for":f!="next"&&x.shift();break;case"next":f!="for"&&x.shift();break;case"while":f!="wend"&&x.shift();break;case"wend":f!="while"&&x.shift()}break}C===0&&c.unshift(l)}}if(!a)return null;if(r)return T?x.push(T):x.push(i.getCurrentTokenRange()),x;var t=i.getCurrentTokenRow();if(h===-1){var w=e.getLine(t).length;return new s(t,w,S-1,E)}return new s(S,E,t-1,e.getLine(t-1).length)}}.call(u.prototype)}),define("ace/mode/vbscript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/vbscript_highlight_rules","ace/mode/folding/vbscript","ace/range"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text").Mode,s=e("./vbscript_highlight_rules").VBScriptHighlightRules,o=e("./folding/vbscript").FoldMode,u=e("../range").Range,a=function(){this.HighlightRules=s,this.foldingRules=new o,this.$behaviour=this.$defaultBehaviour,this.indentKeywords=this.foldingRules.indentKeywords};r.inherits(a,i),function(){function t(e,t,n){var r=0;for(var i=0;i<e.length;i++){var s=e[i];if(s.type=="keyword.control.asp"||s.type=="storage.type.function.asp"){var o=s.value.toLowerCase();if(o in n)switch(o){case"property":case"sub":case"function":case"select":case"do":case"for":case"class":case"while":case"with":case"if":var u=new RegExp("^\\s* end\\s+"+o,"i"),a=/^\s*If\s+.*\s+Then(?!')\s+(?!')\S/i.test(t);!a&&!u.test(t)&&(r+=n[o]);break;default:r+=n[o]}}}return r<0?-1:r>0?1:0}this.lineCommentStart=["'","REM"];var e=["else","elseif","end","loop","next","wend"];this.getNextLineIndent=function(e,n,r){var i=this.$getIndent(n),s=0,o=this.getTokenizer().getLineTokens(n,e),u=o.tokens;return e=="start"&&(s=t(u,n,this.indentKeywords)),s>0?i+r:s<0&&i.substr(i.length-r.length)==r&&!this.checkOutdent(e,n,"\n")?i.substr(0,i.length-r.length):i},this.checkOutdent=function(t,n,r){if(r!="\n"&&r!="\r"&&r!="\r\n")return!1;var i=this.getTokenizer().getLineTokens(n.trim(),t).tokens;if(!i||!i.length)return!1;var s=i[0].value.toLowerCase();return(i[0].type=="keyword.control.asp"||i[0].type=="storage.type.function.asp")&&e.indexOf(s)!=-1},this.getMatching=function(e,t,n,r){if(t==undefined){var i=e.selection.lead;n=i.column,t=i.row}r==undefined&&(r=!0);var s=e.getTokenAt(t,n);if(s){var o=s.value.toLowerCase();if(o in this.indentKeywords)return this.foldingRules.vbsBlock(e,t,n,r)}},this.autoOutdent=function(e,t,n){var r=t.getLine(n),i=r.match(/^\s*/)[0].length;if(!i||!n)return;var s=this.getMatching(t,n,i+1,!1);if(!s||s.start.row==n)return;var o=this.$getIndent(t.getLine(s.start.row));o.length!=i&&(t.replace(new u(n,0,n,i),o),t.outdentRows(new u(n+1,0,n+1,0)))},this.$id="ace/mode/vbscript"}.call(a.prototype),t.Mode=a});                (function() {
                    window.require(["ace/mode/vbscript"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
