var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd8a8c06a-c74a-4628-9435-ea78e65b27e0', label: 'T\nexpected', color: '#f0ad4e', title: 'Name: T<br>Value: expected<br>Type: FUNCTION<br>Id: d8a8c06a-c74a-4628-9435-ea78e65b27e0<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@759d81f3'},
{id: '9f1a303e-1f59-4dd5-b59f-ac6178b6e0d3', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: 9f1a303e-1f59-4dd5-b59f-ac6178b6e0d3<br>Formula Expression: Formula String: D2; Formula Values: expected; Formula Ptg: expected; Ptgs: D2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@759d81f3'},
{id: '49dfb526-89d5-4561-95f9-02a9bdaae94a', label: 'D5\nexpected', color: '#31b0d5', title: 'Name: D5<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: 49dfb526-89d5-4561-95f9-02a9bdaae94a<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: expected T ; Ptgs: D2 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@759d81f3'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9f1a303e-1f59-4dd5-b59f-ac6178b6e0d3', to: 'd8a8c06a-c74a-4628-9435-ea78e65b27e0'},
{from: 'd8a8c06a-c74a-4628-9435-ea78e65b27e0', to: '49dfb526-89d5-4561-95f9-02a9bdaae94a'}
                            ]);