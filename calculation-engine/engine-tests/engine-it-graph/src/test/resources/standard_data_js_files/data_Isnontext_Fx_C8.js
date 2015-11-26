var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '160fc9fa-e7c1-43e7-abb9-1f83334f5e8f', label: 'VALUE\n67.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 67.0<br>Type: CONSTANT_VALUE<br>Id: 160fc9fa-e7c1-43e7-abb9-1f83334f5e8f<br>Formula Expression: Formula String: VALUE; Formula Values: 67.0; Formula Ptg: 67.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73fb1d7f'},
{id: '39ae8068-e487-4d23-a778-652a7773daf2', label: 'ISNONTEXT\nTRUE', color: '#f0ad4e', title: 'Name: ISNONTEXT<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 39ae8068-e487-4d23-a778-652a7773daf2<br>Formula Expression: Formula String: ISNONTEXT(VALUE); Formula Values: ISNONTEXT(67.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73fb1d7f'},
{id: '76d91a1b-d654-41d9-a000-c3c53691352e', label: 'C8\nTRUE', color: '#31b0d5', title: 'Name: C8<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 76d91a1b-d654-41d9-a000-c3c53691352e<br>Formula Expression: Formula String: ISNONTEXT(VALUE); Formula Values: ISNONTEXT(67.0); Formula Ptg: 67.0 ISNONTEXT ; Ptgs: VALUE ISNONTEXT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73fb1d7f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '39ae8068-e487-4d23-a778-652a7773daf2', to: '76d91a1b-d654-41d9-a000-c3c53691352e'},
{from: '160fc9fa-e7c1-43e7-abb9-1f83334f5e8f', to: '39ae8068-e487-4d23-a778-652a7773daf2'}
                            ]);