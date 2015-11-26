var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9783ac6d-28b4-441c-b61a-daea9eb8863f', label: '/\n4.0', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 4.0<br>Type: OPERATOR<br>Id: 9783ac6d-28b4-441c-b61a-daea9eb8863f<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@31aa3ca5'},
{id: '6926f421-dffd-44f6-b401-99ddbd95b171', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 6926f421-dffd-44f6-b401-99ddbd95b171<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: 100.0 25.0 /; Ptgs: A1 A2 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@31aa3ca5'},
{id: 'f44198a1-d179-4d3c-8815-fc725f16df42', label: 'A2\n25.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 25.0<br>Type: CELL_WITH_VALUE<br>Id: f44198a1-d179-4d3c-8815-fc725f16df42<br>Formula Expression: Formula String: A2; Formula Values: 25.0; Formula Ptg: 25.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@31aa3ca5'},
{id: '2079e98f-3721-401b-8ce7-ce7975585dcd', label: 'A1\n100.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 100.0<br>Type: CELL_WITH_VALUE<br>Id: 2079e98f-3721-401b-8ce7-ce7975585dcd<br>Formula Expression: Formula String: A1; Formula Values: 100.0; Formula Ptg: 100.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@31aa3ca5'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2079e98f-3721-401b-8ce7-ce7975585dcd', to: '9783ac6d-28b4-441c-b61a-daea9eb8863f'},
{from: '9783ac6d-28b4-441c-b61a-daea9eb8863f', to: '6926f421-dffd-44f6-b401-99ddbd95b171'},
{from: 'f44198a1-d179-4d3c-8815-fc725f16df42', to: '9783ac6d-28b4-441c-b61a-daea9eb8863f'}
                            ]);