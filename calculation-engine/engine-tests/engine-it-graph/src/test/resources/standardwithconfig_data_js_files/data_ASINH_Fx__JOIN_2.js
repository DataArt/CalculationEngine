var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4e03f0cd-e9dd-4b35-bd87-7a45f0b022df', label: 'B2\n-1.6472311463710965', color: '#31b0d5', title: 'Name: B2<br>Value: -1.6472311463710965<br>Type: CELL_WITH_FORMULA<br>Id: 4e03f0cd-e9dd-4b35-bd87-7a45f0b022df<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: -2.5 ASINH ; Ptgs: VALUE ASINH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@58253c57'},
{id: '4d7a8a28-80cf-417f-a0f6-f208d7a397f1', label: 'ASINH\n-1.6472311463710965', color: '#f0ad4e', title: 'Name: ASINH<br>Value: -1.6472311463710965<br>Type: FUNCTION<br>Id: 4d7a8a28-80cf-417f-a0f6-f208d7a397f1<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@58253c57'},
{id: 'd975b9ee-7343-4645-939e-d8922d0f408f', label: 'VALUE\n-2.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: -2.5<br>Type: CONSTANT_VALUE<br>Id: d975b9ee-7343-4645-939e-d8922d0f408f<br>Formula Expression: Formula String: VALUE; Formula Values: -2.5; Formula Ptg: -2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@58253c57'},
{id: '52c8c39c-02f9-420b-8155-cdd3dcfbac33', label: 'B3\n3.4023066454805946', color: '#31b0d5', title: 'Name: B3<br>Value: 3.4023066454805946<br>Type: CELL_WITH_FORMULA<br>Id: 52c8c39c-02f9-420b-8155-cdd3dcfbac33<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: 15.0 ASINH ; Ptgs: VALUE ASINH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@58253c57'},
{id: 'ceb9f113-4134-4d5a-a897-677bcf208b3d', label: 'ASINH\n3.4023066454805946', color: '#f0ad4e', title: 'Name: ASINH<br>Value: 3.4023066454805946<br>Type: FUNCTION<br>Id: ceb9f113-4134-4d5a-a897-677bcf208b3d<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@58253c57'},
{id: 'e5ca0a0e-7af3-444b-a697-4522815b0758', label: 'VALUE\n15.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 15.0<br>Type: CONSTANT_VALUE<br>Id: e5ca0a0e-7af3-444b-a697-4522815b0758<br>Formula Expression: Formula String: VALUE; Formula Values: 15.0; Formula Ptg: 15.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@58253c57'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4d7a8a28-80cf-417f-a0f6-f208d7a397f1', to: '4e03f0cd-e9dd-4b35-bd87-7a45f0b022df'},
{from: 'e5ca0a0e-7af3-444b-a697-4522815b0758', to: 'ceb9f113-4134-4d5a-a897-677bcf208b3d'},
{from: 'ceb9f113-4134-4d5a-a897-677bcf208b3d', to: '52c8c39c-02f9-420b-8155-cdd3dcfbac33'},
{from: 'd975b9ee-7343-4645-939e-d8922d0f408f', to: '4d7a8a28-80cf-417f-a0f6-f208d7a397f1'}
                            ]);