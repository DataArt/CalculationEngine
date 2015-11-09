var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd7833532-2d83-4ba5-9bb3-0db119818a14', label: 'D5\n4.0', color: '#31b0d5', title: 'Name: D5<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: d7833532-2d83-4ba5-9bb3-0db119818a14<br>Formula Expression: Formula String: HLOOKUP(VALUE, VALUE, A1:C4, VALUE); Formula Values: HLOOKUP(TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt); Formula Ptg: TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt HLOOKUP ; Ptgs: VALUE, VALUE, A1:C4, VALUE HLOOKUP  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5afef53'},
{id: '2ae4b772-c4dc-41e6-b5a3-2d0d38287f54', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 2ae4b772-c4dc-41e6-b5a3-2d0d38287f54<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5afef53'},
{id: '11e580dc-eaa9-44b8-81c4-fafd4e4761dd', label: 'HLOOKUP\n4.0', color: '#f0ad4e', title: 'Name: HLOOKUP<br>Value: 4.0<br>Type: FUNCTION<br>Id: 11e580dc-eaa9-44b8-81c4-fafd4e4761dd<br>Formula Expression: Formula String: HLOOKUP(VALUE, VALUE, A1:C4, VALUE); Formula Values: HLOOKUP(TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5afef53'},
{id: 'c2284109-1e9f-4dd7-b075-236ed771df3c', label: 'A1:C4\n...', color: '#31b0d5', title: 'Name: A1:C4<br>Value: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]<br>Type: RANGE<br>Id: c2284109-1e9f-4dd7-b075-236ed771df3c<br>Formula Expression: Formula String: A1:C4; Formula Values: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]; Formula Ptg: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]; Ptgs: A1:C4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5afef53'},
{id: 'dfc6d723-aefd-489f-8724-b14e73a632f5', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: dfc6d723-aefd-489f-8724-b14e73a632f5<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5afef53'},
{id: '30df3c0b-0aee-4cb9-9d10-c6d8ec75d4a2', label: 'VALUE\nAlt', color: '#31b0d5', title: 'Name: VALUE<br>Value: Alt<br>Type: CONSTANT_VALUE<br>Id: 30df3c0b-0aee-4cb9-9d10-c6d8ec75d4a2<br>Formula Expression: Formula String: VALUE; Formula Values: Alt; Formula Ptg: Alt; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5afef53'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2ae4b772-c4dc-41e6-b5a3-2d0d38287f54', to: '11e580dc-eaa9-44b8-81c4-fafd4e4761dd'},
{from: '11e580dc-eaa9-44b8-81c4-fafd4e4761dd', to: 'd7833532-2d83-4ba5-9bb3-0db119818a14'},
{from: 'dfc6d723-aefd-489f-8724-b14e73a632f5', to: '11e580dc-eaa9-44b8-81c4-fafd4e4761dd'},
{from: 'c2284109-1e9f-4dd7-b075-236ed771df3c', to: '11e580dc-eaa9-44b8-81c4-fafd4e4761dd'},
{from: '30df3c0b-0aee-4cb9-9d10-c6d8ec75d4a2', to: '11e580dc-eaa9-44b8-81c4-fafd4e4761dd'}
                            ]);