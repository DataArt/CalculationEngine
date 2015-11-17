var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '63dd9847-52b1-40a2-98dd-afa195f57311', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 63dd9847-52b1-40a2-98dd-afa195f57311<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@29394966'},
{id: '0f4ee55d-8381-4bb4-848a-8aa8de397dd9', label: 'COMBIN\n3.0', color: '#f0ad4e', title: 'Name: COMBIN<br>Value: 3.0<br>Type: FUNCTION<br>Id: 0f4ee55d-8381-4bb4-848a-8aa8de397dd9<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@29394966'},
{id: '73cecb7c-68ae-47fc-a71b-a49a823e2074', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 73cecb7c-68ae-47fc-a71b-a49a823e2074<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@29394966'},
{id: '95a65a10-9d18-4d27-b1d5-c44d568deef4', label: 'E6\n3.0', color: '#31b0d5', title: 'Name: E6<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 95a65a10-9d18-4d27-b1d5-c44d568deef4<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: 1.0, 3.0 COMBIN ; Ptgs: VALUE, VALUE COMBIN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@29394966'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '63dd9847-52b1-40a2-98dd-afa195f57311', to: '0f4ee55d-8381-4bb4-848a-8aa8de397dd9'},
{from: '73cecb7c-68ae-47fc-a71b-a49a823e2074', to: '0f4ee55d-8381-4bb4-848a-8aa8de397dd9'},
{from: '0f4ee55d-8381-4bb4-848a-8aa8de397dd9', to: '95a65a10-9d18-4d27-b1d5-c44d568deef4'}
                            ]);