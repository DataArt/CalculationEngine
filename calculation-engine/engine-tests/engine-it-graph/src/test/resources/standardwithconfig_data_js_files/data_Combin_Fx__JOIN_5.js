var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1f4caa75-dd65-4aae-8e98-e4fab5083b67', label: 'COMBIN\n3.0', color: '#f0ad4e', title: 'Name: COMBIN<br>Value: 3.0<br>Type: FUNCTION<br>Id: 1f4caa75-dd65-4aae-8e98-e4fab5083b67<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b1505c3'},
{id: '2478d5ea-f31b-4230-8d5b-269372e38fa7', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 2478d5ea-f31b-4230-8d5b-269372e38fa7<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b1505c3'},
{id: '174d8c03-bd85-4146-9415-05247a25016d', label: 'E6\n3.0', color: '#31b0d5', title: 'Name: E6<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 174d8c03-bd85-4146-9415-05247a25016d<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: 1.0, 3.0 COMBIN ; Ptgs: VALUE, VALUE COMBIN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b1505c3'},
{id: '4f8c5223-0b99-4c63-bb24-999224356596', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 4f8c5223-0b99-4c63-bb24-999224356596<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b1505c3'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4f8c5223-0b99-4c63-bb24-999224356596', to: '1f4caa75-dd65-4aae-8e98-e4fab5083b67'},
{from: '2478d5ea-f31b-4230-8d5b-269372e38fa7', to: '1f4caa75-dd65-4aae-8e98-e4fab5083b67'},
{from: '1f4caa75-dd65-4aae-8e98-e4fab5083b67', to: '174d8c03-bd85-4146-9415-05247a25016d'}
                            ]);