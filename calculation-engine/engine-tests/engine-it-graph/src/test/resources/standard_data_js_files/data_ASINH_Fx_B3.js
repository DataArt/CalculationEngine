var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '43c5bf7e-18bd-4429-b7fc-01044a29ce5a', label: 'B3\n3.4023066454805946', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 3.4023066454805946<br>Type: CELL_WITH_FORMULA<br>Id: 43c5bf7e-18bd-4429-b7fc-01044a29ce5a<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: 15.0 ASINH ; Ptgs: VALUE ASINH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7671cb68'},
{id: '41b4d82b-bf73-4616-9f07-35329ae03cc3', label: 'VALUE\n15.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 15.0<br>Type: CONSTANT_VALUE<br>Id: 41b4d82b-bf73-4616-9f07-35329ae03cc3<br>Formula Expression: Formula String: VALUE; Formula Values: 15.0; Formula Ptg: 15.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7671cb68'},
{id: '8f14fdbb-e5d0-4784-9efd-efccda9f932c', label: 'ASINH\n3.4023066454805946', color: '#f0ad4e', title: 'Name: ASINH<br>Alias: null<br>Value: 3.4023066454805946<br>Type: FUNCTION<br>Id: 8f14fdbb-e5d0-4784-9efd-efccda9f932c<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7671cb68'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '41b4d82b-bf73-4616-9f07-35329ae03cc3', to: '8f14fdbb-e5d0-4784-9efd-efccda9f932c'},
{from: '8f14fdbb-e5d0-4784-9efd-efccda9f932c', to: '43c5bf7e-18bd-4429-b7fc-01044a29ce5a'}
                            ]);