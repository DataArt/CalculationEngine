var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd42d8794-4622-409f-9b15-aab5859287dc', label: 'B1\n15.154262241479259', color: '#31b0d5', title: 'Name: B1<br>Value: 15.154262241479259<br>Type: CELL_WITH_FORMULA<br>Id: d42d8794-4622-409f-9b15-aab5859287dc<br>Formula Expression: Formula String: EXP(EXP(VALUE)); Formula Values: EXP(EXP(1.0)); Formula Ptg: 1.0 EXP  EXP ; Ptgs: VALUE EXP  EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73a00e09'},
{id: '7452f158-1593-4568-8403-dde7621500b3', label: 'A1\n2.718281828459045', color: '#31b0d5', title: 'Name: A1<br>Value: 2.718281828459045<br>Type: CELL_WITH_FORMULA<br>Id: 7452f158-1593-4568-8403-dde7621500b3<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: 1.0 EXP ; Ptgs: VALUE EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73a00e09'},
{id: '4a6ba70d-fbe2-4ff0-9d5b-1d0064cf67db', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 4a6ba70d-fbe2-4ff0-9d5b-1d0064cf67db<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73a00e09'},
{id: 'fc771913-b90a-4fe1-aa3c-5f43b513bc1c', label: 'A2\n7.3890560989306495', color: '#31b0d5', title: 'Name: A2<br>Value: 7.3890560989306495<br>Type: CELL_WITH_FORMULA<br>Id: fc771913-b90a-4fe1-aa3c-5f43b513bc1c<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(2.0); Formula Ptg: 2.0 EXP ; Ptgs: VALUE EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73a00e09'},
{id: 'd47d014e-ae9b-4bf3-ab98-2fc7804e4bfa', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: d47d014e-ae9b-4bf3-ab98-2fc7804e4bfa<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73a00e09'},
{id: '1d01e50a-377a-44d6-876a-dd7e040d0c43', label: 'EXP\n2.718281828459045', color: '#f0ad4e', title: 'Name: EXP<br>Value: 2.718281828459045<br>Type: FUNCTION<br>Id: 1d01e50a-377a-44d6-876a-dd7e040d0c43<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73a00e09'},
{id: 'f94bde13-2f9b-41ed-95aa-4e67772a6cd3', label: 'EXP\n7.3890560989306495', color: '#f0ad4e', title: 'Name: EXP<br>Value: 7.3890560989306495<br>Type: FUNCTION<br>Id: f94bde13-2f9b-41ed-95aa-4e67772a6cd3<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73a00e09'},
{id: 'f4ec4193-2b63-4058-946f-a06a64d2716a', label: 'EXP\n15.154262241479259', color: '#f0ad4e', title: 'Name: EXP<br>Value: 15.154262241479259<br>Type: FUNCTION<br>Id: f4ec4193-2b63-4058-946f-a06a64d2716a<br>Formula Expression: Formula String: EXP(EXP(VALUE)); Formula Values: EXP(EXP(1.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73a00e09'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f4ec4193-2b63-4058-946f-a06a64d2716a', to: 'd42d8794-4622-409f-9b15-aab5859287dc'},
{from: 'd47d014e-ae9b-4bf3-ab98-2fc7804e4bfa', to: 'f94bde13-2f9b-41ed-95aa-4e67772a6cd3'},
{from: '7452f158-1593-4568-8403-dde7621500b3', to: 'f4ec4193-2b63-4058-946f-a06a64d2716a'},
{from: 'f94bde13-2f9b-41ed-95aa-4e67772a6cd3', to: 'fc771913-b90a-4fe1-aa3c-5f43b513bc1c'},
{from: '4a6ba70d-fbe2-4ff0-9d5b-1d0064cf67db', to: '1d01e50a-377a-44d6-876a-dd7e040d0c43'},
{from: '1d01e50a-377a-44d6-876a-dd7e040d0c43', to: '7452f158-1593-4568-8403-dde7621500b3'}
                            ]);