var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'f1465b36-0cfc-4baf-8bd4-7c4074effde9', label: 'A1:C4\n...', color: '#31b0d5', title: 'Name: A1:C4<br>Value: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]<br>Type: RANGE<br>Id: f1465b36-0cfc-4baf-8bd4-7c4074effde9<br>Formula Expression: Formula String: A1:C4; Formula Values: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]; Formula Ptg: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]; Ptgs: A1:C4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@232cce0'},
{id: 'a1234849-6f45-4d50-9475-25a8dd31d728', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: a1234849-6f45-4d50-9475-25a8dd31d728<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@232cce0'},
{id: '683c8ecf-0050-4071-bb33-2fb95bf0e1c0', label: 'HLOOKUP\n4.0', color: '#f0ad4e', title: 'Name: HLOOKUP<br>Value: 4.0<br>Type: FUNCTION<br>Id: 683c8ecf-0050-4071-bb33-2fb95bf0e1c0<br>Formula Expression: Formula String: HLOOKUP(VALUE, VALUE, A1:C4, VALUE); Formula Values: HLOOKUP(TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@232cce0'},
{id: '2aee8a16-e6c2-4c28-afe2-6d3d9a1c3b05', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 2aee8a16-e6c2-4c28-afe2-6d3d9a1c3b05<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@232cce0'},
{id: '124ecd07-8cfd-4392-8976-d737011ca3ec', label: 'D5\n4.0', color: '#31b0d5', title: 'Name: D5<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 124ecd07-8cfd-4392-8976-d737011ca3ec<br>Formula Expression: Formula String: HLOOKUP(VALUE, VALUE, A1:C4, VALUE); Formula Values: HLOOKUP(TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt); Formula Ptg: TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt HLOOKUP ; Ptgs: VALUE, VALUE, A1:C4, VALUE HLOOKUP  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@232cce0'},
{id: '34a0ba47-8b0c-4a00-a838-6aec8f02afc8', label: 'VALUE\nAlt', color: '#31b0d5', title: 'Name: VALUE<br>Value: Alt<br>Type: CONSTANT_VALUE<br>Id: 34a0ba47-8b0c-4a00-a838-6aec8f02afc8<br>Formula Expression: Formula String: VALUE; Formula Values: Alt; Formula Ptg: Alt; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@232cce0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f1465b36-0cfc-4baf-8bd4-7c4074effde9', to: '683c8ecf-0050-4071-bb33-2fb95bf0e1c0'},
{from: '2aee8a16-e6c2-4c28-afe2-6d3d9a1c3b05', to: '683c8ecf-0050-4071-bb33-2fb95bf0e1c0'},
{from: '683c8ecf-0050-4071-bb33-2fb95bf0e1c0', to: '124ecd07-8cfd-4392-8976-d737011ca3ec'},
{from: '34a0ba47-8b0c-4a00-a838-6aec8f02afc8', to: '683c8ecf-0050-4071-bb33-2fb95bf0e1c0'},
{from: 'a1234849-6f45-4d50-9475-25a8dd31d728', to: '683c8ecf-0050-4071-bb33-2fb95bf0e1c0'}
                            ]);