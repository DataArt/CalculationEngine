var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b1fd0cc0-91f5-485e-b8b0-c43b71f03307', label: 'FIND\n6.0', color: '#f0ad4e', title: 'Name: FIND<br>Value: 6.0<br>Type: FUNCTION<br>Id: b1fd0cc0-91f5-485e-b8b0-c43b71f03307<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3e83c18'},
{id: 'dddff536-6178-4b16-872c-daf2512ae1dc', label: 'A5\n6.0', color: '#31b0d5', title: 'Name: A5<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: dddff536-6178-4b16-872c-daf2512ae1dc<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: Some text for test, text FIND ; Ptgs: A1, VALUE FIND  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3e83c18'},
{id: 'db72511a-54f9-47bb-a393-7daacb3c0ce2', label: 'A1\nSome text for test', color: '#31b0d5', title: 'Name: A1<br>Value: Some text for test<br>Type: CELL_WITH_VALUE<br>Id: db72511a-54f9-47bb-a393-7daacb3c0ce2<br>Formula Expression: Formula String: A1; Formula Values: Some text for test; Formula Ptg: Some text for test; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3e83c18'},
{id: '0e176e44-8df5-4cb1-b00d-e4b82a7abfff', label: 'VALUE\ntext', color: '#31b0d5', title: 'Name: VALUE<br>Value: text<br>Type: CONSTANT_VALUE<br>Id: 0e176e44-8df5-4cb1-b00d-e4b82a7abfff<br>Formula Expression: Formula String: VALUE; Formula Values: text; Formula Ptg: text; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3e83c18'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0e176e44-8df5-4cb1-b00d-e4b82a7abfff', to: 'b1fd0cc0-91f5-485e-b8b0-c43b71f03307'},
{from: 'db72511a-54f9-47bb-a393-7daacb3c0ce2', to: 'b1fd0cc0-91f5-485e-b8b0-c43b71f03307'},
{from: 'b1fd0cc0-91f5-485e-b8b0-c43b71f03307', to: 'dddff536-6178-4b16-872c-daf2512ae1dc'}
                            ]);