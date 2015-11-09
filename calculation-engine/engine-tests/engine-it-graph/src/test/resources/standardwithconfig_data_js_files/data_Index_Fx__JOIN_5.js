var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '7983207c-1d4b-424f-aebb-8e95d986b6d2', label: 'E6\n[[6.0]]', color: '#31b0d5', title: 'Name: E6<br>Value: [[6.0]]<br>Type: CELL_WITH_FORMULA<br>Id: 7983207c-1d4b-424f-aebb-8e95d986b6d2<br>Formula Expression: Formula String: INDEX(VALUE, VALUE, A1:C4); Formula Values: INDEX(2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0); Formula Ptg: 2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0 INDEX ; Ptgs: VALUE, VALUE, A1:C4 INDEX  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@637edfe0'},
{id: 'e6da704a-17a8-4089-a774-d8ff694937da', label: 'INDEX\n[[6.0]]', color: '#f0ad4e', title: 'Name: INDEX<br>Value: [[6.0]]<br>Type: FUNCTION<br>Id: e6da704a-17a8-4089-a774-d8ff694937da<br>Formula Expression: Formula String: INDEX(VALUE, VALUE, A1:C4); Formula Values: INDEX(2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@637edfe0'},
{id: 'fc29993e-eb97-4bcc-8800-b65e06450273', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: fc29993e-eb97-4bcc-8800-b65e06450273<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@637edfe0'},
{id: 'cceba088-873f-4c0e-b7fd-b0e7ffdb8cf2', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: cceba088-873f-4c0e-b7fd-b0e7ffdb8cf2<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@637edfe0'},
{id: 'ab7452a9-0b9f-44f4-a6ea-fb58d01aaa80', label: 'A1:C4\n...', color: '#31b0d5', title: 'Name: A1:C4<br>Value: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]<br>Type: RANGE<br>Id: ab7452a9-0b9f-44f4-a6ea-fb58d01aaa80<br>Formula Expression: Formula String: A1:C4; Formula Values: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]; Formula Ptg: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]; Ptgs: A1:C4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@637edfe0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e6da704a-17a8-4089-a774-d8ff694937da', to: '7983207c-1d4b-424f-aebb-8e95d986b6d2'},
{from: 'ab7452a9-0b9f-44f4-a6ea-fb58d01aaa80', to: 'e6da704a-17a8-4089-a774-d8ff694937da'},
{from: 'cceba088-873f-4c0e-b7fd-b0e7ffdb8cf2', to: 'e6da704a-17a8-4089-a774-d8ff694937da'},
{from: 'fc29993e-eb97-4bcc-8800-b65e06450273', to: 'e6da704a-17a8-4089-a774-d8ff694937da'}
                            ]);