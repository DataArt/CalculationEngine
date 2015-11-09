var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd8e44e8e-20a3-4e70-9885-9715702f4903', label: 'A1\n2.718281828459045', color: '#31b0d5', title: 'Name: A1<br>Value: 2.718281828459045<br>Type: CELL_WITH_FORMULA<br>Id: d8e44e8e-20a3-4e70-9885-9715702f4903<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: 1.0 EXP ; Ptgs: VALUE EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44d43cc9'},
{id: '1470c992-be31-4856-9fa8-c4f2df029fa3', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 1470c992-be31-4856-9fa8-c4f2df029fa3<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44d43cc9'},
{id: 'fa6f328a-9e05-4d66-b752-b8da8b7a1845', label: 'EXP\n15.154262241479259', color: '#f0ad4e', title: 'Name: EXP<br>Value: 15.154262241479259<br>Type: FUNCTION<br>Id: fa6f328a-9e05-4d66-b752-b8da8b7a1845<br>Formula Expression: Formula String: EXP(EXP(VALUE)); Formula Values: EXP(EXP(1.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44d43cc9'},
{id: 'f7fd7b2d-9e6e-4219-8d9b-fd57674610de', label: 'EXP\n7.3890560989306495', color: '#f0ad4e', title: 'Name: EXP<br>Value: 7.3890560989306495<br>Type: FUNCTION<br>Id: f7fd7b2d-9e6e-4219-8d9b-fd57674610de<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44d43cc9'},
{id: '43d50803-c77e-467b-8e4f-b6af4b59d849', label: 'A2\n7.3890560989306495', color: '#31b0d5', title: 'Name: A2<br>Value: 7.3890560989306495<br>Type: CELL_WITH_FORMULA<br>Id: 43d50803-c77e-467b-8e4f-b6af4b59d849<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(2.0); Formula Ptg: 2.0 EXP ; Ptgs: VALUE EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44d43cc9'},
{id: '601fab91-69d0-45df-8977-5ed33d4824c3', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 601fab91-69d0-45df-8977-5ed33d4824c3<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44d43cc9'},
{id: 'a3def494-402b-4947-ae5f-166e7e31d583', label: 'EXP\n2.718281828459045', color: '#f0ad4e', title: 'Name: EXP<br>Value: 2.718281828459045<br>Type: FUNCTION<br>Id: a3def494-402b-4947-ae5f-166e7e31d583<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44d43cc9'},
{id: '11fed511-acd0-4c92-ba1b-325206b8e74c', label: 'B1\n15.154262241479259', color: '#31b0d5', title: 'Name: B1<br>Value: 15.154262241479259<br>Type: CELL_WITH_FORMULA<br>Id: 11fed511-acd0-4c92-ba1b-325206b8e74c<br>Formula Expression: Formula String: EXP(EXP(VALUE)); Formula Values: EXP(EXP(1.0)); Formula Ptg: 1.0 EXP  EXP ; Ptgs: VALUE EXP  EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44d43cc9'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1470c992-be31-4856-9fa8-c4f2df029fa3', to: 'a3def494-402b-4947-ae5f-166e7e31d583'},
{from: 'fa6f328a-9e05-4d66-b752-b8da8b7a1845', to: '11fed511-acd0-4c92-ba1b-325206b8e74c'},
{from: '601fab91-69d0-45df-8977-5ed33d4824c3', to: 'f7fd7b2d-9e6e-4219-8d9b-fd57674610de'},
{from: 'd8e44e8e-20a3-4e70-9885-9715702f4903', to: 'fa6f328a-9e05-4d66-b752-b8da8b7a1845'},
{from: 'a3def494-402b-4947-ae5f-166e7e31d583', to: 'd8e44e8e-20a3-4e70-9885-9715702f4903'},
{from: 'f7fd7b2d-9e6e-4219-8d9b-fd57674610de', to: '43d50803-c77e-467b-8e4f-b6af4b59d849'}
                            ]);