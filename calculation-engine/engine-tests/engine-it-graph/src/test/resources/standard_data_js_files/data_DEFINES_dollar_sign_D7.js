var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '907cbf8e-e352-4e64-940f-0ed003df2f9c', label: 'B2\n$1500', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: $1500<br>Type: CELL_WITH_VALUE<br>Id: 907cbf8e-e352-4e64-940f-0ed003df2f9c<br>Formula Expression: Formula String: B2; Formula Values: $1500; Formula Ptg: $1500; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ff65192'},
{id: 'b89c7bcd-a8fa-4d8e-8545-2d49872973c1', label: 'FUNCEXEC\n$1800', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: $1800<br>Type: FUNCTION<br>Id: b89c7bcd-a8fa-4d8e-8545-2d49872973c1<br>Formula Expression: Formula String: FUNCEXEC(B2, A2, VALUE); Formula Values: FUNCEXEC($1500, $1000, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ff65192'},
{id: 'eaac2532-80cf-415b-b1ab-3269e89f6bd6', label: 'A2\n$1000', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: $1000<br>Type: CELL_WITH_VALUE<br>Id: eaac2532-80cf-415b-b1ab-3269e89f6bd6<br>Formula Expression: Formula String: A2; Formula Values: $1000; Formula Ptg: $1000; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ff65192'},
{id: '453b0655-3acc-46d2-b4ba-ae8c9da02c86', label: 'D7\n$1800', color: '#31b0d5', title: 'Name: D7<br>Alias: null<br>Value: $1800<br>Type: CELL_WITH_FORMULA<br>Id: 453b0655-3acc-46d2-b4ba-ae8c9da02c86<br>Formula Expression: Formula String: FUNCEXEC(B2, A2, VALUE); Formula Values: FUNCEXEC($1500, $1000, DEVDEF_1); Formula Ptg: $1500, $1000, DEVDEF_1 FUNCEXEC ; Ptgs: B2, A2, VALUE FUNCEXEC  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ff65192'},
{id: '6093b20c-2a42-4a4e-bc50-450ff2f27201', label: 'VALUE\nDEVDEF_1', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_1<br>Type: CONSTANT_VALUE<br>Id: 6093b20c-2a42-4a4e-bc50-450ff2f27201<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_1; Formula Ptg: DEVDEF_1; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ff65192'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '907cbf8e-e352-4e64-940f-0ed003df2f9c', to: 'b89c7bcd-a8fa-4d8e-8545-2d49872973c1'},
{from: 'b89c7bcd-a8fa-4d8e-8545-2d49872973c1', to: '453b0655-3acc-46d2-b4ba-ae8c9da02c86'},
{from: 'eaac2532-80cf-415b-b1ab-3269e89f6bd6', to: 'b89c7bcd-a8fa-4d8e-8545-2d49872973c1'},
{from: '6093b20c-2a42-4a4e-bc50-450ff2f27201', to: 'b89c7bcd-a8fa-4d8e-8545-2d49872973c1'}
                            ]);