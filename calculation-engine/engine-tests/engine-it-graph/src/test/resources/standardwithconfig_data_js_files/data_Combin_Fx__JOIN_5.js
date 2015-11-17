var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b0f186e7-2158-474f-aa22-35df573381f7', label: 'COMBIN\n3.0', color: '#f0ad4e', title: 'Name: COMBIN<br>Value: 3.0<br>Type: FUNCTION<br>Id: b0f186e7-2158-474f-aa22-35df573381f7<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b1505c3'},
{id: 'f623e282-7700-4599-8666-7ad0ae94c237', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: f623e282-7700-4599-8666-7ad0ae94c237<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b1505c3'},
{id: '5aa73475-c3df-4c39-9435-ae64f408955b', label: 'E6\n3.0', color: '#31b0d5', title: 'Name: E6<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 5aa73475-c3df-4c39-9435-ae64f408955b<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: 1.0, 3.0 COMBIN ; Ptgs: VALUE, VALUE COMBIN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b1505c3'},
{id: '049e5a9b-84c6-479f-be0b-bc1ad2596a10', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 049e5a9b-84c6-479f-be0b-bc1ad2596a10<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b1505c3'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '049e5a9b-84c6-479f-be0b-bc1ad2596a10', to: 'b0f186e7-2158-474f-aa22-35df573381f7'},
{from: 'f623e282-7700-4599-8666-7ad0ae94c237', to: 'b0f186e7-2158-474f-aa22-35df573381f7'},
{from: 'b0f186e7-2158-474f-aa22-35df573381f7', to: '5aa73475-c3df-4c39-9435-ae64f408955b'}
                            ]);